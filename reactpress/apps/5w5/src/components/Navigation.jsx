import { useState } from 'react';
import obtenirArticles from '../obtenirArticles';
import Chargement from './Chargement';
import NavItem from './NavItem';
import {useEffect} from 'react';

export default function Navigation() {
    // const [typeArticles, setTypeArticles] = useState(null);

    // useEffect(() => {
    //     obtenirArticles('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/').then(
    //         reponse => setTypeArticles(Object.values(reponse.routes).filter(route =>
    //             route._links))
    //     )
    // })

    const [typeArticles, setTypeArticles] = useState([
        'enseignants',
        'cours'
    ]);
    

    return(
        typeArticles != null ?
        <ul className="Navigation">
            {/* {typeArticles.map(article => 
                <NavItem key={article.id} article={article}/>
            )} */}
        </ul>
        :
        <Chargement />
    )
}