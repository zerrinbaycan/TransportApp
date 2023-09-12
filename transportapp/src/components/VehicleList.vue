<template>
  <div>
    <p>Araç Listeleme ekranı</p>
    <p @click="vehicleSelect">Seç</p>
  </div>
</template>

<script>
export default {
  methods:{
    vehicleSelect(){
      console.log("router test saveTransportInfo")
            this.$router.push({name:"vehicleList"})
    }
  }
}
</script>

<style>

</style>