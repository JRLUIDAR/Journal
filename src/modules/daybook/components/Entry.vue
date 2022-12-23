<template>
  <div @click="$router.push({name:'entry', params:{id:entrada.id}})">
    <div class="entry-container p-2 pointer mb-2">
      <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">{{getDay}}</span>
        <span class="mx-1 fs-5">{{getMonth}}</span>
        <span class="mx-2 fs-light">{{getYear}}</span>
      </div>
     
      <div class="entry-description">
      {{shortText}}
      </div>
    </div>
  </div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {

  props:{
    entrada:{
      type:Object,
      required:true
    }
  },


  computed:{

    shortText(){
       if(this.entrada.text.length>130){
        return this.entrada.text.substring(0,130)+ " ... "
       }else{
        return this.entrada.text
       }
    },

    getDay(){
      let day=new Date(this.entrada.date)
      return day.getDate()
    },

     getMonth(){
      let month=new Date(this.entrada.date)
      return months[month.getMonth()]
    },

     getYear(){
      let year=new Date(this.entrada.date)
      return year.getFullYear()
    },

  }
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
      background: lighten($color: gray, $amount: 45);
      transition: 0.2s all ease-in;
     
  }
}

.entry-description{
   font-size: 12px;
   text-align: justify;
}
</style>
