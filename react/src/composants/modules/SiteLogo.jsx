import './SiteLogo.scss';

export default function SiteLogo({url, taille}) {
    return (
        <img className={"SiteLogo " + taille} src={url} alt="Logo du TIM" />
    )
}
