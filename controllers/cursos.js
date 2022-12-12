import Cursos from "../models/cursos.js";

export const obtenerCursos = async (request, response) => {
try {
  const curso = await Cursos.findAll();
  response.send(curso)
} catch (err) {
  console.log(err);
}
}

export const obtenerCursosPorId = async (request, response) => {
try {
  const curso = await Cursos.findByPk(request.params.id);
  if (!curso) {
  response.status(404).send({message: `No se encontro ningún curso con el id ${request.params.id}`
  });
  }
  response.send(curso)
} catch (err) {
  console.log(err);
}
}

export const crearCurso = async(request, response) => {
try {
  await Cursos.create(request.body);
  response.json({
    "message": "Curso creado",
  });
} catch (err) {
  console.log(err);
}
}

export const borrarCurso = async (request, response) => {
try {
  const curso = await Cursos.findByPk(request.params.id);
  if (!curso) {
  response.status(404).send({message: `No se encontro un curso con el id ${request.params.id}`
  });
  return;
  }
  await curso.destroy({
  where: {
    id: request.params.id
  }
  });
  response.json({
  "message": "Curso eliminado"
  });
} catch (err) {
  console.log(err);
}
}

export const actualizarCurso = async (request, response) => {
try {
  const curso = await Cursos.findByPk(request.params.id);
  if (!curso) {
  response.status(404).send({message: `No se encontro ningún curso con el id ${request.params.id}`
  });
  return;
  }
  await curso.update(request.body, {
  where: {
    id: request.params.id
  }
  });
  response.json({
  "message": "Curso actualizado"
  });
} catch (err) {
  console.log(err);
}
};

