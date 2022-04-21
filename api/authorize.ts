import express from 'express';
// import { useContext } from '@nuxtjs/composition-api';
import axios from 'axios';

const app = express();
// const { $axios } = useContext();

app.get('/', async (req, res) => {

    const params = new URLSearchParams(req.originalUrl.substring(req.originalUrl.indexOf('?')));
    console.log(req.originalUrl);
    console.log(params);
    const code = params.get('code');
    const error = params.get('error');
    console.log(code);

    if (error !== null || code === null) {
        res.redirect('/#?error=authentificationFailed'); 
    } else {
        const clientSecret = process.env.CLIENT_SECRET;
        const clientId = process.env.CLIENT_ID;
        const resParams = new URLSearchParams();
        resParams.append('grant_type', 'authorization_code');
        resParams.append('code', code);
        resParams.append('redirect_uri', 'http://localhost:3000/api/authorize');

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
        };

        const response = await axios.post('https://accounts.spotify.com/api/token', resParams, {headers: headers});

        res.cookie('user', response.data.access_token, {expires: new Date(Date.now() + 1 * 3600000), httpOnly: true, secure: true});
        res.redirect('/');
    }
});


export default app;