async function loadHTML(id, url) {
  const container = document.getElementById(id);
  const resp = await fetch(import.meta.env.BASE_URL + url);
  const text = await resp.text();
  container.innerHTML = text;
}

// cargar header y footer
loadHTML('header-placeholder', 'partials/header.html');
loadHTML('footer-placeholder', 'partials/footer.html');

