export default async function obtenir(url) {
    const reponse = await fetch(url);
    
    return await reponse.json();
}