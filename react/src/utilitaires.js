export function capitaliserPremiereLettre(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function exclureSiContient(itemsAFiltrer, exclusions) {
    return itemsAFiltrer.map(item =>
        exclusions.filter(exclusion =>
            item.includes(exclusion) 
        )
    )
}

export function inserer(string, index, valeur) {
    return string.substr(0, index) + valeur+ string.substr(index);
}