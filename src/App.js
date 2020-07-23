import React from 'react';

function App(props) {
    const facts = props.facts.map(fact => {
        return <li>{fact.text}</li>
    })
    return (
        <ul>
            {facts}
        </ul>
    )
}

export default App;