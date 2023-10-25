export const signInFormData = {
  backgroundImage: "http://localhost:6060/images/signin/netflix_login_background.jpeg",
  headerTitleEng: "Sign In",
  headerTitleHr: "Prijava",
  inputs: [
    {
      id: 1,
      type: "text",
      labelEng: "Email address",
      labelHr: "Adresa e-pošte",
      placeholderEng: "Enter your email address",
      placeholderHr: "Unesite svoju adresu e-pošte",
      validation: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
      errorEng: "Please enter a valid email address.",
      errorHr: "Unesite valjanu adresu e-pošte.",
      frontendSlug: "email",
      name: "email",
    },
    {
      id: 2,
      type: "password",
      labelEng: "Password",
      labelHr: "Lozinka",
      placeholderEng: "Enter your password",
      placeholderHr: "Unesite svoju lozinku",
      validation: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&^_-]{8,}$",
      errorEng: "Please enter a valid email password.",
      errorHr: "Unesite valjanu lozinku.",
      frontendSlug: "password",
      name: "password",
    },
  ],
  buttonTitleEng: "Sign In",
  buttonTitleHr: "Prijava",
  checkboxInput: {
    type: "checkbox",
    labelEng: "Remember Me",
    labelHr: "Zapamti me",
  },
  helpInfo: {
    paragraphOneEng: "Need help?",
    paragraphOneHr: "Trebate pomoć?",
  },
  signUpInfo: {
    paragraphOneEng: "New to Netflix?",
    paragraphOneHr: "Novi ste na Netflixu?",
    paragraphTwoEng: "Sign up now",
    paragraphTwoHr: "Prijavi se sad",
  },
  captchaInfo: {
    infoOneEng: "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
    infoOneHr: "Ovu stranicu štiti Google reCAPTCHA kako bi se osiguralo da niste bot",
    infoTwoEng: `<div class="google_info">The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</div>`,
    infoTwoHr: `<div class="google_info">Informacije koje prikuplja Google reCAPTCHA podliježu Googleovim <a href="https://policies.google.com/privacy" target="_blank">Pravilima o Privatnosti</a> i <a href="https://policies.google.com/terms" target="_blank">Uvjetima Pružanja Usluge</a>, a koriste se za pružanje, održavanje i poboljšanje usluge reCAPTCHA te za opće sigurnosne svrhe (ne koriste se za personalizirano oglašavanje od strane Googlea).</div>`
  }
}