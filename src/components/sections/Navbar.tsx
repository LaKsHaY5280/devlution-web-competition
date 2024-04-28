import { navlinks } from "@/constants";

const Navbar = () => {
  return (
    <div className=" bg-orange-300 flex justify-between items-center p-10 text-xl">
      <div>Devlution</div>
      <div className=" flex justify-center items-center gap-10">
        {navlinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
