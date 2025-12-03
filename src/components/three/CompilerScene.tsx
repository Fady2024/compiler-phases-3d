import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import { PhaseNode } from "./PhaseNode";
import { ConnectionLine } from "./ConnectionLine";
import { compilerPhases, connections } from "@/data/compilerPhases";

interface CompilerSceneProps {
  activePhase: string | null;
  setActivePhase: (id: string | null) => void;
}

const Scene = ({ activePhase, setActivePhase }: CompilerSceneProps) => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4aa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
        color="#ffffff"
      />

      {/* Background stars */}
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

      {/* Connection lines */}
      {connections.map((conn, index) => {
        const fromPhase = compilerPhases.find((p) => p.id === conn.from);
        const toPhase = compilerPhases.find((p) => p.id === conn.to);
        if (!fromPhase || !toPhase) return null;
        
        const isActive = activePhase === conn.from || activePhase === conn.to;
        
        return (
          <ConnectionLine
            key={`${conn.from}-${conn.to}`}
            from={fromPhase}
            to={toPhase}
            isActive={isActive}
            index={index}
          />
        );
      })}

      {/* Phase nodes */}
      {compilerPhases.map((phase, index) => (
        <PhaseNode
          key={phase.id}
          phase={phase}
          isActive={activePhase === phase.id}
          onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
          index={index}
        />
      ))}
    </>
  );
};

export const CompilerScene = ({ activePhase, setActivePhase }: CompilerSceneProps) => {
  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <Suspense fallback={null}>
          <Scene activePhase={activePhase} setActivePhase={setActivePhase} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={6}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};
