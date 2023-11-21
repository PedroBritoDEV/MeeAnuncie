<script setup>
</script>

<template>
    <section id="divulge-section" class="relative">
          <svg   xmlns="http://www.w3.org/2000/svg" style="margin-bottom: -2px;" viewBox="0 0 1440 320">
            <path fill="#1E9680" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,165.3C840,181,960,171,1080,144C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
            <div id="divulge-background" class=" bg-logo-ligh-blue flex items-center justify-center px-10">
              <div id="divulge-content" class=" text-white max-w-screen-2xl m-auto flex flex-col-reverse md:flex-row items-center" :delay="200" v-motion-slide-visible-once-left>
                <div class="ganhos-text w-3/4 mr-10">
                  <h2 class="text-4xl font-bold mb-5 ">Divulge A Sua Empresa</h2>
                  <h4 class="text-2xl mt-4 mb-2">Destaque-se no Mercado</h4>

                  <p class="leading-6">Seu negócio merece destaque! Aumente sua visibilidade no mercado através de estratégias de divulgação eficazes. Seja encontrado por seu público-alvo, destaque-se da concorrência e alcance novos patamares de reconhecimento. Invista na visibilidade certa e colha os frutos do seu esforço. Destaque-se agora!</p>
                  <h4 class="text-2xl mt-4 mb-2">A Visibilidade que Impulsiona o Sucesso</h4>

                  <p class="leading-6">Não deixe seu negócio na sombra. Invista na divulgação certa para alcançar seu público-alvo de maneira impactante. Deixe sua marca brilhar, atraindo a atenção que ela merece. Saia na frente, destaque-se e veja seu negócio alcançar novos horizontes. A visibilidade que impulsiona o sucesso está ao seu alcance. Descubra como agora!</p>
                </div><!--#ganhos-text-->
                
                <picture class="w-96 border-2 rounded-full p-2 border-dashed ">
                  <img class="w-full rounded-full " src="../assets/img/crescimento.jpg" alt="">
                </picture>
              </div>
            </div>
          <svg class="absolute" style="margin-top: -1px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1E9680" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,165.3C840,181,960,171,1080,144C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </section>
</template>