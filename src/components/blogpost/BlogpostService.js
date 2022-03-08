import axios from 'axios'

const BLOGPOST_BASE_REST_API_URL = 'https://writabackend.herokuapp.com/api/v1/blogpost/save';
const BLOGPOST_GET_REST_API_URL = 'https://writabackend.herokuapp.com/api/v1/blogpost';

class BlogpostService {

    getAllHeadlines(){
        return axios.get(BLOGPOST_GET_REST_API_URL)
    }

    createHeadline(blogpost){
        return axios.post(BLOGPOST_BASE_REST_API_URL, blogpost)
    }
}

export default new BlogpostService();