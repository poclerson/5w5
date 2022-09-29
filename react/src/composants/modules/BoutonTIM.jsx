import './BoutonTIM.scss';

export default function BoutonTIM({gererClic}) {
    /**
     * gererClic est un callback définit dans le composant utilisant le BoutonTIM 
     * qui change l'état d'ouverture d'une fenêtre, par exemple
     */ 
    return (
        <button className="BoutonTIM" onClick={gererClic}>
            <img src="" alt="Logo du TIM"/>
        </button>
    )
}