import React, { useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function App() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const send = async () => {
    const res = await fetch(`${API}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();
    setChat([...chat, data.reply]);
    setMsg("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🔥 CortexSales AI</h1>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Enter message"
      />

      <button onClick={send}>Send</button>

      <div>
        {chat.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>
    </div>
  );
}
