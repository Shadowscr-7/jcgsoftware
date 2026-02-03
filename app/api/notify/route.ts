import { NextRequest, NextResponse } from "next/server";

// API para capturar consultas rápidas y notificar a Julio
export async function POST(req: NextRequest) {
  try {
    const { name, email, message, type } = await req.json();

    // Validaciones
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email y mensaje son requeridos" },
        { status: 400 }
      );
    }

    // Aquí puedes agregar lógica para:
    // 1. Enviar email a Julio
    // 2. Guardar en base de datos
    // 3. Enviar notificación (Slack, Telegram, etc.)
    // 4. Integrar con CRM

    console.log("📧 Nueva consulta recibida:", {
      name,
      email,
      message,
      type,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implementar envío de email real
    // Ejemplo con Resend, SendGrid, o similar:
    /*
    await sendEmail({
      to: "tu-email@ejemplo.com",
      subject: `Nueva ${type} de ${name || email}`,
      html: `
        <h2>Nueva Consulta desde Portfolio</h2>
        <p><strong>Tipo:</strong> ${type}</p>
        <p><strong>Nombre:</strong> ${name || "No proporcionado"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    return NextResponse.json({
      success: true,
      message: "Consulta recibida. Julio te responderá pronto.",
    });
  } catch (error) {
    console.error("Error al procesar consulta:", error);
    return NextResponse.json(
      { error: "Error al procesar tu consulta" },
      { status: 500 }
    );
  }
}
