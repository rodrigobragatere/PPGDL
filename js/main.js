(function () {
  "use strict";

  /* Navegação ativa ao rolar */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".site-header .nav-link");

  function setActiveNav() {
    let current = "";
    const scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNav);
  setActiveNav();

  /* Filtro de projetos por disciplina */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card-col");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const filter = btn.dataset.filter;

      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      projectCards.forEach(function (col) {
        const discipline = col.dataset.discipline;
        if (filter === "all" || discipline === filter) {
          col.style.display = "";
          col.classList.add("visible");
        } else {
          col.style.display = "none";
        }
      });
    });
  });

  /* Animação fade-in ao entrar na viewport */
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-in").forEach(function (el) {
    observer.observe(el);
  });

  /* Fechar menu mobile ao clicar em link */
  const navbarCollapse = document.getElementById("mainNav");
  if (navbarCollapse) {
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse && navbarCollapse.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });
  }
})();
