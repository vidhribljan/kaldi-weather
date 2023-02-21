import styles from './mainCard.module.scss';
import roundNumber from '../../../misc/helpers';

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <span className={styles.cityName}>{data.name}</span>
            </div>
            <div className={styles.cardCenter}>
                <span className={styles.cardTemp}>{roundNumber(data.main.temp)}°C</span>
                <span className={styles.cardWeatherDesc}>{data.weather[0].main}</span>
            </div>
            <div className={styles.cardRow}>
                <img
                    src="/icons/feels-like.svg"
                    alt="Feels like"
                    height={32}
                    width={32}
                />
                <span>Feels like: {roundNumber(data.main.feels_like)}°C</span>
            </div>
            <div className={styles.cardRow}>
                <img
                    src="/icons/thermometer-low.svg"
                    alt="Temp min"
                    height={32}
                    width={32} />
                <span>Temp min: {roundNumber(data.main.temp_min)}°C</span>
            </div>
            <div className={styles.cardRow}>
                <img
                    src="/icons/thermometer-high.svg"
                    alt="Temp max"
                    height={32}
                    width={32}
                />
                <span>Temp max: {roundNumber(data.main.temp_max)}°C</span>
            </div>
            <div className={styles.cardRow}>
                <img
                    src="/icons/humidity.svg"
                    alt="Humidity"
                    height={32}
                    width={32}
                />
                <span>Humidity: {data?.main?.humidity}%</span>
            </div>
            <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="Weather icon"
                width={100}
                height={100}
            />
        </div>
    )
}

export default Card;