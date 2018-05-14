<template >
    <div id="app">
        <DashBoard></DashBoard>
        
    </div>
</template>

<script>
    import Login from './components/Login';
    import DashBoard from './components/Lawyer/DashBoard'
    export default {
        name: 'App',
        components: {
          Login,
          DashBoard
        },
        created() {}
    }
</script>
<style scoped>
</style>
