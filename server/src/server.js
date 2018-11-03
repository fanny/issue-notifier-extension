import express from 'express';
import axios from 'axios';
import firebaseOptions from './../src/config/firebaseOptions';

const app = express();
const port = process.env.PORT || 5000;
const { firebaseUrl, serverKey } = firebaseOptions;

let userToken = null;

app.use(express.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/register', (req, res) => {
    userToken = req.body.userToken;
    res.sendStatus(201);
});

app.post('/watch', (req, res) => {
    console.log(req.body);
    
    const { body } = req; 
    const { action, issue: {title}, sender: {login}, html_url } = body;

    axios({
        url: firebaseUrl,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `key=${serverKey}`
        },
        data: {
            'notification': {
                'title': 'issue-notifier',
                'body': `${login} ${action} in issue #${title}`,
                'click_action': `${html_url}`
            },
            'to': `${userToken}`
        }
    }).then((response) => {
        console.log(response);
    }).catch((error) =>{
        console.log(error);
    })
});


app.listen(port);

console.log('app running on port', port);