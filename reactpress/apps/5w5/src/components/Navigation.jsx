import { useState } from 'react';
import useFetch from '../useFetch';
import Chargement from './Chargement';
import NavItem from './NavItem';
import {useEffect} from 'react';

export default function Navigation() {
    // const [articles, setArticles] = useState([]);

    // const routes = useFetch('http://localhost:8888/5w5/wordpress/wp-json/wp/v2').then(
    //     articles => setArticles(articles)
    // )
    // .catch(
    //     err => console.log(err)
    // )

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