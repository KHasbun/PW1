const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div>
    <a href="inicio.html" class="logo-link">
      <img src="/html/Pictures/logopeque.jpg" alt="Logo" />
      <h1>Hasbun Shop</h1>
    </a>
  </div>
      <nav>
            <ul>
                <li><a href="soporte.html">Soporte</a></li>
                <li><a href="catalogo.html">Catálogo</a></li>
                <li><a href="about.html">Acerca de</a></li>
                <li><a href="Contactanos.html">Contacto</a></li>
            </ul>
        </nav>

`;

footer.innerHTML = `
<section class="redes">
        <h3>Redes</h3>
        <button>
          <img
            src="https://cdn.pixabay.com/photo/2020/11/15/06/18/instagram-logo-5744708_640.png"
            alt="Instagram"
          />
          <a href="https://www.instagram.com/hasbun_shop/">Instagram</a>
        </button>

        <button>
          <img
            src="https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet.png"
            alt="Facebook"
          />
          <a href="https://www.facebook.com/profile.php?id=61554696435412"
            >Facebook</a
          >
        </button>
      </section>

      <section class="extras">
        <h3>preguntas?</h3>
        <a href="Preguntas.html">Preguntas</a>
        <a href="Contactanos.html">Contáctanos</a>
        <a href="about.html">Acerca de</a>
      </section>

      <h4>@hasbun Shop</h4>

`;
