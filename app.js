
// ========================================
// EUDDE CAMPUS VIRTUAL
// REGISTRO E INICIO DE SESIÓN
// ========================================

document.addEventListener("DOMContentLoaded", iniciarEUDDE);

function iniciarEUDDE() {
  const supabase = window.supabaseClient;

  if (!supabase) {
    alert("No se pudo conectar con Supabase. Revisa supabase.js.");
    return;
  }

  const elementosOriginales = [...document.body.children];

  const panel = document.createElement("section");
  panel.id = "accesoEUDDE";

  panel.innerHTML = `
    <div style="
      max-width:480px;
      margin:40px auto;
      padding:30px;
      background:white;
      border-radius:18px;
      box-shadow:0 5px 25px #0002;
      font-family:Arial,sans-serif;
      color:#243447;
    ">
      <h1 style="text-align:center;color:#168ac0">
        EUDDE Campus Virtual
      </h1>

      <p style="text-align:center">
        Plataforma educativa
      </p>

      <div id="formularioRegistro" style="display:none">
        <h2>Crear cuenta de estudiante</h2>

        <input id="nombre" placeholder="Nombre completo" required
          style="width:100%;padding:12px;margin:7px 0;box-sizing:border-box">

        <input id="correoRegistro" type="email"
          placeholder="Correo electrónico" required
          style="width:100%;padding:12px;margin:7px 0;box-sizing:border-box">

        <input id="claveRegistro" type="password"
          placeholder="Contraseña (mínimo 8 caracteres)" required
          style="width:100%;padding:12px;margin:7px 0;box-sizing:border-box">

        <select id="cursoRegistro"
          style="width:100%;padding:12px;margin:7px 0">
          <option value="">Selecciona tu curso</option>
          <option value="Décimo EGB">Décimo EGB</option>
          <option value="1.º Bachillerato">1.º Bachillerato</option>
          <option value="2.º Bachillerato">2.º Bachillerato</option>
          <option value="3.º Bachillerato">3.º Bachillerato</option>
        </select>

        <select id="especialidadRegistro"
          style="width:100%;padding:12px;margin:7px 0">
          <option value="">Selecciona especialidad</option>
        </select>

        <button id="crearCuenta"
          style="width:100%;padding:13px;margin-top:12px;
          background:#168ac0;color:white;border:0;border-radius:9px">
          Registrarme
        </button>

        <p>¿Ya tienes cuenta?
          <a href="#" id="irLogin">Iniciar sesión</a>
        </p>
      </div>

      <div id="formularioLogin">
        <h2>Iniciar sesión</h2>

        <input id="correoLogin" type="email"
          placeholder="Correo electrónico" required
          style="width:100%;padding:12px;margin:7px 0;box-sizing:border-box">

        <input id="claveLogin" type="password"
          placeholder="Contraseña" required
          style="width:100%;padding:12px;margin:7px 0;box-sizing:border-box">

        <button id="entrarCuenta"
          style="width:100%;padding:13px;margin-top:12px;
          background:#168ac0;color:white;border:0;border-radius:9px">
          Entrar
        </button>

        <p>¿No tienes cuenta?
          <a href="#" id="irRegistro">Registrarme</a>
        </p>

        <a href="#" id="recuperarClave">Olvidé mi contraseña</a>
      </div>

      <p id="mensajeAcceso" role="status"
        style="margin-top:15px;text-align:center"></p>
    </div>
  `;

  document.body.prepend(panel);

  function mostrarAplicacion(visible) {
    elementosOriginales.forEach(elemento => {
      elemento.style.display = visible ? "" : "none";
    });
    panel.style.display = visible ? "none" : "";
  }

  function mensaje(texto, error = false) {
    const zona = document.getElementById("mensajeAcceso");
    zona.textContent = texto;
    zona.style.color = error ? "#c0392b" : "#16834a";
  }

  function actualizarEspecialidades() {
    const curso = document.getElementById("cursoRegistro").value;
    const selector = document.getElementById("especialidadRegistro");

    let opciones = [];

    if (curso === "Décimo EGB") {
      opciones = ["General"];
    } else if (curso === "1.º Bachillerato") {
      opciones = ["Informática"];
    } else if (curso === "2.º Bachillerato" ||
               curso === "3.º Bachillerato") {
      opciones = ["Informática", "Ciencias", "Contabilidad"];
    }

    selector.innerHTML = '<option value="">Selecciona especialidad</option>';

    opciones.forEach(opcion => {
      const option = document.createElement("option");
      option.value = opcion;
      option.textContent = opcion;
      selector.appendChild(option);
    });
  }

  document.getElementById("cursoRegistro")
    .addEventListener("change", actualizarEspecialidades);

  document.getElementById("irRegistro").onclick = evento => {
    evento.preventDefault();
    document.getElementById("formularioLogin").style.display = "none";
    document.getElementById("formularioRegistro").style.display = "block";
    mensaje("");
  };

  document.getElementById("irLogin").onclick = evento => {
    evento.preventDefault();
    document.getElementById("formularioRegistro").style.display = "none";
    document.getElementById("formularioLogin").style.display = "block";
    mensaje("");
  };

  document.getElementById("crearCuenta").onclick = async () => {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("correoRegistro").value.trim();
    const password = document.getElementById("claveRegistro").value;
    const curso = document.getElementById("cursoRegistro").value;
    const especialidad = document.getElementById("especialidadRegistro").value;

    if (!nombre || !email || !password || !curso || !especialidad) {
      return mensaje("Completa todos los campos.", true);
    }

    if (password.length < 8) {
      return mensaje("La contraseña debe tener al menos 8 caracteres.", true);
    }

    if (curso === "Décimo EGB" && especialidad !== "General") {
      return mensaje("Décimo EGB es de curso general.", true);
    }

    if (curso === "1.º Bachillerato" && especialidad !== "Informática") {
      return mensaje("Primero de Bachillerato solo tiene Informática.", true);
    }

    const boton = document.getElementById("crearCuenta");
    boton.disabled = true;
    boton.textContent = "Creando cuenta...";

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nombre_completo: nombre,
            curso,
            especialidad
          }
        }
      });

      if (error) throw error;

      mensaje(
        "Cuenta creada. Revisa tu correo para confirmar el registro antes de iniciar sesión."
      );

    } catch (error) {
      mensaje(error.message || "No se pudo crear la cuenta.", true);
    } finally {
      boton.disabled = false;
      boton.textContent = "Registrarme";
    }
  };

  document.getElementById("entrarCuenta").onclick = async () => {
    const email = document.getElementById("correoLogin").value.trim();
    const password = document.getElementById("claveLogin").value;

    if (!email || !password) {
      return mensaje("Escribe tu correo y contraseña.", true);
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      mostrarAplicacion(true);
      mensaje("");
      window.dispatchEvent(new Event("eudde:sesion-iniciada"));

    } catch (error) {
      mensaje(error.message || "No se pudo iniciar sesión.", true);
    }
  };

  document.getElementById("recuperarClave").onclick = async evento => {
    evento.preventDefault();

    const email = document.getElementById("correoLogin").value.trim();

    if (!email) {
      return mensaje("Escribe tu correo para recuperar la contraseña.", true);
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    mensaje(
      error ? error.message : "Revisa tu correo para recuperar tu contraseña.",
      Boolean(error)
    );
  };

  supabase.auth.getSession().then(({ data, error }) => {
    if (!error && data.session) {
      mostrarAplicacion(true);
      window.dispatchEvent(new Event("eudde:sesion-iniciada"));
    } else {
      mostrarAplicacion(false);
    }
  });
}
