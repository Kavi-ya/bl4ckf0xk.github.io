import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { AlertTriangle, TerminalSquare, ShieldAlert, Cpu } from 'lucide-react';

const labelsData = [
    { text: "[System Online]", color: "#22c55e", icon: Cpu, type: "green" },
    { text: "[EXPLOIT DETECTED]", color: "#ff003c", icon: AlertTriangle, type: "red" },
    { text: "[SYSTEM OFFLINE]", color: "#f59e0b", icon: TerminalSquare, type: "orange" },
    { text: "[SYSTEM FAILURE]", color: "#ff003c", icon: ShieldAlert, type: "red" },
];

const DnaHelix = ({ labelsRef }: { labelsRef: React.MutableRefObject<(HTMLDivElement | null)[]> }) => {
    const groupRef = useRef<THREE.Group>(null);
    const { camera, size } = useThree();

    const basePairs = 40;
    const trackingIndexes = [5, 14, 25, 34]; // Positions on the DNA

    const geometryData = Array.from({ length: basePairs }).map((_, i) => {
        const y = (i / basePairs) * 12 - 6; // Range: -6 to 6
        const rotation = i * (Math.PI / 8);
        return { y, rotation, i };
    });

    useFrame((state) => {
        const group = groupRef.current;
        if (!group) return;

        // Rotate DNA smoothly
        group.rotation.y = state.clock.elapsedTime * 0.4;

        trackingIndexes.forEach((idx, tIdx) => {
            if (!labelsRef.current[tIdx]) return;

            const data = geometryData[idx];
            // Track the right node (x = 1.5)
            const localPos = new THREE.Vector3(1.5, data.y, 0);
            localPos.applyAxisAngle(new THREE.Vector3(0, 1, 0), data.rotation);

            const worldPos = localPos.clone().applyMatrix4(group.matrixWorld);

            // Check visibility: Is it in front or behind the center axis?
            // Local Z before rotation applied to group?
            // Instead of worldPos.z, we can transform wordPos to viewSpace.
            const viewPos = worldPos.clone().applyMatrix4(camera.matrixWorldInverse);

            // We can determine front/back simply by seeing if local Z of the point before camera matrix is positive.
            // Since the group rotates around its local Y, we can just check the Z coordinate in group space:
            const groupPos = localPos.clone().applyEuler(group.rotation);
            const isFront = groupPos.z > 0;

            worldPos.project(camera);
            const x = (worldPos.x * 0.5 + 0.5) * size.width;
            const y = (worldPos.y * -0.5 + 0.5) * size.height;

            const el = labelsRef.current[tIdx];
            if (el) {
                // Pin the element top-left to this coordinate. 
                el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                // Fade out when behind DNA
                el.style.opacity = isFront ? '1' : '0.05';
                el.style.filter = isFront ? 'blur(0px)' : 'blur(4px)';
                el.style.zIndex = isFront ? '20' : '0';
            }
        });
    });

    return (
        <group rotation={[0.2, 0, -0.6]} scale={1.2}>
            <group ref={groupRef}>
                {geometryData.map((data, i) => {
                    const isTracked = trackingIndexes.includes(i);
                    return (
                        <group key={i} position={[0, data.y, 0]} rotation={[0, data.rotation, 0]}>
                            {/* Connecting Line */}
                            <mesh position={[0, 0, 0]}>
                                <boxGeometry args={[3, 0.02, 0.02]} />
                                <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
                            </mesh>
                            {/* Left Node */}
                            <mesh position={[-1.5, 0, 0]}>
                                <sphereGeometry args={[0.08, 16, 16]} />
                                <meshBasicMaterial color="#00f0ff" />
                            </mesh>
                            {/* Right Node (Tracking Target if needed) */}
                            <mesh position={[1.5, 0, 0]}>
                                <sphereGeometry args={[isTracked ? 0.15 : 0.08, 16, 16]} />
                                <meshBasicMaterial color={isTracked ? "#ff003c" : "#00f0ff"} />
                            </mesh>
                        </group>
                    );
                })}
            </group>
        </group>
    );
};

export function DNA3D() {
    const labelsRef = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {/* HTML Overlay */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                {labelsData.map((label, i) => {
                    const Icon = label.icon;
                    return (
                        <div
                            key={i}
                            ref={(el) => { labelsRef.current[i] = el; }}
                            className="absolute left-0 top-0 transition-opacity duration-500 ease-in-out"
                            style={{
                                transformOrigin: 'top left',
                                willChange: 'transform, opacity, filter',
                            }}
                        >
                            {/* Connecting Line UI from 3D point to Label */}
                            <div className="absolute left-0 top-0 w-16 md:w-24 h-[1px] bg-gradient-to-r from-white/80 to-transparent origin-left rotate-[-30deg]" />
                            <div className="absolute left-0 top-0 w-2 h-2 rounded-full border border-white/80 -translate-x-1/2 -translate-y-1/2" />

                            {/* The specific Tooltip */}
                            <div
                                className="absolute mt-[-20px] ml-[40px] md:ml-[80px] px-3 py-1.5 border bg-black/80 font-mono text-xs flex items-center gap-2 rounded shadow-lg backdrop-blur-md pointer-events-auto"
                                style={{
                                    borderColor: label.color,
                                    color: label.color,
                                    boxShadow: `0 0 15px ${label.color}40`
                                }}
                            >
                                <Icon size={14} />
                                {label.text}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* R3F Canvas */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <ambientLight intensity={1} />
                    <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
                    <DnaHelix labelsRef={labelsRef} />
                </Canvas>
            </div>
            {/* CTF Part 2: Hidden in plain sight */}
            <div 
                style={{ display: 'none' }} 
                data-ctf-part="2" 
                aria-hidden="true"
            >
                v01c3_n0_
            </div>
        </div>
    );
}
