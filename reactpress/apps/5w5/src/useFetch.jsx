import { useEffect, useState } from "react";

export default function useFetch(url){
    const [donnees, setDonnees] = useState(null);
    useEffect(() => {
        async function chargerArticle() {
            const response = await fetch(url);

            if(!response.ok) {
                return;
            }
    
            const articles = await response.json();
            setDonnees(articles);
        }
    
        chargerArticle();
    }, [url]);
    return donnees;
}