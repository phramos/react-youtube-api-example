import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDNsnkrTTAHNMTqy596EEpul8fdgSsYbgU';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'Magnun'}, videos => {
            this.setState({videos});
        });
    }

    render(){
        return(
            <div>
                <SearchBar/>
                <div>
                    <VideoDetail video={this.state.videos[0]}/>
                </div>
                <div>
                    <VideoList videos={this.state.videos}/>
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'));