console.log("script loaded");

function waitForSidebar() {
  const sidebar = document.querySelector('.vp-sidebar');
  const main = document.querySelector('#app');

  if (!sidebar || !main) {
    requestAnimationFrame(waitForSidebar);
    return;
  }

  console.log("Sidebar found!");
  if (document.querySelector('.sidebar-toggle-btn')) return;

  const button = document.createElement('button');
  button.innerHTML = '❮';
  button.className = 'sidebar-toggle-btn';
  button.title = 'Toggle Sidebar';

  Object.assign(button.style, {
    position: 'fixed',
    top: '65px',
    left: '275px',
    zIndex: '9999',
    background: 'var(--toggle-bg, #fff)',
    color: 'var(--toggle-color, #000)',
    border: '1px solid #ccc',
    padding: '4px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'left 0.3s ease'
  });

  button.onclick = () => {
    const collapsed = sidebar.classList.toggle('collapsed');
    button.innerHTML = collapsed ? '❯' : '❮';
    button.style.left = collapsed ? '10px' : '260px';
    main.classList.toggle('sidebar-hidden', collapsed);
    document.body.classList.toggle('sidebar-collapsed', collapsed);
  };

  document.body.appendChild(button);
}

waitForSidebar();
