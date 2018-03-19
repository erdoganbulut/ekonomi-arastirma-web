<template>
  <main>
    İletişim
    <Banner />
    <ContactContent />
    <ContactForm />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Banner from '@/components/Banner.vue';
import ContactContent from '@/components/ContactContent.vue';
import ContactForm from '@/components/ContactForm.vue';

@Component({
  methods: {
    ...mapActions({
      setFooterVisibility: 'footer/setFooterVisibility',
    }),
  },
  components: {
    Banner,
    ContactContent,
    ContactForm,
  },
})
export default class Contact extends Vue {
  mounted() {
    this.setFooterVisibility(true);
  };
};
</script>
