import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 5000;
const firebaseurl = 'https://fcm.googleapis.com/fcm/send';

app.use(express.json());

app.post('/watch', (req, res) => {
    
    const { body } = req; 
    const { action, issue: {title}, sender: {login}, html_url } = body;

    axios({
        url: firebaseurl,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'key=AAAAdP7E4sU:APA91bEYRdiqUtOq0ukF0WdTbeInl71bOtkJC_g_zP8WLeQDRngBGf6m1eJdEG2wIvVWXuiaLGZvLkhqk9-D3LUltG_OdZU6wVayy76d_CGweuLuk1cNwNpNWGFuv4byERGy2Lr5q51U'
        },
        data: {
            'notification': {
                'title': 'issue-notifier',
                'body': `${login} ${action} in issue #${title}`,
                'click_action': 'html_url'
            },
            'to': 'f2C0sc9UpgU:APA91bHzR4GvftHawcUY1aMtfw4WbgJmDk0TKZUx12MRC702SVRggqxbankIyA-ViBR5BLjex5G6avMYIY31gpPZ-8duiQy_KG4l7Mr_JZRkQ3B1yR667viu8bpCdXEFK2wenNR-H_48'
        }
    }).then((response) => {
        console.log(response);
    }).catch((error) =>{
        console.log(response);
    })
})

app.listen(port);

console.log('app running on port', port);