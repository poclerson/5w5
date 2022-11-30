import './EvenementVideo.scss';

export default function EvenementVideo({lien}) {
    return (
        <li className="EvenementVideo evenement">
            <iframe width="100%" height="100%"
                src={lien + '?autoplay=1&mute=1'}>
            </iframe>
        </li>
    )
}
