<template>
  <!-- <div>
    <DashboardLayout />
  </div> -->
  <router-view></router-view>
</template>

<script>
// import DashboardLayout from "@/pages/Layout/DashboardLayout";
export default {
  // components: {
  //   DashboardLayout,
  // },
  props: ["data"],
  data() {
    return {
      editMode: false,
      form: {
        name: null,
        phone: null,
      },
    };
  },
};
</script>