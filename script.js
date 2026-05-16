// ── Scroll reveal

  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, i) => {

      if (entry.isIntersecting) {

        entry.target.style.transitionDelay = (i % 4) * 0.08 + 's';

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);

      }

    });

  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  // ── Nav toggle (mobile)

  function toggleNav() {

    document.getElementById('navLinks').classList.toggle('open');

  }

  // Close on link click

  document.querySelectorAll('#navLinks a').forEach(a => {

    a.addEventListener('click', () => {

      document.getElementById('navLinks').classList.remove('open');

    });

  });

  // ── Floating CTA visibility

  const floatingCta = document.getElementById('floatingCta');

  window.addEventListener('scroll', () => {

    floatingCta.style.opacity = window.scrollY > 400 ? '1' : '0';

    floatingCta.style.pointerEvents = window.scrollY > 400 ? 'all' : 'none';

  });

  floatingCta.style.opacity = '0';

  // ── Form submit feedback

  function handleSubmit(button) {

    button.disabled = true;

    button.innerHTML = "Sending...";

    const firstName =

      document.querySelector('input[name="firstname"]').value;

    const lastName =

      document.querySelector('input[name="lastname"]').value;

    const email =

      document.querySelector('input[name="email"]').value;

    const service =

      document.querySelector('select[name="service"]').value;

    const message =

      document.querySelector('textarea[name="message"]').value;

    const formData = new FormData();

    formData.append("firstName", firstName);

    formData.append("lastName", lastName);

    formData.append("email", email);

    formData.append("service", service);

    formData.append("message", message);

    formData.append("timestamp", new Date().toLocaleString());

    fetch("https://hook.eu1.make.com/ecmhfunq98p2bo25o8oi2aeh2d9ouc28", {

        method: "POST",

        body: formData

    })

    .then(() => {

        button.innerHTML = "✅ Message Sent!";

        button.style.background =

          "linear-gradient(135deg, #059669, #10b981)";

    })

    .catch((err) => {

        console.error(err);

        button.innerHTML = "❌ Failed";

        button.disabled = false;

    });

}

  // ── Nav scroll shadow

  window.addEventListener('scroll', () => {

    const nav = document.getElementById('nav');

    nav.style.background = window.scrollY > 30

      ? 'rgba(17,24,39,0.95)'

      : 'rgba(17,24,39,0.7)';

  });
