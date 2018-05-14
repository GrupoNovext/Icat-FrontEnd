<template>
    <section class="content">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </section>
</template>
<script>
    
    import Header from './Header'
    import Content from './Content';
    import Footer from './Footer';
    
    export default {
        name: 'App',
        components: {
          Header,
          Content,
          Footer
        }
    }
</script>
<style scoped>

</style>