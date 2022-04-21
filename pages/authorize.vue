<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
    // async setup() {
    //     if (process.client) {
    //         const { $config, $axios } = useContext();
    //         const params = new URLSearchParams(window.location.search);
    //         const code = params.get('code');
    //         const error = params.get('error');
    //         console.log(params);

    //         if (error !== null || code === null) {
    //             window.location.href = '/#?error=authentificationFailed';
    //         } else {
    //             const clientSecret = $config.clientSecret;
    //             const clientId = $config.clientId;
    //             const sendParams = new URLSearchParams();
    //             sendParams.append('grant_type', 'authorization_code');
    //             sendParams.append('code', code);
    //             sendParams.append('redirect_uri', 'http://localhost:3000/authorize');
    //             console.log(sendParams);

    //             const headers = {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //                 Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64')}`
    //             };

    //             const response = await $axios.post('https://accounts.spotify.com/api/token', sendParams, { headers: headers });

    //             document.cookie = `user=${response.data.access_token}; Max-Age=1800; HttpOnly;`;
    //             window.location.href = 'http://localhost:3000';
    //         }
    //     }
    // },
})
</script>

<template>
    <div></div>
</template>