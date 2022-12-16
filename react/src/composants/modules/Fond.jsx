import './Fond.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext} from 'react'

export default function Fond() {
    const {images} = useContext(ContexteDonneesSite);
    return (
        <div className="Fond" style={{
            backgroundImage: `url(${images.filter(image => image.title == 'fond')[0].acf.image})`
        }}>
            <div className="degrade"></div>
        </div>
    )
}