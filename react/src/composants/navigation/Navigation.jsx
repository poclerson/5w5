import './Navigation.scss';

import { Link } from 'react-router-dom';
// import {QueryMenu} from 'wordpress-query-menu';

export default function Navigation({routes}) {
    return(
        <ul className="Navigation">
            {/* <QueryMenu location={'primary'}/> */}
            {routes.map(route => {
                return <li className="item-nav" key={route.nom}>
                    <h6 className="titre-page">
                        {route.estRoute ?
                            <Link className="lien-page" key={route.nom} to={route.chemin} >{route.nom}</Link>  
                            :
                            route.composant
                        }  
                    </h6>
                </li>
                
            }
            )}
        </ul>
    )
}