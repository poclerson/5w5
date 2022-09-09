export default function Navitem({article}) {

    return (
        <li className="NavItem">
            <a href={"http://localhost:3000/" + article}>{article}</a>
        </li>
    )
}