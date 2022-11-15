import parse from 'html-react-parser';
import {useState, useEffect, useContext} from 'react';
import ContexteDonneesSite from '../ContexteDonneesSite';

/**
 * Prend automatiquement les éléments avec des classes d'une page de WP et crée un objet d'éléments avec
 * @param {String} id Identifiant de la page dans WP ou slug de l'url vers WP
 * @param {Boolean} obtenirAvecSlug Détermine si on devrait obtenir les éléments à partir du slug de la page WP ou non
 * @returns {Object} Éléments HTML de la page
 */
export default function useStructure(id, obtenirAvecSlug = false) {
    // Récupérer les pages
    const {pages} = useContext(ContexteDonneesSite);

    // États des éléments obtenus de WP sous forme de HTML
    const [elements, setElements] = useState({});

    // Récupère les éléments de la page spécifiée seulement
    function versElements() {
        return parse(
            pages.filter(
                page => page.id == id)[0].content).filter(
                    element => typeof element != 'string')
    }

    let html = {};

    useEffect(() => {
        if (pages != null) {
            if (obtenirAvecSlug) {
                id = pages.filter(page => page.slug == id)[0].id
            }

            // Ajouter et nommer les éléments à l'html
            versElements().forEach(
                element => {
                    if (element.props.className)
                        html[element.props.className.kebabVersCamel()] = element
                }
            )
            setElements(html)
        }
    }, [pages])
    return elements;
}

