<template>
    <div class="conrainer">
  <div :style="fillerStyles">
  </div></div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ProgressBar",
  props: {
    bgcolor: String,
    completed: Number,
  },
  setup(props) {
    const fillerStyles = computed(() => {
      return {
        height: "3px",
        width: `${props.completed}%`,
        backgroundColor: props.bgcolor,
        transition: "width 1s ease-in-out",
        borderRadius: "inherit",
        textAlign: "center",
      };
    });

    return { fillerStyles };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 50px;
}

</style>
