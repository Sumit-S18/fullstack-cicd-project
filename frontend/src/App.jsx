
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
        setStatus("success");
      })
      .catch(() => {
        setMessage("Unable to connect to backend");
        setStatus("error");
      });
  }, []);

  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "70px 20px",
      background: "#f4f7fb",
      minHeight: "100vh",
      boxSizing: "border-box"
    }}>
      <h1>React Frontend Running Successfully</h1>
      <p>Full Stack CI/CD Pipeline</p>

      <div style={{
        display: "inline-block",
        padding: "20px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 12px #0001"
      }}>
        <h2>Backend Status</h2>
        <p>{message}</p>
        <p>
          Status: {status === "success" ? "Connected" : status === "error" ? "Error" : "Loading"}
        </p>
      </div>
    </main>
  );
}

export default App;
