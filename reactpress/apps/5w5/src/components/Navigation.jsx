import { useState } from 'react';
import chargerArticles from '../chargerArticles';
import Chargement from './Chargement';
import NavItem from './NavItem';
import {useEffect} from 'react';

export default function Navigation() {
    const [typeArticles, setTypeArticles] = useState(null);

    // useEffect(() => {
    //     chargerArticles('http://localhost:8888/5w5/wordpress/wp-json/wp/v2').then(
    //         reponse => setTypeArticles(reponse)
    //     )
    // })

    console.log(typeArticles);

    return(
        // routes == null ?
        // <ul className="Navigation">
        //     {/* {articles.map(article => 
        //         <NavItem article={article}/>
        //     )} */}
        // </ul>
        // :
        // console.log(routes)
        <ul className="Navigation"></ul>
    )
}