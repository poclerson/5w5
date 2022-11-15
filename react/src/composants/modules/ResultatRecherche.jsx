import './ResultatRecherche.scss';

import {Link, useLocation} from 'react-router-dom';

export default function ResultatRecherche({resultat, surClic, ouvrirItem, article}) {
    return (
        <li className="ResultatRecherche">
            {article != null &&
            
            <Link 
                className="lien" 
                to={article.type} 
                state={{
                    recherche: true,
                    article: article
                }}
                onClick={surClic}
            >
                <h6 className="titre">{resultat.title}</h6>
            </Link>}
        </li>
    )
}
