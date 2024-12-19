import styles from './Die.module.css';

export default function Die(props) {  
    return (
        <button className={styles.dice}>{props.value}</button>
    )
}