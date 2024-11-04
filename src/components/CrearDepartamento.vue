<template>
  <div>
    <h1>Crear departamento</h1>
    <form v-on:submit.prevent="crearDpto()" class="form">
      <label>Introduce un id:</label>
      <input class="form-control" type="number" v-model="departamento.idDepartamento"/>
      <label>Introduce un nombre:</label>
      <input class="form-control" type="text" v-model="departamento.nombre"/>
      <label>Introduce una localidad:</label>
      <input class="form-control" type="text" v-model="departamento.localidad"/>
      <hr/>
      <button class="btn btn-success">Crear</button>
    </form>
  </div>
</template>

<script>

import ServiceEmpleados from '@/services/ServiceDepartamentos';
const service = new ServiceEmpleados();

export default {
  name: "CrearDepartamento",
  data(){
    return {
      departamento: {
        idDepartamento: 0,
        nombre: '',
        localidad: ''
      },
      departamentos: []
    }
  },
  methods: {
    crearDpto(){
      const nuevoDepartamento = {
        idDepartamento: this.departamento.idDepartamento,
        nombre: this.departamento.nombre,
        localidad: this.departamento.localidad
      };

      service.postDepartamento(nuevoDepartamento).then(result => {
        this.departamentos.push(result);
        //al crearse, me redirige a home
        this.$router.push("/");
      })
    }
  },
  mounted(){
    service.getDepartamentos().then(result => {
      this.departamentos = result;
    })
  }
}
</script>

<style>

</style>