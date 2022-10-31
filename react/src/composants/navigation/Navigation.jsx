import './Navigation.scss';

import { Link } from 'react-router-dom';

export default function Navigation({pages, gererClic, ouverture}) {
    return(
        <ul className={"Navigation " + ouverture}>
            {pages.map(page => {
                return <li className="item-nav" key={"nav" + page.pageSlug}>
                    <h6 className="titre-page">
                        <Link className="lien-page" to={page.pageSlug} onClick={gererClic}>{page.title}</Link>  
                    </h6>
                </li>
            })}
        </ul>
    )
}