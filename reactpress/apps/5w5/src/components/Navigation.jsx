import { useState } from 'react';
import obtenir from '../wp-rest-api';
import Chargement from './Chargement';
import NavItem from './NavItem';
import {useEffect} from 'react';

export default function Navigation(pages) {


    return(
        // typeArticles != null ?
        <ul className="Navigation">
            {/* {typeArticles.map(article => 
                <NavItem key={article.id} article={article}/>
            )} */}
        </ul>
        // :
        // <Chargement />
    )
}