<template>
    <div class="app-container">
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Navbar, Footer }
}
</script>

<style>
.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>