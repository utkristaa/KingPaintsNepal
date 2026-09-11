import React, { useMemo, useState } from "react";
import { Download, Eye, EyeOff, LockKeyhole, RefreshCw } from "lucide-react";

const FILTERS = ["ALL", "PENDING", "REVIEWED", "CONTACTED"];
const ADMIN_PASSWORD = "utkrista123";

function formatDate(value) {
  return new Intl.DateTimeFormat("en-NP", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function escapeCsv(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

export default function AdminInquiriesPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem("kp_admin_unlocked") === "true");
  const [inquiries, setInquiries] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const unlockAdmin = (event) => {
    event.preventDefault();
    if (password !== ADMIN_PASSWORD) {
      setPasswordError("Incorrect admin password.");
      return;
    }
    sessionStorage.setItem("kp_admin_unlocked", "true");
    setPasswordError("");
    setUnlocked(true);
  };

  if (!unlocked) {
    return (
      <main className="v-admin-page v-admin-login-page">
        <form className="v-admin-login-card" onSubmit={unlockAdmin}>
          <div className="v-admin-login-icon"><LockKeyhole size={24} /></div>
          <span className="v-admin-eyebrow">King Paints Nepal</span>
          <h1>Admin access</h1>
          <p>Enter the admin password to open inquiry management.</p>
          <label htmlFor="admin-password">Password</label>
          <div className="v-admin-password-field">
            <input id="admin-password" autoFocus required type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} />
            <button type="button" onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? "Hide password" : "Show password"} title={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </div>
          {passwordError && <div className="v-admin-error" role="alert">{passwordError}</div>}
          <button className="v-admin-login-submit" type="submit">Continue to inquiries</button>
        </form>
      </main>
    );
  }

  const loadInquiries = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/inquiries", { headers: { Authorization: `Bearer ${ADMIN_PASSWORD}` } });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to load inquiries");
      setInquiries(data.inquiries || []);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  const filtered = useMemo(() => inquiries.filter((inquiry) => {
    const matchesStatus = filter === "ALL" || inquiry.status === filter;
    const haystack = `${inquiry.name} ${inquiry.email} ${inquiry.location}`.toLowerCase();
    return matchesStatus && haystack.includes(query.toLowerCase().trim());
  }), [filter, inquiries, query]);

  const updateStatus = async (id, status) => {
    const response = await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ADMIN_PASSWORD}` },
      body: JSON.stringify({ status }),
    });
    const data = await response.json();
    if (!response.ok) return setError(data.error || "Unable to update status");
    setInquiries((current) => current.map((item) => item.id === id ? data.inquiry : item));
  };

  const exportCsv = () => {
    const rows = [
      ["Applicant Name", "Business Name", "Email", "Phone", "Location", "Message", "Status", "Created At"],
      ...filtered.map((item) => [item.name, item.businessName, item.email, item.phone, item.location, item.message, item.status, item.createdAt]),
    ];
    const blob = new Blob([rows.map((row) => row.map(escapeCsv).join(",")).join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "king-paints-inquiries.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="v-admin-page">
      <div className="v-admin-shell">
        <header className="v-admin-header">
          <div><span className="v-admin-eyebrow">King Paints Nepal</span><h1>Inquiry Dashboard</h1><p>Review dealer, partner, and product enquiries.</p></div>
          <button type="button" className="v-admin-export" onClick={exportCsv} disabled={!filtered.length}><Download size={16} /> Export to CSV</button>
        </header>

        <section className="v-admin-auth v-admin-auth-ready" aria-label="Admin access">
          <LockKeyhole size={18} /><span>Admin access verified</span><button type="button" onClick={loadInquiries} disabled={loading}>{loading ? "Loading..." : "Load inquiries"}</button>
        </section>
        {error && <div className="v-admin-error" role="alert">{error}</div>}

        <section className="v-admin-toolbar">
          <div className="v-admin-tabs" role="tablist" aria-label="Filter inquiries">{FILTERS.map((item) => <button type="button" key={item} className={filter === item ? "active" : ""} aria-selected={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <input aria-label="Search inquiries" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, email, or location" />
          <button type="button" className="v-admin-refresh" onClick={loadInquiries} disabled={loading}><RefreshCw size={16} /> Refresh</button>
        </section>

        <div className="v-admin-table-wrap"><table className="v-admin-table"><thead><tr><th>Applicant</th><th>Business</th><th>Contact</th><th>Location</th><th>Submitted</th><th>Status</th><th>Actions</th></tr></thead><tbody>{filtered.map((inquiry) => <tr key={inquiry.id}><td><strong>{inquiry.name}</strong><span>{inquiry.message}</span></td><td>{inquiry.businessName || "-"}</td><td><a href={`mailto:${inquiry.email}`}>{inquiry.email}</a><a href={`tel:${inquiry.phone}`}>{inquiry.phone}</a></td><td>{inquiry.location}</td><td>{formatDate(inquiry.createdAt)}</td><td><span className={`v-admin-status ${inquiry.status.toLowerCase()}`}>{inquiry.status}</span></td><td><div className="v-admin-actions">{inquiry.status === "PENDING" && <button type="button" onClick={() => updateStatus(inquiry.id, "REVIEWED")}>Mark Reviewed</button>}{inquiry.status !== "CONTACTED" && <button type="button" onClick={() => updateStatus(inquiry.id, "CONTACTED")}>Mark Contacted</button>}</div></td></tr>)}</tbody></table>{!filtered.length && <div className="v-admin-empty">No inquiries match the current filters.</div>}</div>
      </div>
    </main>
  );
}
