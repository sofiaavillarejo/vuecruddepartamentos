<template>
  <div>
    <h1>Eliminar departamento</h1>
  </div>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceDepartamentos';
const service = new ServiceEmpleados();
export default {
  name: "DeleteDepartamento",
  mounted(){
    let id = this.$route.params.id;
    service.deleteDepartamento(id).then(result => {
      console.log(result);
      this.$router.push("/");
    })
  },
}
</script>

<style>

</style>