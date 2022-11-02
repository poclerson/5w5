import {useState, useEffect} from 'react';
import * as boites from '../boites';

/**
 * 
 * @param {Object} dependance données obtenue dans REST 
 * @param {bool} ouvrirPremierAuChargement 
 * @returns {Object} actions possibles d'effectuer et états
 */
export default function useOuvertures(dependance, ouvrirPremierAuChargement) {
    const [ouvertures, setOuvertures] = useState(null);
    const [ouvertureListe, setOuvertureListe] = useState('ouvert');

    useEffect(() => {
        if (dependance != null) {
            ouvrirPremierAuChargement ? 
                setOuvertures(boites.ouvrir(0, dependance.map(() => 'ferme'))) :
                setOuvertures(dependance.map(() => 'ferme'))
        }
    }, [dependance])

    useEffect(() => {
        if (ouvertures) {
            // S'il y a une boite ouverte, on doit mettre l'état d'ouverture de la liste à fermé
            ouvertures.includes('ouvert') ?

            setOuvertureListe('ferme') : setOuvertureListe('ouvert');

                return {
                    ouvertures: ouvertures,
                    setOuvertures: setOuvertures,
                    ouvertureListe: ouvertureListe,
                    setOuvertureListe: setOuvertureListe
                }
        }
    }, [ouvertures])
}