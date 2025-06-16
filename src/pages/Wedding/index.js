import React from 'react';
import './wedding.scss';
import CONTENT from './assets/words.js'
import SECTION from './components/Section'
import RSVP from './components/Rsvp'

function Wedding() {
    return (
        <div className="container wedding-page">
            <h2 class="wedding-title">Regina and Justin</h2>
            <h4 class="wedding-title">...and Astrid</h4>
            <div className="row g-4">
                {CONTENT.map((obj, idx) => (
                    <div className="col-12" key={idx}>
                        <SECTION content={obj} />
                    </div>
                ))}
            </div>
            <div className="row g-4">
                <RSVP />
            </div>
        </div>

    )
}

export default Wedding