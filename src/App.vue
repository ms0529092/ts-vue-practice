<template>
  <div id="app">
      <router-view name="pagination" />
      <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style>
body{
  height:100vh;
  margin:0;
  padding:0;
}
#app{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
