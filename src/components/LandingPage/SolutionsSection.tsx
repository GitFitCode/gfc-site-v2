// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function SolutionsSection() {
//   const [billing, setBilling] = useState("monthly");

//   const plans = [
//     {
//       name: "Free",
//       description: "Everything to start",
//       price: "$0",
//       per: "/month",
//       features: [
//         "10,000 requests/month",
//         "Basic in-app support",
//         "2 users on your account",
//         "1 workspace",
//       ],
//       buttonText: "Sign up free",
//       color: "bg-black",
//     },
//     {
//       name: "Professional",
//       description: "Everything to launch",
//       price: "$49",
//       per: "/month",
//       features: [
//         "100,000 requests/month",
//         "Email in-app support",
//         "10 users on your account",
//         "10 workspaces",
//       ],
//       buttonText: "Sign up professional",
//       color: "bg-indigo-500",
//     },
//     {
//       name: "Enterprise",
//       description: "Everything to go public",
//       price: "$499",
//       per: "/month",
//       features: [
//         "10,000,000 requests/month",
//         "Phone support",
//         "Unlimited users",
//         "Unlimited workspaces",
//       ],
//       buttonText: "Sign up enterprise",
//       color: "bg-black",
//     },
//   ];

//   return (
//     <section className="w-full text-black bg-white px-4 lg:px-8 py-12 lg:py-24 relative overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mb-12 lg:mb-24 relative z-10 text-center"
//       >
//         <h3 className="font-semibold text-5xl lg:text-7xl mb-6">Pricing plans</h3>
//         <p className="mx-auto max-w-lg mb-8">
//           Lorem ipsum dolor sit amet consectetur. Pulvinar eu rhoncus tincidunt eget mattis netus ridiculus.
//         </p>
//         <div className="flex items-center justify-center gap-3">
//           <button
//             className={`text-white font-medium rounded-lg py-3 w-28 relative transition-all ${billing === "monthly" ? "bg-black" : "hover:bg-slate-100"}`}
//             onClick={() => setBilling("monthly")}
//           >
//             Monthly
//           </button>
//           <button
//             className={`font-medium rounded-lg py-3 w-28 relative transition-all ${billing === "annual" ? "bg-black text-white" : "hover:bg-slate-100"}`}
//             onClick={() => setBilling("annual")}
//           >
//             Annual
//           </button>
//         </div>
//       </motion.div>

//       <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full max-w-6xl mx-auto relative z-10">
//         {plans.map((plan, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="w-full bg-white p-6 border border-slate-300 rounded-xl"
//           >
//             <p className="text-2xl font-bold mb-2">{plan.name}</p>
//             <p className="text-lg mb-6">{plan.description}</p>
//             <div className="mb-8">
//               <p className="text-6xl font-bold {plan.color}">{plan.price}<span className="font-normal text-xl">{plan.per}</span></p>
//             </div>
//             {plan.features.map((feature, idx) => (
//               <div key={idx} className="flex items-center gap-2 mb-2">
//                 <span className="text-base">✓ {feature}</span>
//               </div>
//             ))}
//             <button className={`w-full py-4 mt-8 font-semibold text-white rounded-lg uppercase ${plan.color}`}>
//               {plan.buttonText}
//             </button>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -left-[250px] -top-[200px]"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//       ></motion.div>
//       <motion.div
//         className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -right-[250px] -bottom-[200px]"
//         animate={{ rotate: -360 }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//       ></motion.div>
//     </section>
//   );
// }

export default function SolutionsSection() {

  return (
    <section
      id="solutions-section"
      className="flex flex-col w-full items-center gap-[60px] my-[5rem] bg-defaultwhite"
    >
      <div className="flex flex-col items-center gap-2 self-stretch w-full text-center">
        <p className="font-other-caption font-semibold text-[#00c2c6] text-lg">
          THE RIGHT FIT FOR ANY SOFTWARE SOLUTION
        </p>
        <p className="font-bold text-coolgray-90 text-4xl">
          Designing And Building Platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 w-full px-16">
        <div className="flex flex-col items-center gap-4 p-4 bg-[#f8f9fb] rounded-lg">
          <img
            className="h-[213px] object-cover"
            alt="Application design"
            src="https://c.animaapp.com/rDitUAdQ/img/application-design-and-development-preview-1@2x.png"
          />
          <div className="font-bold text-[#21272a] text-xl text-center">
            Mobile Apps for Growth
          </div>
          <p className="text-[#21272acc] text-base text-center">
            We build intuitive, scalable mobile apps for iOS and Android that
            focus on user engagement and performance.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 bg-[#f8f9fb] rounded-lg">
          <img
            className=" h-[206px] object-cover"
            alt="Web design and"
            src="https://c.animaapp.com/rDitUAdQ/img/web-design-and-development-preview-1@2x.png"
          />
          <div className="font-bold text-[#21272a] text-xl text-center">
            High Performance Web Apps
          </div>
          <p className="text-[#21272acc] text-base text-center">
            Our web apps deliver seamless experiences across all devices.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 bg-[#f8f9fb] rounded-lg">
          <img
            className=" h-[207px] object-cover"
            alt="Untitled design"
            src="https://c.animaapp.com/rDitUAdQ/img/untitled-design--1--1@2x.png"
          />
          <div className="font-bold text-[#21272a] text-xl text-center">
            Interactive Dashboards
          </div>
          <p className="text-[#21272acc] text-base text-center">
            Make smarter decisions with custom dashboards that track your key
            metrics.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 bg-[#f8f9fb] rounded-lg">
          <img
            className="h-[220px] object-cover"
            alt="Custom software"
            src="https://c.animaapp.com/rDitUAdQ/img/custom-software-development-preview-1@2x.png"
          />
          <div className="font-bold text-[#21272a] text-xl text-center">
            Custom Tailored Solutions
          </div>
          <p className="text-[#21272acc] text-base text-center">
            We create custom software solutions for unique business needs.
          </p>
        </div>
      </div>
      <a
				href="https://calendar.app.google/9RQZmAHjNjV51Jyz9"
				target="_blank"
				rel="noopener noreferrer"
				className="all-[unset] box-border inline-flex h-14 items-center justify-center bg-[#00c2c6] text-white rounded-lg hover:bg-gfc-primary-100 hover:text-black"
			>
				<button className="all-[unset] box-border inline-flex h-14 items-center justify-center p-4 ">
					<div className="inline-flex items-center justify-center gap-2.5 px-4 flex-[0_0_auto] font-bold">
						Start Building
					</div>
				</button>
			</a>

    </section>
  );
}

