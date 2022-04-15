<script lang="ts">
import { defineComponent, useFetch, useContext } from '@nuxtjs/composition-api';


export default defineComponent({
    setup(props, context) {

        const { $axios, $config } = useContext();

        const clientId = $config.clientId;
        const clientSecret = $config.clientSecret;

        console.log(clientId);


        const option = {
            headers: {
               'Access-Control-Allow-Origin': '*'
            },
            params: {
                client_id: clientId,
                response_type: "code",
                redirect_uri: "http://localhost:3000/",
                state: "aiwery823"
            },
        };

        const redirectToLoginURL = async (): Promise<void> => {
            await $axios.get('/api/', option);
        };

        return {redirectToLoginURL};
    },
})
</script>

<template>
    <div class="flex justify-around py-12">
        <button 
            @click="redirectToLoginURL"
            class="rounded-full shadow-default px-8 py-4 text-green-600 font-bold"
        >
            Sign in with Spotify
        </button>
    </div>
</template>