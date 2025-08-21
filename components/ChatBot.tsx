"use client";
import { useState } from "react";

export default function ChatBot() {
  const [location, setLocation] = useState<string | null>(null);

  function handleGetLocation() {
    if (!navigator.geolocation) {
      alert("Geolocalização não suportada pelo seu navegador.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation(`Lat: ${pos.coords.latitude.toFixed(4)}, Lng: ${pos.coords.longitude.toFixed(4)}`);
      },
      () => {
        alert("Não foi possível obter sua localização.");
      }
    );
  }

  return (
    <div className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 transition flex items-center gap-2 select-none">
      <button onClick={handleGetLocation} aria-label="Obter localização para ajuda">
        🤖
      </button>
      {location && <span className="text-sm ml-2">{location}</span>}
    </div>
  );
}
