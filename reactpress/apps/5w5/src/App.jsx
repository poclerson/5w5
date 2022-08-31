import logo from './logo.svg';
import './App.css';
import {React, useEffect, useState} from 'react';
import useFetch from './useFetch';

function App() {

    const tests = useFetch('http://localhost:8888/5w5/wordpress/index.php/wp-json/wp/v2/enseignant');
    console.log(tests);

    return (
        <div className="App">
            {
                tests && tests.map(
                    (test, index) => <div key={index}>{test.acf.nom}</div>
                )
            }
        </div>
    );
}

export default App;
