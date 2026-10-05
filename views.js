function layout(title, content, activeTab) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Lab 8 Node.js</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b0f19;
      --card-bg: rgba(22, 30, 49, 0.85);
      --border: rgba(255, 255, 255, 0.08);
      --accent: #6366f1;
      --accent-glow: rgba(99, 102, 241, 0.25);
      --success: #10b981;
      --text: #f3f4f6;
      --text-muted: #9ca3af;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: radial-gradient(circle at 50% 0%, #1e1b4b 0%, var(--bg) 70%);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2.5rem 1rem;
    }
    .container { width: 100%; max-width: 680px; }
    nav {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 2rem;
      background: rgba(17, 24, 39, 0.7);
      padding: 6px;
      border-radius: 999px;
      border: 1px solid var(--border);
      backdrop-filter: blur(8px);
    }
    nav a {
      color: var(--text-muted);
      text-decoration: none;
      padding: 8px 20px;
      border-radius: 999px;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }
    nav a.active, nav a:hover {
      background: var(--accent);
      color: #fff;
      box-shadow: 0 4px 14px var(--accent-glow);
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 2.5rem;
      backdrop-filter: blur(16px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(16, 185, 129, 0.12);
      color: var(--success);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(16, 185, 129, 0.25);
    }
    .badge-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--success);
      box-shadow: 0 0 8px var(--success);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }
    h1 {
      font-size: 1.9rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
      background: linear-gradient(135deg, #ffffff 40%, #a5b4fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p.lead {
      color: var(--text-muted);
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 1.8rem;
    }
    .grid-item {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border);
      padding: 1rem;
      border-radius: 12px;
    }
    .grid-item .label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 4px;
    }
    .grid-item .val {
      font-size: 0.95rem;
      font-weight: 600;
      color: #fff;
    }
    .footer {
      text-align: center;
      margin-top: 2rem;
      color: #6b7280;
      font-size: 0.82rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <nav>
      <a href="/" class="${activeTab === 'home' ? 'active' : ''}">Inicio</a>
      <a href="/acerca" class="${activeTab === 'acerca' ? 'active' : ''}">Acerca del Proyecto</a>
    </nav>
    <div class="card">
      ${content}
    </div>
    <div class="footer">
      Laboratorio 08 &bull; Aplicaciones Distribuidas &bull; Tecsup 2026
    </div>
  </div>
</body>
</html>`;
}

function homeView(port) {
  const content = `
    <div class="badge">
      <span class="badge-dot"></span>
      SERVICIO ONLINE EN RENDER
    </div>
    <h1>Bienvenidos al curso</h1>
    <p class="lead">Servidor backend desarrollado con Node.js nativo y desplegado exitosamente en la plataforma de Render Cloud.</p>
    <div class="grid">
      <div class="grid-item">
        <div class="label">Puerto Activo</div>
        <div class="val">${port}</div>
      </div>
      <div class="grid-item">
        <div class="label">Ambiente</div>
        <div class="val">Producción / Cloud</div>
      </div>
      <div class="grid-item">
        <div class="label">Hosting</div>
        <div class="val">Render Web Service</div>
      </div>
      <div class="grid-item">
        <div class="label">Control de Versiones</div>
        <div class="val">Git & GitHub</div>
      </div>
    </div>
    <p style="font-size: 0.9rem; color: var(--text-muted);">
      Prueba navegando a la nueva vista haciendo clic en <a href="/acerca" style="color: var(--accent); font-weight: 600; text-decoration: none;">Acerca del Proyecto &rarr;</a>
    </p>
  `;
  return layout('Inicio', content, 'home');
}

function acercaView(port) {
  const content = `
    <div class="badge" style="background: rgba(99, 102, 241, 0.12); color: #a5b4fc; border-color: rgba(99, 102, 241, 0.25);">
      <span class="badge-dot" style="background: #818cf8; box-shadow: 0 0 8px #818cf8;"></span>
      DETALLES TÉCNICOS
    </div>
    <h1>Acerca del Laboratorio 08</h1>
    <p class="lead">Despliegue automatizado de servicios backend mediante integración de GitHub CI/CD con Render.</p>
    <div class="grid">
      <div class="grid-item">
        <div class="label">Estudiante</div>
        <div class="val">Bryan Apaza Quispe</div>
      </div>
      <div class="grid-item">
        <div class="label">Tecnologías</div>
        <div class="val">Node.js, Dotenv, Yarn</div>
      </div>
      <div class="grid-item">
        <div class="label">Repositorio</div>
        <div class="val">repositorybackend</div>
      </div>
      <div class="grid-item">
        <div class="label">Uptime</div>
        <div class="val">Activo y Respondiendo</div>
      </div>
    </div>
    <a href="/" style="display: inline-block; background: var(--accent); color: #fff; text-decoration: none; padding: 10px 22px; border-radius: 999px; font-weight: 600; font-size: 0.9rem; box-shadow: 0 4px 14px var(--accent-glow);">&larr; Volver al Inicio</a>
  `;
  return layout('Acerca del Proyecto', content, 'acerca');
}

function notFoundView() {
  const content = `
    <div class="badge" style="background: rgba(239, 68, 68, 0.12); color: #f87171; border-color: rgba(239, 68, 68, 0.25);">
      <span class="badge-dot" style="background: #ef4444; box-shadow: 0 0 8px #ef4444;"></span>
      ERROR 404
    </div>
    <h1>Página No Encontrada</h1>
    <p class="lead">La ruta solicitada no existe en este servidor.</p>
    <a href="/" style="display: inline-block; background: var(--accent); color: #fff; text-decoration: none; padding: 10px 22px; border-radius: 999px; font-weight: 600; font-size: 0.9rem;">&larr; Volver al Inicio</a>
  `;
  return layout('404 No Encontrado', content, '');
}

module.exports = { homeView, acercaView, notFoundView };
