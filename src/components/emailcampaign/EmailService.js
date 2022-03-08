import axios from 'axios'

const EMAIL_BASE_REST_API_URL = 'https://writabackend.herokuapp.com/api/v1/email/save';
const EMAIL_GET_REST_API_URL = 'https://writabackend.herokuapp.com/api/v1/email';

class EmailService {

    getAllEmails(){
        return axios.get(EMAIL_GET_REST_API_URL)
    }

    createEmail(email){
        return axios.post(EMAIL_BASE_REST_API_URL, email)
    }
}

export default new EmailService();