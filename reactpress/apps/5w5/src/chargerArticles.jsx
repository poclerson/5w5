export default async function chargerArticle(url) {
    const reponse = await fetch(url);
    
    return await reponse.json();
}