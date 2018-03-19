<template>
  <main>
    Hakkımızda
    <Banner />
    <Employee />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import Employee from '@/components/Employee.vue'

@Component({
  components: {
    Banner,
    Employee,
  },
})
export default class About extends Vue {}
</script>
