import { useEffect, useState } from "react";

export default function useFetch(url){
    const [donnees, setDonnees] = useState(null);
    useEffect(() => {
        async function chargerArticle() {
            const reponse = await fetch(url);
    
            if (!reponse.ok) {
                return;
            }

            const articles = await reponse.json();
            setDonnees(articles);
        }

        chargerArticle();
    }, [url]);

    return donnees;
}
