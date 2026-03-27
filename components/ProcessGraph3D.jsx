// filename: components/ProcessGraph3D.jsx
"use client";
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Line, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const steps = [
  { id: 1, label: 'IDEA', pos: [-7, 3, -4], sub: ['Problem Analysis', 'Market Opportunity', 'User Research'] },
  { id: 2, label: 'DECONSTRUCTION', pos: [-4, 1.5, -2], sub: ['Core Mechanics', 'Essential Features', 'Clarity'] },
  { id: 3, label: 'SYSTEM ARCHITECTURE', pos: [-1, 0, 1], sub: ['Database Design', 'API Structure', 'Auth Flow', 'Infrastructure'] },
  { id: 4, label: 'RAPID PROTOTYPE', pos: [2, -1.5, 3], sub: ['Working Code', 'Real Testing', 'Fast Iteration'] },
  { id: 5, label: 'DESIGN SYSTEM', pos: [4, 0, 1], sub: ['Visual Hierarchy', 'Motion Design', 'Consistency'] },
  { id: 6, label: 'ITERATION', pos: [6, 1.5, -2], sub: ['Optimization', 'Refining UX', 'Performance'] },
  { id: 7, label: 'LAUNCH', pos: [8, 3, -4], sub: ['Deployment', 'Feedback Loop', 'Continuous Evolution'] },
];

function Node({ data, onClick, isSelected }) {
  const group = useRef();
  const innerMesh = useRef();
  const outerMesh = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = data.pos[1] + Math.sin(t * 1.5 + data.id) * 0.15;
    }
    if (innerMesh.current && outerMesh.current) {
      innerMesh.current.rotation.x = t * 0.5;
      innerMesh.current.rotation.y = t * 0.6;
      outerMesh.current.rotation.x = -t * 0.2;
      outerMesh.current.rotation.y = -t * 0.3;
      
      const scale = THREE.MathUtils.lerp(outerMesh.current.scale.x, hovered || isSelected ? 1.2 : 1, 0.1);
      outerMesh.current.scale.setScalar(scale);
      innerMesh.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={data.pos} ref={group}>
      <group 
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }} 
        onPointerOut={() => { setHover(false); document.body.style.cursor = 'auto'; }}
      >
        {/* Core Geometry */}
        <mesh ref={innerMesh}>
          <icosahedronGeometry args={[0.3, 0]} />
          <meshPhysicalMaterial 
            color={hovered || isSelected ? '#ffffff' : '#D4AC56'} 
            emissive={hovered || isSelected ? '#D4AC56' : '#221808'}
            emissiveIntensity={hovered || isSelected ? 2 : 0.5}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
        
        {/* Outer Wireframe Shell */}
        <mesh ref={outerMesh}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshPhysicalMaterial 
            color={hovered || isSelected ? '#D4AC56' : '#444'} 
            wireframe
            transparent
            opacity={hovered || isSelected ? 0.8 : 0.3}
            roughness={0}
            metalness={1}
            emissive={hovered || isSelected ? '#D4AC56' : '#000'}
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
      
      <Html distanceFactor={15} center position={[0, -1.2, 0]} zIndexRange={[100, 0]}>
        <div style={{
          color: isSelected || hovered ? '#fff' : '#D4AC56',
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textAlign: 'center',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          transition: 'all 0.3s',
          textTransform: 'uppercase',
          textShadow: isSelected || hovered ? '0 0 15px rgba(212, 172, 86, 0.8)' : '0 2px 5px rgba(0,0,0,0.8)',
          opacity: isSelected || hovered ? 1 : 0.6
        }}>
          {data.label}
        </div>
        {(isSelected || hovered) && (
          <div style={{
            marginTop: '15px',
            background: 'rgba(9, 8, 10, 0.90)',
            border: '1px solid rgba(212, 172, 86, 0.5)',
            boxShadow: '0 0 30px rgba(212, 172, 86, 0.1)',
            padding: '16px 20px',
            minWidth: '220px',
            textAlign: 'left',
            backdropFilter: 'blur(8px)',
            pointerEvents: 'none',
            borderRadius: '2px'
          }}>
            {data.sub.map((s, i) => (
              <div key={i} style={{ color: '#EFE9DF', fontSize: '0.65rem', margin: '8px 0', fontFamily: "'DM Mono', monospace", letterSpacing: '0.1em' }}>
                <span style={{ color: '#D4AC56', marginRight: '8px', opacity: 0.8 }}>/</span>{s}
              </div>
            ))}
          </div>
        )}
      </Html>
    </group>
  );
}

function SmoothCurve() {
  const points = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(steps.map(s => new THREE.Vector3(...s.pos)));
    return curve.getPoints(100);
  }, []);
  
  return (
    <Line
      points={points}
      color="#D4AC56"
      lineWidth={2}
      opacity={0.3}
      transparent
    />
  );
}

function GlowingDust() {
  return (
    <Stars radius={20} depth={25} count={1000} factor={4} saturation={1} fade speed={1} />
  );
}

function Scene() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#fff" />
      <pointLight position={[-10, 0, -10]} intensity={2} color="#D4AC56" distance={30} />
      <pointLight position={[10, 0, 10]} intensity={2} color="#D4AC56" distance={30} />
      
      <GlowingDust />
      <SmoothCurve />
      
      {steps.map(step => (
        <Node 
          key={step.id} 
          data={step} 
          isSelected={selectedId === step.id}
          onClick={() => setSelectedId(step.id === selectedId ? null : step.id)}
        />
      ))}

      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        minDistance={8} 
        maxDistance={25}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.7}
      />
    </>
  );
}

export default function ProcessGraph3D() {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#09080A' }}>
      <Canvas camera={{ position: [0, 5, 16], fov: 45 }} gl={{ antialias: true, toneMappingExposure: 1.2 }}>
        <color attach="background" args={['#09080A']} />
        <fog attach="fog" args={['#09080A', 10, 35]} />
        <Scene />
      </Canvas>
    </div>
  );
}
