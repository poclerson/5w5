import {useState} from 'react';

export default function useOuverture(donnees) {
    const [indexOuvert, setIndexOuvert] = useState(-1);
    console.log(indexOuvert)

    const gestionClicParent = () => {
        console.log("L")
        return indexOuvert != -1 ? "true" : "false"
    }

    const surClic = index => {
        setIndexOuvert(index);
    }

    const verifierOuverture = index => {
        return index == indexOuvert ? "true" : "false"
    }

    // Quand on clique sur le bouton suivant (ordinateur seulement)
    const surClicSuivant = () => {
        if (donnees != null) {
            if (indexOuvert + 1 == donnees.length) {
                setIndexOuvert(0);
                return;
            }
        }

        setIndexOuvert(indexOuvert + 1);
    }

    return {
        gestionClicParent: gestionClicParent,
        surClic: surClic,
        verifierOuverture: verifierOuverture,
        surClicSuivant: surClicSuivant,
    }
}