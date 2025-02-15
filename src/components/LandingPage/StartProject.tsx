import { useNavigate } from "react-router";

export default function StartProject() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <section
      id="start-project-section"
      className="flex flex-col items-center gap-[60px] my-[5rem] bg-gradient-to-r from-gfc-accent to-gray-900 overflow-hidden w-full"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-8 sm:py-12 lg:py-14 flex flex-col items-center">
          {/* Left Content */}
          <div className="relative z-10 w-3/4 text-white text-center px-4 sm:px-6 space-y-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ready To Start Your <br />
              Project?
            </h1>
            <p className="mt-4 text-lg md:text-1xl text-white/70 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Contact us today
              for a free consultation.
            </p>
            <button
              onClick={handleButtonClick}
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gfc-light text-gfc-accent rounded-lg font-semibold flex items-center gap-2 hover:bg-gfc-primary hover:text-white transition-colors group mx-auto "
            >
              <span>Contact Us Now</span>
            </button>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="relative lg:w-1/2 mt-12 lg:mt-0 w-full max-w-2xl mx-auto px-4 sm:px-6 cursor-pointer">
            <div className="relative">
              {/* Laptop Mockup */}
              {/* <div className="relative z-20 transform hover:scale-105 transition-transform duration-300 top-[5rem] md:top-[7rem]">
                <img
                  src={EmpiricLanding}
                  alt="Dashboard Preview"
                  className="rounded-lg  w-full  z-20"
                  loading="lazy"
                />
              </div> */}

              {/* Phone Mockup */}
              {/* <div className="absolute -right-6 md:-left-[-13rem] bottom-0 md:-bottom-[10rem] z-30 w-48 sm:w-64 md:w-[40rem] transform hover:scale-105 transition-transform duration-300">
                <img
                  src={EmpiricPhone}
                  alt="Mobile App Preview"
                  className="rounded-lg w-full object-contain"
                  loading="lazy"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
