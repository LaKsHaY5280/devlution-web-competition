import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const Themecard = ({
  theme,
}: {
  theme: {
    name: string;
    js: string;
    react: string;
    live: string;
  };
}) => {
  return (
    <div className=" bg-blue-300 flex flex-col justify-center items-center ">
      <div className="bg-amber-400 px-10 py-5 ">{theme.name}</div>
      <div className=" flex flex-col justify-center items-center gap-2 p-5">
        <div className=" w-full flex justify-between items-center gap-2">
          <span>JS</span>
          <Link href={theme.js} target="_blank">
            <Github />
          </Link>
        </div>
        <div className=" w-full flex justify-between items-center gap-2">
          <span>React</span>
          <Link href={theme.react} target="_blank">
            <Github />
          </Link>
        </div>
        <div className=" w-full flex justify-between items-center gap-2">
          <span>Live</span>
          <Link href={theme.live} target="_blank">
            <ExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Themecard;
