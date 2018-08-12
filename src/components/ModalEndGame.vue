<template>
<modal name="end-game">
    <div class="mod-container">
        <p>Ton score est de {{correct}} sur 20 !</p>
      <button v-on:click="skip">event au parent pour fermer modal</button>
    </div>
</modal>
</template>
<script>
export default {
     props: ['correct'],

     methods:{
         skip(){
         
         }	
     }
}
</script>

<style scoped>
.mod-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : 100%;
    height:  100%;
    background: #222930;
}

.mod-container > p {
    font-size: 2rem;
    font : Verdana;
    color: #E9E9E9;
   }

.mod-container > button{
    background: #4EB1BA;
}
</style>
