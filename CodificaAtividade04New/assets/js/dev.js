function applyBackgroundClass() {
    const toggleState = localStorage.getItem('toggleState') === 'true';
    document.getElementById('darkModeToggle').checked = toggleState;
    toggleClassElements(toggleState);
  }

  function toggleDarkMode() {
    const toggle = document.getElementById('darkModeToggle').checked;
    localStorage.setItem('toggleState', toggle);
    toggleClassElements(toggle);
  }

  function toggleClassElements(toggle) {
    document.querySelectorAll('.bg-white, .bg-light, .text-white, .bg-secondary, .bg-dark, .text-black').forEach(element => {
      if (toggle) {
        if (element.classList.contains('bg-white')) {
          element.classList.replace('bg-white', 'bg-secondary');
        } else if (element.classList.contains('bg-light')) {
          element.classList.replace('bg-light', 'bg-dark');
        } else if (element.classList.contains('text-white')) {
          element.classList.replace('text-white', 'text-black');
        } else if (element.classList.contains('bg-secondary')) {
          element.classList.replace('bg-secondary', 'bg-white');
        } else if (element.classList.contains('bg-dark')) {
          element.classList.replace('bg-dark', 'bg-light');
        } else if (element.classList.contains('text-black')) {
          element.classList.replace('text-black', 'text-white');
        }
      } else {
        if (element.classList.contains('bg-secondary')) {
          element.classList.replace('bg-secondary', 'bg-white');
        } else if (element.classList.contains('bg-dark')) {
          element.classList.replace('bg-dark', 'bg-light');
        } else if (element.classList.contains('text-black')) {
          element.classList.replace('text-black', 'text-white');
        } else if (element.classList.contains('bg-white')) {
          element.classList.replace('bg-white', 'bg-secondary');
        } else if (element.classList.contains('bg-light')) {
          element.classList.replace('bg-light', 'bg-dark');
        } else if (element.classList.contains('text-white')) {
          element.classList.replace('text-white', 'text-black');
        }
      }
    });
  }

  // Aplica a classe de fundo armazenada no localStorage ao carregar a página
  applyBackgroundClass();