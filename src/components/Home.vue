<template>
<div>
    <div class="nav-bar">
    <ul class="nav-pages">
        <li class="nav-page" v-on:click="redirect('calculette')">Calculette</li>
        <li class="nav-page" v-on:click="redirect('quizz')">Quizz</li>        
        <li class="nav-page" v-on:click="redirect('stickers')">Etiquettes</li>
    </ul>
        <img class="nav-icone" src="../assets/butters.png" v-on:click="redirect('/')">
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },

    methods : {
        redirect(page){
            this.$router.push(page);
        },
    }
}
</script>
<style scoped>

.nav-bar{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between; 
    background: #e1e8f0;
    height: 10%;
}

.nav-icone{
   height: 10%;
   width: 5%; 
   cursor: pointer;
}

.nav-pages { 
    display : flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
    text-align: center;
}

.nav-page{
    display: flex;
    align-items: center;
    justify-content: center;
    border: black 2px solid;
    border-radius: 10%;
    background: #6ed3cf;
    font : Verdana;
    padding: 3%;
    margin : 6%;
}

.nav-page:hover{
    background: #55efc4;
    cursor: pointer;
}
</style>

