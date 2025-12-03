import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text, Html } from "@react-three/drei";
import { Mesh, Group } from "three";
import { CompilerPhase } from "@/data/compilerPhases";

interface PhaseNodeProps {
  phase: CompilerPhase;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export const PhaseNode = ({ phase, isActive, onClick, index }: PhaseNodeProps) => {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = phase.position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.5) * 0.1;
    }
    if (meshRef.current) {
      const targetScale = hovered || isActive ? 1.1 : 1;
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale } as any, 0.1);
    }
  });

  return (
    <group
      ref={groupRef}
      position={phase.position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main card */}
      <RoundedBox
        ref={meshRef}
        args={[2.8, 1.2, 0.15]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color={phase.color}
          emissive={phase.color}
          emissiveIntensity={hovered || isActive ? 0.4 : 0.15}
          metalness={0.3}
          roughness={0.4}
        />
      </RoundedBox>

      {/* Glow effect when active */}
      {(hovered || isActive) && (
        <RoundedBox args={[2.9, 1.3, 0.1]} radius={0.1} smoothness={4}>
          <meshBasicMaterial color={phase.color} transparent opacity={0.2} />
        </RoundedBox>
      )}

      {/* Phase name */}
      <Text
        position={[0, 0.15, 0.1]}
        fontSize={0.22}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
      >
        {phase.name}
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, -0.2, 0.1]}
        fontSize={0.14}
        color="#aaaaaa"
        anchorX="center"
        anchorY="middle"
      >
        ({phase.subtitle})
      </Text>

      {/* Info popup on hover */}
      {hovered && (
        <Html position={[1.8, 0, 0]} distanceFactor={10}>
          <div className="glass-card p-3 w-48 pointer-events-none animate-fade-in">
            <p className="text-xs text-muted-foreground leading-relaxed">
              {phase.description}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
};
