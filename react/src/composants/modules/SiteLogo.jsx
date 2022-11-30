import './SiteLogo.scss';

export default function SiteLogo({url}) {
    return (
    
        <div className="SiteLogo">
            <img className="logo" src={url} alt="Logo du TIM"/> 
        </div>
    )
}
