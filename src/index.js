import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDNsnkrTTAHNMTqy596EEpul8fdgSsYbgU';

//create a new component
const App = () => {
    return ( 
        <div>
            <SearchBar/>
        </div>
    );
};

//put the component's html on the page
ReactDOM.render(<App/>, document.querySelector('.container'));