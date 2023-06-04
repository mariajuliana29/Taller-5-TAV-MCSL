<template>
    <main>
      <div id="app">
       <router-view></router-view>
      </div>
      <slot></slot>
    </main>
  </template>
  
  <script>
  export default {
    name: 'MyMain',
  };
  </script>
  