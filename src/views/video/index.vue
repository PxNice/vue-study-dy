<template>
  <div class="video">
    <video-container v-if="videos.length>0" :src="videos[0].video"/>
    <top-nav :type="videoType" @update:type="videoType=$event"/>
    <bottom-nav/>
    <right-asider/>
  </div>
</template>

<script>
import {ref} from "vue"
import axios from "@/axios"

import "@/assets/css/video.css"
import videoContainer from "./components/video-container"
import topNav from "./components/top-nav"
import bottomNav from "./components/bottom-nav"
import rightAsider from "./components/right-asider"

export default {
    components:{
      videoContainer,
      topNav,
      bottomNav,
      rightAsider
    },
    setup(){
        const videoType = ref('recommend')
        const videos = ref([]);
        //
        axios('/video/list/recommend').then((res) => {
          console.log(res.data)
          videos.value = res.data
        })
        return {videos,videoType}
    }
}
</script>
