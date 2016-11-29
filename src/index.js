import React from 'react';
import ReactDOM from 'react-dom';

//create a new component
const App = function() {
    return <div>Hello!</div>;
};

//put the component's html on the page
ReactDOM.render(<App/>, document.querySelector('.container'));