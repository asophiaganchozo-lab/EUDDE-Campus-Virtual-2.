
/* =====================================================
   EUDDE CAMPUS VIRTUAL
   Archivo: app.js
   ===================================================== */

const CONFIG_EUDDE = {
  preguntasActividad: 15,
  preguntasExamen: 20,
  maximosIntentos: [10, 8, 6],
  maximoArchivo: 5 * 1024 * 1024
};

const CURSOS_EUDDE = {
  "Décimo EGB": {
    "General": {
      "Matemáticas": [
        "Ecuaciones de segundo grado",
        "Teorema de Pitágoras",
        "Funciones",
        "Estadística",
        "Problemas matemáticos aplicados"
      ],
      "Lengua y Literatura": [
        "El ensayo", "La novela", "Ortografía",
        "Comprensión lectora", "Producción de textos"
      ],
      "Ciencias Naturales": [
        "El cuerpo humano", "Genética básica",
        "La tabla periódica", "El medio ambiente",
        "Ecosistemas"
      ],
      "Ciencias Sociales": [
        "Historia del Ecuador", "Geografía",
        "Democracia y ciudadanía", "Cultura ecuatoriana",
        "Derechos y responsabilidades"
      ],
      "Inglés": [
        "Present Simple", "Past Simple",
        "There is / There are", "Can / Can't",
        "Everyday vocabulary"
      ],
      "Informática": [
        "Word", "Excel", "PowerPoint",
        "Internet seguro", "Presentaciones"
      ]
    }
  },

  "1.º Bachillerato": {
    "Informática": {
      "Matemáticas": [
        "Función", "Función afín", "Recta",
        "Sistema de ecuaciones", "Vectores en el plano"
      ],
      "Física": [
        "MRU", "MRUV", "MCU", "MCUV",
        "Leyes de Newton"
      ],
      "Lengua": [
        "Neoclasicismo", "Comunicación para negocios",
        "Ensayo argumentativo", "Los eufemismos",
        "Globalización y castellano"
      ],
      "Inglés": [
        "Present Perfect", "Past Simple vs Past Continuous",
        "Used to", "British vocabulary",
        "Comparatives"
      ],
      "Emprendimiento": [
        "Qué es emprender", "Tipos de emprendimiento",
        "Idea de negocio", "Características del emprendedor",
        "Necesidades y oportunidades"
      ],
      "Ética": [
        "Valores y ética", "Derechos humanos",
        "Convivencia y respeto", "Constitución del Ecuador",
        "Ciudadanía"
      ],
      "Programación y Desarrollo de Software": [
        "Lógica y algoritmos", "Variables, condicionales y bucles",
        "Programación en Python", "Programación orientada a objetos",
        "Resolución de problemas"
      ],
      "Diseño y Desarrollo Web": [
        "HTML y CSS", "JavaScript básico",
        "Diseño responsive", "Publicar una página web",
        "Estructura de un sitio web"
      ],
      "Bases de Datos": [
        "Modelo entidad-relación", "SQL",
        "Llaves primarias y foráneas",
        "Crear una base de datos real",
        "Consultas básicas"
      ],
      "Sistemas Operativos": [
        "Windows y Linux", "Instalación y configuración",
        "Gestión de archivos y usuarios",
        "Comandos de terminal", "Administración básica"
      ],
      "Redes y Conectividad": [
        "Tipos de redes LAN, WAN y WiFi",
        "Direcciones IP y DNS", "Modelo OSI y TCP/IP",
        "Configuración de router", "Conectividad"
      ],
      "Soporte Técnico": [
        "Partes de la computadora",
        "Mantenimiento preventivo y correctivo",
        "Instalación de programas y drivers",
        "Diagnóstico de fallas", "Solución de problemas"
      ],
      "Aplicaciones Ofimáticas": [
        "Word", "Excel", "PowerPoint",
        "Google Drive y correo", "Documentos digitales"
      ],
      "Seguridad Informática": [
        "Virus, malware y phishing",
        "Contraseñas seguras y 2FA",
        "Copias de seguridad", "Firewall y antivirus",
        "Protección de información"
      ],
      "Inteligencia Artificial Aplicada": [
        "Qué es la IA", "ChatGPT y herramientas de IA",
        "Crear imágenes y textos con IA",
        "Uso ético de la IA", "Aplicaciones de IA"
      ]
    }
  },

  "2.º Bachillerato": {
    "Informática": {
      "Matemáticas": [
        "Función cuadrática", "Función exponencial y logarítmica",
        "Trigonometría", "Estadística y probabilidad", "Progresiones"
      ],
      "Física": [
        "Trabajo y energía", "Potencia",
        "Impulso y cantidad de movimiento",
        "Hidrostática", "Calor y temperatura"
      ],
      "Inglés": [
        "Present Perfect Continuous", "First Conditional",
        "Second Conditional", "Passive Voice", "Phrasal Verbs"
      ],
      "Emprendimiento": [
        "Modelo Canvas", "Estudio de mercado",
        "Marketing y ventas", "Costos y presupuesto", "Prototipo"
      ],
      "Especialidad Informática": [
        "Programación avanzada", "Desarrollo web avanzado",
        "Bases de Datos avanzadas", "Redes avanzadas",
        "Proyecto técnico"
      ]
    },

    "Ciencias": {
      "Matemáticas": [
        "Función cuadrática", "Función exponencial y logarítmica",
        "Trigonometría", "Estadística y probabilidad", "Progresiones"
      ],
      "Física": [
        "Trabajo y energía", "Potencia",
        "Impulso", "Hidrostática", "Calor y temperatura"
      ],
      "Química": [
        "Reacciones químicas", "Balanceo de ecuaciones",
        "Ácidos y bases", "Tabla periódica avanzada",
        "Estequiometría"
      ],
      "Biología": [
        "Célula", "ADN y herencia", "Ecosistemas",
        "Evolución", "Sistemas del cuerpo"
      ],
      "Inglés": [
        "Present Perfect Continuous", "First Conditional",
        "Second Conditional", "Passive Voice", "Phrasal Verbs"
      ],
      "Emprendimiento": [
        "Modelo Canvas", "Estudio de mercado",
        "Marketing", "Costos", "Prototipo"
      ]
    },

    "Contabilidad": {
      "Matemáticas": [
        "Función cuadrática", "Función exponencial",
        "Trigonometría", "Estadística", "Progresiones"
      ],
      "Contabilidad General": [
        "Activo, pasivo y patrimonio", "Libro diario",
        "Libro mayor", "Balance general", "Estado de resultados"
      ],
      "Inglés": [
        "Present Perfect Continuous", "First Conditional",
        "Second Conditional", "Passive Voice", "Phrasal Verbs"
      ],
      "Emprendimiento": [
        "Modelo Canvas", "Estudio de mercado",
        "Marketing", "Costos", "Prototipo"
      ]
    }
  },

  "3.º Bachillerato": {
    "Informática": {
      "Matemáticas": [
        "Límites", "Derivadas", "Integrales básicas",
        "Geometría en el espacio", "Matemática financiera"
      ],
      "Física": [
        "Ondas y sonido", "Óptica",
        "Electricidad: Ley de Ohm", "Magnetismo", "Física moderna"
      ],
      "Inglés": [
        "Reported Speech", "Third Conditional",
        "Relative Clauses", "Formal Letter",
        "Vocabulary for work: CV e interview"
      ],
      "Emprendimiento": [
        "Plan de negocios", "Finanzas y rentabilidad",
        "Marca y publicidad", "Emprendimiento social", "Pitch"
      ],
      "Especialidad Informática": [
        "Proyecto final de software",
        "Desarrollo de app o web completa",
        "Base de datos del proyecto",
        "Presentación y defensa",
        "Documentación técnica"
      ]
    },

    "Ciencias": {
      "Matemáticas": [
        "Límites", "Derivadas", "Integrales",
        "Geometría en el espacio", "Matemática financiera"
      ],
      "Física": [
        "Ondas y sonido", "Óptica", "Electricidad",
        "Magnetismo", "Física moderna"
      ],
      "Química": [
        "Química orgánica", "pH", "Reacciones redox",
        "Gases", "Soluciones"
      ],
      "Biología": [
        "Genética avanzada", "Biotecnología",
        "Salud y enfermedades", "Medio ambiente",
        "Proyecto de investigación"
      ],
      "Inglés": [
        "Reported Speech", "Third Conditional",
        "Relative Clauses", "Formal Letter",
        "Vocabulary for work"
      ],
      "Emprendimiento": [
        "Plan de negocios", "Finanzas", "Marca",
        "Emprendimiento social", "Pitch"
      ]
    },

    "Contabilidad": {
      "Matemáticas": [
        "Límites", "Derivadas", "Integrales",
        "Geometría en el espacio", "Matemática financiera"
      ],
      "Contabilidad Avanzada": [
        "Contabilidad de costos", "Inventarios",
        "Nómina y roles de pago", "Impuestos: IVA y Renta",
        "Auditoría básica"
      ],
      "Inglés": [
        "Reported Speech", "Third Conditional",
        "Relative Clauses", "Formal Letter",
        "Vocabulary for work"
      ],
      "Emprendimiento": [
        "Plan de negocios", "Finanzas", "Marca",
        "Emprendimiento social", "Pitch"
      ]
    }
  }
};

/* DATOS Y ESTADO */

let estadoEUDDE = {
  curso: "",
  especialidad: "",
  materia: "",
  modulo: 0,
  notas: JSON.parse(localStorage.getItem("eudde_notas") || "[]"),
  intentos: JSON.parse(localStorage.getItem("eudde_intentos") || "{}"),
  completados: JSON.parse(localStorage.getItem("eudde_completados") || "[]"),
  nombre: localStorage.getItem("eudde_nombre") || ""
};

let evaluacionActual = null;
let fotoActual = null;

const $ = id => document.getElementById(id);

function guardarEstado() {
  localStorage.setItem("eudde_notas", JSON.stringify(estadoEUDDE.notas));
  localStorage.setItem("eudde_intentos", JSON.stringify(estadoEUDDE.intentos));
  localStorage.setItem("eudde_completados", JSON.stringify(estadoEUDDE.completados));
  localStorage.setItem("eudde_nombre", estadoEUDDE.nombre);
}

function mostrarContenido(html) {
  const aula = $("contenidoAula");
  if (aula) aula.innerHTML = html;
  const seccion = $("aula");
  if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
}

function escaparHTML(valor) {
  return String(valor).replace(/[&<>"']/g, caracter => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[caracter]);
}

/* INICIO Y SELECCIÓN DE CURSOS */

function iniciarEUDDE() {
  const contenedor = $("selectoresCurso");
  if (!contenedor) {
    console.error("No se encontró el elemento selectoresCurso.");
    return;
  }

  contenedor.innerHTML = `
    <h2>Bienvenido a EUDDE Campus Virtual</h2>
    <p>Selecciona tu nivel de estudios para comenzar.</p>
    <label>Nombre del estudiante</label>
    <input id="nombreEstudiante" type="text"
      value="${escaparHTML(estadoEUDDE.nombre)}"
      placeholder="Escribe tu nombre completo">
    <div class="cursos-eudde">
      ${Object.keys(CURSOS_EUDDE).map(curso => `
        <button class="boton-curso"
          onclick="seleccionarCurso('${curso}')">
          ${curso}
        </button>
      `).join("")}
    </div>
    <div id="opcionesEspecialidad"></div>
  `;

  actualizarPanel();
}

function seleccionarCurso(curso) {
  estadoEUDDE.curso = curso;
  estadoEUDDE.nombre = $("nombreEstudiante")?.value.trim() || "";
  guardarEstado();

  const especialidades = Object.keys(CURSOS_EUDDE[curso]);
  const contenedor = $("opcionesEspecialidad");

  if (especialidades.length === 1) {
    estadoEUDDE.especialidad = especialidades[0];
    mostrarAsignaturas();
    return;
  }

  contenedor.innerHTML = `
    <h3>Selecciona tu especialidad</h3>
    <div class="especialidades-eudde">
      ${especialidades.map(especialidad => `
        <button onclick="seleccionarEspecialidad('${especialidad}')">
          ${especialidad}
        </button>
      `).join("")}
    </div>
  `;
}

function seleccionarEspecialidad(especialidad) {
  estadoEUDDE.especialidad = especialidad;
  guardarEstado();
  mostrarAsignaturas();
}

/* ASIGNATURAS Y MÓDULOS */

function obtenerMaterias() {
  return CURSOS_EUDDE[estadoEUDDE.curso]?.[estadoEUDDE.especialidad] || {};
}

function mostrarAsignaturas() {
  const materias = obtenerMaterias();
  const lista = $("listaAsignaturas");

  if (lista) {
    lista.innerHTML = Object.keys(materias).map(materia => `
      <button class="asignatura-eudde"
        onclick="abrirAsignatura('${materia}')">
        ${materia}
      </button>
    `).join("");
  }

  const titulo = $("totalAsignaturas");
  if (titulo) titulo.textContent = Object.keys(materias).length;

  mostrarPantalla("asignaturas");
  actualizarPanel();
}

function abrirAsignatura(materia) {
  estadoEUDDE.materia = materia;
  const temas = obtenerMaterias()[materia];

  mostrarContenido(`
    <h2>${escaparHTML(materia)}</h2>
    <p>Curso: ${escaparHTML(estadoEUDDE.curso)}
    · Especialidad: ${escaparHTML(estadoEUDDE.especialidad)}</p>
    <h3>Selecciona uno de los cinco módulos</h3>
    <div class="modulos-eudde">
      ${temas.map((tema, i) => `
        <button onclick="abrirModulo(${i})">
          <strong>Módulo ${i + 1}</strong>
          <span>${escaparHTML(tema)}</span>
        </button>
      `).join("")}
    </div>
    <button onclick="mostrarAsignaturas()">Volver a asignaturas</button>
  `);
}

function abrirModulo(numero) {
  estadoEUDDE.modulo = numero;
  const tema = obtenerMaterias()[estadoEUDDE.materia][numero];
  const esPractica = ["Matemáticas", "Física"].includes(estadoEUDDE.materia);

  mostrarContenido(`
    <h2>Módulo ${numero + 1}: ${escaparHTML(tema)}</h2>
    <p><strong>Asignatura:</strong> ${escaparHTML(estadoEUDDE.materia)}</p>

    <section class="contenido-modulo">
      <h3>1. Aprendamos</h3>
      <p>En este módulo estudiarás el tema:
      <strong>${escaparHTML(tema)}</strong>.</p>
      <p>Lee el contenido, identifica las ideas principales y
      relaciona lo aprendido con ejemplos de la vida cotidiana.</p>

      <h3>2. Ejemplo explicado</h3>
      <p>${esPractica
        ? "Resuelve ejercicios paso a paso. Identifica los datos, selecciona la fórmula, sustituye los valores y comprueba el resultado."
        : "Identifica los conceptos principales y busca ejemplos que permitan comprender el tema."
      }</p>

      <h3>3. Video educativo</h3>
      <p>Busca una explicación del tema en YouTube:</p>
      <a target="_blank" rel="noopener"
        href="https://www.youtube.com/results?search_query=${encodeURIComponent(estadoEUDDE.materia + " " + tema + " explicación educativa")}">
        Ver videos educativos sobre ${escaparHTML(tema)}
      </a>

      <h3>4. Recuerda</h3>
      <p>Aprender requiere práctica y constancia. ¡Sigue avanzando!</p>

      <h3>5. Actividad</h3>
      <p>Resuelve la actividad correspondiente a este módulo.</p>
      <button onclick="iniciarEvaluacion('actividad')">
        Comenzar actividad
      </button>

      <h3>6. Evaluación</h3>
      <button onclick="iniciarEvaluacion('examen')">
        Comenzar examen
      </button>
    </section>
    <button onclick="abrirAsignatura('${estadoEUDDE.materia}')">
      Volver a módulos
    </button>
  `);
}

/* EVALUACIONES */

function claveEvaluacion(tipo) {
  return [
    estadoEUDDE.curso,
    estadoEUDDE.especialidad,
    estadoEUDDE.materia,
    estadoEUDDE.modulo,
    tipo
  ].join("|");
}

/*
  Los bancos de preguntas deben contener preguntas reales,
  revisadas y específicas para cada tema.
  No se inventan respuestas correctas automáticamente.
*/

const BANCO_PREGUNTAS_EUDDE = {};

function registrarPreguntas(materia, tema, preguntas) {
  BANCO_PREGUNTAS_EUDDE[`${materia}|${tema}`] = preguntas;
}

function obtenerPreguntas() {
  const tema = obtenerMaterias()[estadoEUDDE.materia][estadoEUDDE.modulo];
  return BANCO_PREGUNTAS_EUDDE[
    `${estadoEUDDE.materia}|${tema}`
  ] || [];
}

function iniciarEvaluacion(tipo) {
  const clave = claveEvaluacion(tipo);
  const intentos = estadoEUDDE.intentos[clave] || 0;

  if (intentos >= 3) {
    alert("Ya utilizaste las tres oportunidades permitidas.");
    return;
  }

  const cantidad = tipo === "actividad"
    ? CONFIG_EUDDE.preguntasActividad
    : CONFIG_EUDDE.preguntasExamen;

  const preguntas = obtenerPreguntas();

  if (preguntas.length < cantidad) {
    mostrarContenido(`
      <h2>${tipo === "actividad" ? "Actividad" : "Examen"}</h2>
      <p>El banco de preguntas de este módulo todavía no está completo.</p>
      <p>Se necesitan ${cantidad} preguntas específicas con sus
      cuatro opciones y respuestas correctas.</p>
      <p>No se asignará una nota ficticia ni se calificará con preguntas
      de otra asignatura.</p>
      <button onclick="abrirModulo(${estadoEUDDE.modulo})">
        Volver al módulo
      </button>
    `);
    return;
  }

  evaluacionActual = {
    tipo,
    clave,
    preguntas: preguntas.slice(0, cantidad),
    respuestas: {}
  };

  mostrarEvaluacion();
}

function mostrarEvaluacion() {
  const ev = evaluacionActual;
  const esPractica = ["Matemáticas", "Física"].includes(estadoEUDDE.materia);

  mostrarContenido(`
    <h2>${ev.tipo === "actividad" ? "Actividad" : "Examen"}</h2>
    <p>Pregunta todas las respuestas antes de entregar.</p>
    <p>Intento ${ (estadoEUDDE.intentos[ev.clave] || 0) + 1 } de 3</p>

    <form id="formEvaluacion">
      ${ev.preguntas.map((pregunta, i) => `
        <fieldset>
          <legend>${i + 1}. ${escaparHTML(pregunta.pregunta)}</legend>
          ${pregunta.opciones.map((opcion, j) => `
            <label>
              <input type="radio" name="pregunta${i}"
                value="${j}" required>
              ${escaparHTML(opcion)}
            </label><br>
          `).join("")}
        </fieldset>
      `).join("")}

      ${esPractica ? `
        <h3>Fotografía del procedimiento</h3>
        <p>Sube una fotografía clara de tus ejercicios y procedimientos.</p>
        <input type="file" id="fotoProcedimiento"
          accept="image/*" capture="environment">
        <div id="vistaFoto"></div>
      ` : ""}

      <button type="submit">Entregar evaluación</button>
    </form>
  `);

  const formulario = $("formEvaluacion");
  if (formulario) {
    formulario.addEventListener("submit", entregarEvaluacion);
  }

  const foto = $("fotoProcedimiento");
  if (foto) {
    foto.addEventListener("change", seleccionarFoto);
  }
}

function seleccionarFoto(evento) {
  const archivo = evento.target.files[0];
  if (!archivo) return;

  if (!archivo.type.startsWith("image/")) {
    alert("Selecciona una imagen válida.");
    evento.target.value = "";
    return;
  }

  if (archivo.size > CONFIG_EUDDE.maximoArchivo) {
    alert("La imagen no puede superar los 5 MB.");
    evento.target.value = "";
    return;
  }

  fotoActual = archivo;
  $("vistaFoto").innerHTML = `
    <p>Fotografía seleccionada: ${escaparHTML(archivo.name)}</p>
  `;
}

function entregarEvaluacion(evento) {
  evento.preventDefault();

  const ev = evaluacionActual;
  const esPractica = ["Matemáticas", "Física"].includes(estadoEUDDE.materia);

  if (esPractica && !fotoActual) {
    alert("Debes adjuntar la fotografía de tu procedimiento.");
    return;
  }

  const formulario = new FormData(evento.target);
  let correctas = 0;

  ev.preguntas.forEach((pregunta, i) => {
    const respuesta = Number(formulario.get(`pregunta${i}`));
    if (respuesta === pregunta.correcta) correctas++;
  });

  const porcentaje = correctas / ev.preguntas.length * 10;
  const intento = (estadoEUDDE.intentos[ev.clave] || 0) + 1;
  const limite = CONFIG_EUDDE.maximosIntentos[intento - 1];
  const nota = Math.min(porcentaje, limite);

  estadoEUDDE.intentos[ev.clave] = intento;

  const anterior = estadoEUDDE.notas.find(n => n.clave === ev.clave);
  const mejorNota = anterior
    ? Math.max(anterior.nota, nota)
    : nota;

  const registro = {
    clave: ev.clave,
    curso: estadoEUDDE.curso,
    especialidad: estadoEUDDE.especialidad,
    materia: estadoEUDDE.materia,
    tema: obtenerMaterias()[estadoEUDDE.materia][estadoEUDDE.modulo],
    tipo: ev.tipo,
    intento,
    correctas,
    total: ev.preguntas.length,
    nota: mejorNota,
    fecha: new Date().toLocaleDateString("es-EC")
  };

  if (anterior) {
    Object.assign(anterior, registro);
  } else {
    estadoEUDDE.notas.push(registro);
  }

  guardarEstado();

  if (nota >= 7) {
    const id = [
      estadoEUDDE.curso,
      estadoEUDDE.especialidad,
      estadoEUDDE.materia,
      estadoEUDDE.modulo
    ].join("|");

    if (!estadoEUDDE.completados.includes(id)) {
      estadoEUDDE.completados.push(id);
    }
  }

  fotoActual = null;
  evaluacionActual = null;
  guardarEstado();
  actualizarPanel();

  mostrarContenido(`
    <h2>Resultado de la evaluación</h2>
    <p>Respuestas correctas: ${correctas} de ${ev.preguntas.length}</p>
    <h3>Nota obtenida: ${nota.toFixed(2)} / 10</h3>
    <p>Mejor nota registrada: ${mejorNota.toFixed(2)} / 10</p>
    <p>Intento: ${intento} de 3</p>
    <p>${intento < 3
      ? "Puedes volver a intentarlo si deseas mejorar tu calificación."
      : "Has utilizado tus tres oportunidades."
    }</p>
    <button onclick="abrirAsignatura('${estadoEUDDE.materia}')">
      Regresar a la asignatura
    </button>
  `);
}

/* NOTAS Y PROGRESO */

function actualizarPanel() {
  const materias = Object.keys(obtenerMaterias());
  const totalModulos = materias.reduce(
    (total, materia) => total + obtenerMaterias()[materia].length, 0
  );

  if ($("totalModulos")) $("totalModulos").textContent = totalModulos;
  if ($("modulosCompletados")) {
    $("modulosCompletados").textContent = estadoEUDDE.completados.length;
  }
  if ($("promedioGeneral")) {
    $("promedioGeneral").textContent = calcularPromedio().toFixed(2);
  }
}

function calcularPromedio() {
  if (!estadoEUDDE.notas.length) return 0;
  const suma = estadoEUDDE.notas.reduce((total, n) => total + n.nota, 0);
  return suma / estadoEUDDE.notas.length;
}

function mostrarNotas() {
  const tabla = $("tablaNotas");
  if (!tabla) return;

  if (!estadoEUDDE.notas.length) {
    tabla.innerHTML = "<p>Aún no tienes calificaciones registradas.</p>";
    return;
  }

  tabla.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Asignatura</th>
          <th>Tema</th>
          <th>Evaluación</th>
          <th>Intento</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        ${estadoEUDDE.notas.map(n => `
          <tr>
            <td>${escaparHTML(n.materia)}</td>
            <td>${escaparHTML(n.tema)}</td>
            <td>${escaparHTML(n.tipo)}</td>
            <td>${n.intento}/3</td>
            <td>${n.nota.toFixed(2)}/10</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

/* CERTIFICADOS IMPRIMIBLES */

function mostrarCertificados() {
  const contenedor = $("listaDiplomas");
  if (!contenedor) return;

  const aprobadas = estadoEUDDE.completados;

  contenedor.innerHTML = `
    <h2>Mis certificados</h2>
    <p>Los certificados se habilitan cuando se cumplen
    las condiciones académicas correspondientes.</p>
    ${aprobadas.length ? aprobadas.map(id => {
      const partes = id.split("|");
      return `
        <div class="certificado-item">
          <p>${escaparHTML(partes[2])} - Módulo ${Number(partes[3]) + 1}</p>
          <button onclick="imprimirCertificado('${id}')">
            Imprimir certificado
          </button>
        </div>
      `;
    }).join("") : "<p>Todavía no tienes módulos aprobados.</p>"}
  `;
}

function imprimirCertificado(id) {
  const partes = id.split("|");
  const nombre = estadoEUDDE.nombre || "Estudiante";
  const ventana = window.open("", "_blank");

  if (!ventana) {
    alert("Permite las ventanas emergentes para imprimir.");
    return;
  }

  ventana.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Certificado EUDDE</title>
      <style>
        body { font-family: Arial; text-align: center; padding: 50px; }
        .marco { border: 8px double #2588bd; padding: 45px; }
        h1 { color: #2588bd; }
        p { font-size: 18px; }
      </style>
    </head>
    <body>
      <div class="marco">
        <h1>EUDDE CAMPUS VIRTUAL</h1>
        <h2>Certificado de aprobación</h2>
        <p>Se certifica que</p>
        <h2>${escaparHTML(nombre)}</h2>
        <p>Ha completado satisfactoriamente:</p>
        <h3>${escaparHTML(partes[2])}</h3>
        <p>${escaparHTML(partes[0])} - ${escaparHTML(partes[1])}</p>
        <p>Módulo ${Number(partes[3]) + 1}</p>
        <p>Fecha: ${new Date().toLocaleDateString("es-EC")}</p>
        <br><br>
        <p>____________________________</p>
        <p>Firma institucional</p>
      </div>
      <script>window.onload = () => window.print();<\/script>
    </body>
    </html>
  `);
  ventana.document.close();
}

/* NAVEGACIÓN */

function mostrarPantalla(id) {
  document.querySelectorAll("main section, .seccion").forEach(seccion => {
    seccion.style.display = "none";
  });

  const destino = $(id);
  if (destino) destino.style.display = "block";
}

function volverCursos() {
  iniciarEUDDE();
  mostrarPantalla("inicio");
}

function irAAsignaturas() {
  mostrarAsignaturas();
}

function mostrarSeccion(id) {
  mostrarPantalla(id);
  if (id === "notas") mostrarNotas();
  if (id === "diplomas") mostrarCertificados();
  if (id === "inicio") actualizarPanel();
}

/* INICIALIZACIÓN */

document.addEventListener("DOMContentLoaded", () => {
  iniciarEUDDE();
  mostrarPantalla("inicio");
  mostrarNotas();
  mostrarCertificados();
});
