import React, { useEffect, useRef, useState } from "react";

function App() {
  const ws = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [roomId, setRoomId] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://127.0.0.1:8080");
    ws.current.onopen = () => {
      console.log("Connected to WebSocket server");
      setIsConnected(true);
    };
    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
    ws.current.onclose = () => {
      console.log("Disconnected from server");
      setIsConnected(false);
    };
    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws.current && message.trim()) {
      ws.current.send(JSON.stringify({ type: "message", roomId, message }));
      setMessage("");
    }
  };

  const createRoom = () => {
    if (ws.current) {
      ws.current.send(JSON.stringify({ type: "create" }));
    }
  };

  const joinRoom = () => {
    if (ws.current && roomId.trim()) {
      ws.current.send(JSON.stringify({ type: "join", roomId }));
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Chat Room</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={joinRoom}
          >
            Join
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={createRoom}
          >
            Create
          </button>
        </div>
        <div className="h-60 overflow-y-auto border p-3 rounded-lg bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-gray-200 rounded-lg my-2">
              {msg}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={sendMessage}
            disabled={!isConnected}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
