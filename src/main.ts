import "./style.css";

function main() {
  const savedConsent = localStorage.getItem("cookie-consent");
  if (savedConsent === "true") return;

  const cookiesWrapper = document.querySelector(
    ".cookies-wrapper"
  ) as HTMLElement;
  const closeButton = document.querySelector(".cookies-wrapper .close");
  const acceptButton = document.querySelector(".cookies-wrapper .accept");
  if (!cookiesWrapper) return;

  // We "render" the cookies banner after the DOM is loaded before making it visible
  // to avoid the flickering effect when the page loads
  // and the banner is not yet rendered
  cookiesWrapper.classList.add("rendered");

  const closeCookieBanner = (consent: boolean) => {
    cookiesWrapper.classList.remove("visible");
    localStorage.setItem("cookie-consent", String(consent));

    // We wait for the animation to finish before removing the banner
    setTimeout(() => {
      cookiesWrapper.remove();
    }, 500);
  };

  closeButton?.addEventListener("click", () => closeCookieBanner(false));
  acceptButton?.addEventListener("click", () => closeCookieBanner(true));

  // Show the banner with a delay of 2 seconds using an animation
  setTimeout(() => {
    cookiesWrapper.classList.add("visible");
  }, 2000);
}

document.addEventListener("DOMContentLoaded", main);
