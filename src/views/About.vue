<template>
  <main>
    Hakkımızda
    <Banner />
    <Employee />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Banner from '@/components/Banner.vue';
import Employee from '@/components/Employee.vue'

@Component({
  methods: {
    ...mapActions({
      setFooterVisibility: 'footer/setFooterVisibility',
    }),
  },
  components: {
    Banner,
    Employee,
  },
})
export default class About extends Vue {
  mounted() {
    this.setFooterVisibility(true);
  };
};
</script>
