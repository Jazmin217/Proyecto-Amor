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
    <div class="container">
  <div class="row">
    <div class="col-sm-4">
      
      <h1>¿QUE ES AMOR?</h1>
      <h2>Es una asociacion para ayudar a las personas que mas lo necesiten</h2>
      
    </div>
    <div class="col-sm-4">
      <br><br>
       <div class="form">
    <form class="register-form">
      <input type="text" placeholder="Nombre"/>
      <input type="password" placeholder="Contraseña"/>
      <input type="text" placeholder=""/>
      <button>create</button>
      <p class="message">Quieres registrarte? <a href="#">Crear Cuenta</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="Nombre"/>
      <input type="password" placeholder="Contraseña"/>
      <input type="submit" value="Iniciar" @click="LlamarCancer()">
      <p class="message">Quieres registrarte? <a href="#">Crear Cuenta</a></p>
    </form>
  </div>
  <p></p>
  
    </div>
    <p></p>
    
    <div class="col-sm-4">
      
      <p>
        
      </p>
      <img class="mediana" src=" https://letsfamily.es/wp-content/uploads/2018/08/ninos-con-baby-pelones_1-1080x700.jpg">
      <p></p>
  <img class="mediana" src="https://bucket-contra.s3.amazonaws.com/wp-content/uploads/2019/07/niño-con-cancer.jpg?x16862">
  
    </div>
  </div>
</div>
<div class="login-page">
  
</div>
  </div>
  
</template>


<style>
h1{
    text-align: left;
    color:#000000;
    font-weight:normal;
    font-family: cursive;
    font-size: small;
}
body{
  background: #64b5f6;
  border-bottom-color: black;
}
img.mediana{
  width: 250px; height: 180px;
  float:right;
}
img.mediana{
  width: 250px; height: 180px;
  float:right;
}
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #64b5f6; /* fallback for old browsers */
  background: -webkit-linear-gradient(right,#ffe0b2 , #ffe0b2 );
  background: -moz-linear-gradient(right, #ffe0b2, #ffe0b2 );
  background: -o-linear-gradient(right, #ffe0b2, #ffe0b2 );
  background: linear-gradient(to left, #ffe0b2, #ffe0b2 );
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
</style>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  

methods: 
{
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
