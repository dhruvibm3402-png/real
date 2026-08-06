'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshReflectorMaterial, Float, Sphere, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

/* ── Animated particle field ── */
function Particles({ count = 120 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      arr.push([
        (Math.random() - 0.5) * 28,
        Math.random() * 16 - 2,
        (Math.random() - 0.5) * 28,
      ]);
    }
    return arr;
  }, [count]);

  const speeds = useMemo(() => positions.map(() => Math.random() * 0.4 + 0.1), [positions]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    positions.forEach(([x, y, z], i) => {
      const yPos = ((y + speeds[i] * t) % 18) - 2;
      dummy.position.set(x, yPos, z);
      dummy.scale.setScalar(Math.sin(t * speeds[i] + i) * 0.3 + 0.5);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.025, 6, 6]} />
      <meshStandardMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={1.2} />
    </instancedMesh>
  );
}

/* ── Luxury villa model (procedural geometry) ── */
function LuxuryVilla({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseX * 0.4,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouseY * 0.15,
      0.04
    );
  });

  const gold = new THREE.MeshStandardMaterial({
    color: '#C9A84C',
    metalness: 0.9,
    roughness: 0.2,
  });
  const concrete = new THREE.MeshStandardMaterial({
    color: '#1e1e22',
    metalness: 0.1,
    roughness: 0.7,
  });
  const glass = new THREE.MeshStandardMaterial({
    color: '#88ccff',
    metalness: 0.1,
    roughness: 0.0,
    transparent: true,
    opacity: 0.35,
  });
  const darkSteel = new THREE.MeshStandardMaterial({
    color: '#2a2a2e',
    metalness: 0.8,
    roughness: 0.3,
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* ── Ground base slab ── */}
      <Box args={[6, 0.12, 4]} position={[0, 0, 0]} material={darkSteel} />

      {/* ── Main building body ── */}
      <Box args={[5, 2.2, 3]} position={[0, 1.22, 0]} material={concrete} />

      {/* ── Glass facade panels ── */}
      {[-1.6, -0.4, 0.8, 2.0].map((x, i) => (
        <Box key={i} args={[0.9, 1.6, 0.08]} position={[x - 0.4, 1.6, 1.55]} material={glass} />
      ))}

      {/* ── Penthouse top floor ── */}
      <Box args={[3.4, 1.0, 2.2]} position={[0.3, 2.82, -0.25]} material={concrete} />
      {/* penthouse glass front */}
      <Box args={[3.0, 0.7, 0.07]} position={[0.3, 2.95, 0.86]} material={glass} />

      {/* ── Roof terrace railing ── */}
      {[-1.5, -0.5, 0.5, 1.5].map((x) => (
        <Box key={x} args={[0.04, 0.4, 0.04]} position={[x, 3.54, 0.9]} material={gold} />
      ))}
      <Box args={[3.4, 0.04, 0.04]} position={[0.3, 3.74, 0.9]} material={gold} />

      {/* ── Cantilevered balcony ── */}
      <Box args={[2.4, 0.08, 0.9]} position={[0.3, 2.2, 2.05]} material={darkSteel} />
      {[-0.9, 0.9].map((x) => (
        <Box key={x} args={[0.04, 0.5, 0.04]} position={[x + 0.3, 2.46, 2.5]} material={gold} />
      ))}
      <Box args={[2.2, 0.04, 0.04]} position={[0.3, 2.72, 2.5]} material={gold} />

      {/* ── Entrance canopy ── */}
      <Box args={[1.4, 0.06, 1.0]} position={[0, 0.9, 2.1]} material={darkSteel} />
      {[-0.6, 0.6].map((x) => (
        <Cylinder key={x} args={[0.04, 0.04, 0.9, 8]} position={[x, 0.46, 2.5]} material={gold} />
      ))}

      {/* ── Entrance door ── */}
      <Box args={[0.6, 0.9, 0.06]} position={[0, 0.5, 1.54]} material={glass} />
      <Box args={[0.04, 0.9, 0.04]} position={[0, 0.5, 1.54]} material={gold} />

      {/* ── Side wing ── */}
      <Box args={[1.4, 1.4, 2.0]} position={[-3.2, 0.76, 0]} material={concrete} />
      <Box args={[1.2, 0.9, 0.07]} position={[-3.2, 0.96, 1.04]} material={glass} />

      {/* ── Floating light strips (gold accent) ── */}
      {[0.6, 1.4, 2.2].map((y) => (
        <Box key={y} args={[5.06, 0.04, 0.04]} position={[0, y, 1.52]} material={gold} />
      ))}

      {/* ── Pool (ground level, right side) ── */}
      <Box args={[2.2, 0.1, 1.2]} position={[2.6, 0.05, 0]} material={
        new THREE.MeshStandardMaterial({ color: '#0a3d5c', metalness: 0.1, roughness: 0.0, transparent: true, opacity: 0.7 })
      } />

      {/* ── Trees (cylinders + spheres) ── */}
      {[[-2.8, 2.2], [-2.8, -1.8], [3.2, -1.8]].map(([tx, tz], i) => (
        <group key={i} position={[tx, 0, tz]}>
          <Cylinder args={[0.06, 0.09, 0.7, 6]} position={[0, 0.36, 0]} material={
            new THREE.MeshStandardMaterial({ color: '#3d2b1f' })
          } />
          <Sphere args={[0.28, 8, 8]} position={[0, 0.9, 0]} material={
            new THREE.MeshStandardMaterial({ color: '#1a3a1a', roughness: 0.9 })
          } />
        </group>
      ))}

      {/* ── Reflective ground plane ── */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={512}
          mixBlur={0.8}
          mixStrength={40}
          roughness={0.9}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#0a0a0f"
          metalness={0.5}
          mirror={0}
        />
      </mesh>
    </group>
  );
}

/* ── Ambient floating rings ── */
function FloatingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3;
      ring1.current.rotation.z = t * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.2;
      ring2.current.rotation.y = t * 0.25;
    }
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh ref={ring1} position={[4.5, 2, -3]}>
          <torusGeometry args={[1.2, 0.025, 16, 80]} />
          <meshStandardMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={0.6} metalness={1} roughness={0} />
        </mesh>
      </Float>
      <Float speed={1.0} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh ref={ring2} position={[-4, 3, -2]}>
          <torusGeometry args={[0.7, 0.018, 16, 60]} />
          <meshStandardMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={0.4} metalness={1} roughness={0} />
        </mesh>
      </Float>
    </>
  );
}

/* ── Main scene export ── */
export default function VillaScene({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[8, 12, 5]} intensity={2.5} color="#fff8f0" castShadow />
      <directionalLight position={[-6, 4, -4]} intensity={0.8} color="#C9A84C" />
      <pointLight position={[0, 6, 3]} intensity={1.5} color="#E8C97A" distance={20} />
      <pointLight position={[3, 0.5, 3]} intensity={1.0} color="#4488ff" distance={10} />
      <fog attach="fog" args={['#0a0a10', 18, 45]} />

      <Particles count={140} />
      <FloatingRings />
      <LuxuryVilla mouseX={mouseX} mouseY={mouseY} />
    </>
  );
}
