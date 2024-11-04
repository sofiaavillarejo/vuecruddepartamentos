<template>
  <div>
    <h1>Departamentos Component</h1>
    <img src="./../assets/images/loading.jpg" v-if="status == false" style="width: 200px;"/>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Id dpto</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dep in departamentos" :key="dep">
          <td>{{ dep.idDepartamento }}</td>
          <td>{{ dep.nombre }}</td>
          <td>{{ dep.localidad }}</td>
          <td>
            <router-link class="btn btn-warning" :to="'/details' + '/' + dep.idDepartamento + '/' + dep.nombre + '/' + dep.localidad">Detalles</router-link>
            <router-link class="btn btn-info" :to="'/update' + '/' + dep.idDepartamento">Modificar</router-link>
            <router-link class="btn btn-danger" :to="'/delete' + '/' + dep.idDepartamento">Eliminar</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceDepartamentos';
const service = new ServiceEmpleados();

export default {
  name: "DepartamentosComponent",
  data(){
    return {
      departamentos: [], 
      status: false
    }
  },
  mounted(){
    service.getDepartamentos().then(result => {
      this.departamentos = result;
      console.log(this.departamentos)
      this.status = true;
    })  
  }
}
</script>

<style>

</style>