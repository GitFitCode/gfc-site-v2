import { navItems, socialLinks } from "./footer";
import logo from "../../images/logo-long.png";

export const Footer = () => {
  return (
    <footer className="container border-t border-gray-200 bg-white">
      <div className="px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          {/* <div className="font-extrabold text-2xl ">Angels Group</div> */}
          <img src={logo} alt="logo" className="w-40" />
          <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="uppercase text-xs tracking-widest font-bold text-black hover:text-gray-600 transition-colors"
                // onClick={(e) => {
                //   e.preventDefault();
                //   const element = document.querySelector(item.href);
                //   if (element) {
                //     element.scrollIntoView({ behavior: "smooth" });
                //   }
                // }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col md:flex-row-reverse md:justify-between items-center gap-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ name, Icon, href }) => (
              <a
                href={href}
                key={name}
                className="transition-transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <div className="w-10 h-10 rounded-full bg-gfc-accent hover:bg-gray-800 inline-flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GitFitCode, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// import {
//   FaYoutube,
//   FaFacebook,
//   FaTwitter,
//   FaTiktok,
//   FaLinkedin,
// } from "react-icons/fa";
// import logo from "../../images/logo-long.png";
// import { Mail } from "lucide-react";

// const footerColumns = [
//   {
//     title: "Solutions",
//     links: ["Marketing", "Analytics", "Commerce", "Data,", "Cloud"],
//   },
//   {
//     title: "Support",
//     links: ["Pricing", "Documentation", "Guides", "API", "Status"],
//   },
//   {
//     title: "Company",
//     links: ["About", "Blog", "Jobs", "Partners", "Careers"],
//   },
// ];

// const socialLinks = [
//   {
//     icon: FaYoutube,
//     href: "https://www.youtube.com/channel/UCUSEpzBu80ePCy-q9wpc9Ag",
//     label: "YouTube",
//   },
//   {
//     icon: FaFacebook,
//     href: "https://www.facebook.com/profile.php?id=61566150429103",
//     label: "Facebook",
//   },
//   {
//     icon: FaTwitter,
//     href: "https://x.com/GitFitCode",
//     label: "Twitter",
//   },
//   {
//     icon: FaLinkedin,
//     href: "https://www.linkedin.com/company/gitfitcode-llc/?viewAsMember=true",
//     label: "LinkedIn",
//   },
//   {
//     icon: FaTiktok,
//     href: "https://www.tiktok.com/@gitfitcode?lang=en",
//     label: "LinkedIn",
//   },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-white  pt-16 pb-12 w-full">
//       <div className="px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t-2 border-gray-200">
//           {footerColumns.map((column, index) => (
//             <div key={index} className="mt-10">
//               <h3 className="text-gray-900 font-semibold mb-4">
//                 {column.title}
//               </h3>
//               <ul className="space-y-3">
//                 {column.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <a
//                       href="/"
//                       className="text-gray-600 hover:text-green-500"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Join Us */}
//           <div className="mt-10">
//             <h3 className="text-gray-900 font-semibold mb-4">Join Us</h3>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => {
//                 const Icon = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.href}
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                     aria-label={social.label}
//                   >
//                     <Icon size={22} />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 pt-8 border-t border-gray-200">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="flex flex-col items-start space-y-2">
//               <div className="flex items-center space-x-2 w-40">
//                 <img src={logo} alt="logo" />
//               </div>
//               <div className="text-gray-500 text-sm ">
//                 GitFitCode &copy; 2024. All rights reserved.
//               </div>
//             </div>

//             <div className="w-full md:w-auto">
//               <div className="flex items-center justify-end">
//                 <div className="flex items-center justify-end">
//                   <button className="px-6 py-4 bg-[#00C3C7] text-white rounded-l-xl hover:bg-cyan-600 transition-colors whitespace-nowrap">
//                     Get Started
//                   </button>
//                   <div className="relative flex-grow">
//                     <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                       <Mail className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="email"
//                       placeholder="Enter your email to get the latest news..."
//                       className="w-full md:w-[24rem] pl-10 pr-4 py-4 border border-gray-300 rounded-r outline-none "
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
