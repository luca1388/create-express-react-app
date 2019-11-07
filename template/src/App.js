import React, { useEffect, useState } from 'react';
import css from './App.css';
import myImage from '../public/icon.png';

const App = props => {
    const [ response, setResponse ] = useState('');
    useEffect( () => {
        fetch('/api/hello').then(response => response.json()).then(data => {
            setResponse(data.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <h1 className={css.App}>Hello { response }</h1>
            <img src={myImage} />
        </div>
    );
};

export default App;