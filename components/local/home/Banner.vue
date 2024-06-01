<template>
  <div
    class="lg:justify-items-between grid flex-1 grid-cols-1 justify-items-center gap-12 lg:grid-cols-2"
  >
    <GlobalText as="span" className="text-6xl flex items-center w-full"
      >Merhaba, Ben <br />
      Nazlı Kaçar.
    </GlobalText>
    <GlobalText
      as="span"
      className="flex items-center text-2xl   text-start lg:text-end"
    >
      Nazlı Kaçar Hukuk ve Danışmanlık, Av.Nazlı Kaçar tarafından 2023 yılında
      kurulmuştur. Türkçe, İngilizce ve Fransızca dillerinde hizmet verilen
      büromuzda, 12’yi aşkın hukuk alanında, hem yerel hem yabancı müvekkillere
      avukatlık ve danışmanlık hizmeti sunulmaktadır. Her türden dava süreci ve
      uyuşmazlık hallerinde, yargılama sürecinin her aşamasında, müvekkil
      öncelikli bir yaklaşım ile çözüm odaklı şekilde hizmet verilmektedir.
    </GlobalText>
  </div>
</template>

<script setup lang="ts">
import GlobalText from "@/components/global/Text.vue";
</script>

<style scoped></style>
