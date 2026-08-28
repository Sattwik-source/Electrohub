'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Product3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Lighting
    const light1 = new THREE.DirectionalLight(0x0088ff, 1);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x00ffff, 0.5);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    // Create headphone-like shape using cylinders and spheres
    const group = new THREE.Group();

    // Left ear cup
    const cupGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 32);
    const cupMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.3,
      metalness: 0.8,
    });

    const leftCup = new THREE.Mesh(cupGeometry, cupMaterial);
    leftCup.position.x = -1.2;
    leftCup.rotation.z = Math.PI / 4;
    group.add(leftCup);

    // Right ear cup
    const rightCup = new THREE.Mesh(cupGeometry, cupMaterial);
    rightCup.position.x = 1.2;
    rightCup.rotation.z = -Math.PI / 4;
    group.add(rightCup);

    // Headband
    const bandGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 100, Math.PI);
    const bandMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.2,
      metalness: 0.9,
    });
    const band = new THREE.Mesh(bandGeometry, bandMaterial);
    band.position.y = 0.8;
    group.add(band);

    // Glow effect
    const glowGeometry = new THREE.IcosahedronGeometry(3, 4);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.1,
      wireframe: false,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    scene.add(group);

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / width - 0.5;
      mouseY = (e.clientY - rect.top) / height - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate based on mouse position
      group.rotation.y += 0.01;
      group.rotation.x = mouseY * 0.5;
      group.rotation.y += mouseX * 0.2;

      // Glow animation
      glow.rotation.x += 0.001;
      glow.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-96"
      style={{ backgroundColor: 'transparent' }}
    />
  );
}