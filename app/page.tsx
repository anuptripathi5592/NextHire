"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Disconnected"));
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />

      <div className="text-center py-6">
        <h2 className="text-2xl font-bold">Backend Status</h2>
        <p className="text-green-600 text-xl mt-2">{status}</p>
      </div>

      <Features />
    </main>
  );
}