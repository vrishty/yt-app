import axios from 'axios';

const KEY = 'AIzaSyCoE25uuyyGQ4H6tM-WdunM9cn__4J1N5c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});