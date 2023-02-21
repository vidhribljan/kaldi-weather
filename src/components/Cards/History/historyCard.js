import styles from './historyCard.module.scss'
import roundNumber from '../../../misc/misc'

const HistoryCard = ({ data, handleClick }) => {
    return (
        <div className={styles.Card} onClick={() => handleClick()}>
            <div>
                <span className={styles.cardTemp}>{roundNumber(data.main.temp)}°C</span>
            </div>
            <div className={styles.cardBottomRow}>
                <span className={styles.cardCity}>{data.name}</span>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='Weather icon' width={50} height={50} />
            </div>
        </div>
    )
}

export default HistoryCard