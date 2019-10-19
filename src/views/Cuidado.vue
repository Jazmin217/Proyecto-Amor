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
<h2>¿Que son los cuidados paliativos?</h2>
<p>Los cuidados paliativos son los cuidados para mejorar la calidad de vida de los pacientes que tienen una enfermedad grave o que pone la vida en peligro, como el cáncer. Los cuidados paliativos son un planteamiento de los cuidados que responde a la persona en su totalidad, no solo a su enfermedad. El objetivo de los cuidados paliativos es evitar o tratar, lo más pronto posible, los síntomas y los efectos secundarios de una enfermedad y de su tratamiento, y los problemas psicológicos, sociales y espirituales correspondientes.</p>
<p></p>
<img class=" grande" srcset="https://static.elcorreo.com/www/multimedia/201802/15/media/cortadas/cancer-kc1D-U509795951509kE-624x385@RC.jpg">
<p></p>
<h3>¿Qué problemas se tratan con los cuidados paliativos?</h3>
<p>Los efectos físicos y emocionales del cáncer y su tratamiento pueden ser muy diferentes de una persona a otra. Los cuidados paliativos pueden responder a una gama muy amplia de asuntos, al integrar las necesidades específicas de un individuo dentro de la atención,un especialista en cuidados paliativos tendrá en cuenta los asuntos siguientes para cada paciente:
  <p></p>
Fisico, Emocionales y de superación, Espirituales.


</div>
</template>

<style>
h2,h3{
    text-align: center;
    color:#0d47a1;
    font-weight:normal;
    font-family: cursive;
    font-size: 150%;
}
img.grande{
  width: 355px; height: 250px;
  float: initial;
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
llamarReferir(){
      this.$router.push('./referir')    
      },
       llamarDonar(){
      this.$router.push('./donar')    
      },
  }
}

</script>