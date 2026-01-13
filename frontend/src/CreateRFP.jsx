import { useState } from "react";

export default function CreateRFP() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCreate = async () => {
    if (!text.trim()) {
      setError("Please enter RFP details");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://localhost:4000/api/rfps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate RFP");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>AI RFP Generator</h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your RFP requirements here..."
          style={styles.textarea}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button
          onClick={handleCreate}
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Generating..." : "Create RFP"}
        </button>

        {result && (
          <pre style={styles.result}>
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
  },
  card: {
    width: "600px",
    maxWidth: "90%",
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "16px",
    textAlign: "center",
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "vertical",
    marginBottom: "12px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "15px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "8px",
    fontSize: "13px",
  },
  result: {
    marginTop: "16px",
    backgroundColor: "#f1f1f1",
    padding: "12px",
    borderRadius: "4px",
    fontSize: "13px",
    overflowX: "auto",
  },
};