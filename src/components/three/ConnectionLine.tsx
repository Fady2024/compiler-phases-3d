import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { CatmullRomCurve3, Vector3, TubeGeometry, Mesh } from "three";
import { CompilerPhase } from "@/data/compilerPhases";

interface ConnectionLineProps {
  from: CompilerPhase;
  to: CompilerPhase;
  isActive: boolean;
  index: number;
}

export const ConnectionLine = ({ from, to, isActive, index }: ConnectionLineProps) => {
  const particlesRef = useRef<Mesh[]>([]);

  const { curve, tubeGeometry } = useMemo(() => {
    const start = new Vector3(...from.position);
    const end = new Vector3(...to.position);
    
    const direction = end.clone().sub(start).normalize();
    start.add(direction.clone().multiplyScalar(1.4));
    end.sub(direction.clone().multiplyScalar(1.4));
    
    const mid = start.clone().add(end).multiplyScalar(0.5);
    mid.z += 0.3;
    
    const curve = new CatmullRomCurve3([start, mid, end]);
    const tubeGeometry = new TubeGeometry(curve, 20, 0.025, 8, false);
    
    return { curve, tubeGeometry };
  }, [from.position, to.position]);

  useFrame((state) => {
    particlesRef.current.forEach((particle, i) => {
      if (particle) {
        const t = ((state.clock.elapsedTime * 0.3 + i * 0.33) % 1);
        const point = curve.getPoint(t);
        particle.position.copy(point);
      }
    });
  });

  return (
    <group>
      <mesh geometry={tubeGeometry}>
        <meshBasicMaterial
          color={isActive ? "#00d4aa" : "#475569"}
          transparent
          opacity={isActive ? 0.9 : 0.5}
        />
      </mesh>

      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial
            color="#00d4aa"
            transparent
            opacity={isActive ? 1 : 0.4}
          />
        </mesh>
      ))}
    </group>
  );
};
