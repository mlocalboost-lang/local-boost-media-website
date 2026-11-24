const CONTACT_EMAIL = "mlocalboost@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

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

const leadForm = document.getElementById("lead-form");
const formNote = document.getElementById("form-note");

leadForm.addEventListener("submit", async event => {
  event.preventDefault();
  if (!leadForm.reportValidity()) return;

  const submitButton = leadForm.querySelector('button[type="submit"]');
  const originalButtonHTML = submitButton.innerHTML;

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  formNote.textContent = "Sending your enquiry...";

  const data = Object.fromEntries(new FormData(leadForm).entries());
  data._subject = "New website enquiry — Local Boost Media";
  data._replyto = data.email;
data._honey = data._honey || "";
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok || result.success === false || result.success === "false") {
      throw new Error("Submission failed");
    }

    formNote.textContent =
      "Thank you! Your enquiry has been sent. We'll be in touch soon.";
    leadForm.reset();

  } catch (error) {
    formNote.textContent =
      "We couldn't send your enquiry. Please email mlocalboost@gmail.com directly.";
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonHTML;
  }
});
