import Session from './Session';
import obtenir from '../wp-rest-api';

import {useState, useEffect} from 'react';

export default function ListeCours(cours, setCours) {
    return(
        <ul className="ListeCours">
            <h1 className="ListeCours__titre">Cours</h1>
        </ul>
    )
}