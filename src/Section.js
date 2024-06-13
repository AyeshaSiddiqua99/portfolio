import React from 'react';
import Title from './Title';

function Section(Props) {

    return (
        <>
            <section className={Props.sectionClassName} id={Props.id}>
                <div className={Props.widthClassName}>
                    <Title value={Props.titleValue} />
                    <div className={Props.contentClassName}>
                        {Props.content}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section;