import './ResultatRecherche.scss';

import {Link, useLocation, useNavigate} from 'react-router-dom';

export default function ResultatRecherche({resultat, surClic, article}) {
    const endroit = useLocation();
    const naviguer = useNavigate();

    const gestionClic = () => {
        // Si on recherche depuis la page où on se trouve, on doit rafraichir la page
        if (endroit.pathname.includes(article.type)) {
            naviguer(0);
        }
        surClic();
    }

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
                onClick={gestionClic}
            >
                <h6 className="titre">{resultat.title}</h6>
            </Link>}
        </li>
    )
}
