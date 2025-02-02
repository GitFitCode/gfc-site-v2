import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { ShinyBgButton } from "../ui/ShinyBgButton";
import { bookButton } from "../Header/MainNav";
import { useNavigate } from "react-router";
import { useNavigationContext } from "../../contexts/navigation.context";
import { InfiniteMovingIcons } from "../ui/InfiniteIcons";
import { Environment} from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";
import GoogleCalendarButton from "../GoogleCalendarButton";
import { Model } from "./StatsSection";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

export default function GitFitCodeIntroSection() {
  const { isDesktop, isTablet } = useNavigationContext();
  const navigate = useNavigate();

  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full flex flex-col items-center justify-center relative max-w-7xl mt-20 mb-40 md:my-40 px-[2em]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6em] items-start ">
          {/* Text Content */}
          <div className="md:col-span-2 flex flex-col items-start justify-center gap-12 ">
            <h2 className="text-[30px] z-20 md:text-4xl lg:text-7xl font-bold text-neutral-800 dark:text-white font-sans tracking-tight">
              Designed for Growth.{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-0 md:py-4 from-[#00C9CD] via-[#80E3E5] to-[#008A8C] [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span>Engineered to Scale.</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#00C9CD] via-[#52cacc] to-[#38cbce] py-0 md:py-4">
                  <span>Engineered to Scale.</span>
                </div>
              </div>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 font-sans tracking-tight max-w-2xl">
              We build enterprise-grade software solutions that adapt, evolve,
              and scale seamlessly—powering businesses, ideas, and innovation at
              any stage.
            </p>
            <div className="flex flex-col gap-4 md:flex-row w-full">
              <ShinyBgButton
                className={`py-6 px-8 ${!isTablet ? "w-full" : ""}`}
                content="Launch"
                navItem={bookButton}
                handleClick={() => navigate(bookButton.route)}
              />
              <GoogleCalendarButton
                className={`py-6 px-8 ${!isTablet ? "w-full" : ""}`}
              />
            </div>
          </div>

          {/* 3D/Canvas Section */}
          {(isTablet || isDesktop) && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="h-full w-full flex items-center justify-center self-start"
            >
              <Canvas
                className="h-full"
                orthographic
                camera={{ position: [0, 0, 200], zoom: 100 }}
              >
                <Model />
                <ambientLight intensity={0.5} />
                <spotLight position={[50, 50, -30]} castShadow />
                <pointLight position={[-10, -10, -10]} color="white" intensity={2} />
                <pointLight position={[0, -5, 5]} intensity={0.5} />
                <directionalLight position={[0, -5, 0]} color="white" intensity={1} />
                <Environment preset="studio" />
              </Canvas>
            </motion.div>
          )}
        </div>

        <InfiniteMovingIcons
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </BackgroundBeamsWithCollision>
  );
}

/* Optional: A Three.js component example (Torusknot) */
function Torusknot(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null);
  const viewport = useThree((state: { viewport: any; }) => state.viewport);
  useFrame((state: any, delta: number) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 2;
      ref.current.rotation.y += delta / 2;
    }
  });
  return (
    <mesh
      scale={Math.min(viewport.width, viewport.height) / 5}
      {...props}
      ref={ref}
    >
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
