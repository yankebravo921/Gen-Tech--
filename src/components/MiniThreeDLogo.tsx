/**
 * MiniThreeDLogo — A lightweight, small version of the 3D grass logo
 * for use in the nav bar and footer. Uses fewer polygons and simpler
 * lighting than the full BrandMomentLogo to keep performance high.
 *
 * Accepts a `size` prop (in px) to control the container dimensions.
 */
import { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import * as THREE from 'three';
import { Center, Float } from '@react-three/drei';

/* ── Lightweight grass texture (smaller canvas for perf) ── */
function createMiniGrassTexture(size = 256): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#4a8018';
    ctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 120; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        ctx.fillStyle = `rgba(20, 50, 5, ${0.3 + Math.random() * 0.4})`;
        ctx.fillRect(x, y, 2 + Math.random() * 4, 2 + Math.random() * 3);
    }

    const greens = ['#6db82a', '#82c43e', '#a3e635', '#9ad440', '#b5e86a', '#8cbf30'];
    for (let i = 0; i < 2000; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const length = 4 + Math.random() * 10;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.9;
        ctx.strokeStyle = greens[Math.floor(Math.random() * greens.length)];
        ctx.lineWidth = 1 + Math.random() * 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
        ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
}

function MiniLogoShape({ url, isStatic = false }: { url: string; isStatic?: boolean }) {
    const data = useLoader(SVGLoader, url);
    const meshRef = useRef<THREE.Group>(null!);

    const shapes = useMemo(() => {
        const allShapes: THREE.Shape[] = [];
        data.paths.forEach((path: { toShapes: (arg0: boolean) => THREE.Shape[] }) => {
            allShapes.push(...path.toShapes(true));
        });
        return allShapes;
    }, [data]);

    const grassMap = useMemo(() => createMiniGrassTexture(), []);

    useFrame((state, delta) => {
        if (meshRef.current && !isStatic) {
            meshRef.current.rotation.y += delta * 0.4;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
        }
    });

    // Lighter extrude settings
    const extrudeSettings: THREE.ExtrudeGeometryOptions = useMemo(() => ({
        depth: 35,
        bevelEnabled: true,
        bevelSegments: 6,
        steps: 2,
        bevelSize: 1.2,
        bevelThickness: 1.2,
    }), []);

    return (
        <group ref={meshRef} scale={0.05} rotation={[0, 0, Math.PI]} position={[-10, 5, 0]}>
            <Center>
                {shapes.map((shape: THREE.Shape, i: number) => {
                    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
                    geo.computeVertexNormals();
                    geo.computeBoundingBox();
                    const bb = geo.boundingBox!;
                    const sz = new THREE.Vector3();
                    bb.getSize(sz);
                    const pos = geo.attributes.position;
                    const norm = geo.attributes.normal;
                    const uvs = new Float32Array(pos.count * 2);
                    for (let j = 0; j < pos.count; j++) {
                        const x = pos.getX(j), y = pos.getY(j), z = pos.getZ(j);
                        const nx = Math.abs(norm.getX(j)), ny = Math.abs(norm.getY(j)), nz = Math.abs(norm.getZ(j));
                        if (nz >= nx && nz >= ny) { uvs[j*2]=(x-bb.min.x)/sz.x; uvs[j*2+1]=(y-bb.min.y)/sz.y; }
                        else if (nx >= ny) { uvs[j*2]=(z-bb.min.z)/sz.z; uvs[j*2+1]=(y-bb.min.y)/sz.y; }
                        else { uvs[j*2]=(x-bb.min.x)/sz.x; uvs[j*2+1]=(z-bb.min.z)/sz.z; }
                    }
                    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
                    return (
                        <mesh key={i} geometry={geo}>
                            <meshPhysicalMaterial
                                map={grassMap}
                                color="#a3e635"
                                emissive="#6aaa20"
                                emissiveIntensity={0.25}
                                roughness={0.55}
                                metalness={0.1}
                                clearcoat={0.6}
                                clearcoatRoughness={0.15}
                                envMapIntensity={0.8}
                            />
                        </mesh>
                    );
                })}
            </Center>
        </group>
    );
}

interface Props {
    size?: number;
    className?: string;
    isStatic?: boolean;
}

export default function MiniThreeDLogo({ size = 48, className = '', isStatic = false }: Props) {
    return (
        <div
            className={className}
            style={{ width: size, height: size, position: 'relative' }}
        >
            <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 120], fov: 40 }}
                gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
                style={{ pointerEvents: 'none' }}
            >
                <ambientLight intensity={1} />
                <spotLight position={[40, 40, 60]} angle={0.4} penumbra={1} intensity={2} color="#ffffff" />
                <pointLight position={[-30, -30, -30]} intensity={1} color="#a3e635" />

                <Suspense fallback={null}>
                    {isStatic ? (
                        <MiniLogoShape url="/logo.svg" isStatic />
                    ) : (
                        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.1}>
                            <MiniLogoShape url="/logo.svg" />
                        </Float>
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
}
