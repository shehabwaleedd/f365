import Landing from "@/components/landing/Landing";
import styles from "./page.module.scss";
import Brief from "@/components/brief/Brief";
import Marquee from "@/components/marquee/Marquee";

export default function Home() {
  return (
    <main>
      <Landing />
      <Marquee />
      <Brief />
    </main>
  );
}
