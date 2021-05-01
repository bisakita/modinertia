<template>
  <div class="content">
    <FadeTransition :duration="200" mode="out-in">
      <!-- your content here -->
      <!-- <router-view></router-view> -->
      <h1>jlajlkjJLLILBKLBLBAS:KFNFLANFLKAN:KFNA:KSFN:KSNF:KANSF:ASNF:ANSFA</h1>
      <article>
      <slot />
    </article>
    </FadeTransition>
  </div>
</template>
<script>
import { FadeTransition } from 'vue2-transitions';
export default {
  components: {
    FadeTransition
  }
};
</script>
<style></style>
