<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api';
import Track from './Track.vue';

export default defineComponent({
    components: {
        Track,
    },
    setup() {
        const playlist = reactive({
            list: [],
        });

        const title = ref<string>('NewPlaylist');

        const savePlaylist = (): void => {
            // reflect playlist to account
        };

        return {playlist, title, savePlaylist};
    },
})
</script>

<template>
    <div>
        <h2>Playlist</h2>
        <div>
            <input type="text" v-model="title">
            <button @click="savePlaylist">Save</button>
        </div>
        <div class="rounded-lg shadow-default px-8 py-8">
            <!-- <Track v-for="track in playlist.list" :key="track.id" :data="track" /> -->
            <div class="shadow-xs px-2 py-2 bg-black">
                Add first track by Search.
            </div>
        </div>
    </div>
</template>