<script setup>
</script>

<template>
    <section id="ganhos-section">
          <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
            <path fill="#4CB853" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,165.3C840,181,960,171,1080,144C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
            <div id="ganhos-background" class="px-10 bg-logo-ligh-green flex items-center justify-center relative">
              <div id="ganhos-content" class=" text-white max-w-screen-2xl m-auto flex flex-col-reverse md:flex-row items-center" :delay="200"  v-motion-slide-visible-once-left>
                <div class="ganhos-text w-3/4 mr-10">
                  <h2 class="text-4xl font-bold mb-10 ">Ganhos Com Os Nossos Serviços</h2>
                  <h4 class="text-2xl mt-4 mb-2">Desperte o Potencial dos Seus Ganhos</h4>

                  <p class="leading-7 ">Descubra estratégias testadas e comprovadas para impulsionar seus ganhos financeiros. Maximize seu potencial de lucro com abordagens inovadoras. Seus objetivos financeiros estão mais próximos do que você imagina. Comece agora e veja seus ganhos atingirem novos patamares!</p>
                  <h4 class="text-2xl mt-4 mb-2">Transforme Seus Resultados Financeiros</h4>

                  <p class="leading-7"> Explore as melhores práticas do mercado para transformar a saúde financeira do seu negócio. Aumente a eficiência, reduza custos desnecessários e alcance uma rentabilidade excepcional. O caminho para o sucesso financeiro começa aqui. Não perca tempo, comece sua jornada agora!</p>
                </div><!--#ganhos-text-->
                
                <picture class="my-6 w-96 border-2 rounded-full p-2 border-dashed ">
                  <img class="w-full rounded-full " src="../assets/img/homem-sorrindo.jpg" alt="">
                </picture>
              </div>
            </div>
          <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4CB853" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,165.3C840,181,960,171,1080,144C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </section>
</template>

<style scoped>
  #ganhos-background::before {
    position:absolute;
    content: "";
    width: 100%;
    height: 4px;
    background-color: #4CB853;
    top: -2px;
    z-index: 2;
  }
  #ganhos-background::after {
    position:absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #4CB853;
    bottom: -1px;
    z-index: 2;
    

  }
</style>