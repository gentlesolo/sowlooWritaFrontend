import axios from 'axios'

const HEADLINE_BASE_REST_API_URL = 'http://localhost:8082/api/v1/headline/save';
const HEADLINE_GET_REST_API_URL = 'https://writa.herokuapp.com/api/v1/headline';
// const HEADLINE_GET_REST_API_URL = 'http://localhost:8082/api/v1/headline';

class HeadlineService{

    getAllHeadlines(){
        return axios.get(HEADLINE_GET_REST_API_URL)
    }

    createHeadline(headline){
        return axios.post(HEADLINE_BASE_REST_API_URL, headline)
    }
}

export default new HeadlineService();