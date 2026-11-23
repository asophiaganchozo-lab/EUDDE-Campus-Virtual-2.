
/* ==========================================
   EUDDE CAMPUS VIRTUAL
   Sistema académico y evaluaciones
========================================== */

const cursos = {
  "Décimo EGB": {
    "General": {
      "Matemáticas": "Ecuaciones de 2do grado|Teorema de Pitágoras|Funciones|Estadística|Repaso matemático",
      "Lengua y Literatura": "El ensayo|La novela|Ortografía|Comprensión lectora|Producción de textos",
      "Ciencias Naturales": "El cuerpo humano|Genética básica|Química: tabla periódica|El medio ambiente|Conservación de la naturaleza",
      "Ciencias Sociales": "Historia del Ecuador|Geografía|Democracia y ciudadanía|Diversidad cultural|Derechos y participación",
      "Inglés": "Present Simple|Past Simple|There is / There are|Can / Can't|Everyday vocabulary",
      "Informática": "Word|Excel|PowerPoint|Internet seguro|Presentaciones"
    }
  },

  "1.º Bachillerato": {
    "Informática": {
      "Matemáticas": "Función|Función afín|Recta|Sistema de ecuaciones|Vectores en el plano",
      "Física": "MRU|MRUV|MCU|MCUV|Leyes de Newton",
      "Lengua": "Neoclasicismo|Comunicación para negocios|El ensayo argumentativo temático|Los eufemismos|Influencia de la globalización en el castellano",
      "Inglés": "Present Perfect|Past Simple vs Past Continuous|Used to|Vocabulario británico|Comparatives",
      "Emprendimiento": "Qué es emprender|Tipos de emprendimiento|Idea de negocio|Características del emprendedor|Necesidades y oportunidades",
      "Ética": "Valores y ética|Derechos humanos|Convivencia y respeto|Constitución del Ecuador|Ciudadanía",
      "Programación y Desarrollo de Software": "Lógica y algoritmos|Variables|Condicionales y bucles|Programación en Python|Programación orientada a objetos",
      "Diseño y Desarrollo Web": "HTML y CSS|JavaScript básico|Diseño responsive|Publicar una página web|Estructura web",
      "Bases de Datos": "Modelo entidad-relación|SQL|Llaves primarias y foráneas|Crear una base de datos real|Consultas básicas",
      "Sistemas Operativos": "Windows y Linux|Instalación y configuración|Gestión de archivos y usuarios|Comandos de terminal|Administración del sistema",
      "Redes y Conectividad": "Tipos de redes LAN, WAN y WiFi|Direcciones IP y DNS|Modelo OSI y TCP/IP|Configuración de router|Conectividad",
      "Soporte Técnico": "Partes de la computadora|Mantenimiento preventivo y correctivo|Instalación de programas y drivers|Diagnóstico de fallas|Herramientas de soporte",
      "Aplicaciones Ofimáticas": "Word|Excel|PowerPoint|Google Drive y correo|Documentos digitales",
      "Seguridad Informática": "Virus, malware y phishing|Contraseñas seguras y 2FA|Copias de seguridad|Firewall y antivirus|Protección de datos",
      "Inteligencia Artificial Aplicada": "Qué es la IA|ChatGPT y herramientas de IA|Crear imágenes y textos con IA|Uso ético de la IA|Aplicaciones de IA"
    }
  },

  "2.º Bachillerato": {
    "Informática": {
      "Matemáticas": "Función cuadrática|Función exponencial y logarítmica|Trigonometría|Estadística y probabilidad|Progresiones",
      "Física": "Trabajo y energía|Potencia|Impulso y cantidad de movimiento|Hidrostática|Calor y temperatura",
      "Inglés": "Present Perfect Continuous|First Conditional|Second Conditional|Passive Voice|Phrasal Verbs",
      "Emprendimiento": "Modelo Canvas|Estudio de mercado|Marketing y ventas|Costos y presupuesto|Prototipo",
      "Especialidad Informática": "Programación avanzada|Desarrollo web avanzado|Bases de Datos avanzadas|Redes avanzadas|Proyecto técnico"
    },
    "Ciencias": {
      "Matemáticas": "Función cuadrática|Función exponencial y logarítmica|Trigonometría|Estadística y probabilidad|Progresiones",
      "Física": "Trabajo y energía|Potencia|Impulso|Hidrostática|Calor y temperatura",
      "Química": "Reacciones químicas|Balanceo de ecuaciones|Ácidos y bases|Tabla periódica avanzada|Estequiometría",
      "Biología": "Célula|ADN y herencia|Ecosistemas|Evolución|Sistemas del cuerpo",
      "Inglés": "Present Perfect Continuous|First Conditional|Second Conditional|Passive Voice|Phrasal Verbs",
      "Emprendimiento": "Modelo Canvas|Estudio de mercado|Marketing|Costos|Prototipo"
    },
    "Contabilidad": {
      "Matemáticas": "Función cuadrática|Función exponencial|Trigonometría|Estadística|Progresiones",
      "Contabilidad General": "Activo, pasivo y patrimonio|Libro diario|Libro mayor|Balance general|Estado de resultados",
      "Inglés": "Present Perfect Continuous|First Conditional|Second Conditional|Passive Voice|Phrasal Verbs",
      "Emprendimiento": "Modelo Canvas|Estudio de mercado|Marketing|Costos|Prototipo"
    }
  },

  "3.º Bachillerato": {
    "Informática": {
      "Matemáticas": "Límites|Derivadas|Integrales básicas|Geometría en el espacio|Matemática financiera",
      "Física": "Ondas y sonido|Óptica|Electricidad: Ley de Ohm|Magnetismo|Física moderna",
      "Inglés": "Reported Speech|Third Conditional|Relative Clauses|Writing: formal letter|Vocabulary for work: CV e interview",
      "Emprendimiento": "Plan de negocios|Finanzas y rentabilidad|Marca y publicidad|Emprendimiento social|Pitch",
      "Especialidad Informática": "Proyecto final de software|Desarrollo de app o web completa|Base de datos del proyecto|Presentación y defensa|Documentación técnica"
    },
    "Ciencias": {
      "Matemáticas": "Límites|Derivadas|Integrales|Geometría en el espacio|Matemática financiera",
      "Física": "Ondas y sonido|Óptica|Electricidad|Magnetismo|Física moderna",
      "Química": "Química orgánica|pH|Reacciones redox|Gases|Soluciones",
      "Biología": "Genética avanzada|Biotecnología|Salud y enfermedades|Medio ambiente|Proyecto de investigación",
      "Inglés": "Reported Speech|Third Conditional|Relative Clauses|Writing: formal letter|Vocabulary for work",
      "Emprendimiento": "Plan de negocios|Finanzas|Marca|Emprendimiento social|Pitch"
    },
    "Contabilidad": {
      "Matemáticas": "Límites|Derivadas|Integrales|Geometría en el espacio|Matemática financiera",
      "Contabilidad Avanzada": "Contabilidad de costos|Inventarios|Nómina y roles de pago|Impuestos: IVA y Renta|Auditoría básica",
      "Inglés": "Reported Speech|Third Conditional|Relative Clauses|Writing: formal letter|Vocabulary for work",
      "Emprendimiento": "Plan de negocios|Finanzas|Marca|Emprendimiento social|Pitch"
    }
  }
};

/* ==========================================
   PREGUNTAS DE PRUEBA
   Son ejemplos para comprobar el sistema.
   Después se incorporará el banco real
   de preguntas de cada tema.
========================================== */

const preguntasDemo = [
  {
    pregunta: "¿Qué debes hacer primero al resolver un ejercicio?",
    opciones: [
      "Identificar los datos del problema",
      "Elegir una respuesta al azar",
      "Ignorar el enunciado",
      "Copiar el resultado"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Por qué es importante mostrar el procedimiento?",
    opciones: [
      "Para decorar el cuaderno",
      "Para explicar cómo se obtuvo el resultado",
      "Para evitar leer el ejercicio",
      "Para cambiar los datos"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué debes hacer si un resultado no coincide?",
    opciones: [
      "Entregar sin revisar",
      "Ignorar el error",
      "Comprobar los pasos y cálculos",
      "Elegir otra respuesta al azar"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué ayuda a comprender un tema nuevo?",
    opciones: [
      "Memorizar sin entender",
      "No practicar",
      "Saltar los ejemplos",
      "Estudiar conceptos y resolver ejercicios"
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué debes hacer antes de enviar una evaluación?",
    opciones: [
      "Revisar tus respuestas",
      "Dejar preguntas vacías",
      "Cerrar la página",
      "Cambiar respuestas al azar"
    ],
    correcta: 0
  }
];

/* ==========================================
   CONFIGURACIÓN DE NOTAS Y OPORTUNIDADES
========================================== */

const MAXIMOS_POR_INTENTO = {
  1: 10,
  2: 8,
  3: 6
};

let estado = {
  curso: "Décimo EGB",
  especialidad: "General",
  materia: null,
  completados: [],
  notas: [],
  evaluaciones: {},
  actual: null
};

const STORAGE_KEY = "eudde_campus_datos_v3";
const DB_NAME = "EUDDE_ARCHIVOS";
const STORE_NAME = "fotografias";

function cargarDatos() {
  try {
    const datos = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (datos) {
      estado.completados = datos.completados || [];
      estado.notas = datos.notas || [];
      estado.evaluaciones = datos.evaluaciones || {};
    }
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}

function guardarDatos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    completados: estado.completados,
    notas: estado.notas,
    evaluaciones: estado.evaluaciones
  }));

  actualizarResumen();
  mostrarNotas();
}

function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, letra => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[letra]);
}

function obtenerMaterias() {
  return cursos[estado.curso]?.[estado.especialidad] || {};
}

function necesitaFoto(materia) {
  return ["Matemáticas", "Física"].includes(materia);
}

function claveEvaluacion(tipo, materia, tema) {
  return `${estado.curso}|${estado.especialidad}|${materia}|${tema}|${tipo}`;
}

/* ==========================================
   ALMACENAMIENTO DE FOTOGRAFÍAS
========================================== */

function abrirBD() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("El navegador no permite guardar fotografías."));
      return;
    }

    const solicitud = indexedDB.open(DB_NAME, 1);

    solicitud.onupgradeneeded = () => {
      const db = solicitud.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    solicitud.onsuccess = () => resolve(solicitud.result);
    solicitud.onerror = () => reject(solicitud.error);
  });
}

async function guardarFotografia(id, archivo) {
  const db = await abrirBD();

  return new Promise((resolve, reject) => {
    const transaccion = db.transaction(STORE_NAME, "readwrite");
    transaccion.objectStore(STORE_NAME).put({
      id,
      archivo,
      nombre: archivo.name,
      fecha: new Date().toISOString()
    });

    transaccion.oncomplete = () => {
      db.close();
      resolve(true);
    };

    transaccion.onerror = () => {
      db.close();
      reject(transaccion.error);
    };
  });
}

async function obtenerFotografia(id) {
  const db = await abrirBD();

  return new Promise((resolve, reject) => {
    const solicitud = db.transaction(STORE_NAME, "readonly")
      .objectStore(STORE_NAME).get(id);

    solicitud.onsuccess = () => {
      db.close();
      resolve(solicitud.result || null);
    };

    solicitud.onerror = () => {
      db.close();
      reject(solicitud.error);
    };
  });
}

/* ==========================================
   SELECTORES DE CURSO Y ESPECIALIDAD
========================================== */

function crearSelectores() {
  const contenedor = document.getElementById("selectoresCurso");
  if (!contenedor) return;

  const especialidades = Object.keys(cursos[estado.curso]);

  contenedor.innerHTML = `
    <label for="selectorCurso"><strong>Curso:</strong></label>
    <select id="selectorCurso">
      ${Object.keys(cursos).map(curso => `
        <option value="${escapar(curso)}"
          ${curso === estado.curso ? "selected" : ""}>
          ${escapar(curso)}
        </option>
      `).join("")}
    </select>

    <label for="selectorEspecialidad"><strong>Especialidad:</strong></label>
    <select id="selectorEspecialidad">
      ${especialidades.map(esp => `
        <option value="${escapar(esp)}"
          ${esp === estado.especialidad ? "selected" : ""}>
          ${escapar(esp)}
        </option>
      `).join("")}
    </select>
  `;

  document.getElementById("selectorCurso").onchange = event => {
    estado.curso = event.target.value;
    estado.especialidad = Object.keys(cursos[estado.curso])[0];
    estado.materia = null;
    actualizarCampus();
  };

  document.getElementById("selectorEspecialidad").onchange = event => {
    estado.especialidad = event.target.value;
    estado.materia = null;
    actualizarCampus();
  };
}

/* ==========================================
   MOSTRAR ASIGNATURAS Y MÓDULOS
========================================== */

function mostrarAsignaturas() {
  const contenedor = document.getElementById("listaAsignaturas");
  if (!contenedor) return;

  const materias = obtenerMaterias();

  contenedor.innerHTML = Object.entries(materias).map(([materia, temas]) => {
    const listaTemas = temas.split("|");
    const hechos = listaTemas.filter(tema =>
      estado.completados.includes(claveModulo(materia, tema))
    ).length;

    return `
      <article class="asignatura"
        onclick="seleccionarMateria('${encodeURIComponent(materia)}')">
        <h3>${escapar(materia)}</h3>
        <p>${listaTemas.length} módulos disponibles</p>
        <p>${hechos} de ${listaTemas.length} módulos completados</p>
      </article>
    `;
  }).join("");
}

function seleccionarMateria(materiaCodificada) {
  estado.materia = decodeURIComponent(materiaCodificada);
  mostrarModulos();
  document.getElementById("aula")?.scrollIntoView({
    behavior: "smooth"
  });
}

function mostrarModulos() {
  const contenedor = document.getElementById("contenidoAula");
  if (!contenedor || !estado.materia) return;

  const temas = obtenerMaterias()[estado.materia].split("|");

  contenedor.innerHTML = `
    <h3>${escapar(estado.materia)}</h3>
    <p>Curso: ${escapar(estado.curso)} — ${escapar(estado.especialidad)}</p>

    ${temas.map((tema, indice) => {
      const clave = claveModulo(estado.materia, tema);
      const terminado = estado.completados.includes(clave);

      return `
        <details>
          <summary>
            Módulo ${indice + 1}: ${escapar(tema)}
            ${terminado ? " ✓ Completado" : ""}
          </summary>

          <div class="contenido-modulo">
            <h4>Objetivo de aprendizaje</h4>
            <p>Comprender y aplicar los conocimientos de:
              <strong>${escapar(tema)}</strong>.
            </p>

            <h4>Actividad práctica</h4>
            <p>Responde las preguntas de selección múltiple.
              ${necesitaFoto(estado.materia)
                ? "También debes adjuntar una fotografía de tu procedimiento."
                : ""}
            </p>

            <button onclick="iniciarEvaluacion('actividad',
              '${encodeURIComponent(tema)}')">
              Realizar actividad
            </button>

            <button onclick="iniciarEvaluacion('examen',
              '${encodeURIComponent(tema)}')">
              Realizar examen
            </button>

            <p>${terminado ? "Este módulo ya está marcado como completado." : ""}</p>
          </div>
        </details>
      `;
    }).join("")}
  `;
}

/* ==========================================
   INICIAR ACTIVIDAD O EXAMEN
========================================== */

function iniciarEvaluacion(tipo, temaCodificado) {
  const tema = decodeURIComponent(temaCodificado);
  const materia = estado.materia;

  if (!materia) return;

  const clave = claveEvaluacion(tipo, materia, tema);
  const registro = estado.evaluaciones[clave] || {
    intentos: 0,
    mejorNota: 0,
    historial: []
  };

  if (registro.intentos >= 3) {
    alert(
      "Ya utilizaste las tres oportunidades permitidas. " +
      "No se puede realizar un cuarto intento."
    );
    return;
  }

  estado.actual = {
    tipo,
    tema,
    materia,
    clave,
    preguntas: preguntasDemo
  };

  mostrarFormularioEvaluacion(registro);
}

function mostrarFormularioEvaluacion(registro) {
  const contenedor = document.getElementById("contenidoAula");
  const actual = estado.actual;

  const numeroIntento = registro.intentos + 1;
  const maximo = MAXIMOS_POR_INTENTO[numeroIntento];
  const fotoObligatoria = necesitaFoto(actual.materia);

  contenedor.innerHTML = `
    <section class="evaluacion">
      <h3>
        ${actual.tipo === "actividad" ? "Actividad" : "Examen"}:
        ${escapar(actual.tema)}
      </h3>

      <p><strong>Intento:</strong> ${numeroIntento} de 3</p>
      <p><strong>Nota máxima en este intento:</strong> ${maximo}/10</p>
      <p>Responde todas las preguntas. Cada pregunta tiene una sola respuesta correcta.</p>

      <form id="formularioEvaluacion">
        ${actual.preguntas.map((pregunta, indice) => `
          <fieldset class="pregunta" style="
            border:1px solid #dceaf5;
            border-radius:14px;
            padding:16px;
            margin:15px 0;
          ">
            <legend><strong>${indice + 1}. ${escapar(pregunta.pregunta)}</strong></legend>

            ${pregunta.opciones.map((opcion, i) => `
              <label style="display:block;padding:7px;cursor:pointer">
                <input type="radio"
                  name="pregunta${indice}"
                  value="${i}"
                  required>
                ${escapar(opcion)}
              </label>
            `).join("")}
          </fieldset>
        `).join("")}

        ${fotoObligatoria ? `
          <div class="entrega-foto" style="
            background:#eaf6ff;
            padding:18px;
            border-radius:15px;
            margin:20px 0;
          ">
            <h4>📷 Fotografía del procedimiento</h4>
            <p>
              Debes subir una fotografía clara de los ejercicios
              resueltos en tu cuaderno. Es obligatoria para enviar
              esta evaluación.
            </p>

            <input
              type="file"
              id="fotoProcedimiento"
              accept="image/*"
              capture="environment"
              required
            >

            <div id="vistaPreviaFoto"></div>
          </div>
        ` : ""}

        <button type="submit">Enviar y calificar</button>
      </form>

      <button type="button" onclick="mostrarModulos()">
        Volver a los módulos
      </button>
    </section>
  `;

  if (fotoObligatoria) {
    const inputFoto = document.getElementById("fotoProcedimiento");

    inputFoto.addEventListener("change", () => {
      const archivo = inputFoto.files[0];
      const vista = document.getElementById("vistaPreviaFoto");

      if (!archivo) {
        vista.innerHTML = "";
        return;
      }

      if (!archivo.type.startsWith("image/")) {
        alert("Selecciona una fotografía válida.");
        inputFoto.value = "";
        vista.innerHTML = "";
        return;
      }

      if (archivo.size > 8 * 1024 * 1024) {
        alert("La fotografía debe pesar máximo 8 MB.");
        inputFoto.value = "";
        vista.innerHTML = "";
        return;
      }

      const url = URL.createObjectURL(archivo);
      vista.innerHTML = `
        <p>Fotografía seleccionada: ${escapar(archivo.name)}</p>
        <img src="${url}" alt="Vista previa del procedimiento"
          style="max-width:230px;max-height:230px;border-radius:12px;margin-top:10px">
      `;
    });
  }

  document.getElementById("formularioEvaluacion")
    .addEventListener("submit", enviarEvaluacion);
}

/* ==========================================
   CALIFICAR Y GUARDAR RESULTADOS
========================================== */

async function enviarEvaluacion(event) {
  event.preventDefault();

  const actual = estado.actual;
  if (!actual) return;

  const respuestas = actual.preguntas.map((pregunta, indice) => {
    const seleccion = document.querySelector(
      `input[name="pregunta${indice}"]:checked`
    );

    return seleccion ? Number(seleccion.value) : -1;
  });

  if (respuestas.some(respuesta => respuesta === -1)) {
    alert("Responde todas las preguntas antes de enviar.");
    return;
  }

  let fotoId = null;

  if (necesitaFoto(actual.materia)) {
    const archivo = document.getElementById("fotoProcedimiento")?.files[0];

    if (!archivo) {
      alert("Debes adjuntar la fotografía del procedimiento.");
      return;
    }

    fotoId = `${Date.now()}_${Math.random().toString(36).slice(2)}`;

    try {
      await guardarFotografia(fotoId, archivo);
    } catch (error) {
      alert("No se pudo guardar la fotografía. Intenta nuevamente.");
      console.error(error);
      return;
    }
  }

  const correctas = respuestas.filter((respuesta, indice) =>
    respuesta === actual.preguntas[indice].correcta
  ).length;

  const notaSinLimite = (correctas / actual.preguntas.length) * 10;

  const registro = estado.evaluaciones[actual.clave] || {
    intentos: 0,
    mejorNota: 0,
    historial: []
  };

  if (registro.intentos >= 3) {
    alert("Ya no tienes oportunidades disponibles.");
    return;
  }

  const numeroIntento = registro.intentos + 1;
  const notaMaxima = MAXIMOS_POR_INTENTO[numeroIntento];

  // La nota nunca supera el máximo permitido por intento.
  const notaObtenida = Math.min(
    notaMaxima,
    Math.round(notaSinLimite * 100) / 100
  );

  registro.intentos = numeroIntento;
  registro.mejorNota = Math.max(registro.mejorNota, notaObtenida);

  registro.historial.push({
    intento: numeroIntento,
    nota: notaObtenida,
    correctas,
    total: actual.preguntas.length,
    fotoId,
    fecha: new Date().toLocaleString("es-EC")
  });

  estado.evaluaciones[actual.clave] = registro;

  estado.notas = estado.notas.filter(nota =>
    nota.clave !== actual.clave
  );

  estado.notas.push({
    clave: actual.clave,
    curso: estado.curso,
    especialidad: estado.especialidad,
    materia: actual.materia,
    tema: actual.tema,
    tipo: actual.tipo,
    nota: registro.mejorNota,
    intentos: registro.intentos,
    fotoId
  });

  if (actual.tipo === "actividad") {
    const clave = claveModulo(actual.materia, actual.tema);

    if (!estado.completados.includes(clave)) {
      estado.completados.push(clave);
    }
  }

  guardarDatos();

  const notaTexto = notaObtenida.toFixed(2);
  const mejorTexto = registro.mejorNota.toFixed(2);

  document.getElementById("contenidoAula").innerHTML = `
    <section class="resultado" style="
      background:#eaf6ff;
      border-radius:18px;
      padding:25px;
    ">
      <h3>Evaluación enviada</h3>

      <p>Respuestas correctas: ${correctas} de ${actual.preguntas.length}</p>
      <p>Intento realizado: ${numeroIntento} de 3</p>
      <p>Máximo permitido: ${notaMaxima}/10</p>

      <h2>Nota obtenida: ${notaTexto}/10</h2>

      <p><strong>Mejor nota registrada: ${mejorTexto}/10</strong></p>

      ${fotoId ? `
        <p>📷 Fotografía del procedimiento guardada en este navegador.</p>
        <p>La fotografía queda pendiente de revisión del docente.</p>
      ` : ""}

      ${registro.intentos < 3 ? `
        <p>Te quedan ${3 - registro.intentos} oportunidad(es).</p>
      ` : `
        <p>Has utilizado las tres oportunidades disponibles.</p>
      `}

      <button onclick="mostrarModulos()">Volver a los módulos</button>
    </section>
  `;
}

/* ==========================================
   RESUMEN ACADÉMICO
========================================== */

function actualizarResumen() {
  const materias = obtenerMaterias();
  const nombres = Object.keys(materias);

  const totalModulos = nombres.reduce((total, materia) =>
    total + materias[materia].split("|").length, 0
  );

  const completados = estado.completados.filter(clave =>
    nombres.some(materia =>
      clave.startsWith(`${estado.curso}|${estado.especialidad}|${materia}|`)
    )
  ).length;

  const notasCurso = estado.notas.filter(nota =>
    nota.curso === estado.curso &&
    nota.especialidad === estado.especialidad
  );

  const promedio = notasCurso.length
    ? notasCurso.reduce((suma, nota) => suma + nota.nota, 0) / notasCurso.length
    : 0;

  const asignaturas = document.getElementById("totalAsignaturas");
  const modulos = document.getElementById("totalModulos");
  const hechos = document.getElementById("modulosCompletados");
  const promedioElemento = document.getElementById("promedioGeneral");

  if (asignaturas) asignaturas.textContent = nombres.length;
  if (modulos) modulos.textContent = totalModulos;
  if (hechos) hechos.textContent = completados;
  if (promedioElemento) promedioElemento.textContent = promedio.toFixed(2);
}

/* ==========================================
   TABLA DE CALIFICACIONES
========================================== */

function mostrarNotas() {
  const contenedor = document.getElementById("tablaNotas");
  if (!contenedor) return;

  const notas = estado.notas.filter(nota =>
    nota.curso === estado.curso &&
    nota.especialidad === estado.especialidad
  );

  if (!notas.length) {
    contenedor.innerHTML = "<p>Aún no tienes calificaciones registradas.</p>";
    return;
  }

  contenedor.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Asignatura</th>
          <th>Tema</th>
          <th>Evaluación</th>
          <th>Mejor nota</th>
          <th>Intentos</th>
        </tr>
      </thead>
      <tbody>
        ${notas.map(nota => `
          <tr>
            <td>${escapar(nota.materia)}</td>
            <td>${escapar(nota.tema)}</td>
            <td>${escapar(nota.tipo)}</td>
            <td>${nota.nota.toFixed(2)}/10</td>
            <td>${nota.intentos}/3</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

/* ==========================================
   NAVEGACIÓN
========================================== */

function irAAsignaturas() {
  document.getElementById("asignaturas")?.scrollIntoView({
    behavior: "smooth"
  });
}

function actualizarCampus() {
  crearSelectores();
  mostrarAsignaturas();

  const aula = document.getElementById("contenidoAula");

  if (aula) {
    aula.innerHTML = `
      <div class="mensaje-inicial">
        <h3>Selecciona una asignatura</h3>
        <p>Elige una materia para consultar sus módulos.</p>
      </div>
    `;
  }

  actualizarResumen();
  mostrarNotas();
}

/* ==========================================
   INICIALIZACIÓN
========================================== */

function iniciarCampus() {
  cargarDatos();
  actualizarCampus();
}

window.seleccionarMateria = seleccionarMateria;
window.iniciarEvaluacion = iniciarEvaluacion;
window.mostrarModulos = mostrarModulos;
window.irAAsignaturas = irAAsignaturas;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarCampus);
} else {
  iniciarCampus();
}
