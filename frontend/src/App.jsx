
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then((data) => setMessage(data.message))
      .catch(() => setError("Unable to connect to backend"));
  }, []);

  return (
    <div
      style={{
        padding: 40,
        textAlign: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>React Frontend Running</h1>
      <h2>Backend says: {message}</h2>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
