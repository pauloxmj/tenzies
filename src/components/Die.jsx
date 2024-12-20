import styles from "./Die.module.css";

export default function Die({ value, isHeld, hold }) {
  const style = {
    backgroundColor: isHeld ? "#59E391" : "#FFFFFF",
  };

  return (
    <button 
    className={styles.dice} 
    style={style}
    onClick={hold}
    aria-label={`Die with value ${value}, 
    ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
}
