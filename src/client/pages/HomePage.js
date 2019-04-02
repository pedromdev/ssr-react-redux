import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>BEST COMPONENT</h1>
            <button onClick={ ()=>alert("Hey") }>CLick</button>
        </div>
        );
}

export default {
    component : HomePage
};