import React, { useEffect, useState } from "react";

export default function CometCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                left: pos.x,
                top: pos.y,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "rgba(99,102,241,0.8)", // Indigo color
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                zIndex: 99999,
                boxShadow: "0 0 12px 2px rgba(99,102,241,0.4)",
            }}
        />
    );
} 