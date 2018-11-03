import 'dotenv/config';

const firebaseOptions = {
    firebaseUrl: process.env.FIREBASE_URL,
    serverKey: process.env.SERVER_KEY
}

export default firebaseOptions;