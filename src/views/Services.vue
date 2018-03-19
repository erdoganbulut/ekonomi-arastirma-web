<template>
  <main>
    Hizmetlerimiz
    <Banner />
    <Service />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Banner from '@/components/Banner.vue';
import Service from '@/components/Service.vue';

@Component({
  methods: {
    ...mapActions({
      setFooterVisibility: 'footer/setFooterVisibility',
    }),
  },
  components: {
    Banner,
    Service,
  },
})
export default class Services extends Vue {
  mounted() {
    this.setFooterVisibility(true);
  };
};
</script>
