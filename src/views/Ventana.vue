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
 <h1>Tipos comunes de cancer</h1>
  <p>La lista de cánceres comunes incluye cánceres que se diagnostican con mayor frecuencia en Estados Unidos (no se incluyen los cánceres de piel no melanoma):</p>
<p></p>


  
</div>
</template>

<style>
h1{
    text-align: center;
    color:#000000;
    font-weight:normal;
    font-family: cursive;
    font-size: 150%;
}


</style>


<script>

export default {
  name: 'cuidado',
  methods:{
    llamarCuidado(){
      this.$router.push('./cuidado')    
      },
      llamarTratamiento(){
      this.$router.push('./tratamiento')    
      },
    LlamarCancer(){
    this.$router.push('./cancer')
},
llamarInvolucrarse(){
      this.$router.push('./involucrarse')    
      },
      llamarventana(){
      this.$router.push('./partetres')    
      },
      LlamarCancer(){
    this.$router.push('./cancer')
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