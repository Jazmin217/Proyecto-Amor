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
<b-container class="bv-example-row">
  <b-row>
    <b-col><h4>¿Cómo involucrarse para ayudar a niños con cáncer?</h4>
               <p>Usted puede ayudar a AMOR compartiendo nuestra misión, participando en eventos y más.</p>
    <p></p>
    <img class="grande" srcset="https://hips.hearstapps.com/hmg-prod/images/runners-kick-off-the-2018-bank-of-america-chicago-marathon-news-photo-1570740216.jpg?crop=0.940xw%3A0.795xh%3B0.0603xw%2C0.205xh&resize=640%3A360">
    <p></p>
    <h5>Unase a la caminata</h5>
    </b-col>
   
    <b-col>
   <img class= "grande" srcset="https://blog.oxfamintermon.org/wp-content/uploads/2018/07/voluntariado-onu.jpg">
    <p></p>
    <img class="grande" srcset="https://www.propellerclub-valencia.com/wp-content/uploads/2018/11/v-cena-benefica-propeller-valencia0291.jpg">
    <p></p>
    <h6>Asista a una cena de gala</h6>
    </b-col>
  </b-row>
</b-container>
<div class="text-center">
  <b-spinner variant="primary" label="Text Centered"></b-spinner>
</div>
</div>

</template>

<style>
img.grande{
  width: 250px; height: 150px;
}
h5,h6{
  text-align:inherit;
}
</style>

<script>
export default {
  name: 'tratamiento',
  methods:{
    llamarTratamiento(){
      this.$router.push('./tratamiento')    
      },
    LlamarCancer(){
    this.$router.push('./cancer')
},
 llamarventana(){
      this.$router.push('./partetres')    
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