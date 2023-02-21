import React, { useState } from 'react';
import getData from '../misc/getData';
import Card from '../components/Cards/Main/mainCard';
import HistoryCard from '../components/Cards/History/historyCard'
import Input from '../components/Input/input';
import styles from './home.module.scss';
import Button from '../components/Button/button';

const Home = () => {
    const [data, setData] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [history, setHistory] = useState([]);
    const [errors, setErrors] = useState({
        inputError: false,
        emptyError: false,
    });

    //Handle on key down press when input is still in focus (search on enter)
    const handleEnterKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleGet();
        }
    }

    //Handle search input change
    const handleChange = (event) => {
        const value = event.target.value;
        setSearchInput(value);
        setErrors({ ...errors, emptyError: false })
    }

    //Handle tracking 5 previously successful searches (if city with id already exists in history it is not added)
    const handleHistoryTrack = (entry) => {
        let tempArray = history;

        //If city already exists in history array it won't be added
        if (tempArray.some((el) => el.id === entry.id)) {
            return;
        }

        //If history array already has 5 elements it will remove first element from array and add curent one
        if (tempArray.length === 5) {
            tempArray.shift();
            tempArray.push(entry);
        } else {
            tempArray.push(entry);
        }

        setHistory(tempArray);
    }

    //Handle get data based on search input
    const handleGet = () => {
        if (searchInput !== '') {
            getData(searchInput)
                .then((data) => {
                    //If data is succesfuly removed run set current, handle history, handle errors cleanup
                    if (data.cod !== '404') {
                        setData(data);
                        handleHistoryTrack(data);
                        errors.inputError && setErrors({ ...errors, inputError: false });
                    } else {
                        setErrors({ ...errors, inputError: true })
                    }
                }).catch((err) => {
                    console.log(err);
                })
        } else {
            setErrors({ ...errors, emptyError: true })
        }
    }

    //Handle on previous card click
    const handleChangeCurrent = (city) => {
        getData(city.name)
            .then((data) => {
                setData(data);
                setSearchInput(data.name);
                setErrors({ ...errors, emptyError: false })
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <span style={{ fontSize: '18px', fontWeight: '500' }}>Search for weather forecast</span>
                <div className={styles.navbarInputWrapper}>
                    <Input
                        onSearch={handleChange}
                        error={errors.emptyError}
                        onKeyDown={handleEnterKeyDown}
                        searchValue={searchInput}
                    />
                    <Button handleClick={handleGet} />
                </div>
            </div>
            <div className={styles.bodyWrapper}>
                <div className={styles.cardsWrapper}>
                    {!errors.inputError ?
                        data &&
                        <Card data={data} />
                        :
                        <span className={styles.cityError}>City not found!</span>
                    }
                    {history.length > 0 &&
                        <span>Previus searches</span>
                    }
                    {history.length > 0 &&
                        history?.map((city) =>
                            <HistoryCard
                                key={city.id}
                                data={city}
                                handleClick={() => handleChangeCurrent(city)}
                            />
                        )}
                </div>
            </div>
        </div>
    );
}

export default Home;
