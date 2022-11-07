import './Page.scss';

import useStructure from '../../hooks/useStructure';

export default function Page({id}) {
    const elements = useStructure(id);
    return (
        <section className="Page">
            {Object.values(elements).map(element => <>{element}</>)}
        </section>
    )
}
