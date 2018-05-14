<template>
    <div>
        <Left></Left>
        <App></App>
    </div>
</template>

<script>
    import Left from './Left'
    import App from './App'
    export default {
        name: 'DashBoard',
        components: {
          App,
          Left
        },
        created() {}
    }
</script>
<style scoped>
</style>
