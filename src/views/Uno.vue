<template>
<div>
  <b-button variant="danger" @click="llamarReferir()">Referir Pacientes</b-button>,
  <b-button variant="success" @click="llamarDonar()">Donar Ahora</b-button>
  <p></p>
<b-navbar toggleable="lg" type="dark" variant="info">  
    <b-navbar-brand href="#">Amor</b-navbar-brand>
    <p>
   <b-button variant="dark" @click="llamarUno()">Cancer</b-button>
  <b-button variant="danger" @click="llamarventana()">Tipos de cancer </b-button>
  <b-button variant="success" @click="llamarCuidado()" >Cuidado </b-button>
   <b-button variant="warning" @click="llamarTratamiento()">Tratamiento</b-button>
    <b-button variant="secondary" @click="llamarComo()">Como Donar</b-button>
  <b-button variant="light" @click="llamarInvolucrarse()">Como involucrarse</b-button>
  </p>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lenguaje" right>
          <b-dropdown-item href="#">ENGLISH</b-dropdown-item>
          <b-dropdown-item href="#">ESPAÑOL</b-dropdown-item>
          <b-dropdown-item href="#">RUSO</b-dropdown-item>
          <b-dropdown-item href="#">FRANCES</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Usuario</em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Salir</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
<p></p>
  
  <div>
    <b-card-group deck>
      <b-card bg-variant="Naturaleza del Cancer" text-variant="Naturaleza del Cancer" header="Naturaleza del Cancer" class="Naturaleza del Cancer">
        <b-card-text>El cáncer no es una sola enfermedad sino una colección de enfermedades relacionadas que pueden ocurrir casi en cualquier lugar del cuerpo. En su forma más simple, el cáncer es una enfermedad de los genes en las células de nuestro cuerpo.</b-card-text>
      </b-card>

      <b-card bg-variant="secondary" text-variant="white" header="Causas" class="text-center">
        <b-card-text>El cáncer es ocasionado por cambios (mutaciones) en el ADN dentro de las células. El ADN dentro de una célula viene en un gran número de genes individuales, cada uno contiene un grupo de instrucciones que indica a la célula qué funciones realizar, y cómo crecer y dividirse.</b-card-text>
      </b-card>

      <b-card bg-variant="success" text-variant="white" header="Prevencion" class="text-center">
        <b-card-text>La prevención del cáncer es lo que se hace para bajar el riesgo de padecer cáncer. Esto puede incluir mantener un estilo de vida sano, evitar la exposición a sustancias que se sabe causan cáncer y vacunarse o tomar los medicamentos que pueden proteger para no padecer cáncer.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-5">
    <b-card-group deck>
      <b-card bg-variant="info" text-variant="dark" header="Deteccion" class="text-center">
        <b-card-text>El propósito de los exámenes de detección de cáncer es encontrar cáncer temprano, antes de que cause síntomas y cuando podría ser más fácil que se trate con éxito.</b-card-text>
      </b-card>

      <b-card bg-variant="warning" text-variant="white" header="Cancer Avanzado" class="text-center">
        <b-card-text>
Pérdida de energía y la sensación de cansancio y/o debilidad: pueden empeorar tanto que es posible que usted tenga dificultades para hacer las tareas cotidianas, como bañarse o vestirse. Las personas con cáncer avanzado a menudo necesitan ayuda para realizar esas tareas. En algún momento, puede que estas personas necesiten pasar la mayor parte del tiempo en cama. (Es importante enfatizar que algunos tratamientos de cáncer también pueden causar estos síntomas).
Pérdida de peso (sin tratar de bajar de peso)</b-card-text>
      </b-card>

      <b-card bg-variant="danger" text-variant="white" header="Como hacer frente al Cancer" class="text-center">
        <b-card-text>La gente enfrenta el cáncer como cualquier otra situación que tiene que enfrentar en la vida: cada persona lo hace en su propia forma. Con el tiempo y la práctica, la mayoría encuentra la manera de llevar a cabo sus labores, pasatiempos y relaciones interpersonales. Encuentran un modo nuevo o distinto que les permite vivir sus vidas al máximo.</b-card-text>
      </b-card >
    </b-card-group> 
  </div>

</div>
</template>

<script>
export default {
  name: 'partetres',
  methods:{
    llamarventana(){
      this.$router.push('./partetres')    
      },
      LlamarCancer(){
    this.$router.push('./cancer')
},
llamarInvolucrarse(){
      this.$router.push('./involucrarse')    
      },
       LlamarCancer(){
    this.$router.push('./cancer')
},
 llamarCuidado(){
      this.$router.push('./cuidado')    
      },
       llamarComo(){
      this.$router.push('./como')    
      },
      llamarTratamiento(){
        this.$router.push('./tratamiento')
      },
        llamarUno(){
    this.$router.push('./dos')
},
llamarReferir(){
      this.$router.push('./referir')    
      },
       llamarDonar(){
      this.$router.push('./donar')    
      },
  }
}
</script>
