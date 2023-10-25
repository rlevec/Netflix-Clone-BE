export const forgotEmailPasswordFormData = {
  backgroundImage: "http://localhost:6060/images/forgotEmailPassword/forgot_password_bg.jpeg",
  headerTitleEng: "Forgot Email/Password",
  headerTitleHr: "Zaboravili ste email/lozinku",
  captchaInfo: {
    infoOneEng: "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
    infoOneHr: "Ovu stranicu štiti Google reCAPTCHA kako bi se osiguralo da niste bot",
    infoTwoEng: `<div class="google_info">The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</div>`,
    infoTwoHr: `<div class="google_info">Informacije koje prikuplja Google reCAPTCHA podliježu Googleovim <a href="https://policies.google.com/privacy" target="_blank">Pravilima o Privatnosti</a> i <a href="https://policies.google.com/terms" target="_blank">Uvjetima Pružanja Usluge</a>, a koriste se za pružanje, održavanje i poboljšanje usluge reCAPTCHA te za opće sigurnosne svrhe (ne koriste se za personalizirano oglašavanje od strane Googlea).</div>`
  },
  content: [
    {
      id: 1,
      frontendSlug: "knownMailForm",
      paragraphInfo: {
        paragraphTitleEng: "Please enter your valid email to proceed.",
        paragraphTitleHr: "Unesite valjanu e-poštu da biste nastavili"
      },
      formInput: {
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
      formButton: {
        titleEng: "Activate Form",
        titleHr: "Aktiviraj Obrazac",
      },
      forgotEmail: {
        titleEng: "I don't remember my email.",
        titleHr: "Ne sjećam se svoje adrese e-pošte"
      },
    },
    {
      id: 2,
      frontendSlug: "unknownMailForm",
      paragraphInfo: {
        paragraphTitleEng: "Please provide this information to help us find your account (all fields required):",
        paragraphTitleHr: "Unesite ove informacije kako biste nam pomogli pronaći vaš račun (sva su polja obavezna):"
      },
      formInputs: [
        {
          id: 1,
          type: "text",
          placeholderEng: "First name",
          placeholderHr: "Ime",
          validation: "^[A-Za-z]+([-']?[A-Za-z]+)?$",
          errorEng: "Please enter a valid first name.",
          errorHr: "Unesite važeće ime.",
          frontendSlug: "firstName",
          name: "firstName",
        },
        {
          id: 2,
          type: "text",
          placeholderEng: "Last name",
          placeholderHr: "Prezime",
          validation: "^[A-Za-z]+([-']?[A-Za-z]+)?$",
          errorEng: "Please enter a valid last name.",
          errorHr: "Unesite važeće prezime.",
          frontendSlug: "lastName",
          name: "lastName",
        },
        {
          id: 3,
          type: "tel",
          placeholderEng: "Card number",
          placeholderHr: "Broj kartice",
          validationMaster: "^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$",
          validationVisa: "^4[0-9]{12}(?:[0-9]{3})?$",
          validationAmex: "^3[47][0-9]{13}$",
          validationMaestro: "^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$",
          errorEng: "Please enter a valid credit card number.",
          errorHr: "Unesite ispravan broj kreditne kartice.",
          frontendSlug: "cardNumber",
          name: "cardNumber",
        },
      ],
      formButtons: [
        {
          id: 1,
          frontendSlug: "findAccount",
          titleEng: "Find Account",
          titlHr: "Pronađite Račun"
        },
        {
          id: 2,
          frontendSlug: "cancel",
          titleEng: "Cancel",
          titlHr: "Otkažite"
        }
      ],
      paymentImages: [
        {
          id: 1,
          frontendSlug: "visa",
          image: "http://localhost:6060/images/signup/visa.png",
          alt: "visa",
        },
        {
          id: 2,
          frontendSlug: "master",
          image: "http://localhost:6060/images/signup/mastercard.png",
          alt: "master",
        },
        {
          id: 3,
          frontendSlug: "amex",
          image: "http://localhost:6060/images/signup/amex.png",
          alt: "amex",
        },
        {
          id: 4,
          frontendSlug: "maestroCard",
          image: "http://localhost:6060/images/signup/maestro.png",
          alt: "maestro",
        },
        {
          id: 5,
          frontendSlug: "payPal",
          image: "http://localhost:6060/images/signup/paypal.png",
          alt: "payPal",
        },
      ],
    },
    {
      id: 3,
      frontendSlug: "formActive",
      paragraphInfo: {
        paragraphTitleEng: "Please provide this information to reset your password (all fields required):",
        paragraphTitleHr: "Unesite ove podatke kako biste poništili lozinku (sva su polja obavezna):"
      },
      formInputs: [
        {
          id: 1,
          type: "password",
          labelEng: "New Password",
          labelHr: "Nova Lozinka",
          placeholderEng: "Enter your new password",
          placeholderHr: "Unesite svoju novu lozinku",
          validation: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&^_-]{8,}$",
          errorEng: "Please enter a valid new password.",
          errorHr: "Unesite valjanu novu lozinku.",
          frontendSlug: "newPassword",
          name: "newPassword",
        },
        {
          id: 2,
          type: "password",
          labelEng: "Confirm New Password",
          labelHr: "Potvrdite Novu Lozinku",
          placeholderEng: "Confirm your new password",
          placeholderHr: "Potvrdite svoju novu lozinku",
          validation: "",
          errorEng: "Please enter a valid confirm new password.",
          errorHr: "Unesite valjanu potvrdnu novu lozinku.",
          frontendSlug: "confirmNewPassword",
          name: "confirmNewPassword",
        },
      ],
      formButton: {
        titleEng: "Reset",
        titleHr: "Resetirajte",
      },
    }
  ]
}