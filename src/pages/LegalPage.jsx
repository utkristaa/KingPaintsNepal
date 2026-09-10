import React from "react";
import Seo from "../components/Seo.jsx";
import { SITE } from "../data/site.js";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    description: "How King Paints Nepal handles information submitted through its website.",
    path: "/privacy",
    intro: "This policy explains what information King Paints Nepal may receive through this website and how it is used.",
    sections: [
      ["Information we request", "The contact form requests your name, phone number, enquiry subject, message, and an optional email address. Only provide information needed for us to respond to your enquiry."],
      ["How we use information", "We use enquiry details to respond to questions, discuss products or projects, and provide requested business information. We do not use this form to build an advertising profile."],
      ["Sharing and storage", "This version of the website does not send form data to a server. It only displays a local confirmation in your browser. If a form delivery service or customer-management system is added later, this policy must be updated before personal data is sent to that provider."],
      ["Your choices", "You may choose not to submit the form. You can ask what information we hold about you or ask us to correct or delete information by contacting us by phone or WhatsApp."],
      ["Contact", `${SITE.name} operates from ${SITE.factory.full}. Contact: ${SITE.phones.join(" / ")} or WhatsApp.`],
    ],
  },
  terms: {
    title: "Terms and Conditions",
    description: "Terms for using the King Paints Nepal website and its product information.",
    path: "/terms",
    intro: "By using this website, you agree to use it lawfully and understand that product information is provided for general enquiry purposes.",
    sections: [
      ["Website information", "We aim to keep the website useful and accurate, but product availability, specifications, pricing, delivery, and dealer information must be confirmed directly with King Paints Nepal before an order or project decision."],
      ["No order by website", "Submitting the contact form or opening a WhatsApp conversation is an enquiry, not an acceptance of an order or a contract of sale. Any sale is subject to separately agreed commercial terms."],
      ["Intellectual property and images", "The King Paints Nepal name, text, design, and original materials on this website may not be copied, republished, or used commercially without permission. Current photography is loaded from Unsplash image URLs; verify the individual asset licence and keep any required credit or removal record before publishing commercially. Third-party assets remain subject to their respective licences."],
      ["Availability and liability", "We may change, suspend, or remove website content. To the extent permitted by applicable law, we are not responsible for losses caused by reliance on unconfirmed website information or interruptions outside our reasonable control."],
      ["Governing law", "These terms are intended to be read with the laws of Nepal. Obtain professional advice for a transaction-specific dispute or obligation."],
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description: "Information about cookies and similar technologies used by the King Paints Nepal website.",
    path: "/cookies",
    intro: "The current website does not use analytics, advertising pixels, embedded media, or non-essential cookies.",
    sections: [
      ["Essential operation", "The site is a client-rendered website. It may use browser memory while a page is open for navigation and form display, but it does not intentionally set a persistent tracking cookie."],
      ["Third parties", "The site links to WhatsApp and currently loads fonts and image assets from third-party services. Following an external link or loading a third-party asset may be subject to that provider's own privacy and cookie practices."],
      ["Consent", "Because there are currently no non-essential analytics or advertising cookies, this implementation does not show a cookie-consent banner. If tracking, analytics, embedded content, or marketing cookies are added, they should be blocked until an appropriate consent choice is recorded and this policy is updated."],
      ["Questions", `For questions about this policy, contact ${SITE.name} at ${SITE.phones.join(" / ")} or through WhatsApp.`],
    ],
  },
  refund: {
    title: "Refund and Cancellation Policy",
    description: "Refund and cancellation information for King Paints Nepal enquiries and purchases.",
    path: "/refunds",
    intro: "This website does not currently take payment or complete orders online.",
    sections: [
      ["Website enquiries", "Sending a message or opening WhatsApp does not create a paid order, so there is no website payment to refund or cancel."],
      ["Product purchases", "Refunds, returns, damaged goods, cancellations, delivery, and colour or specification issues must be agreed with King Paints Nepal or the authorised seller for the specific purchase. Keep the invoice and contact the seller promptly."],
      ["Future online sales", "If online ordering or payment is introduced, this page must be replaced with the applicable cancellation, return, refund timeline, delivery, and complaint process before payment is accepted."],
    ],
  },
};

export default function LegalPage({ kind }) {
  const content = CONTENT[kind];
  return (
    <div className="v-shell v-legal-page">
      <Seo title={`${content.title} | ${SITE.name}`} description={content.description} path={content.path} />
      <div className="v-page-header">
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
      </div>
      {content.sections.map(([heading, text]) => (
        <section className="v-legal-section" key={heading}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </section>
      ))}
      <p className="v-legal-updated">Last reviewed: September 10, 2026</p>
    </div>
  );
}