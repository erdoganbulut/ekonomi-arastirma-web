<template>
  <main>
    Referanslarımız
    <Banner />
    <Reference />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Banner from '@/components/Banner.vue';
import Reference from '@/components/Reference.vue';

@Component({
  methods: {
    ...mapActions({
      setFooterVisibility: 'footer/setFooterVisibility',
    }),
  },
  components: {
    Banner,
    Reference,
  },
})
export default class References extends Vue {
  mounted() {
    this.setFooterVisibility(true);
  };
};
</script>
