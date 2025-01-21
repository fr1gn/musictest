import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:8080/api/greet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        });
        const text = await res.text();
        setResponse(text);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Simple React-Golang App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
}

export default App;

