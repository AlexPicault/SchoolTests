<template>
    <div class="alert alert-success text-center">
        <h1>C'est Juste!</h1>
        <hr>
        <button class="btn btn-primary" @click="onNextQuestion">Pochaine Question</button>
    </div>
</template>
<style>

</style>
<script>

    export default{
        methods: {
            onNextQuestion() {
                this.$emit('confirmed');
            }
        }
    }
</script>
