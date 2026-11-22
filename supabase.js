
// CONEXIÓN DE EUDDE CAMPUS VIRTUAL CON SUPABASE

const SUPABASE_URL = "https://zifsofgomxfcuivtecvt.supabase.co";

const SUPABASE_KEY = "sb_publishable_cEE6IBz7ugQG5_LkKWouiQ_L2tkmYDU";

// Crear conexión
window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// Guardar fotografía del procedimiento
window.guardarProcedimiento = async function ({
  curso,
  especialidad,
  materia,
  tipo,
  titulo,
  archivo
}) {
  try {
    const { data: usuarioData, error: usuarioError } =
      await window.supabaseClient.auth.getUser();

    if (usuarioError) throw usuarioError;

    const usuario = usuarioData.user;

    if (!usuario) {
      throw new Error("Debes iniciar sesión para enviar tu fotografía.");
    }

    if (!archivo || !archivo.type.startsWith("image/")) {
      throw new Error("Selecciona una fotografía válida.");
    }

    if (archivo.size > 5 * 1024 * 1024) {
      throw new Error("La fotografía no puede superar los 5 MB.");
    }

    const nombreArchivo =
      `${Date.now()}-${archivo.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;

    const ruta = `${usuario.id}/${nombreArchivo}`;

    // Subir fotografía al bucket privado
    const { error: subidaError } =
      await window.supabaseClient.storage
        .from("proceso_eudde")
        .upload(ruta, archivo);

    if (subidaError) throw subidaError;

    // Registrar la información de la fotografía
    const { data, error: registroError } =
      await window.supabaseClient
        .from("procedimientos")
        .insert({
          estudiante_id: usuario.id,
          curso,
          especialidad: especialidad || null,
          materia,
          tipo,
          titulo,
          foto_path: ruta
        })
        .select()
        .single();

    if (registroError) {
      await window.supabaseClient.storage
        .from("proceso_eudde")
        .remove([ruta]);

      throw registroError;
    }

    return {
      success: true,
      mensaje: "Fotografía guardada correctamente.",
      registro: data
    };

  } catch (error) {
    console.error("Error al guardar procedimiento:", error);
    throw error;
  }
};

console.log("EUDDE Campus Virtual conectado a Supabase");
