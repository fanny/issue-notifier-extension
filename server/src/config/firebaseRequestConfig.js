import firebaseOptions from './firebaseOptions';
const { firebaseUrl, serverKey } = firebaseOptions;

const getHeader = () => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `key=${serverKey}`
    }
};

const getBody = (data, userToken) => {
    const { action, issue: { title, html_url }, sender: {login} } = data;
    
    return {
        'notification': {
            'title': 'issue-notifier',
            'body': `${login} ${action} in issue #${title}`,
            'click_action': `${html_url}`
        },
        'to': `${userToken}`
    }
}


const firebaseRequestConfig = (data, userToken) => {
    return {
        url: firebaseUrl,
        method: 'post',
        headers: getHeader(serverKey),
        data: getBody(data, userToken)
    }
}

export default firebaseRequestConfig;