<template>
  <main>
    Gündem
    <Banner />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Banner from '@/components/Banner.vue';

@Component({
  methods: {
    ...mapActions({
      setFooterVisibility: 'footer/setFooterVisibility',
    }),
  },
  components: {
    Banner,
  },
})
export default class Journal extends Vue {
  mounted() {
    this.setFooterVisibility(true);
  };
};
</script>
