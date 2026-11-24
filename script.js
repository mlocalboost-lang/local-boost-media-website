// Configure this before publishing: use the inbox where website enquiries should arrive.
const CONTACT_EMAIL = "mlocalboost@gmail.com";

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.getElementById("lead-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  if (!CONTACT_EMAIL || CONTACT_EMAIL === "REPLACE_WITH_YOUR_EMAIL") {
    document.getElementById("form-note").textContent =
      "The form is ready, but the business inbox has not been configured yet. Add your email in script.js before publishing.";
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent("New website enquiry — Local Boost Media");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nBusiness: ${data.get("business") || "Not provided"}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\n\nWhat they need:\n${data.get("message")}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  document.getElementById("form-note").textContent = "Your email app should open with the enquiry prepared. Review it and press Send.";
});
