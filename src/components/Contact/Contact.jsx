import { useEffect } from "react";
import gsap from "gsap";
import { BsFileEarmarkPdf } from "react-icons/bs";

import {
  AiFillCodepenCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Contact = () => {
  useEffect(() => {
    const textContainer = document.querySelector(".text");
    const heading = textContainer.children[0];
    const contentP = textContainer.children[1];
    const contentBtn = textContainer.children[2];

    gsap.delayedCall(1, () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#contact-section",
            start: "top 10%",
            end: "top top",
            toggleActions: "play none resume pause",
          },
        })
        .from(heading, {
          duration: 1.2,
          x: -100,
          opacity: 0,
          ease: "power2.out",
        })
        .from(
          contentP,
          {
            duration: 1.2,
            y: 20,
            opacity: 0,
            ease: "power2.out",
          },

          0.4
        )
        .from(
          contentBtn,
          {
            duration: 1.2,
            opacity: 0,
            y: 20,
            ease: "power2.out",
          },
          0.8
        );
    });
  });

  return (
    <div
      id="contact-section"
      className="h-screen w-full pt-16 sm:pt-40 pb:10 xl:px-44 lg:px-36 md:px-32 sm:px-24 vvs:px-12 px-10 flex justify-between flex-col">
      <div className="text">
        <h1 className="text-white font-Glimer-Heavy font-extrabold vvs:text-[3.1rem] sm:text-[3rem] md:text-[3.4rem] lg:text-[4.9rem] xl:text-[6.1rem] 1/2xl:text-[6.2rem] 2xl:text-[8rem]  text-[2.9rem] leading-[3.5rem] sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[6.5rem] 2xl:leading-[7rem]  cursor-default">
          Interested ?<span className="block">Let's Get In Touch !</span>
        </h1>

        <p className="text-white/50  cursor-default font-Glimer-Light sm:mt-10 mt-8 xl:text-xl xl:max-w-2xl text-base sm:text-lg  1/2xl:text-2xl 1/2xl:max-w-4xl 2xl:text-3xl 2xl:max-w-5xl leading-6">
          Feel free to message me or send me a connection request on{" "}
          <a
            href="https://www.linkedin.com/in/benstoica/"
            target="_blank"
            className="text-white font-Glimer-Medium"
            rel="noreferrer">
            Linkedin
          </a>{" "}
          ! You can check out some of my work on{" "}
          <a
            href="https://github.com/benstoica"
            target="_blank"
            className="text-white font-Glimer-Medium"
            rel="noreferrer">
            GitHub{" "}
          </a>
          or on{" "}
          <a
            href="https://codepen.io/bensto"
            target="_blank"
            className="text-white font-Glimer-Medium"
            rel="noreferrer">
            CodePen.
          </a>{" "}
          If you have any questions, concerns, comments, or just want to chat
          email me at{" "}
          <a
            href="mailto:bennystoica@gmail.com"
            className="text-white font-Glimer-Medium">
            bennystoica@gmail.com
          </a>
          .
        </p>

        <a href="https://github.com/benstoica/benstoica-resume/raw/main/BenStoica-Resume.pdf">
          <button
            id="download-btn"
            className="text-white rounded-full lg:w-fit hover:bg-[#240658] transition duration-500 ease-in-out font-Glimer-Bold font-medium border-[1px] focus:outline-none flex items-center justify-center border-white/50 py-3 px-6 text-lg xl:text-xl 2xl:text-2xl my-10 w-full">
            <BsFileEarmarkPdf className="mr-2" /> Download Resume
          </button>
        </a>
      </div>

      <div className="flex flex-col py-2 mb-5 w-full space-y-6 items-center justify-center">
        <div className="divide-x divide-solid divide-white/50 grid grid-cols-3 w-full">
          <a
            href="https://codepen.io/bensto"
            target="_blank"
            className="flex items-center justify-center flex-col text-lg text-white"
            rel="noreferrer">
            <AiFillCodepenCircle className="social-icon h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
          </a>
          <a
            href="https://github.com/benstoica"
            target="_blank"
            className="flex items-center justify-center flex-col text-lg text-white"
            rel="noreferrer">
            <AiFillGithub className="social-icon h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/benstoica/"
            target="_blank"
            className="flex items-center justify-center flex-col text-lg text-white"
            rel="noreferrer">
            <AiFillLinkedin className="social-icon h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
