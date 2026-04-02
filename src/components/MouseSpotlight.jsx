import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the glow effect
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Update coordinates centered on the cursor
            // Subtracting half the size of the glow circle (e.g., 400px / 2 = 200px)
            mouseX.set(e.clientX - 200);
            mouseY.set(e.clientY - 200);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            // 1. 색상 뚜렷하게: /20 -> /70 (또는 /80)으로 투명도 낮춤
            // 2. 우글거림이 보이도록: blur-[100px] -> blur-[60px]~[80px]로 살짝 줄임
            // 3. rounded-full 제거 (아래 animate에서 borderRadius를 직접 제어)
            className="fixed top-0 left-0 w-[400px] h-[400px] bg-medisol-blue/70 blur-[80px] pointer-events-none z-0 mix-blend-screen"
            style={{
                x: springX,
                y: springY,
            }}
            // 4. 우글거리는 (Blob) 애니메이션 적용
            animate={{
                borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                    "50% 50% 20% 80% / 20% 80% 20% 80%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%", // 자연스러운 루프를 위해 처음 값으로 돌아옴
                ],
                rotate: [0, 90, 180, 360],
                scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
                duration: 8,          // 8초 동안 한 사이클
                ease: "easeInOut",    // 부드러운 전환
                repeat: Infinity,     // 무한 반복
                repeatType: "loop"
            }}
        />
    );
};

export default MouseSpotlight;