import './Navigation.scss';

import { Link } from 'react-router-dom';
// import {QueryMenu} from 'wordpress-query-menu';

export default function Navigation({pages, gererClic}) {
    return(
        <ul className="Navigation">
            {pages.reverse().map(page => {
                return <li className="item-nav" key={"nav" + page.pageSlug}>
                    <h6 className="titre-page">
                        <Link className="lien-page" to={page.slug} onClick={gererClic} >{page.title}</Link>  
                    </h6>
                </li>
                
            }
            )}
        </ul>
    )
}