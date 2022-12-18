import './Icone.scss';

import {useContext} from 'react';
import ContexteDonneesSite from '../../ContexteDonneesSite';
import parse from 'html-react-parser';

export default function Icone({type, classes, surClic, render, children}) {
    const {icones} = useContext(ContexteDonneesSite);
    return (
        <span className={classes ? 'Icone ' + classes : 'Icone'} onClick={surClic}>
            {icones &&
                parse(
                    icones.filter(icone => icone.title == type)[0] &&
                    icones.filter(icone => icone.title == type)[0].acf.icone
                )
            }
            {render}
            {children}
        </span>
    )
}