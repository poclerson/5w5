import './BoutonBurger.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function BoutonBurger({gererClic}) {
    /**
     * gererClic est un callback définit dans le composant utilisant le BoutonBurger 
     * qui change l'état d'ouverture d'une fenêtre, par exemple
     */ 
    return (
        <button className="BoutonBurger" onClick={gererClic}>
            <MenuIcon className="Icone" />
            <CloseIcon className="Fermeture" />
        </button>
    )
}