<template>
  <div>
    <p>Taşıma Bilgileri erkanı</p>
    <p @click="saveTransportInfo">Devam Et</p>
  </div>
</template>

<script>
export default {
    methods:{
        saveTransportInfo(){
            console.log("router test saveTransportInfo")
            this.$router.push({name:"vehicleList"})
        }
    }
}
</script>

<style>

</style>>