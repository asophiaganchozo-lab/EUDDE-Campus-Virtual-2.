
const cursos = {
  "Décimo EGB": {
    "General": {
      "Matemáticas": ["Ecuaciones de 2do grado", "Teorema de Pitágoras", "Funciones", "Estadística"],
      "Lengua y Literatura": ["El ensayo", "La novela", "Ortografía", "Comprensión lectora"],
      "Ciencias Naturales": ["El cuerpo humano", "Genética básica", "Química: tabla periódica", "El medio ambiente"],
      "Ciencias Sociales": ["Historia del Ecuador", "Geografía", "Democracia y ciudadanía"],
      "Inglés": ["Present Simple", "Past Simple", "There is / There are", "Can / Can't"],
      "Informática": ["Word", "Excel", "PowerPoint", "Internet seguro", "Presentaciones"]
    }
  },

  "1.º Bachillerato": {
    "Informática": {
      "Matemáticas": ["Función", "Función afín", "Recta", "Sistema de ecuaciones", "Vectores en el plano"],
      "Física": ["MRU", "MRUV", "MCU", "MCUV", "Leyes de Newton"],
      "Lengua": ["Neoclasicismo", "Comunicación para negocios", "El ensayo argumentativo temático", "Los eufemismos", "Influencia de la globalización en el castellano"],
      "Inglés Pre-Intermediate Británico": ["Present Perfect", "Past Simple vs Past Continuous", "Used to", "Vocabulario británico", "Comparatives"],
      "Emprendimiento": ["Qué es emprender", "Tipos de emprendimiento", "Idea de negocio", "Características del emprendedor", "Necesidades y oportunidades"],
      "Ética": ["Valores y ética", "Derechos humanos", "Convivencia y respeto", "Constitución del Ecuador", "Ciudadanía"],
      "Programación y Desarrollo de Software": ["Lógica y algoritmos", "Variables", "Condicionales y bucles", "Programación en Python", "Programación orientada a objetos"],
      "Diseño y Desarrollo Web": ["HTML y CSS", "JavaScript básico", "Diseño responsive", "Publicar una página web"],
      "Bases de Datos": ["Modelo entidad-relación", "SQL", "Llaves primarias y foráneas", "Crear una base de datos real"],
      "Sistemas Operativos": ["Windows y Linux", "Instalación y configuración", "Gestión de archivos y usuarios", "Comandos de terminal"],
      "Redes y Conectividad": ["Tipos de redes LAN, WAN y WiFi", "Direcciones IP y DNS", "Modelo OSI y TCP/IP", "Configuración de router"],
      "Soporte Técnico": ["Partes de la computadora", "Mantenimiento preventivo y correctivo", "Instalación de programas y drivers", "Diagnóstico de fallas"],
      "Aplicaciones Ofimáticas": ["Word", "Excel", "PowerPoint", "Google Drive y correo"],
      "Seguridad Informática": ["Virus, malware y phishing", "Contraseñas seguras y 2FA", "Copias de seguridad", "Firewall y antivirus"],
      "Inteligencia Artificial Aplicada": ["Qué es la IA", "ChatGPT y herramientas de IA", "Crear imágenes y textos con IA", "Uso ético de la IA"]
    }
  },

  "2.º Bachillerato": {
    "Informática": {
      "Matemáticas": ["Función cuadrática", "Función exponencial y logarítmica", "Trigonometría", "Estadística y probabilidad", "Progresiones"],
      "Física": ["Trabajo y energía", "Potencia", "Impulso y cantidad de movimiento", "Hidrostática", "Calor y temperatura"],
      "Inglés": ["Present Perfect Continuous", "First Conditional", "Second Conditional", "Passive Voice", "Phrasal Verbs"],
      "Emprendimiento": ["Modelo Canvas", "Estudio de mercado", "Marketing y ventas", "Costos y presupuesto", "Prototipo"],
      "Especialidad Informática": ["Programación avanzada", "Desarrollo web avanzado", "Bases de Datos avanzadas", "Redes avanzadas", "Proyecto técnico"]
    },
    "Ciencias": {
      "Matemáticas": ["Función cuadrática", "Función exponencial y logarítmica", "Trigonometría", "Estadística y probabilidad", "Progresiones"],
      "Física": ["Trabajo y energía", "Potencia", "Impulso", "Hidrostática", "Calor y temperatura"],
      "Química": ["Reacciones químicas", "Balanceo de ecuaciones", "Ácidos y bases", "Tabla periódica avanzada", "Estequiometría"],
      "Biología": ["Célula", "ADN y herencia", "Ecosistemas", "Evolución", "Sistemas del cuerpo"],
      "Inglés": ["Present Perfect Continuous", "First Conditional", "Second Conditional", "Passive Voice", "Phrasal Verbs"],
      "Emprendimiento": ["Modelo Canvas", "Estudio de mercado", "Marketing", "Costos", "Prototipo"]
    },
    "Contabilidad": {
      "Matemáticas": ["Función cuadrática", "Función exponencial", "Trigonometría", "Estadística", "Progresiones"],
      "Contabilidad General": ["Activo, pasivo y patrimonio", "Libro diario", "Libro mayor", "Balance general", "Estado de resultados"],
      "Inglés": ["Present Perfect Continuous", "First Conditional", "Second Conditional", "Passive Voice", "Phrasal Verbs"],
      "Emprendimiento": ["Modelo Canvas", "Estudio de mercado", "Marketing", "Costos", "Prototipo"]
    }
  },

  "3.º Bachillerato": {
    "Informática": {
      "Matemáticas": ["Límites", "Derivadas", "Integrales básicas", "Geometría en el espacio", "Matemática financiera"],
      "Física": ["Ondas y sonido", "Óptica", "Electricidad: Ley de Ohm", "Magnetismo", "Física moderna"],
      "Inglés": ["Reported Speech", "Third Conditional", "Relative Clauses", "Writing: formal letter", "Vocabulary for work: CV e interview"],
      "Emprendimiento": ["Plan de negocios", "Finanzas y rentabilidad", "Marca y publicidad", "Emprendimiento social", "Pitch"],
      "Especialidad Informática": ["Proyecto final de software", "Desarrollo de app / web completa", "Base de datos del proyecto", "Presentación y defensa"]
    },
    "Ciencias": {
      "Matemáticas": ["Límites", "Derivadas", "Integrales", "Geometría en el espacio", "Matemática financiera"],
      "Física": ["Ondas y sonido", "Óptica", "Electricidad", "Magnetismo", "Física moderna"],
      "Química": ["Química orgánica", "pH", "Reacciones redox", "Gases", "Soluciones"],
      "Biología": ["Genética avanzada", "Biotecnología", "Salud y enfermedades", "Medio ambiente", "Proyecto de investigación"],
      "Inglés": ["Reported Speech", "Third Conditional", "Relative Clauses", "Writing: formal letter", "Vocabulary for work"],
      "Emprendimiento": ["Plan de negocios", "Finanzas", "Marca", "Emprendimiento social", "Pitch"]
    },
    "Contabilidad": {
      "Matemáticas": ["Límites", "Derivadas", "Integrales", "Geometría en el espacio", "Matemática financiera"],
      "Contabilidad Avanzada": ["Contabilidad de costos", "Inventarios", "Nómina y roles de pago", "Impuestos: IVA y Renta", "Auditoría básica"],
      "Inglés": ["Reported Speech", "Third Conditional", "Relative Clauses", "Writing: formal letter", "Vocabulary for work"],
      "Emprendimiento": ["Plan de negocios", "Finanzas", "Marca", "Emprendimiento social", "Pitch"]
    }
  }
};

let progreso = JSON.parse(localStorage.getItem("eudde_progreso")) || {
  completados: [],
  notas: [],
  intentos: {}
};

let cursoActual = "Décimo EGB";
let especialidadActual = "General";

function guardar() {
  localStorage.setItem("eudde_progreso", JSON.stringify(progreso));
}

function obtenerMaterias() {
  return cursos[cursoActual]?.[especialidadActual] || {};
}

function crearSelectores() {
  const contenedor = document.getElementById("selectoresCurso");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <label for="selectorCurso">Selecciona tu curso:</label>
    <select id="selectorCurso">
      ${Object.keys(cursos).map(curso =>
        `<option value="${curso}" ${curso === cursoActual ? "selected" : ""}>${curso}</option>`
      ).join("")}
    </select>

    <label for="selectorEspecialidad">Especialidad:</label>
    <select id="selectorEspecialidad"></select>
  `;

  document.getElementById("selectorCurso").addEventListener("change", e => {
    cursoActual = e.target.value;
    especialidadActual = Object.keys(cursos[cursoActual])[0];
    actualizarCampus();
  });

  actualizarEspecialidades();
}

function actualizarEspecialidades() {
  const selector = document.getElementById("selectorEspecialidad");
  if (!selector) return;

  const especialidades = Object.keys(cursos[cursoActual]);

  selector.innerHTML = especialidades.map(especialidad =>
    `<option value="${especialidad}" ${especialidad === especialidadActual ? "selected" : ""}>${especialidad}</option>`
  ).join("");

  selector.addEventListener("change", e => {
    especialidadActual = e.target.value;
    mostrarAsignaturas();
  }, { once: true });
}

function actualizarCampus() {
  actualizarEspecialidades();
  mostrarAsignaturas();
  actualizarResumen();

  const aula = document.getElementById("contenidoAula");
  if (aula) {
    aula.innerHTML = `
      <div class="mensaje-inicial">
        <h3>Selecciona una asignatura</h3>
        <p>Elige una materia para consultar sus cinco módulos de aprendizaje cuando estén configurados.</p>
      </div>`;
  }
}

function mostrarAsignaturas() {
  const lista = document.getElementById("listaAsignaturas");
  if (!lista) return;

  const materias = obtenerMaterias();

  lista.innerHTML = Object.entries(materias).map(([materia, temas]) => `
    <article class="asignatura" onclick="abrirMateria('${encodeURIComponent(materia)}')">
      <h3>${materia}</h3>
      <p>${temas.length} temas disponibles</p>
      <p>Ver módulos y actividades →</p>
    </article>
  `).join("");

  actualizarResumen();
}

function abrirMateria(nombreCodificado) {
  const materia = decodeURIComponent(nombreCodificado);
  const temas = obtenerMaterias()[materia];
  if (!temas) return;

  const aula = document.getElementById("contenidoAula");
  if (!aula) return;

  aula.innerHTML = `
    <h2>${materia}</h2>
    <p>Curso: ${cursoActual} — ${especialidadActual}</p>
    ${temas.map((tema, indice) => `
      <details class="modulo">
        <summary>Módulo ${indice + 1}: ${tema}</summary>
        <p>Estudia el tema y revisa los ejemplos antes de realizar la actividad.</p>
        <button onclick="abrirEvaluacion('${encodeURIComponent(materia)}','${encodeURIComponent(tema)}','actividad')">
          Realizar actividad
        </button>
        <button onclick="abrirEvaluacion('${encodeURIComponent(materia)}','${encodeURIComponent(tema)}','examen')">
          Realizar examen
        </button>
        ${progreso.completados.includes(`${cursoActual}|${especialidadActual}|${materia}|${tema}`)
          ? "<p>Actividad completada</p>" : ""}
      </details>
    `).join("")}
  `;
}

function preguntasPara(materia, tema) {
  if (materia === "Matemáticas" && tema === "Función afín") {
    return [
      { pregunta: "¿Cuál es la forma general de una función afín?", opciones: ["f(x) = mx + b", "f(x) = x²", "f(x) = 1/x", "f(x) = x³"], correcta: 0 },
      { pregunta: "¿Qué representa m en f(x) = mx + b?", opciones: ["La pendiente", "El dominio", "El exponente", "La raíz"], correcta: 0 },
      { pregunta: "Si f(x) = 2x + 3, ¿cuánto vale f(1)?", opciones: ["2", "3", "5", "6"], correcta: 2 },
      { pregunta: "¿Qué representa b?", opciones: ["La pendiente", "La intersección con el eje y", "La variable", "El exponente"], correcta: 1 },
      { pregunta: "¿Qué tipo de gráfica tiene una función afín?", opciones: ["Una recta", "Una circunferencia", "Una parábola", "Una curva cerrada"], correcta: 0 }
    ];
  }

  if (materia === "Física" && tema === "MRU") {
    return [
      { pregunta: "¿Qué significa MRU?", opciones: ["Movimiento rectilíneo uniforme", "Movimiento rápido único", "Movimiento rotatorio uniforme", "Movimiento relativo"], correcta: 0 },
      { pregunta: "¿Qué permanece constante en el MRU?", opciones: ["La velocidad", "La aceleración", "La fuerza", "La masa"], correcta: 0 },
      { pregunta: "¿Cuál es la fórmula de velocidad?", opciones: ["v = d/t", "v = m × a", "v = t/d", "v = d × t"], correcta: 0 },
      { pregunta: "¿Qué trayectoria sigue un objeto en MRU?", opciones: ["Circular", "Rectilínea", "Parabólica", "Irregular"], correcta: 1 },
      { pregunta: "Si recorre 100 m en 20 s, ¿cuál es su velocidad?", opciones: ["2 m/s", "5 m/s", "10 m/s", "20 m/s"], correcta: 1 }
    ];
  }

  return [
    { pregunta: `¿Cuál es el tema de esta evaluación? ${tema}`, opciones: [tema, "Un tema diferente", "Ninguno", "Todos son incorrectos"], correcta: 0 },
    { pregunta: "¿Qué debes hacer para comprender el tema?", opciones: ["Estudiar y practicar", "No leer", "Copiar sin entender", "No realizar actividades"], correcta: 0 },
    { pregunta: "¿Qué debes revisar antes de entregar?", opciones: ["Tus respuestas", "Solo el título", "Nada", "El color de la página"], correcta: 0 },
    { pregunta: "¿Para qué sirve una evaluación?", opciones: ["Comprobar lo aprendido", "Decorar la página", "Evitar estudiar", "No tiene utilidad"], correcta: 0 },
    { pregunta: "¿Qué debes hacer si te equivocas?", opciones: ["Repasar y aprender del error", "Abandonar", "No revisar", "Ignorar el tema"], correcta: 0 }
  ];
}

function abrirEvaluacion(materiaCodificada, temaCodificado, tipo) {
  const materia = decodeURIComponent(materiaCodificada);
  const tema = decodeURIComponent(temaCodificado);
  const requiereFoto = ["Matemáticas", "Física"].includes(materia);
  const preguntas = preguntasPara(materia, tema);

  const aula = document.getElementById("contenidoAula");
  if (!aula) return;

  const clave = `${cursoActual}|${especialidadActual}|${materia}|${tema}|${tipo}`;
  const intentos = progreso.intentos[clave] || 0;

  if (intentos >= 3) {
    aula.innerHTML = `
      <h3>Evaluación finalizada</h3>
      <p>Ya utilizaste las tres oportunidades disponibles para esta evaluación.</p>
      <button onclick="abrirMateria('${encodeURIComponent(materia)}')">Volver a módulos</button>
    `;
    return;
  }

  aula.innerHTML = `
    <h2>${tipo === "actividad" ? "Actividad" : "Examen"}: ${tema}</h2>
    <p>Oportunidad: ${intentos + 1} de 3</p>
    <p>Selecciona una respuesta por pregunta.</p>
    <form id="formEvaluacion">
      ${preguntas.map((p, i) => `
        <fieldset>
          <legend>${i + 1}. ${p.pregunta}</legend>
          ${p.opciones.map((opcion, j) => `
            <label>
              <input type="radio" name="pregunta${i}" value="${j}" required>
              ${opcion}
            </label><br>
          `).join("")}
        </fieldset>
      `).join("")}

      ${requiereFoto ? `
        <div class="entrega-foto">
          <h3>Fotografía del procedimiento</h3>
          <p>Sube una foto clara de los ejercicios resueltos en tu cuaderno. Es obligatoria.</p>
          <input type="file" id="fotoProceso" accept="image/*" required>
          <img id="vistaFoto" alt="Vista previa de tu procedimiento" style="display:none;max-width:220px;margin-top:12px;border-radius:12px;">
        </div>
      ` : ""}

      <button type="submit">Enviar ${tipo}</button>
    </form>
    <div id="resultadoEvaluacion"></div>
  `;

  const fotoInput = document.getElementById("fotoProceso");
  if (fotoInput) {
    fotoInput.addEventListener("change", () => {
      const archivo = fotoInput.files[0];
      const vista = document.getElementById("vistaFoto");
      if (archivo && vista) {
        vista.src = URL.createObjectURL(archivo);
        vista.style.display = "block";
      }
    });
  }

  document.getElementById("formEvaluacion").addEventListener("submit", e => {
    e.preventDefault();

    const respuestas = preguntas.map((p, i) => {
      const seleccion = e.target.querySelector(`input[name="pregunta${i}"]:checked`);
      return seleccion ? Number(seleccion.value) : -1;
    });

    const correctas = respuestas.filter((r, i) => r === preguntas[i].correcta).length;
    const notaBase = (correctas / preguntas.length) * 10;
    const numeroIntento = intentos + 1;
    const limite = [10, 8, 6][intentos];
    const nota = Math.min(notaBase, limite);

    if (requiereFoto) {
      const archivo = fotoInput?.files?.[0];
      if (!archivo) {
        alert("Debes subir la fotografía de tu procedimiento.");
        return;
      }

      if (!archivo.type.startsWith("image/")) {
        alert("Selecciona un archivo de imagen válido.");
        return;
      }

      if (archivo.size > 5 * 1024 * 1024) {
        alert("La fotografía no debe superar los 5 MB.");
        return;
      }
    }

    progreso.intentos[clave] = numeroIntento;
    progreso.notas.push({
      curso: cursoActual,
      especialidad: especialidadActual,
      materia,
      tema,
      tipo,
      correctas,
      total: preguntas.length,
      nota: Number(nota.toFixed(2)),
      intento: numeroIntento,
      fecha: new Date().toLocaleDateString()
    });

    if (tipo === "actividad" && correctas === preguntas.length) {
      const completado = `${cursoActual}|${especialidadActual}|${materia}|${tema}`;
      if (!progreso.completados.includes(completado)) {
        progreso.completados.push(completado);
      }
    }

    guardar();
    actualizarResumen();
    mostrarNotas();

    const resultado = document.getElementById("resultadoEvaluacion");
    resultado.innerHTML = `
      <h3>Resultado de tu evaluación</h3>
      <p>Respuestas correctas: ${correctas} de ${preguntas.length}</p>
      <p>Nota obtenida: <strong>${nota.toFixed(2)} / 10</strong></p>
      <p>Oportunidad utilizada: ${numeroIntento} de 3</p>
      <p>Máximo permitido en esta oportunidad: ${limite} / 10</p>
      <p>${nota === 10 ? "¡Excelente trabajo!" : "Puedes repasar los temas y seguir mejorando."}</p>
      <button onclick="abrirMateria('${encodeURIComponent(materia)}')">Volver a módulos</button>
    `;

    e.target.querySelectorAll("input, button").forEach(el => el.disabled = true);
  });
}

function actualizarResumen() {
  const materias = Object.keys(obtenerMaterias());
  const temas = Object.values(obtenerMaterias()).flat();
  const completados = progreso.completados.length;

  const totalAsignaturas = document.getElementById("totalAsignaturas");
  const totalModulos = document.getElementById("totalModulos");
  const modulosCompletados = document.getElementById("modulosCompletados");
  const promedioGeneral = document.getElementById("promedioGeneral");

  if (totalAsignaturas) totalAsignaturas.textContent = materias.length;
  if (totalModulos) totalModulos.textContent = temas.length;
  if (modulosCompletados) modulosCompletados.textContent = completados;

  const notas = progreso.notas.map(n => n.nota);
  const promedio = notas.length
    ? notas.reduce((a, b) => a + b, 0) / notas.length
    : 0;

  if (promedioGeneral) promedioGeneral.textContent = promedio.toFixed(2);
}

function mostrarNotas() {
  const tabla = document.getElementById("tablaNotas");
  if (!tabla) return;

  if (!progreso.notas.length) {
    tabla.innerHTML = "<p>Aún no tienes calificaciones registradas.</p>";
    return;
  }

  tabla.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Asignatura</th>
          <th>Evaluación</th>
          <th>Intento</th>
          <th>Nota</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        ${progreso.notas.map(n => `
          <tr>
            <td>${n.materia}</td>
            <td>${n.tema} (${n.tipo})</td>
            <td>${n.intento}/3</td>
            <td>${n.nota.toFixed(2)}/10</td>
            <td>${n.fecha}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function irAAsignaturas() {
  document.getElementById("asignaturas")?.scrollIntoView({
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  crearSelectores();
  mostrarAsignaturas();
  actualizarResumen();
  mostrarNotas();
});
