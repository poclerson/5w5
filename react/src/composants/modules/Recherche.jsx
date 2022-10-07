import './Recherche.scss';

import * as wp from '../../wp-rest-api';
import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';

export default function Rechercher({routes}) { 
    const articles = wp.useObtenirMultipleTypes(
        routes.map(route => route.chemin)
    )

    // Saisie de l'utilisateur
    const [saisie, setSaisie] = useState('');

    // Liste des filtres utilisés pour la recherche
    const filtres = wp.useObtenir('/filtres');

    const [articlesRecherches, setArticlesRecherches] = useState([]);

    /**
     * @@@@@@@@@@@@@@@@@@@@@@@@@@ COMMENTAIRE POUR MOI
     * Créer un tableau de toutes les valeurs qui peuvent être recherchées, pour ensuite
     * filtrer celui-ci dans un useEffect qui aurait comme dépandances la saisie de l'utilisateur
     */
    const [valeursFiltrees, setValeursFiltrees] = useState([]);

    let gestionnaireSaisie = (e) => {
        if (articles != null) {
            setSaisie(e);
        }
    }

    useEffect(() => {
        if (articles && filtres != null) {

            // Obtenir les bons champs à filtrer
            articles.filter(article => {
    
                // Ne rien faire si la saisie est vide
                if (saisie == '') 
                    return article;
    
                else {
                    // Filtrer les champs d'ACF de chaque article pour ne garder que les champs nécessaires au tri
                    console.log(Object.entries(article.acf).map(champs => 
    
                        /**
                         * Le champs fait partie des filtres
                         * Chaque membre "champs" de chaque membre "article.acf" des articles est un tableau
                         * contenant en position 0 le champs traité
                         * et en position 1 sa valeur
                        */
                        filtres[0].acf.filtres.filter(filtre =>  {
                            if (filtre == champs[0]) {
                                console.log(champs[1])
                                return champs;
                            }
                        })
                    ))
                }
            })

            
        }
    }, [saisie])

    

    useEffect(() => {

    }, [saisie])
    
    /**
     * Filtre afin de ne garder que les champs d'article correspondant à la saisie de l'utilisateur
     * @param {string} valeurFiltree La valeur à filtrer. On vérifie si elle contient la saisie
     * @param {string} saisie Saisie de l'utilisateur dans la barre de recherche
     */
    function filtrer(valeurFiltree, saisie, articleCorrespondant) {
        if (valeurFiltree.includes(saisie)) {
            // setArticlesRecherches(articlesRecherches => [...articlesRecherches, articleCorrespondant]);
            return true;
        }

        return false;
    }

    

        // // Si le champs est un tableau, on doit le traiter différement et énumérer chaque valeur de celui-ci
        // if (Array.isArray(champs[1])) 
        //     champs[1].filter(membreChampsListe => 
        //         // filtrer(membreChampsListe.toString(), saisie, article)

        //     )
        // }

        // else {
        //     // filtrer(champs[1], saisie, article);
        // }

    // Appeler la fonction de recherche chaque fois qu'on écrit un caractère
    return(
        <div className="Recherche">
            <TextField
                placeholder="Recherche..."
                onChange={gestionnaireSaisie}
            />
            {/* {console.log(valeursFiltrees)} */}
            <ul className="Recherche__articles">
                
            </ul>
        </div>
    )
}