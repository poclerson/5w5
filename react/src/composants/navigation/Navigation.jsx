import './Navigation.scss';

import { Link } from 'react-router-dom';

export default function Navigation({pages, surClic}) {
    return(
        <ul className="Navigation">
            {pages.map(page => {
                return <li className="item-nav" key={"nav" + page.pageSlug}>
                    <h6 className="titre-page">
                        <Link className="lien-page" to={page.pageSlug} onClick={surClic}>{page.title}</Link>  
                    </h6>
                </li>
            })}
        </ul>
    )
}