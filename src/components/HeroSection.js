import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import "../styles/HeroSection.css";

function HeroModel() {
  const group = useRef();
  const target = useRef({ x: 0, y: 0 });
  const mouseNDC = useRef({ x: 9999, y: 9999, active: false });
  const { scene } = useGLTF("/hero.glb");
  const { viewport } = useThree();

  const letters = useMemo(() => {
    const meshes = [];
    scene.traverse((c) => {
      if (c.isMesh) meshes.push(c);
    });

    // Reset before measuring
    scene.scale.setScalar(1);
    scene.position.set(0, 0, 0);
    meshes.forEach((m) => {
      m.position.set(m.userData.origX ?? m.position.x, m.userData.origY ?? m.position.y, m.userData.origZ ?? m.position.z);
      if (m.userData.origX === undefined) {
        m.userData.origX = m.position.x;
        m.userData.origY = m.position.y;
        m.userData.origZ = m.position.z;
      }
    });
    scene.updateMatrixWorld(true);

    // Detect narrow viewport — break the name onto two lines
    const isNarrow = viewport.width < 9;

    if (isNarrow) {
      // Sort meshes left-to-right by original X so we can split GOKUL / JINU
      const ordered = [...meshes].sort((a, b) => a.userData.origX - b.userData.origX);
      const gokul = ordered.slice(0, 5);
      const jinu = ordered.slice(5);
      const reposition = (group, yOffset) => {
        const xs = group.map((m) => m.userData.origX);
        const mid = (Math.min(...xs) + Math.max(...xs)) / 2;
        group.forEach((m) => {
          m.position.x = m.userData.origX - mid;
          m.position.y = m.userData.origY + yOffset;
        });
      };
      reposition(gokul, 1.6);
      jinu.forEach((m, i) => {
        // JINU is naturally a bit narrower; tighten spacing slightly
        m.position.x = m.userData.origX - ((jinu[0].userData.origX + jinu[jinu.length - 1].userData.origX) / 2);
        m.position.y = m.userData.origY - 1.6;
      });
    }

    scene.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(scene);
    const sz = box.getSize(new THREE.Vector3());
    const ctr = box.getCenter(new THREE.Vector3());
    // Fit by whichever dimension is more constrained
    const aspect = viewport.width / Math.max(viewport.height, 0.01);
    const fitByX = (viewport.width * 0.92) / sz.x;
    const fitByY = (viewport.height * 0.85) / sz.y;
    const desired = isNarrow ? Math.min(fitByX, fitByY) : Math.min(11 / sz.x, fitByX);
    const s = Math.max(0.1, Math.min(desired, 1.6));
    scene.scale.setScalar(s);
    scene.position.set(-ctr.x * s, -ctr.y * s, 0);
    scene.updateMatrixWorld(true);
    void aspect;

    const mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#e6ecf2"),
      metalness: 0.3,
      roughness: 0.3,
      clearcoat: 0.45,
      clearcoatRoughness: 0.3,
    });

    meshes.forEach((m) => {
      m.material = mat;
      m.castShadow = true;
      m.receiveShadow = true;

      m.geometry.computeBoundingBox();
      const wc = m.geometry.boundingBox
        .getCenter(new THREE.Vector3())
        .applyMatrix4(m.matrixWorld);
      m.userData.worldCenter = wc;
      m.userData.baseX = m.position.x;
      m.userData.baseY = m.position.y;
      m.userData.baseZ = m.position.z;
    });

    meshes.sort((a, b) => a.userData.worldCenter.x - b.userData.worldCenter.x);
    meshes.forEach((m, i) => {
      m.userData.phase = i * 0.55;
      m.userData.amp = 0.85 + (i % 3) * 0.12;
    });

    return meshes;
  }, [scene, viewport.width, viewport.height]);

  React.useEffect(() => {
    const onMove = (e) => {
      const canvasEl = document.querySelector(".hero3d-canvas-wrap canvas");
      if (!canvasEl) return;
      const r = canvasEl.getBoundingClientRect();
      const inside =
        e.clientX >= r.left && e.clientX <= r.right &&
        e.clientY >= r.top && e.clientY <= r.bottom;
      mouseNDC.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouseNDC.current.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      mouseNDC.current.active = inside;

      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      target.current.x = nx * 0.35;
      target.current.y = ny * 0.2;
    };
    const onLeave = () => { mouseNDC.current.active = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const planeZ = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const mouseWorld = useMemo(() => new THREE.Vector3(9999, 9999, 0), []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    const idleY = Math.sin(t * 0.55) * 0.08;
    const idleX = Math.cos(t * 0.4) * 0.05;

    group.current.rotation.y += (target.current.x + idleY - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (target.current.y + idleX - group.current.rotation.x) * 0.05;

    if (mouseNDC.current.active) {
      raycaster.setFromCamera({ x: mouseNDC.current.x, y: mouseNDC.current.y }, state.camera);
      raycaster.ray.intersectPlane(planeZ, mouseWorld);
    } else {
      mouseWorld.set(9999, 9999, 0);
    }

    const radius = 2.6;
    const strength = 1.4;

    letters.forEach((m) => {
      const lt = t + m.userData.phase;
      const bobY = Math.sin(lt * 1.2) * 0.18 * m.userData.amp;
      const bobZ = Math.cos(lt * 0.8) * 0.14 * m.userData.amp;

      const wc = m.userData.worldCenter;
      const dx = wc.x - mouseWorld.x;
      const dy = wc.y - mouseWorld.y;
      const dist = Math.hypot(dx, dy);

      let rx = 0, ry = 0, rz = 0, rr = 0;
      if (mouseNDC.current.active && dist < radius && dist > 0.001) {
        const f = 1 - dist / radius;
        const fo = f * f;
        const nx = dx / dist;
        const ny = dy / dist;
        rx = nx * strength * fo;
        ry = ny * strength * fo * 0.5;
        rz = fo * 1.3;
        rr = nx * fo * 0.5;
      }

      const tx = m.userData.baseX + rx;
      const ty = m.userData.baseY + bobY + ry;
      const tz = m.userData.baseZ + bobZ + rz;

      m.position.x += (tx - m.position.x) * 0.2;
      m.position.y += (ty - m.position.y) * 0.2;
      m.position.z += (tz - m.position.z) * 0.2;
      m.rotation.z += (Math.sin(lt * 0.9) * 0.08 + rr - m.rotation.z) * 0.2;
      m.rotation.y += (Math.cos(lt * 0.7) * 0.12 - m.rotation.y) * 0.2;
    });
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/hero.glb");

const HeroSection = () => {
  return (
    <section id="home" className="hero3d">
      <div className="hero3d-bg">
        <div className="hero3d-grid" />
        <div className="hero3d-glow" style={{ "--a": "#6aa9ff", "--b": "#ff9566" }} />
        <div className="hero3d-scanlines" />
      </div>

      <div className="hero3d-chrome">
        <div className="chrome-item">
          <span className="chrome-dot" />
          AVAILABLE · FULLSTACK · TORONTO
        </div>
        <div className="chrome-item mono">
          <span className="chrome-k">SYS</span> render.engine/3d · <span className="chrome-k">VER</span> 04.2026
        </div>
      </div>

      <div className="hero3d-canvas-wrap">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 38 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          shadows
        >
          {/* low ambient — keep shadows deep for max contrast */}
          <ambientLight intensity={0.08} color="#1a3550" />
          {/* bright cool key from upper-left — main illumination on the faces */}
          <directionalLight position={[-5, 6, 5]} intensity={2.6} color="#9cd0ff" castShadow />
          {/* hot orange rim from right edge — the "pop" against the cold bg */}
          <directionalLight position={[7, 1, -2]} intensity={2.4} color="#ff7a2e" />
          {/* cyan back-rim on the left edge for color separation & depth */}
          <directionalLight position={[-7, 2, -3]} intensity={1.3} color="#5fe0ff" />
          {/* tight white top sparkle for crisp highlights */}
          <spotLight position={[0, 10, 4]} angle={0.35} penumbra={0.5} intensity={2.2} color="#ffffff" />
          {/* deep blue fill from below for color depth */}
          <pointLight position={[0, -5, 4]} intensity={0.7} color="#3060a0" />
          <Suspense fallback={null}>
            <HeroModel />
            <ContactShadows position={[0, -2, 0]} opacity={0.55} scale={14} blur={2.8} far={5} color="#000000" />
          </Suspense>
        </Canvas>
      </div>

      <div className="hero3d-meta">
        <div className="meta-block">
          <div className="meta-k">ROLE</div>
          <div className="meta-v">Fullstack · Infra · Security</div>
        </div>
        <div className="meta-sep" />
        <div className="meta-block">
          <div className="meta-k">STACK</div>
          <div className="meta-v">Go · TS · Spring · Docker</div>
        </div>
        <div className="meta-sep" />
        <div className="meta-block">
          <div className="meta-k">FOCUS</div>
          <div className="meta-v">Agent runtimes, memory engines</div>
        </div>
        <div className="meta-sep" />
        <div className="meta-block">
          <div className="meta-k">STATUS</div>
          <div className="meta-v"><span className="pulse" /> Open to work</div>
        </div>
      </div>

      <div className="hero3d-cta">
        <a href="#contact" className="btn3d btn3d-primary">
          <span className="btn3d-face">GET IN TOUCH</span>
          <span className="btn3d-side" />
        </a>
        <a href="#works" className="btn3d btn3d-ghost">
          <span className="btn3d-face">VIEW WORKS →</span>
          <span className="btn3d-side" />
        </a>
        <a href="/Gokul_Jinu_Resume_BW.pdf" className="btn3d btn3d-ghost" download>
          <span className="btn3d-face">RESUME ↓</span>
          <span className="btn3d-side" />
        </a>
      </div>

      <div className="hero3d-scroll">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default HeroSection;
