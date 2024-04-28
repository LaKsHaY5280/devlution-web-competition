import Navbar from "@/components/sections/Navbar";
import Rules from "@/components/sections/Rules";
import Themes from "@/components/sections/Themes";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Themes />
      <Rules />
    </main>
  );
}
