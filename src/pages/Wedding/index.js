import React from 'react';
import './wedding.scss';
import CONTENT from './assets/words.js'
import SECTION from './components/Section'
import RSVP from './components/Rsvp'

function Wedding() {
    return (
        <div className="container wedding-page py-4">
            <h2 class="wedding-title">Regina and Justin</h2>
            <h4 class="wedding-title">...and Astrid</h4>
            <div className="row g-4">
                {CONTENT.map((obj, idx) => (
                    <div className="col-12" key={idx}>
                        <SECTION content={obj} />
                    </div>
                ))}
                <div className="col-12">
                    <RSVP />
                </div>
            </div>
        </div>

    )
}

export default Wedding