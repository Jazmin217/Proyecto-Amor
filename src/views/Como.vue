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
    <b-col><h4>¿Cómo donar a nuestro hospital de niños?</h4>
               <p>Al donar a AMOR, usted estará apoyando la misión de salvar las vidas de niños enfermos como María Isabella, una niña que le encanta el aguacate, Minnie Mouse, y pasando tiempo con su hermano mayor.</p>

  <b-button variant="danger">Donar Ahora</b-button>
  <b-button variant="success">Conozca su Historia</b-button>

  <p></p>
  <h5>Ayude a niños que luchan contra el cáncer </h5>
  <p>Cuando usted decide donar mensualmente a Amor, se convierte en Ángel de Esperanza para niños y familias que luchan contra el cáncer y otras enfermedades catastróficas.</p>
  <p></p>
  <img class="grande" srcset="https://static.plustv.pe/imagen/interna/sumate-a-la-campana-nacional-magia-para-ayudar-a-los-ninos-con-cancer-dfa6c.jpg"> 
  <p></p>
   <b-button variant="danger">Ver mas</b-button>
    </b-col>
   
    <b-col><img class="grande" srcset="http://libertador.mx/wp-content/uploads/2018/10/c%C3%A1ncer-infantil.jpg"></b-col>
  </b-row>
</b-container>
</div>
</template>

<style>
h4,h5{
    text-align:initial;
    color:#0d47a1;
    font-weight:normal;
    font-family: cursive;
    font-size: 150%;
}

P{
  text-align: initial;
}
img.grande{
  width: 350px; height: 250px;
}
</style>

<script> 
export default {
  name: 'involucrarsse',
  methods:{
    llamarInvolucrarse(){
      this.$router.push('./involucrarse')    
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
 llamarTratamiento(){
        this.$router.push('./tratamiento')
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