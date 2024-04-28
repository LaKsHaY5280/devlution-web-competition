"use client";
import {
  peepL,
  peepR,
  butterfly,
  sword,
  ironman,
  batman,
  rail,
} from "@/assets";
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
      <section className=" relative h-screen flex justify-center items-center bg-[url('/bgA.jpg')] bg-cover bg-fixed bg-top">
        <h2
          className=" absolute max-lg:top-64 text-3xl lg:text-7xl text-red-600 font-bold "
          style={{ transform: `translateY(${scrollY * 2.5}px)` }}
        >
          ANIMIFICATION
        </h2>
        <Image
          className=" absolute top-0 w-[25%] lg:w-[10%] left-0"
          src={peepL}
          style={{ transform: `translateX(${-scrollY * 1.5}px)` }}
          alt=""
        />
        <Image
          className=" absolute top-0 w-[25%] lg:w-[10%] right-0"
          src={peepR}
          style={{ transform: `translateX(${scrollY * 1.5}px)` }}
          alt=""
        />
        <Image
          className=" max-lg:hidden bottom-0 w-4/12 h-2/4 lg:h-3/4 left-0 fixed"
          src={butterfly}
          style={{ transform: `translateX(${Math.min(scrollY * 0.5, 800)}px)` }}
          alt=""
        />
        <Image
          className=" max-lg:hidden bottom-0 w-3/12 h-2/4 lg:h-3/4 right-10 fixed"
          src={sword}
          style={{
            transform: `translateX(${Math.max(scrollY * -0.5, -800)}px)`,
          }}
          alt=""
        />
        <Image
          className=" lg:hidden bottom-0 w-6/12 lg:w-4/12 h-2/4 lg:h-3/4 left-0 fixed"
          src={butterfly}
          style={{ transform: `translateX(${Math.min(scrollY * 0.5, 200)}px)` }}
          alt=""
        />
        <Image
          className=" lg:hidden bottom-0 w-6/12 lg:w-3/12 h-2/4 lg:h-3/4 right-10 fixed"
          src={sword}
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
      <section className=" relative h-screen flex flex-col justify-start lg:justify-center items-center bg-[url('/bg2A.jpg')] bg-cover bg-fixed bg-center p-10">
        <h2 className=" text-5xl p-5 text-blue-700 font-semibold">
          Are you interested
        </h2>
        <p className=" text-xl p-5 text-white">
          just click here to participate, who know you might be the lucky winner
        </p>
        <button className=" bg-red-700 rounded-3xl text-white px-5 py-2.5 transition-[0.5s] hover:bg-[#333]">
          Register Now
        </button>
        <Image
          className=" absolute w-2/12 h-2/4 lg:h-3/4 left-5 lg:left-28 bottom-10"
          src={ironman}
          alt=""
        />
        <Image
          className=" absolute w-3/12 h-2/4 lg:h-3/4 right-5 lg:right-16 bottom-10"
          src={batman}
          alt=""
        />
      </section>
      <section className=" -z-40 relative h-screen flex justify-center items-center bg-[url('/bgA.jpg')] bg-cover bg-fixed bg-center">
        <div className=" w-full flex justify-between items-center absolute max-lg:top-10 text-4xl text-center text-[#ff4655] p-10">
          <div className=" flex flex-col justify-center lg:items-start gap-5">
            <h2 className=" lg:w-3/12 text-center font-semibold text-rose-600 ">
              Naruto
            </h2>
            <p className=" lg:w-3/12 text-sm lg:text-xl text-white">
              Naruto Uzumaki is a young boy from the Hidden Leaf Village and the
              biggest problem child at the ninja academy. He causes mischief
              every day and is constantly being scolded by his teacher and vows
              to one day become the No. 1 ninja.
            </p>
          </div>
          <div className=" flex flex-col justify-center lg:items-end gap-5">
            <h2 className=" lg:w-3/12 text-center font-semibold text-rose-600 ">
              Goku
            </h2>
            <p className=" lg:w-3/12 text-sm lg:text-xl text-white">
              Goku is the main protagonist and hero of the Dragon Ball manga
              series and animated television series created by Akira Toriyama.
              He is one of the survivors of the extinct Saiyan race. When he
              arrived he was a violent kid, due to his warrior nature.
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
