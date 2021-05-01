<template>
  <layout title="Welcome">
    <h1>Welcome</h1>
    <p>Hello welcome to your first Inertia app!</p>
  </layout>
</template>

<script>
  import Layout from '@/Template/Layout/SampleLayout'

  export default {
    components: {
      Layout,
    },
    props: {
      user: Object,
    },
  }
</script>