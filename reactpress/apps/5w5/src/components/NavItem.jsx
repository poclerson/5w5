export default function Navitem({article}) {

    return (
        <li className="NavItem">
            <a href={"http://localhost:8888/5w5/wordpress/" + {article}}>{article}</a>
        </li>
    )
}