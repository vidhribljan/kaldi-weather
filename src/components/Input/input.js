import styles from './input.module.scss';

const Input = ({
    onSearch,
    error,
    searchValue,
    ref,
    onKeyDown
}) => {
    return (
        <div className={`${styles.searchInput} ${error && styles.searchError}`}>
            <input
                type="text"
                ref={ref}
                onKeyDown={onKeyDown}
                onChange={(e) => onSearch(e)}
                value={searchValue}
            />
            {error && <small className={styles.inputError}>This is a required field!</small>}
        </div>
    )
}

export default Input;