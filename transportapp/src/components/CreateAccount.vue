<template>
  <div>
    <div>Yeni Hesap oluştur ekranı</div>
    <br />
    <span @click="transportInfo">Taşıma Ekranına Git</span>
  </div>
</template>

<script>
export default {
  methods:{
    transportInfo(){
      console.log("Taşıma Bilgileri ekranı")
      this.$router.push({name:"transportInfo"})
    }
  }
}
</script>

<style>

</style>