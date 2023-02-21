import styles from './mainCard.module.scss';
import roundNumber from '../../../misc/misc';

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <span className={styles.text}>{data.name}</span>
            </div>
            <div className={styles.cardCenter}>
                <span className={styles.cardTemp}>{roundNumber(data.main.temp)}°C</span>
                <span className={styles.cardWeatherDesc}>{data.weather[0].main}</span>
            </div>
            <span>Feels like: {roundNumber(data.main.feels_like)}°C</span>

            <span>Temp min: {roundNumber(data.main.temp_min)}°C</span>
            <span>Temp max: {roundNumber(data.main.temp_max)}°C</span>
            <span>Humidity: {data?.main?.humidity}%</span>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='Weather icon' width={100} height={100} />
        </div>
    )
}

export default Card