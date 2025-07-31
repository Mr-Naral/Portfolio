// // src/components/TechGlobe3D.jsx
// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Text } from '@react-three/drei';
// import * as THREE from 'three';

// const techIcons = [
//   { name: 'HTML5', emoji: '🌐', angle: 0.1, radius: 2 },
//   { name: 'CSS3', emoji: '🎨', angle: 0.3, radius: 2.2 },
//   { name: 'JavaScript', emoji: 'JS', angle: 0.5, radius: 2 },
//   { name: 'React', emoji: '⚛️', angle: 0.7, radius: 2.3 },
//   { name: 'Node.js', emoji: '🌳', angle: 0.9, radius: 2 },
//   { name: 'TailwindCSS', emoji: '🌬️', angle: 1.1, radius: 2.2 },
//   { name: 'MongoDB', emoji: '🍃', angle: 1.3, radius: 1.8 },
//   { name: 'Git', emoji: '🐙', angle: 1.5, radius: 2.1 },
//   { name: 'VS Code', emoji: '⚡', angle: 1.7, radius: 2 },
//   { name: 'Python', emoji: '🐍', angle: 1.9, radius: 1.7 },
//   { name: 'Figma', emoji: '📐', angle: 2.1, radius: 2.4 },
//   { name: 'D3.js', emoji: '📊', angle: 2.3, radius: 2.2 },
//   { name: 'Redux', emoji: '🚀', angle: 2.5, radius: 2 },
//   { name: 'Next.js', emoji: '💡', angle: 2.7, radius: 1.8 },
//   { name: 'PostgreSQL', emoji: '🐘', angle: 2.9, radius: 2.3 },
// ];

// const GlobeIcon = ({ emoji, angle, radius, speed, index }) => {
//   const ref = useRef();

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime() * speed;
//     const theta = angle * Math.PI + t;
//     const phi = index * (Math.PI * 2 / techIcons.length);

//     const x = radius * Math.sin(theta) * Math.cos(phi);
//     const y = radius * Math.cos(theta);
//     const z = radius * Math.sin(theta) * Math.sin(phi);

//     ref.current.position.set(x, y, z);
//     ref.current.lookAt(0, 0, 0); // Make the icon face the center
//   });

//   return (
//     <Text
//       ref={ref}
//       fontSize={0.4}
//       color="#fff"
//       anchorX="center"
//       anchorY="middle"
//     >
//       {emoji}
//     </Text>
//   );
// };

// const TechGlobe3D = () => {
//   return (
//     <div className="w-full h-[600px]">
//       <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />

//         {/* Central Sphere */}
//         <mesh>
//           <sphereGeometry args={[1.5, 32, 32]} />
//           <meshStandardMaterial color="#fff" wireframe />
//         </mesh>

//         {/* Tech Icons */}
//         {techIcons.map((icon, idx) => (
//           <GlobeIcon
//             key={icon.name}
//             emoji={icon.emoji === 'JS' ? 'JS' : icon.emoji}
//             angle={icon.angle}
//             radius={icon.radius}
//             speed={0.3}
//             index={idx}
//           />
//         ))}
//       </Canvas>
//     </div>
//   );
// };

// export default TechGlobe3D;

// src/components/TechGlobe3D.jsx
// import React, { useRef, useMemo } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Text } from '@react-three/drei';
// import * as THREE from 'three'; // Import THREE for color and vector operations

// // Full tech stack with colors and new emoji/character icons
// const techIconsData = [
//   { name: 'HTML5', label: '📄', color: '#E44D26' },
//   { name: 'CSS3', label: '🎨', color: '#1572B6' },
//   { name: 'JavaScript', label: '⚡', color: '#F7DF1E' },
//   { name: 'TypeScript', label: '🟦', color: '#3178C6' },
//   { name: 'React', label: '⚛️', color: '#61DAFB' },
//   { name: 'Next.js', label: '▲', color: '#000000' },
//   { name: 'Redux', label: '🔴', color: '#764ABC' },
//   { name: 'TailwindCSS', label: '🌬️', color: '#38B2AC' },
//   { name: 'Node.js', label: '🌳', color: '#3C873A' },
//   { name: 'Express', label: '🚀', color: '#000000' },
//   { name: 'MongoDB', label: '🍃', color: '#47A248' },
//   { name: 'PostgreSQL', label: '🐘', color: '#336791' },
//   { name: 'MySQL', label: '🐬', color: '#00758F' },
//   { name: 'Python', label: '🐍', color: '#3776AB' },
//   { name: 'Git', label: '🌿', color: '#F05032' },
//   { name: 'GitHub', label: '🐙', color: '#181717' },
//   { name: 'VS Code', label: '💻', color: '#007ACC' },
//   { name: 'Figma', label: '📐', color: '#F24E1E' },
//   { name: 'Docker', label: '🐳', color: '#2496ED' },
//   { name: 'Vercel', label: '▲', color: '#000000' },
//   { name: 'Firebase', label: '🔥', color: '#FFCA28' },
//   { name: 'AWS', label: '☁️', color: '#FF9900' },
//   { name: 'Azure', label: '🔵', color: '#0078D4' },
//   { name: 'GCP', label: '🌈', color: '#4285F4' },
//   { name: 'Kubernetes', label: '☸️', color: '#326CE5' },
//   { name: 'GraphQL', label: '🌐', color: '#E10098' },
//   { name: 'Apollo', label: '🚀', color: '#3F51B5' },
//   { name: 'Sass', label: '🧡', color: '#CC6699' },
//   { name: 'Less', label: '💙', color: '#1D365D' },
//   { name: 'Webpack', label: '📦', color: '#8DD6F9' },
//   { name: 'Babel', label: '⚙️', color: '#F9DC3E' },
//   { name: 'Jest', label: '🃏', color: '#C21325' },
//   { name: 'Cypress', label: '🧪', color: '#69D3A8' },
//   { name: 'Storybook', label: '📚', color: '#FF4785' },
//   { name: 'Stripe', label: '💳', color: '#635BFF' },
//   { name: 'Auth0', label: '🔒', color: '#EB5424' },
//   { name: 'Netlify', label: 'netlify', color: '#00C7B7' },
//   { name: 'Heroku', label: 'heroku', color: '#430098' },
// ];

// // Component for the central globe that rotates
// const RotatingGlobe = () => {
//   const meshRef = useRef();
//   useFrame(() => {
//     if (meshRef.current) {
//       // Rotate the globe slowly
//       meshRef.current.rotation.y += 0.002;
//     }
//   });
//   return (
//      <mesh>
// //           <sphereGeometry args={[2.5, 12, 12]} />
// //           <meshStandardMaterial color="skyblue" wireframe />

// //         </mesh>
//     // <mesh ref={meshRef}>
//     //   <sphereGeometry args={[1.5, 64, 64]} /> {/* Increased segments for smoother appearance */}
//     //   {/* Using a darker blue for a more 'globe' like color */}
//     //   <meshStandardMaterial color="#000" metalness={0.5} roughness={0.3} />
//     // </mesh>
//   );
// };

// // Component for the group of icons that will orbit the globe
// const OrbitingIcons = ({ icons }) => {
//   const groupRef = useRef();

//   // Pre-calculate positions for icons on a sphere
//   const iconPositions = useMemo(() => {
//     const positions = [];
//     const numIcons = icons.length;
//     const radius = 2.5; // Radius of the orbit for the icons

//     for (let i = 0; i < numIcons; i++) {
//       // Golden spiral distribution for even spread
//       const phi = Math.acos(1 - (2 * i) / numIcons); // Latitude
//       const theta = Math.PI * (1 + Math.sqrt(5)) * i; // Longitude (golden angle)

//       const x = radius * Math.sin(phi) * Math.cos(theta);
//       const y = radius * Math.sin(phi) * Math.sin(theta);
//       const z = radius * Math.cos(phi);

//       positions.push(new THREE.Vector3(x, y, z));
//     }
//     return positions;
//   }, [icons]);

//   useFrame(({ clock }) => {
//     if (groupRef.current) {
//       // Rotate the entire group of icons around the central globe
//       groupRef.current.rotation.y = clock.getElapsedTime() * 0.1; // Slower rotation
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {icons.map((icon, idx) => (
//         <Text
//           key={icon.name}
//           position={iconPositions[idx]}
//           fontSize={0.4} // Adjusted font size for better visibility
//           color={icon.color}
//           anchorX="center"
//           anchorY="middle"
//           // Make the text always face the camera
//           // This is handled automatically by 'drei/Text' if no lookAt is specified
//         >
//           {icon.label}
//         </Text>
//       ))}
//     </group>
//   );
// };

// const TechGlobe3D = () => {
//   return (
//     <div className="w-full h-[600px] bg-transparent rounded-lg shadow-xl overflow-hidden">
//       <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
//         {/* Ambient light for overall illumination */}
//         <ambientLight intensity={0.8} />
//         {/* Directional light to cast shadows and highlight features */}
//         <directionalLight position={[5, 5, 5]} intensity={1.2} />
//         {/* Another directional light from the opposite side for better depth */}
//         <directionalLight position={[-5, -5, -5]} intensity={0.6} />

//         {/* OrbitControls allows user interaction (zoom, pan, rotate) */}
//         {/* autoRotate makes the scene continuously rotate */}
//         <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />

//         {/* Central Rotating Globe */}
//         <RotatingGlobe />

//         {/* Orbiting Tech Icons */}
//         <OrbitingIcons icons={techIconsData} />
//       </Canvas>
//     </div>
//   );
// };

// export default TechGlobe3D;


// src/components/TechGlobe3D.jsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE for color and vector operations

// Tech stack with icons, focusing on MERN, Java, Python, C/C++, DevOps, Spring Boot, Databases, and Tools
const techIconsData = [
  // MERN Stack
  { name: 'MongoDB', label: '🍃', color: '#47A248' }, // Leaf icon for MongoDB
  { name: 'Express.js', label: '🚀', color: '#fff' }, // Rocket for Express
  { name: 'React', label: '⚛️', color: '#61DAFB' }, // Atom symbol for React
  { name: 'Node.js', label: '🌳', color: '#3C873A' }, // Tree for Node.js

  // Languages
  { name: 'Java', label: '☕', color: '#007396' }, // Coffee cup for Java
  { name: 'Python', label: '🐍', color: '#3776AB' }, // Snake for Python
  { name: 'C', label: '⚙️', color: '#A8B9CC' }, // Gear for C
  { name: 'C++', label: '➕', color: '#00599C' }, // Plus sign for C++

  // DevOps Tools
  { name: 'Docker', label: '🐳', color: '#2496ED' }, // Whale for Docker
  { name: 'Kubernetes', label: '☸️', color: '#326CE5' }, // Wheel of Dharma for Kubernetes
  { name: 'Jenkins', label: '🤖', color: '#D24939' }, // Robot for Jenkins
  { name: 'GitLab CI/CD', label: '🦊', color: '#FC6D26' }, // Fox for GitLab
  { name: 'Terraform', label: '🏗️', color: '#7B42BC' }, // Construction building for Terraform
  { name: 'Ansible', label: '🅰️', color: '#EE0000' }, // 'A' for Ansible

  // Frameworks/Libraries
  { name: 'Spring Boot', label: '🌸', color: '#6DB33F' }, // Cherry blossom for Spring Boot

  // Databases
  { name: 'MySQL', label: '🐬', color: '#00758F' }, // Dolphin for MySQL
  { name: 'PostgreSQL', label: '🐘', color: '#336791' }, // Elephant for PostgreSQL
  { name: 'Cassandra', label: '🐝', color: '#336699' }, // Bee for Cassandra
  { name: 'Redis', label: '💨', color: '#DC382D' }, // Dash for Redis

  // Data Science/Notebooks
  { name: 'Jupyter', label: '📊', color: '#F37626' }, // Bar chart for Jupyter

  // Tools/Platforms
  { name: 'Git', label: '🌿', color: '#F05032' }, // Branch for Git
  { name: 'GitHub', label: '🐙', color: '#fff' }, // Octopus for GitHub
  { name: 'Vercel', label: '▲', color: '#fff' }, // Triangle for Vercel
  { name: 'Postman', label: '📮', color: '#FF6C37' }, // Postbox for Postman
  { name: 'AWS', label: '☁️', color: '#FFf' }, // Cloud for AWS
  { name: 'Azure', label: '🔵', color: '#0078D4' }, // Blue circle for Azure
  { name: 'GCP', label: '🌈', color: '#4285F4' }, // Rainbow for GCP
  { name: 'VS Code', label: '💻', color: '#007ACC' }, // Laptop for VS Code
  { name: 'Figma', label: '📐', color: '#F24E1E' }, // Ruler/triangle for Figma
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
          fontSize={0.4} // Adjusted font size for better visibility
          color={icon.color}
          anchorX="center"
          anchorY="middle"
        // `drei/Text` automatically makes the text face the camera, no explicit lookAt needed
        >
          {icon.label}
        </Text>
      ))}
    </group>
  );
};

const TechGlobe3D = () => {
  return (
    <div className="w-full h-full bg-transparent rounded-lg  ">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.8} />
        {/* Directional light from one side to highlight features */}
        <directionalLight position={[5, 5, 5]} intensity={10} />
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