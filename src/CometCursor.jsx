import React, { useEffect, useRef } from "react";

const tailLength = 12;
const tailOpacity = (i) => 0.2 + 0.6 * (1 - i / tailLength);

const CometCursor = () => {
    const cursorRef = useRef(null);
    const tailRefs = useRef(Array.from({ length: tailLength }, () => React.createRef()));
    const positions = useRef(Array.from({ length: tailLength + 1 }, () => ({ x: 0, y: 0 })));

    useEffect(() => {
        const move = (e) => {
            positions.current[0] = { x: e.clientX, y: e.clientY };
            for (let i = 1; i < positions.current.length; i++) {
                positions.current[i].x += (positions.current[i - 1].x - positions.current[i].x) * 0.3;
                positions.current[i].y += (positions.current[i - 1].y - positions.current[i].y) * 0.3;
            }
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${positions.current[0].x}px, ${positions.current[0].y}px, 0)`;
            }
            tailRefs.current.forEach((ref, i) => {
                if (ref.current) {
                    ref.current.style.transform = `translate3d(${positions.current[i + 1].x}px, ${positions.current[i + 1].y}px, 0)`;
                }
            });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <>
            {/* Comet head */}
            <div
                ref={cursorRef}
                className="fixed pointer-events-none z-[9999] w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-white shadow-2xl blur-[1px]"
                style={{
                    marginLeft: -10,
                    marginTop: -10,
                    boxShadow: "0 0 32px 8px #a5b4fc, 0 0 64px 16px #c4b5fd, 0 0 0 2px #fff3" // comet glow
                }}
            />
            {/* Comet tail */}
            {Array.from({ length: tailLength }).map((_, i) => (
                <div
                    key={i}
                    ref={tailRefs.current[i]}
                    className="fixed pointer-events-none z-[9998] w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-white blur-[2px]"
                    style={{
                        marginLeft: -8,
                        marginTop: -8,
                        opacity: tailOpacity(i),
                        filter: `blur(${2 + i * 1.5}px)`
                    }}
                />
            ))}
        </>
    );
};

export default CometCursor; 