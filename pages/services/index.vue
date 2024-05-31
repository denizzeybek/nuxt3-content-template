<template>
  <div class="grid grid-cols-3 gap-6">
    <div v-for="(card, idx) in documentGroupList" :key="idx">
      <Card @click="$router.push(`${card.path}`)" :title="card.title!" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/local/Card.vue";

const documentGroupList = computed(() => {
  return [
    {
      title: "İş Hukuku",
      icon: "briefcase",
      path: "/services/is-hukuku",
    },
    {
      title: "Sigorta Hukuku",
      icon: "briefcase",
      path: "/services/sigorta-hukuku",
    },
    {
      title: "Gayrimenkul Ve İnsaat Hukuku",
      icon: "briefcase",
      path: "/services/gayrimenkul-ve-insaat-hukuku",
    },
    {
      title: "Ticaret Ve Şirketler Hukuku",
      icon: "briefcase",
      path: "/services/ticaret-ve-sirketler-hukuku",
    },
    {
      title: "Tahkim",
      icon: "briefcase",
      path: "/services/tahkim",
    },
    {
      title: "Uluslararası Özel Hukuk",
      icon: "briefcase",
      path: "/services/uluslararasi-ozel-hukuk",
    },
    {
      title: "Ceza Hukuku",
      icon: "briefcase",
      path: "/services/ceza-hukuku",
    },
    {
      title: "İdare Ve Vergi Hukuku",
      icon: "briefcase",
      path: "/services/idare-ve-vergi-hukuku",
    },
    {
      title: "Aile ve Miras Hukuku",
      icon: "briefcase",
      path: "/services/aile-ve-miras-hukuku",
    },
    {
      title: "Kişisel Verilerin Korunması Hukuku",
      icon: "briefcase",
      path: "/services/kisisel-verilerin-korunmasi-hukuku",
    },
    {
      title: "İcra ve İflas Hukuku",
      icon: "briefcase",
      path: "/services/icra-ve-iflas-hukuku",
    },
    {
      title: "Dava Takibi Ve Uyuşmazlık Çözüm Yöntemleri",
      icon: "briefcase",
      path: "/services/dava-takibi-hukuku",
    },
  ];
});
</script>

<style scoped></style>
