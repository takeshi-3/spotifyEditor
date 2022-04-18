import { Router } from 'express';
import { useContext } from '@nuxtjs/composition-api';

const router = Router();
const { $config } = useContext();

router.get('/api/authorize', (req, res) => {
    if (!req.originalUrl) return;
    const params = new URLSearchParams(req.originalUrl.substring(req.url.indexOf('?')));
    const code = params.get('code');
    const error = params.get('error');

    if (error || code === null) {
        res.redirect('/#?error=authentificationFailed');
    } else {
        const clientSecret = $config.clientSecret;
        const resParams = new URLSearchParams();
        resParams.append('grant_type', 'authorization_code');
        resParams.append('code', code);
        resParams.append('redirect_uri', 'http://localhost:3000');

        const redirectTo = 'https://accounts.spotify.com/api/token' + resParams.toString();
        const headers = {
            'Authorization': `Basic <base64 encoded client_id:${clientSecret}>`,
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        res.set(headers);
        res.redirect(redirectTo);
    }
});

export default router;