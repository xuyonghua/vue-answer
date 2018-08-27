<template>
    <div class="home">
        <QuestionItem/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import QuestionItem from "../components/QuestionItem";

    export default {
        name: "home",
        components: {
            QuestionItem,
        }
    };
</script>
<style>
/*.home{*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*width: 100vw;*/
    /*height: 100vh;*/
/*}*/
</style>
