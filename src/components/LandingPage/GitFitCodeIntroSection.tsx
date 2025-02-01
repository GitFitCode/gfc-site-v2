import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { ShinyBgButton } from "../ui/ShinyBgButton";
import { bookButton } from "../Header/MainNav";
import { useNavigate } from "react-router";
import { useNavigationContext } from "../../contexts/navigation.context";
<<<<<<< HEAD
import { InfiniteMovingIcons } from "../ui/InfiniteIcons";
import { AsciiRenderer, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import GlassModel from "../Models/Glass";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";
import GoogleCalendarButton from "../GoogleCalendarButton";
import { Model } from "./StatsSection";

export default function GitFitCodeIntroSection() {
<<<<<<< HEAD
<<<<<<< HEAD
  const { isTablet } = useNavigationContext();
=======
	return (
		<section id="gfc-intro-section" className="w-full my-5 flex flex-col items-center justify-center relative sm:px-8 md:px-5 pt-24 max-w-7xl">
			{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start ">
				
				<div className="flex flex-col items-start justify-center gap-4 ">
					<h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-coolgray-90 leading-tight">
						AI-Enhanced Custom Enterprise Software Solutions.
					</h1>
					<p className="text-lg text-[#21272ac9] leading-relaxed max-w-md">
						Transforming ideas into digital reality with innovative software development.
					</p>
					<a
						href="https://calendar.app.google/9RQZmAHjNjV51Jyz9"
						target="_blank"
						rel="noopener noreferrer"
						className="all-[unset] box-border inline-flex h-14 items-center justify-center bg-[#00c2c6] text-white rounded-lg hover:bg-gfc-primary-100 hover:text-black sm:w-[90%] lg:w-[60%]"
					>
						<button className="all-[unset] box-border inline-flex h-14 items-center justify-center p-4 ">
							<div className="inline-flex items-center justify-center gap-2.5 px-4 flex-[0_0_auto] font-bold">
								Start Building
							</div>
						</button>
					</a>
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
=======
  const { isDesktop, isTablet } = useNavigationContext();
>>>>>>> 517d306 (chore: added threejs libraries and set static React version)

  const navigate = useNavigate();
  return (
    // <BackgroundBeamsWithCollision>
<<<<<<< HEAD

<<<<<<< HEAD
    <div className="h-[92vh] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden">
=======
    <div className="py-20 md:h-[92vh] bg-gradient-to-b  dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden">
>>>>>>> 8ce7ed9 (fix: HeroSection ui changes)
      <div className="w-full flex flex-col items-center justify-center relative max-w-7xl px-[2em]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6em] items-start mb-[10em]">
          <div className="md:col-span-2 flex flex-col items-start justify-center gap-12 ">
            <h2 className="z-20 text-[40px]/[1.2] md:text-4xl lg:text-7xl/[1.1] font-bold text-gray-800 dark:text-white tracking-tight">
              Designed for Growth.{" "}
              <span className="text-gfc-accent">Engineered to Scale.</span>
              {/* <div className="relative mx-auto inline-block w-max-[120px] ">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-0 md:py-2 from-[#70c9ca] via-[#80E3E5] to-[#008A8C] [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">Engineered to Scale.</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#00C9CD] via-[#52cacc] to-[#38cbce] py-0 md:py-2">
                  <span className="">Engineered to Scale.</span>
                </div>
              </div> */}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 tracking-tight max-w-2xl">
              We build enterprise-grade software solutions that adapt, evolve,
              and scale seamlessly—powering businesses, ideas, and innovation at
              any stage.
            </p>
            <div className="flex flex-row gap-4">
              <ShinyBgButton
                className={`py-6 px-8 ${!isTablet && "w-full"}`}
                content="Launch"
                navItem={bookButton}
                handleClick={() => navigate(bookButton.route)}
              />
              <GoogleCalendarButton />
            </div>
          </div>

          {(isTablet || isDesktop) && (
            <motion.div
              // style={isTablet || isDesktop ? { position: "sticky", top: "0" } : {}}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="h-full w-full flex items-center justify-center self-start"
            >
              <Canvas
                // style={{ height: "80vh", width: "98%" }}
                className="h-full"
                orthographic
                camera={{
                  position: [0, 0, 200],
                  zoom: isDesktop ? 100 : isTablet ? 100 : 100,
                }}
              >
                <Model />
                <ambientLight intensity={0.5} />
                <spotLight position={[50, 50, -30]} castShadow />
                <pointLight
                  position={[-10, -10, -10]}
                  color="white"
                  intensity={2}
                />
                <pointLight position={[0, -5, 5]} intensity={0.5} />
                <directionalLight
                  position={[0, -5, 0]}
                  color="white"
                  intensity={1}
                />
                <Environment preset="studio" />
              </Canvas>
              {/* <Canvas style={{ background: "white" }}>
                <GlassModel />
                <directionalLight intensity={2} position={[0, 2, 3]} />
                <Environment preset="city" />
              </Canvas> */}
            </motion.div>
          )}

          {/* // <div className="relative h-[310px] md:h-[335px] w-full">
            //   <div className="relative">
            //     <img
            //       className="absolute w-[222px] h-[299px] top-0 right-16"
            //       alt="Element"
            //       src="https://c.animaapp.com/2fHzREgW/img/7e1bbb97-69a6-4a54-8a5a-7c3749c09731-jpg--1-.png"
            //     />
            //     <img
            //       className="absolute w-8 h-8 top-10 right-16"
            //       alt="Thumbs up"
            //       src="https://c.animaapp.com/2fHzREgW/img/thumbs-up.png"
            //     />
            //     <img
            //       className="absolute w-[214px] h-[218px] top-[135px] right-0"
            //       alt="Linkedin profile"
            //       src="https://c.animaapp.com/2fHzREgW/img/linkedin-profile-picture-11-08-2022-1.png"
            //     />

            //     <div
            //       className={`z-10 w-8 h-8 bg-[url(https://c.animaapp.com/2fHzREgW/img/notification-2.svg)] bg-[100%_100%] absolute right-1 top-[164px]`}
            //     />
            //   </div>
            // </div> */}
        </div>
        <InfiniteMovingIcons
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </div>
    // </BackgroundBeamsWithCollision>
  );
}
<<<<<<< HEAD
=======
				
				<div className="relative flex justify-center md:justify-end items-center">
					<div className="w-full sm:w-2/3 lg:w-2/3 h-[353px] relative flex items-center">
						<img
							className="absolute w-[222px] h-[299px] top-0 left-16"
							alt="Element"
							src="https://c.animaapp.com/2fHzREgW/img/7e1bbb97-69a6-4a54-8a5a-7c3749c09731-jpg--1-.png"
						/>
						<img
							className="absolute w-8 h-8 top-10 left-16"
							alt="Thumbs up"
							src="https://c.animaapp.com/2fHzREgW/img/thumbs-up.png"
						/>
						<img
							className="absolute w-[214px] h-[218px] top-[135px] left-0"
							alt="Linkedin profile"
							src="https://c.animaapp.com/2fHzREgW/img/linkedin-profile-picture-11-08-2022-1.png"
						/>
		
						<div
							className={`z-10 w-8 h-8 bg-[url(https://c.animaapp.com/2fHzREgW/img/notification-2.svg)] bg-[100%_100%] $!absolute !left-1 !top-[164px]`}
						/>
					</div>
				</div>
			</div> */}
		</section>
	)
}
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
=======

export default function GitFitCodeIntroSection() {
  const { isTablet } = useNavigationContext();

  const navigate = useNavigate();
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full flex flex-col items-center justify-center relative max-w-7xl mt-20 mb-40 md:my-40 px-[2em]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6em] items-start ">
          <div className="md:col-span-2 flex flex-col items-start justify-center gap-12 ">
            <h2 className="text-[32px] z-20 md:text-4xl lg:text-7xl font-bold text-neutral-800 dark:text-white font-sans tracking-tight">
              Designed for Growth.{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-0 md:py-4 from-[#00C9CD] via-[#80E3E5] to-[#008A8C] [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">Engineered to Scale.</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#00C9CD] via-[#52cacc] to-[#38cbce] py-0 md:py-4">
                  <span className="">Engineered to Scale.</span>
                </div>
              </div>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 font-sans tracking-tight max-w-2xl">
              We build enterprise-grade software solutions that adapt, evolve,
              and scale seamlessly—powering businesses, ideas, and innovation at
              any stage.
            </p>
            <ShinyBgButton
              className={`py-6 px-8 ${!isTablet && "w-full"}`}
              content="Book.Now"
              navItem={bookButton}
              handleClick={() => navigate(bookButton.route)}
            />
          </div>

          {isTablet && <div className="relative h-[310px] md:h-[335px] w-full">
            <div className="relative">
              <img
                className="absolute w-[222px] h-[299px] top-0 right-16"
                alt="Element"
                src="https://c.animaapp.com/2fHzREgW/img/7e1bbb97-69a6-4a54-8a5a-7c3749c09731-jpg--1-.png"
              />
              <img
                className="absolute w-8 h-8 top-10 right-16"
                alt="Thumbs up"
                src="https://c.animaapp.com/2fHzREgW/img/thumbs-up.png"
              />
              <img
                className="absolute w-[214px] h-[218px] top-[135px] right-0"
                alt="Linkedin profile"
                src="https://c.animaapp.com/2fHzREgW/img/linkedin-profile-picture-11-08-2022-1.png"
              />

              <div
                className={`z-10 w-8 h-8 bg-[url(https://c.animaapp.com/2fHzREgW/img/notification-2.svg)] bg-[100%_100%] absolute right-1 top-[164px]`}
              />
            </div>
          </div>}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
>>>>>>> f786883 (chore: redesigned hero section)
=======

function Torusknot(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null);
  const viewport = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = ref.current.rotation.y += delta / 2;
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
>>>>>>> 517d306 (chore: added threejs libraries and set static React version)
