import React from 'react';

function App(props) {
    const facts = props.facts.map(fact => {
    return <li>{fact.text} penis</li>
    })
    return (
        <div>
            <ul>
                {facts}
            </ul>
        </div>
    )
}

export default App;