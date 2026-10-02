/**
 * Ambio Labs — Interactive Experience Controller
 * Lightweight, zero external dependencies, accessible.
 */

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 bg-[#06110C] border border-[#10F5A1]/50 text-[#10F5A1] text-xs font-mono rounded-xl shadow-[0_0_30px_rgba(16,245,161,0.25)] flex items-center gap-2.5 backdrop-blur-md transition-all duration-300';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-[#10F5A1] animate-ping shrink-0"></span>
    <span class="font-medium">${message}</span>
  `;
  
  toast.classList.add('show');
  
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Clipboard copy helper
function copyToClipboard(text, label = 'Elemento') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copiado al portapapeles`);
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${label} copiado al portapapeles`);
  } catch (err) {
    console.error('Fallback copy error:', err);
  }
  document.body.removeChild(textArea);
}

// Quick Bug Report Template Builder
function copyBugTemplate(appChoice = 'Giffix') {
  const template = `[REPORTE DE INCIDENCIA AMBIO LABS]
- Aplicación: ${appChoice === 'Giffix' ? 'Giffix: Stickers Animados (dev.ambiolabs.sticker)' : 'Historial de Notificaciones (dev.ambiolabs.notificationlog)'}
- Modelo de Dispositivo: (ej. Samsung S23, Pixel 8)
- Versión de Android: (ej. Android 14)
- Descripción del Error:
- Pasos para reproducir:
1.
2.
3.`;

  copyToClipboard(template, 'Plantilla de Reporte');
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close mobile menu on anchor click
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });
});\n