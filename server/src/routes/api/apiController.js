import axios from 'axios';
import firebaseRequestConfig from '../../config/firebaseRequestConfig';

let userToken = null;
const register = (req, res) => {
    userToken = req.body.userToken;
    res.sendStatus(201);
};

const watch = (req, res) => {
    const { body } = req; 
    sendNotification(body);
}

const sendNotification = (data) => {
    const requestConfig = firebaseRequestConfig(data, userToken);
    
    axios(requestConfig).then((response) => {
        console.log(response);
    }).catch((error) =>{
        console.log(error);
    })
}

export {
    register,
    watch
}

