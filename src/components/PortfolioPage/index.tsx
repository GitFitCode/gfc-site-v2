import { Link } from "react-router";
import { WobbleCard } from "../ui/WobbleCard";
import samples from "../../images/portfolio/samples.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigationContext } from "../../contexts/navigation.context";

const portfolio = [
  {
    project: "Mode Earn Club",
    description:
      "Learn how we built a subscription service into and an existing product with 40m users.",
    image: require("../../images/portfolio/mode_earn_club.png"),
    link: "https://www.modemobile.com/",
    path: "/portfolio/mode-earn-club",
  },
  {
    project: "ConnectworX",
    description:
      "Check out a zero-to-one digital networking tool that helped turn a business crisis into an opportunity.",
    image: require("../../images/portfolio/connectworx.png"),
    link: "https://www.linkedin.com/company/connectworx/about/",
    path: "/portfolio/connectworx",
  },
  {
    project: "Natura Labs",
    description: "Follow our journey through a zero-to-one web project.",
    image: require("../../images/portfolio/natura_labs.png"),
    link: "https://www.naturalabs.io/",
    path: "/portfolio/natura-labs",
  },
];

export default function PortfolioPage() {
  const { isDesktop } = useNavigationContext();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
      className={`flex flex-col items-center justify-between px-4 lg:px-20 gap-8 md:py-16 pt-16`}
    >
      <section
        className="w-full rounded-sm max-w-7xl bg-none md:bg-cover mb-10 md:mb-20 md:mt-10"
        style={{
          backgroundImage:
            width > 900
              ? `linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 8%, rgba(255, 255, 255, 0) 90%, white 100%),
						linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 90%, white 100%),
						url(${samples})`
              : "none",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="flex-1 max-w-7xl relative mx-auto md:py-20 px-4 w-full left-0 top-0">
<<<<<<< HEAD
            <h1 className="text-4xl md:text-7xl font-bold  text-neutral-800 dark:text-white">
              Our Portfolio {isDesktop &&  'of Excellence'}
            </h1>
            <h4 className="text-lg md:text-xl mt-1 text-[#757575] font-[400] leading-relaxed">
              Check out some of my latest product design case studies.
            </h4>
            <p className=" text-sm md:text-base mt-8 dark:text-neutral-600">
=======
            <h1 className="text-3xl md:text-7xl font-bold dark:text-white">
              Our Portfolio {isDesktop &&  'of Excellence'}
            </h1>
            <p className="text-lg md:text-xl mt-2 text-[#757575] font-[400] leading-relaxed">
              Check out some of my latest product design case studies.
            </p>
            <p className="font-[300] md:text-lg mt-8 dark:text-neutral-800">
>>>>>>> 28c2d37 (chore: added sticky footer and initial site loader)
              We have worked for startups, agencies, corporations, and
              government and have created products used by millions of people.
            </p>
          </div>
          <div className="flex-1 flex"></div>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {portfolio.map((portfolio, index) => (
          <Link to={portfolio.path} key={index}>
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-1 h-full bg-gfc-secondary min-h-[300px] lg:min-h-[300px] max-w-[500px]"
              className=""
            >
              <img
                src={portfolio.image}
                width={"100%"}
                height={500}
                alt="linear"
                style={{ alignSelf: "center" }}
                className="object-contain rounded-xl"
              />
              <h2 className="mt-4 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {portfolio.project}
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                {portfolio.description}
              </p>
            </WobbleCard>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
