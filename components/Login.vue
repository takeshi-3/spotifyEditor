<script lang="ts">
import { defineComponent, useFetch, useContext } from '@nuxtjs/composition-api';


export default defineComponent({
    setup(props, context) {

        const { $config } = useContext();

        const clientId = $config.clientId;

        const redirectToLoginURL = async (): Promise<void> => {
            const url = new URL("https://accounts.spotify.com/authorize");
            const params = new URLSearchParams([
                ['client_id', clientId],
                ['response_type', 'code'],
                ['redirect_uri', 'http://localhost:3000/api/authorize'],
                ['state', 'aiwery823']
            ]);
            url.search = params.toString();
            location.href = url.toString();
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