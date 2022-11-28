import './BoutonBurger.scss';
import Icone from './Icone';

export default function BoutonBurger({gererClic, ouvert}) {
    /**
     * gererClic est un callback définit dans le composant utilisant le BoutonBurger 
     * qui change l'état d'ouverture d'une fenêtre, par exemple
     */ 
    return (
        <button className="BoutonBurger" onClick={gererClic}>
            {
                ouvert == 'true' ?
                    <Icone type={'fermer'} /> :
                    <Icone type={'menu'} />
            }
        </button>
    )
}