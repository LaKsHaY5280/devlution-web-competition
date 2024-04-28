import { themes } from "@/constants";
import Techcard from "../elements/Techcard";
import Themecard from "../elements/Themecard";

const Themes = () => {
  return (
    <div className=" bg-purple-300 flex justify-between items-center gap-10 p-10">
      <Techcard allowed={true} />
      <div className=" flex justify-center items-center gap-10 flex-wrap">
        {themes.map((theme, index) => (
          <Themecard key={index} theme={theme} />
        ))}
      </div>
      <Techcard allowed={false} />
    </div>
  );
};

export default Themes;
