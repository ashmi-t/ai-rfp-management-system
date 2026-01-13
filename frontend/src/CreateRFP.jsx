import React, { useState } from "react";

export default function CreateRFP() {
  const [text, setText] = useState("");
  const [res, setRes] = useState(null);

  const createRFP = async () => {
    const r = await fetch("http://localhost:4000/api/rfps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    setRes(await r.json());
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
          Create RFP
        </h2>

        <textarea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter RFP requirements..."
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            marginBottom: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={createRFP}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            backgroundColor: "#1976d2",
            color: "#ffffff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Generate RFP
        </button>

        {res && (
          <pre
            style={{
              marginTop: "20px",
              backgroundColor: "#f1f1f1",
              padding: "12px",
              borderRadius: "4px",
              fontSize: "13px",
              overflowX: "auto",
            }}
          >
            {JSON.stringify(res, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
