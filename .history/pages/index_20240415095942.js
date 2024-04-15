import styles from "@/styles/Home.module.css";
import VaerticalChart from "@/components/VerticalChart/insdex";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <VaerticalChart />
      </main>
    </>
  );
}
