import './ResultatRecherche.scss';

import {Link} from 'react-router-dom';

export default function ResultatRecherche({resultat, surClic, ouvrirItem, article}) {
    return (
        <li className="ResultatRecherche">
            {article != null ?
            
            <Link className="lien" to={article.type} onClick={() => {ouvrirItem(article.article); surClic()}} >
                <h6 className="titre">{resultat.title}</h6>
            </Link>
            : <> </>
            }
        </li>
    )
}
