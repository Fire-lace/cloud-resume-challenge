// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(theme) {
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
  } else {
    root.removeAttribute("data-theme");
  }
  localStorage.setItem("portfolio-theme", theme);
}

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  setTheme(savedTheme);
}

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  setTheme(current);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Project modal
const projectModal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

const projectDetails = {
  advanced1: {
    title: "Multi-Cloud Kubernetes Platform – Technical Breakdown",
    bullets: [
      "Cluster topology: separate clusters per region with shared control plane policies.",
      "Service mesh: Istio for traffic management, mTLS, and observability across services.",
      "Networking: centralized ingress with global load balancing and DNS-based failover.",
      "Security: Vault for secrets, OPA for policy-as-code, and hardened node images.",
      "GitOps: ArgoCD managing application manifests, environment overlays, and rollbacks.",
      "Resilience: pod disruption budgets, horizontal/vertical autoscaling, and chaos tests."
    ]
  },
  advanced2: {
    title: "Enterprise CI/CD Platform – Technical Breakdown",
    bullets: [
      "Pipeline templates: reusable YAML definitions for build, test, and deploy stages.",
      "Quality gates: integrated unit, integration, and security scans before promotion.",
      "Artifact management: versioned artifacts with traceability from commit to release.",
      "Environment strategy: dev/stage/prod with controlled promotion and approvals.",
      "Observability: pipeline metrics, deployment frequency, and change failure rate.",
      "Developer experience: self-service onboarding, docs, and example repos."
    ]
  }
};

document.querySelectorAll(".btn-link[data-project]").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-project");
    const detail = projectDetails[key];
    if (!detail) return;

    modalContent.innerHTML = `
      <h3>${detail.title}</h3>
      <ul>
        ${detail.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
    `;
    projectModal.classList.add("active");
  });
});

modalClose.addEventListener("click", () => {
  projectModal.classList.remove("active");
});

projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.classList.remove("active");
  }
});

// Contact form (simple front-end feedback)
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent =
    "Thanks for reaching out. Your message has been captured locally—wire this form to your backend or email service.";
  formNote.style.color = "var(--accent-strong)";
});
