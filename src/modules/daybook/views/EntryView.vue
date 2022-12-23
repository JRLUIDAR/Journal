<template>
  <div v-if='entrada'>
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{dia}}</span>
        <span class="mx-1 fs-3">{{mes}}</span>
        <span class="mx-2 fs-4">{{año}}</span>
      </div>

      <div>
        <button class="btn btn-danger mx-2">
          Borrar <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary mx-2">
          Subir Imagen<i class="fa fa-cloud-upload-alt mx-1"></i>
        </button>
      </div>
    </div>

    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder=" ¿ Que ha pasado hoy? " v-model="entrada.text" rows="50"></textarea>
    </div>
    <img  src="https://cdn.pixabay.com/photo/2022/11/28/23/28/mountains-7623362_960_720.jpg"   alt="imagen-entrada" />
    <Fab icon="fa-save"  @on:click='saveEntry'/>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue"
import {mapGetters,mapActions} from 'vuex'
import mifecha from '../helpers/getDayMonthYear'

export default {

  props:{

    id:{
      type:String,
      required:true
    }
  },

  data(){
    return {
      entrada:null
    }
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },

  computed:{
     ...mapGetters('dayBookStore',['getEntriesById']),

    dia(){
      const {dia}=mifecha(this.entrada.date)
      return dia
    },

    mes(){
      const {mes}=mifecha(this.entrada.date)
      return mes
    },
    año(){
      const {año}=mifecha(this.entrada.date)
      return año

    }
  },

  methods:{
     ...mapActions('dayBookStore',['updateEntries']),
    //llamamos al store para recuperar un getter
    loadEntries(){
        const entradaId= this.getEntriesById(this.id)
        if (!entradaId) return  this.$router.push({name:'home'})
        this.entrada=entradaId   
    },

    async saveEntry(){
      this.updateEntries(this.entrada)
    }
  },
    created(){
     this.loadEntries()
  },

  watch:{
    id(){
      this.loadEntries()
    }
  }

  
};
</script>

<style lang="scss" scoped>

textarea{
  border: none;
  height: 75%;
  font-family: Airbus;

  &:focus{
    outline: none;
  }
}

img{
    width: 200px;
    position: fixed;
    bottom: 120px;
    right: 20px;
    box-shadow:5px -5px 14px;
}

</style>
