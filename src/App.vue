<template>
  <div class="m-0 p-0">
    <Header/>
    <div class="container-fluid">
      <div class="row">
        <SideBar/>
        <ViewContent/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/core/HeaderContent.vue'
import SideBar from './components/core/SideBar.vue'
import ViewContent from './components/core/ViewContent.vue'
export default {
  name: "App",
  components: {
    Header,
    SideBar,
    ViewContent,
  }
};
</script>

<style></style>
