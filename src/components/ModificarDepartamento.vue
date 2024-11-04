<template>
  <div>
    <h1>Modificar departamento</h1>
    <form v-on:submit.prevent="updateDpto()" v-if="departamento" class="form">
      <input class="form-control" type="hidden" v-model="departamento.idDepartamento" />
      <label>Introduce un nombre:</label>
      <input class="form-control" type="text" v-model="departamento.nombre" />
      <label>Introduce una localidad:</label>
      <input class="form-control" type="text" v-model="departamento.localidad"/>
      <hr/>
      <button class="btn btn-warning">Modificar</button>
    </form>
  </div>
</template>

<script>
//El siguiente paso es realizar la modificación de los departamentos.
// Vamos a crear una ruta inicial en la que enviaremos el ID.
// Posteriormente, dentro del component de Update lo que haremos será buscar el 
// Departamento que corresponda a dicho ID y lo dibujamos en las cajas.

import ServiceEmpleados from '@/services/ServiceDepartamentos';
const service = new ServiceEmpleados();

export default {
  name: "ModificarDepartamento",
  data() {
    return {
      departamento: null
    }
  },
  mounted(){
    let id = this.$route.params.id;
    service.findDepartamento(id).then(result =>{
      this.departamento = result;
    })
  },
  methods:{
    updateDpto (){
      service.updateDepartamento(this.departamento).then(result =>{
        console.log(result);
        this.$router.push("/");
      })
    }
  }
}
</script>

<style>

</style>