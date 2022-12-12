import express from "express";
import { actualizarCurso, borrarCurso, crearCurso, obtenerCursos, obtenerCursosPorId } from "../controllers/cursos.js";


const Router = express.Router();

// rutas para proyecto cursos
Router.get("/cursos", obtenerCursos);
Router.get("/cursos/:id", obtenerCursosPorId);
Router.delete("/cursos/:id", borrarCurso);
Router.put("/cursos/:id", actualizarCurso);
Router.post("/cursos", crearCurso);

export default Router;