import styles from "./page.module.css";
import { Location } from "@/components/location/location";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>;
      <Location />
    </div>
  );
}
