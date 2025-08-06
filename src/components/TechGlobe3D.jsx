import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// Tech stack with icons, focusing on MERN, Java, Python, C/C++, DevOps, Spring Boot, Databases, and Tools
const techIconsData = [
  // MERN Stack
  { name: 'MongoDB', label: '🍃', color: '#47A248' },
  { name: 'Express.js', label: '🚀', color: '#fff' },
  { name: 'React', label: '⚛️', color: '#61DAFB' },
  { name: 'Node.js', label: '🌳', color: '#3C873A' },

  // Languages
  { name: 'Java', label: '☕', color: '#007396' },
  { name: 'Python', label: '🐍', color: '#3776AB' },
  { name: 'C', label: '⚙️', color: '#A8B9CC' },
  { name: 'C++', label: '➕', color: '#00599C' },

  // DevOps Tools
  { name: 'Docker', label: '🐳', color: '#2496ED' },
  { name: 'Kubernetes', label: '☸️', color: '#326CE5' },
  { name: 'Jenkins', label: '🤖', color: '#D24939' },
  { name: 'GitLab CI/CD', label: '🦊', color: '#FC6D26' },
  { name: 'Terraform', label: '🏗️', color: '#7B42BC' },
  { name: 'Ansible', label: '🅰️', color: '#EE0000' },

  // Frameworks/Libraries
  { name: 'Spring Boot', label: '🌸', color: '#6DB33F' },

  // Databases
  { name: 'MySQL', label: '🐬', color: '#00758F' },
  { name: 'PostgreSQL', label: '🐘', color: '#336791' },
  { name: 'Cassandra', label: '🐝', color: '#336699' },
  { name: 'Redis', label: '💨', color: '#DC382D' },

  // Data Science/Notebooks
  { name: 'Jupyter', label: '📊', color: '#F37626' },

  // Tools/Platforms
  { name: 'Git', label: '🌿', color: '#F05032' },
  { name: 'GitHub', label: '🐙', color: '#fff' },
  { name: 'Vercel', label: '▲', color: '#fff' },
  { name: 'Postman', label: '📮', color: '#FF6C37' },
  { name: 'AWS', label: '☁️', color: '#FFf' },
  { name: 'Azure', label: '🔵', color: '#0078D4' },
  { name: 'GCP', label: '🌈', color: '#4285F4' },
  { name: 'VS Code', label: '💻', color: '#007ACC' },
  { name: 'Figma', label: '📐', color: '#F24E1E' },
];

// Component for the central globe that rotates
const RotatingGlobe = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      // Rotate the globe slowly
      meshRef.current.rotation.y += 0.002;
    }
  });
  return (
    <mesh>
      <sphereGeometry args={[2, 8, 8]} />
      <meshStandardMaterial color="#d8e8e8" wireframe />
    </mesh>
  );
};

// Component for the group of icons that will orbit the globe
const OrbitingIcons = ({ icons }) => {
  const groupRef = useRef();

  // Pre-calculate positions for icons on a sphere using a golden spiral distribution for even spread
  const iconPositions = useMemo(() => {
    const positions = [];
    const numIcons = icons.length;
    const radius = 2.5; // Radius of the orbit for the icons

    for (let i = 0; i < numIcons; i++) {
      const phi = Math.acos(1 - (2 * i) / numIcons); // Latitude based on index
      const theta = Math.PI * (1 + Math.sqrt(5)) * i; // Longitude using golden angle for spiral effect

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push(new THREE.Vector3(x, y, z));
    }
    return positions;
  }, [icons]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Rotate the entire group of icons around the central globe for orbital motion
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1; // Slower, continuous rotation
    }
  });

  return (
    <group ref={groupRef}>
      {icons.map((icon, idx) => (
        <Text
          key={icon.name}
          position={iconPositions[idx]}
          fontSize={0.4}
          color={icon.color}
          anchorX="center"
          anchorY="middle"
        >
          {icon.label}
        </Text>
      ))}
    </group>
  );
};

const TechGlobe3D = ({ isDarkMode }) => {
  return (
    <div className="w-full h-full bg-transparent rounded-lg">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.8} />
        {/* Directional light from one side to highlight features */}
        <directionalLight position={[5, 5, 5]} intensity={1.0} />
        {/* Another directional light from the opposite side for depth and fill */}
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />

        {/* OrbitControls enables user interaction (zoom, pan, rotate) */}
        {/* `autoRotate` makes the scene spin continuously */}
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />

        {/* Central Rotating Globe component */}
        <RotatingGlobe />

        {/* Orbiting Tech Icons component */}
        <OrbitingIcons icons={techIconsData} />
      </Canvas>
    </div>
  );
};

export default TechGlobe3D; 