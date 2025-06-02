import React from 'react';
import './wedding.scss';
import CONTENT from './assets/words.js'
import SECTION from './components/Section'

function Wedding() {
    return (
        <div className="container wedding-page">
            <h2 class="wedding-title">Regina and Justin...and Astrid</h2>
            <p>This site is under construction. Please check back soon for more information.</p>
            <div className="row g-4">
                {CONTENT.map((obj, idx) => (
                    <div className="col-12" key={idx}>
                        <SECTION content={obj} />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Wedding