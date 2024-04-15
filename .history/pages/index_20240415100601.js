import styles from "@/styles/Home.module.css";
import VerticalChart from "@/components/VerticalChart/insdex";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <VerticalChart />
      </main>
    </>
  );
}
