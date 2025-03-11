"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function App() {
    const ws = (0, react_1.useRef)(null);
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [message, setMessage] = (0, react_1.useState)("");
    const [roomId, setRoomId] = (0, react_1.useState)("");
    const [isConnected, setIsConnected] = (0, react_1.useState)(false);
    const messagesEndRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
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
            var _a;
            (_a = ws.current) === null || _a === void 0 ? void 0 : _a.close();
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
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Chat Room</h2>
        <div className="flex gap-2 mb-4">
          <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)}/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={joinRoom}>
            Join
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={createRoom}>
            Create
          </button>
        </div>
        <div className="h-60 overflow-y-auto border p-3 rounded-lg bg-gray-50">
          {messages.map((msg, index) => (<div key={index} className="p-2 bg-gray-200 rounded-lg my-2">
              {msg}
            </div>))}
          <div ref={messagesEndRef}/>
        </div>
        <div className="flex gap-2 mt-4">
          <input type="text" className="w-full p-2 border rounded-lg" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)}/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={sendMessage} disabled={!isConnected}>
            Send
          </button>
        </div>
      </div>
    </div>);
}
exports.default = App;
