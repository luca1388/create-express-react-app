import React, { useEffect, useState } from 'react';
import css from './App.css';

const App = props => {
    const [ data, setData ] = useState('');
    useEffect( () => {
        fetch('/api/test').then(response => response.json()).then(data => {
            setData(data.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return <h1 className={css.App}>Hello { data }</h1>;
};

export default App;