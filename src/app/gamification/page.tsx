"use client";
import { blade, bladerev, logo, omen, rail, skye } from "@/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const [scrollY, setScrollY] = useState(0); // State to store scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" relative overflow-hidden">
      <header className=" absolute top-0 left-0 w-full px-24 py-8 flex justify-center lg:justify-between items-center z-30 ">
        <div className=" text-3xl text-white cursor-pointer">
          <Image className=" w-20" src={logo} alt="" />
        </div>
        <nav className=" max-lg:hidden">
          <a
            href="#"
            className=" group active relative text-white font-semibold ml-5 px-4 py-2 transition-[0.5s] hover:text-[#333]"
          >
            Home
            <span className=" absolute top-0 left-0 w-full h-full bg-white rounded-3xl -z-10 scale-0 opacity-0 transition-[0.5s] group-hover:opacity-100 group-hover:scale-100 "></span>
          </a>
          <a
            href="#"
            className=" group active relative text-white font-semibold ml-5 px-4 py-2 transition-[0.5s] hover:text-[#333]"
          >
            About
            <span className=" absolute top-0 left-0 w-full h-full bg-white rounded-3xl -z-10 scale-0 opacity-0 transition-[0.5s] group-hover:opacity-100 group-hover:scale-100 "></span>
          </a>
          <a
            href="#"
            className=" group active relative text-white font-semibold ml-5 px-4 py-2 transition-[0.5s] hover:text-[#333]"
          >
            Contact
            <span className=" absolute top-0 left-0 w-full h-full bg-white rounded-3xl -z-10 scale-0 opacity-0 transition-[0.5s] group-hover:opacity-100 group-hover:scale-100 "></span>
          </a>
        </nav>
      </header>
      <section className=" relative h-screen flex justify-center items-center bg-[url('/bgG.jpg')] bg-cover bg-fixed bg-center">
        <h2
          className=" absolute max-lg:top-64 text-3xl lg:text-7xl text-[#ff4655] font-bold"
          style={{ transform: `translateY(${scrollY * 2.5}px)` }}
        >
          GAMIFICATION
        </h2>
        <Image
          className=" absolute bottom-0 w-10/12 lg:w-5/12 left-24"
          src={bladerev}
          style={{ transform: `translateX(${-scrollY * 1.5}px)` }}
          alt=""
        />
        <Image
          className=" absolute bottom-0 w-10/12 lg:w-5/12 right-24"
          src={blade}
          style={{ transform: `translateX(${scrollY * 1.5}px)` }}
          alt=""
        />
        <Image
          className=" max-lg:hidden bottom-0 w-4/12 h-2/4 lg:h-3/4 left-0 fixed"
          src={omen}
          style={{ transform: `translateX(${Math.min(scrollY * 0.5, 800)}px)` }}
          alt=""
        />
        <Image
          className=" max-lg:hidden bottom-0 w-3/12 h-2/4 lg:h-3/4 right-10 fixed"
          src={skye}
          style={{
            transform: `translateX(${Math.max(scrollY * -0.5, -800)}px)`,
          }}
          alt=""
        />
        <Image
          className=" lg:hidden bottom-0 w-6/12 lg:w-4/12 h-2/4 lg:h-3/4 left-0 fixed"
          src={omen}
          style={{ transform: `translateX(${Math.min(scrollY * 0.5, 200)}px)` }}
          alt=""
        />
        <Image
          className=" lg:hidden bottom-0 w-6/12 lg:w-3/12 h-2/4 lg:h-3/4 right-10 fixed"
          src={skye}
          style={{
            transform: `translateX(${Math.max(scrollY * -0.5, -200)}px)`,
          }}
          alt=""
        />
        <Image
          className=" absolute bottom-0 w-full lg:h-1/6"
          src={rail}
          alt=""
        />
      </section>
      <section className=" relative h-screen flex flex-col justify-center items-center bg-[url('/bg2G.jpg')] bg-cover bg-fixed bg-center">
        <h2 className=" text-5xl p-5 text-[#ff4655] font-semibold">Are you interested</h2>
        <p className=" text-xl p-5 text-white">
          just click here to participate, who know you might be the lucky winner
        </p>
        <button className=" bg-[#ff4655] rounded-3xl text-white px-5 py-2.5 transition-[0.5s] hover:bg-[#333]">
          Register Now
        </button>
      </section>
      <section className=" -z-40 relative h-screen flex justify-center items-center bg-[url('/bgG.jpg')] bg-cover bg-fixed bg-center">
        <div className=" w-full flex justify-between items-center absolute max-lg:top-10 text-4xl text-center text-[#ff4655] p-10">
          <div className=" flex flex-col justify-center lg:items-start gap-5">
            <h2 className=" lg:w-3/12 text-center">Skye</h2>
            <p className=" lg:w-3/12 text-sm lg:text-xl text-white">
              Hailing from Australia, Skye and her band of beasts trail-blaze
              the way through hostile territory. With her creations hampering
              the enemy, and her power to heal others, the team is strongest and
              safest by Skye's side.
            </p>
          </div>
          <div className=" flex flex-col justify-center lg:items-end gap-5">
            <h2 className=" lg:w-3/12 text-center">Omen</h2>
            <p className=" lg:w-3/12 text-sm lg:text-xl text-white">
              A phantom of a memory, Omen hunts in the shadows. He renders
              enemies blind, teleports across the field, then lets paranoia take
              hold as his foe scrambles to learn where he might strike next.
            </p>
          </div>
        </div>
      </section>
      <Image
        className=" z-60 absolute bottom-0 w-full h-[4vh] lg:h-[15vh]"
        src={rail}
        alt=""
      />
    </div>
  );
};

export default page;
