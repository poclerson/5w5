export default async function obtenirArticles(url) {
    const reponse = await fetch(url);
    
    return await reponse.json();
}