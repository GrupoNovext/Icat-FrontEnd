<template >
    <section class="content">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </section>

</template>

<script>
    
    import Header from '../User/Header';
    import Footer from '../User/Footer';
    import Content from './Content';
    
    export default {
        name: 'App',
        components: {
            Header,
            Footer,
            Content
        },
        created() {},
    }
</script>
<style scoped>
</style>
