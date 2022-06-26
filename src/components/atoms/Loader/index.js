import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles["loader"]}>
      <img
        className={styles["spinner"]}
        alt={"Loading..."}
        src="https://img.icons8.com/color/48/000000/iphone-spinner--v2.png"
      />
    </div>
  )
}