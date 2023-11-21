<script setup >
  import GanhosSection from './GanhosSecton.vue';
  import ConquisteClientesSection from './ConquisteClientesSection.vue'
  import DivulgeSection from './DivulgeSection.vue'
  import ButtonStart from './buttons/ButtonStart.vue';
  
  import GanhosSlide from './slides/GanhosSlide.vue';
  import ConsquisteClientesSlide from "./slides/ConquisteClientesSlide.vue"
  import DivulgueSlide from "./slides/DivulgeSlide.vue"

  import { Splide, SplideSlide } from '@splidejs/vue-splide'; 
  import '@splidejs/vue-splide/css';

  // or other themes
  import '@splidejs/vue-splide/css/skyblue';
  import '@splidejs/vue-splide/css/sea-green';

  // or only core styles
  import '@splidejs/vue-splide/css/core';



  const optionsSlide = {
    type: 'loop',   
    autoplay: true, 
    interval: 3000,
    arrows: false,
    pagination: false,
    height: '440px',
    direction: 'ltr',
    speed: 1500,
    drag: false,
    pauseOnHover: false,
    
  };
</script>

<template>
    <main>
      <div class="main-content max-w-screen-2xl m-auto ">
          <div id="main-inicio" class=" flex justify-center  items-center flex-col relative">
            <Splide :options="optionsSlide" aria-label="My Favorite Images" class="max-w-full p-0">
              <SplideSlide class="relative">
                <GanhosSlide/>
              </SplideSlide>
            
              <SplideSlide class="relative">
                <ConsquisteClientesSlide/>
              </SplideSlide>
              <SplideSlide class="relative">
                <DivulgueSlide/>
              </SplideSlide>
            </Splide>
            <h2 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold absolute  top-28 text-stone-800">Com a <span class="text-logo-text">MeeAnuncie!</span></h2>
          </div>
        </div>

        <GanhosSection/>
        <ConquisteClientesSection/>
        <DivulgeSection/>
        
        

        <section class="w-3/4 mt-64  max-w-screen-2xl m-auto flex justify-center items-center flex-col">
          <h5 class="py-10 text-3xl text-gray-600 text-center font-semibold" >
            Ainda dá tempo de aumentar o seu faturamento até o final do ano. Entre em contato agora e escale o seu negócio com campanhas de alto rendimento.
          </h5>
          <ButtonStart class="py-3 px-10 mb-10" />
        </section>
    </main>

</template>

<style>

</style>