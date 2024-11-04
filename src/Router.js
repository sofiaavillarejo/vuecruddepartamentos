import { createWebHistory, createRouter } from "vue-router";
import DepartamentosComponent from "./components/DepartamentosComponent.vue";
import CrearDepartamento from "./components/CrearDepartamento.vue";
import DetailsComponent from "./components/DetailsComponent.vue";
import ModificarDepartamento from "./components/ModificarDepartamento.vue";
import DeleteDepartamento from "./components/DeleteDepartamento.vue";

const myRoutes = [
  {
    path: "/", component: DepartamentosComponent
  },
  {
    path: "/creardepartamento", component: CrearDepartamento
  },
  {
    path: "/details/:id/:nombre/:localidad", component: DetailsComponent
  },
  {
    path: "/update/:id", component: ModificarDepartamento
  },
  {
    path: "/delete/:id", component: DeleteDepartamento
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

export default router;