const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'ciao vue :)',
      image: './img/Logo.png',
      w_img: 'w_img',
    }
  }
}).mount('#app')