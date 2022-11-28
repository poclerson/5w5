import './Icone.scss';

import {useContext} from 'react';
import ContexteDonneesSite from '../../ContexteDonneesSite';
import parse from 'html-react-parser';

export default function Icone({type, classes}) {
    const {icones} = useContext(ContexteDonneesSite);
    return (
        <span className={'Icone ' + classes}>
            {icones  &&
                parse(icones.filter(icone => icone.title == type)[0].acf.icone)
            }
        </span>
    )
}