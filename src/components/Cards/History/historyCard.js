import styles from './historyCard.module.scss';
import roundNumber from '../../../misc/helpers';

const HistoryCard = ({
    data,
    handleClick
}) => {
    return (
        <div className={styles.card} onClick={() => handleClick()}>
            <div className={styles.cardData}>
                <span className={styles.cardTemp}>{roundNumber(data.main.temp)}°C</span>
                <span className={styles.cardCity}>{data.name}</span>
            </div>
            <div className={styles.cardBottomRow}>
                <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="Weather icon"
                    width={50}
                    height={50}
                />
            </div>
        </div>
    )
}

export default HistoryCard;