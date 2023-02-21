import styles from './button.module.scss';

const Button = ({ handleClick }) => {
    return (
        <button className={styles.btn} onClick={() => handleClick()}>Search</button>
    )
}

export default Button;