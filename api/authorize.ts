import express from 'express';
import { useContext } from '@nuxtjs/composition-api';
import axios from 'axios';


const app = express();

app.get('/', (req, res) => {
    if (!req.originalUrl) return;

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
        const resParams = new URLSearchParams();
        resParams.append('grant_type', 'authorization_code');
        resParams.append('code', code);
        resParams.append('redirect_uri', 'http://localhost:3000');

        const redirectTo = 'https://accounts.spotify.com/api/token?' + resParams.toString();
        const headers = {
            'Authorization': `Basic ${new Buffer('client_id:' + clientSecret).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        //const data = axios.post()

        res.set(headers);
        res.redirect(redirectTo);
    }
});


export default app;