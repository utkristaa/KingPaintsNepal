import React, { useEffect, useRef, useState } from "react";
import { SITE, formatNepalPhone, getPhoneHref } from "../data/site.js";

const GOOGLE_MAPS_SCRIPT_ID = "google-maps-javascript-api";
const FALLBACK_LOCATION = "Masine Khola, Bohorataar, Lolang, Tarkeshwor-5, Kathmandu, Nepal";

function showInfoWindow(map, infoWindow, marker, location) {
  infoWindow.setContent(`
    <div class="v-map-info-window">
      <strong>${location.name}</strong>
      <span>${location.address}</span>
      <a href="${getPhoneHref(location.phone)}">${formatNepalPhone(location.phone)}</a>
    </div>
  `);
  infoWindow.open({ map, anchor: marker });
}

export default function GoogleMap({ locations = [], activeLocationId, onMarkerSelect, className = "", embed = false }) {
  const mapElement = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const infoWindowRef = useRef(null);
  const [mapsReady, setMapsReady] = useState(Boolean(window.google?.maps));
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (mapsReady || !apiKey || document.getElementById(GOOGLE_MAPS_SCRIPT_ID)) return undefined;

    const script = document.createElement("script");
    script.id = GOOGLE_MAPS_SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapsReady(true);
    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [apiKey, mapsReady]);

  useEffect(() => {
    if (!mapsReady || !mapElement.current || mapRef.current) return;

    mapRef.current = new window.google.maps.Map(mapElement.current, {
      center: { lat: 27.7172, lng: 85.324 },
      zoom: 7,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      gestureHandling: "cooperative",
    });
    infoWindowRef.current = new window.google.maps.InfoWindow();
  }, [mapsReady]);

  useEffect(() => {
    if (!mapRef.current || !window.google?.maps) return;

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = locations.map((location) => {
      const marker = new window.google.maps.Marker({
        map: mapRef.current,
        position: { lat: location.lat, lng: location.lng },
        title: location.name,
      });
      marker.addListener("click", () => {
        mapRef.current.panTo(marker.getPosition());
        showInfoWindow(mapRef.current, infoWindowRef.current, marker, location);
        onMarkerSelect?.(location.id);
      });
      return marker;
    });

    return () => markersRef.current.forEach((marker) => marker.setMap(null));
  }, [locations, onMarkerSelect, mapsReady]);

  useEffect(() => {
    if (!mapRef.current || !activeLocationId) return;
    const index = locations.findIndex((location) => location.id === activeLocationId);
    const location = locations[index];
    const marker = markersRef.current[index];
    if (!location || !marker) return;
    mapRef.current.panTo(marker.getPosition());
    mapRef.current.setZoom(13);
    showInfoWindow(mapRef.current, infoWindowRef.current, marker, location);
  }, [activeLocationId, locations]);

  if (embed || (!apiKey && !mapsReady)) {
    return (
      <div className={`v-google-map v-google-map-fallback ${className}`}>
        <iframe
          title="King Paints Nepal factory location map"
          src={`${SITE.factoryMapUrl}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a className="v-map-open-link" href={SITE.factoryMapUrl} target="_blank" rel="noopener noreferrer">
          Open in Google Maps
        </a>
      </div>
    );
  }

  return <div ref={mapElement} className={`v-google-map ${className}`} aria-label="Interactive dealer map" role="application" />;
}
