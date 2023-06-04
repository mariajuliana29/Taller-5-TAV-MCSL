<template>
    <div>
      <Header />
      <NavBar />
      <br>
      <Main>
        <slot></slot>
      </Main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import NavBar from './Navbar';
  import Main from './Main.vue';
  import Footer from './Footer.vue';

  
  export default {
    name: 'MyLayout',
    components: {
      Header,
      NavBar,
      Main,
      Footer,
    },
  };
  </script>
  