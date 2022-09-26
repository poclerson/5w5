import { Link } from 'react-router-dom';

export default function Navigation({routes}) {
    return(
        <ul className="Navigation">
            {routes.map(route => 
                <Link key={route.nom} to={route.chemin} >{route.nom}</Link>    
            )}
        </ul>
    )
}