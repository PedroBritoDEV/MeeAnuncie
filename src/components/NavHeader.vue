<script setup>
    


</script>

<template>

    <nav>
        <ul class="flex items-center">
            <li>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-gray-600  focus:outline-none  font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center inline-flex items-center" type="button">
                        Vantagens
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

                <!-- Dropdown menu -->
                <div id="dropdown" class="z-10 hidden rounded-lg bg-white shadow">
                    <ul class="py-2 text-sm text-gray-600 dark:text-gray-600" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#ganhos-section" class="block px-4 py-2 dark:hover:underline">Ganhos</a>
                        </li>
                        <li>
                            <a href="#conquiste-clientes-section" class="block px-4 py-2 dark:hover:underline">Clientes</a>
                        </li>
                        <li>
                            <a href="#divulge-section" class="block px-4 py-2 dark:hover:underline">Divulgação</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown2" class="text-gray-600  focus:outline-none  font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center inline-flex items-center" type="button">
                        Redes e Contato
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

                <!-- Dropdown menu -->
                <div id="dropdown2" class="z-10 hidden rounded-lg bg-white shadow">
                    <ul class="p-3 text-sm text-gray-600 dark:text-gray-600" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" class="flex mb-2"><i class="fa-brands fa-instagram mr-2 text-lg "></i>@meeanuncie</a>
                        </li>
                        <li>
                            <a href="#" class="flex mb-2"><i class="fa-brands fa-tiktok mr-2 text-lg"></i>@meeanuncie</a>
                        </li>
                        <li>
                            <a href="#" class="flex mb-2"><i class="fa-brands fa-whatsapp mr-2 text-lg" ></i>(98)90000-0000</a>
                        </li>
                        <li>
                            <a href="#" class="flex mb-2"><i class="fa-regular fa-envelope mr-2 text-lg"></i>meeanuncie.com</a>
                        </li>
                        <li>
                            <a href="#" class="flex mb-2"><i class="fa-solid fa-phone mr-2 text-lg"></i>(98)90000-0000</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <button id="btn-whatssap" type="button " class="text-wzp-color flex items-center font-medium text-lg px-4 py-2 sm:px-5 sm:py-3 rounded-full sm:rounded-lg"><i class="fa-brands fa-whatsapp mr-0 sm:mr-2 text-xl" ></i><p class="hidden sm:inline-block ">(98)90000-0000</p></button>
            </li>
        </ul>
        
    </nav>

    
</template>

<style scoped>
    #btn-whatssap {
        transition: .5s;
        box-shadow: inset 0px 0px 0px 2px #32BB46;
    }
    #btn-whatssap:hover, #btn-whatssap:focus {
        box-shadow: inset 12em 0 0 0  #32BB46;
        color: white;
    }
</style>