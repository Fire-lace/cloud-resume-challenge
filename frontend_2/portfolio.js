// ===== Active link highlighting on scroll =====
    const sections = document.querySelectorAll('header.section, section.section');
    const navLinks = document.querySelectorAll('.navlinks a');
    const byId = id => document.getElementById(id);

    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const id = entry.target.getAttribute('id');
          navLinks.forEach(a=> a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

    sections.forEach(s => io.observe(s));

    // ===== Typewriter =====
    const roles = [
      'Full‑stack Developer',
      'UI/UX Craftsman',
      'Performance Tuner',
      'Open‑Source Contributor',
      'Problem Solver'
    ];
    let i = 0, j = 0, deleting = false;
    const out = document.getElementById('typewriter');

    function type(){
      const current = roles[i % roles.length];
      out.textContent = current.slice(0, j);
      if(!deleting && j < current.length){ j++; }
      else if(deleting && j > 0){ j--; }
      else {
        if(!deleting){ setTimeout(()=> deleting = true, 900); }
        else { deleting = false; i++; }
      }
      const speed = deleting ? 50 : 90;
      setTimeout(type, speed);
    }
    type();

    // ===== 3D tilt for skill cards =====
    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
    document.querySelectorAll('[data-tilt]').forEach(el =>{
      el.addEventListener('mousemove', (e)=>{
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width/2; const cy = r.top + r.height/2;
        const dx = (e.clientX - cx) / (r.width/2);
        const dy = (e.clientY - cy) / (r.height/2);
        const rx = clamp(dy * -10, -10, 10);
        const ry = clamp(dx * 10, -10, 10);
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      el.addEventListener('mouseleave', ()=>{ el.style.transform = 'rotateX(0) rotateY(0)'; });
    });

    // ===== Reveal on scroll for project cards =====
    const revealIO = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.animate([
          { transform:'translateY(16px)', opacity:0 },
          { transform:'translateY(0)', opacity:1 }
        ], { duration: 700, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards' });
          revealIO.unobserve(e.target);
        }
      })
    }, { threshold: .2 });
    document.querySelectorAll('.reveal').forEach(el=> revealIO.observe(el));

    // ===== Simple contact form handler (demo) =====
    byId('contactForm').addEventListener('submit', ()=>{
      const btn = byId('sendBtn'); const status = byId('formStatus');
      btn.disabled = true; btn.textContent = 'Sending…';
      setTimeout(()=>{
        btn.textContent = 'Sent ✓';
        status.textContent = 'Thanks! Your message has been captured (demo only).';
      }, 800);
    });

    // Year
    byId('year').textContent = new Date().getFullYear();
 