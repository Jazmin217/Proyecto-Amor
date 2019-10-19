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

 <b-card-group>
    <b-card title="Cirugía para tratar el cáncer" img-src="http://scd.es.rfi.fr/sites/espanol.filesrfi/imagecache/rfi_large_600_338/sites/images.rfi.fr/files/aef_image/departement-pediatre_b.jpg" img-alt="Image" img-top>
      <b-card-text>
        Se hace para extirpar el tumor o reduccion del tumor, alivio de los sintomas del cancer pero la cirugia tiene muchos riesgos como una infeccion, dolor antes de la cirugia se hacen varios examenes como ser el de sangre,Radiografia de torax, Electrocardiograma.
      </b-card-text>
      <template v-slot:footer>
        
      </template>
    </b-card>

    <b-card title="Quimioterapia" img-src="https://www.extra.ec/binrepository/768x587/0c10/768d432/none/5419931/RXGK/image_content_24516708_20180202170539.jpg" img-alt="Image" img-top>
      <b-card-text>
       Es el uso de fármacos para destruir las células cancerosas. Actúa evitando que las células cancerosas crezcan y se dividan en más células. Como las células cancerosas suelen crecer y dividirse más rápido que las células normales, la quimioterapia tiene mayor efecto en las células cancerosas. Sin embargo, los fármacos utilizados para la quimioterapia son fuertes y pueden dañar a las células sanas de todos modos.
      </b-card-text>
      <template v-slot:footer>
        
      </template>
    </b-card>

    <b-card title="Radioterapia" img-src="https://encolombia.com/wp-content/uploads/2018/05/leucemia-linfoma-radioterapia.jpg" img-alt="Image" img-top>
      <b-card-text>
       La radioterapia no destruye de inmediato las células cancerosas. Se requieren días o semanas de tratamiento antes de que el ADN esté dañado lo suficiente para que mueran las células cancerosas. Luego, las células cancerosas siguen muriéndose semanas o meses después de terminar la radioterapia,En dosis altas, la radioterapia destruye las células cancerosas o hace lento su crecimiento, al dañar su ADN. 
      </b-card-text>
      <template v-slot:footer>
       
      </template>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
export default {
  name: 'como',
  methods:{
    llamarComo(){
      this.$router.push('./como')    
      },
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
        llamarUno(){
    this.$router.push('./dos')
},
llamarReferir(){
      this.$router.push('./referir')    
      },
       llamarDonar(){
      this.$router.push('./donar')    
      },
      llamarInvolucrarse(){
      this.$router.push('./involucrarse')    
      },
  }
}

</script>