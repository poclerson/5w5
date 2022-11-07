import './ResultatRecherche.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext, useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

export default function ResultatRecherche({resultat}) {
    const [typeArticle, setTypeArticle] = useState(null)
    const {cours, enseignants, projets} = useContext(ContexteDonneesSite);

    function trouverTypeArticle() {
        const articles = [...Object.values(cours), ...Object.values(enseignants), ...Object.values(projets)];

        return articles.map((article, index) => {
            if (article.id == resultat.id) {
                if (index > Object.values(cours).length)
                    return 'cours';

                if (index > Object.values(enseignants).length)
                    return 'enseignants';

                if (index > Object.values(projets).length)
                    return 'projets';
            }
        }).filter(article => article != undefined)[0]
    }

    function ouvrirItem() {

    }

    useEffect(() => {
        if (cours != null) {
            setTypeArticle(trouverTypeArticle());
        }
    }, [cours])
    return (
        <li className="ResultatRecherche">
            <Link className="lien" to={typeArticle} >
                <h6 className="titre">{resultat.title}</h6>
            </Link>
        </li>
    )
}
