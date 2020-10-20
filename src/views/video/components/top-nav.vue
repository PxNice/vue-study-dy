<template>
    <div class="top-nav">
      <div class="icon-container">
        <a href="javascript:;" class="icon icon-live"></a>
      </div>
      <div class="tab-container">
        <a 
        href="javascript:;" 
        @click="setType(key)" 
        v-for="(txt , key) in tabs" 
        :key = "key" 
        class="tab-item" 
        :class="{active:key==type}"
        >{{txt}}</a>
      </div>
      <div class="icon-container">
        <a href="javascript:;" class="icon icon-search"></a>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    type:{
      type:String,
    },
  },
  setup(){
    return {
      tabs:{
        follow:"关注",
        recommend:"推荐"
      },
      setType(type){
        console.log(this)
        this.$emit("update:type",type)
      }
    };
  },
}
</script>