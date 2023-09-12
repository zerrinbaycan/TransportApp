<template>
  <div>
    <div>Giriş Yap yada üye ol ekranı</div>
    <span @click="userlogin">Giriş Yap</span> | 
    <span @click="createAccount">Üye ol</span>
  </div>  
</template>

<script>
export default {
  methods:{
    userlogin(){
        console.log("router test userlogin")
        //this.$router.push({name:"login"})
        this.$router.push({name:"userlogin"})
    },
    createAccount(){
        console.log("router test createAccount")
        this.$router.push({name:"createAccount"})
    }
  }
}
</script>

<style>

</style>