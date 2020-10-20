<template>
    <div class="video-container">
      <video 
          ref="video"
          :src="props.src" 
          style="top:0;" 
          autoplay
          loop 
          playsinline 
          muted
      ></video>
    </div>
</template>

<script>
import {ref , onMounted} from "vue";
export default {
    props:["src"],
    setup(props,context){
      const video = ref(null)
      onMounted(()=>{
        const v1 = video.value;
        v1.addEventListener('canplay',()=>{
          const h = v1.offsetHeight
          const H = document.documentElement.clientHeight

          v1.style.top = (H-h)/2+"px"
          v1.play()
        });
      
      })
      return {props,video}
    }
}
</script>

