import Global from "@/components/Global";
import axios from "axios";

export default class ServiceEmpleados {
  getDepartamentos(){
    return new Promise (function(resolve){
      let departamentos = []
      let request = "api/departamentos";
      let url = Global.urlApi + request;
      axios.get(url).then(response =>{
        departamentos = response.data;
        resolve(departamentos);
      }
      )
    })
  }

  postDepartamento(departamento){
    return new Promise(function(resolve){
      let request = "api/departamentos";
      let url = Global.urlApi + request;
      axios.post(url, departamento).then(response => {
        console.log("Departamento creado");
        resolve(response.data);
      })
    })
  }

  //buscar por el id dep dpto que recibamos
  findDepartamento(id){
    return new Promise(function(resolve){
      let request = "api/departamentos/" + id;
      let url = Global.urlApi + request;
      let departamento = {};
      axios.get(url, departamento).then(response => {
        console.log("Departamento buscado");
        departamento = response.data;
        console.log(departamento);
        resolve(departamento);
      })
    })
  }

  updateDepartamento(departamento){
    return new Promise(function(resolve){
      let request = "api/departamentos";
      let url = Global.urlApi + request;
      axios.put(url, departamento).then(response => {
        console.log("Departamento modificado");
        resolve(response);
      })
    })
  }

  deleteDepartamento(id){
    return new Promise(function(resolve){
      let request = "api/departamentos/" + id;
      let url = Global.urlApi + request;
      axios.delete(url).then(response => {
        console.log("Departamento eliminado");
        resolve(response);
      })
    })
  }
}