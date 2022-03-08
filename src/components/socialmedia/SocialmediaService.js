import axios from 'axios'

const SOCIALMEDIA_BASE_REST_API_URL = 'https://writabackend.herokuapp.com/api/v1/socialmedia/save';
const SOCIALMEDIA_GET_REST_API_URL = 'https://writabackend.herokuapp.com/api/v1/socialmedia';

class SocialmediaService {

    getAllSocialmedias(){
        return axios.get(SOCIALMEDIA_GET_REST_API_URL)
    }

    createSocialmedia(socialmedia){
        return axios.post(SOCIALMEDIA_BASE_REST_API_URL, socialmedia)
    }
}

export default new SocialmediaService();