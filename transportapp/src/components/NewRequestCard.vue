
<template>
    <div class="container">
        <div class="row justify-content-center" @click="loginorNewAccount">
            <div class="card p-0" style="width: 20rem;">
                <img src="../photos/1movers.png"  alt="...">
                <div class="card-body text-center">
                <h5 class="card-title">Nakliyat Talebi Oluşturma</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
    loginorNewAccount(){
        console.log("router test loginorNewAccount")
        this.$router.push({name:"loginorNewAccount"})
        //this.$router.push({name:"createAccount"})
    }
}
};
</script>
    