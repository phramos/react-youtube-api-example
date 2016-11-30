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

        this.state = {
            videos: [],
            selectedVideo: null};

        YTSearch({key: API_KEY, term: 'Magnun'}, videos => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    render(){
        return(
            <div>
                <SearchBar/>
                <div>
                    <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div>
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos}/>
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'));