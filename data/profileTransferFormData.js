const currentDate = new Date();

const currentYear = currentDate.getFullYear();

let maximumExpirationYear = currentYear + 4


export const profileTransferFormData = {
  unAllowed: {
    header: {
      labelEng: "Do you want to allow profile transfers?",
      labelHr: "Želite li dopustiti prijenos profila?"
    },
    content: [
      {
        id: 1,
        labelEng: "Other people using your account will be able to transfer a profile – including recommendations, viewing history, My List, saved games, settings and more – to their own membership that they pay for.",
        labelHr: "Drugi ljudi koji koriste vaš račun moći će prenijeti profil – uključujući preporuke, povijest gledanja, Moj popis, spremljene igre, postavke i više – na svoje članstvo koje plaćaju."
      },
      {
        id: 2,
        labelEng: "Allowing this feature will not log out any devices on your account. We will never transfer your payment information. Kids profiles cannot be transferred.",
        labelHr: "Dopuštanje ove značajke neće odjaviti niti jedan uređaj na vašem računu. Nikada nećemo prenijeti vaše podatke o plaćanju. Dječji profili se ne mogu prenijeti."
      },
      {
        id: 3,
        labelEng: "Simply click the button below to allow profiles to be transferred from your account. Updating this setting will not affect profile transfers into your account.",
        labelHr: "Jednostavno kliknite gumb ispod kako biste omogućili prijenos profila s vašeg računa. Ažuriranje ove postavke neće utjecati na prijenos profila na vaš račun."
      }
    ],
    buttons: [
      {
        id: 1,
        frontendSlug: "submit",
        labelEng: "Allow",
        labelHr: "Dopusti"
      },
      {
        id: 2,
        frontendSlug: "back",
        labelEng: "Go Back to Home",
        labelHr: "Nazad"
      }
    ]
  },
  allowed: {
    errorMap: {
        success: {
          labelEng: "You have successfully transferred  this profile!",
          labelHr: "Uspješno ste prenijeli ovaj profil!"
        },
        error: {
          labelEng: "Profile name initiated for transfer already exists on this account!",
          labelHr: "Naziv profila koji je pokrenut za prijenos već postoji na ovom računu!"
        },
        max: {
          labelEng: "Maximum number of profiles on the account exceeded!",
          labelHr: "Premašen maksimalan broj profila na računu!"
        }
    },
    loginContent: {
      backgroundImage: "http://localhost:6060/images/signin/netflix_login_background.jpeg",
      headerTitleEng: "Transfer Profile",
      headerTitleHr: "Prijenos Profila",
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
      buttonTitleEng: "Transfer Profile & Sign In",
      buttonTitleHr: "Prijenos Profila & Prijava",
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
        paragraphTwoEng: "Sign up now and transfer profile",
        paragraphTwoHr: "Prijavite se sada i prenesite profil",
      },
      captchaInfo: {
        infoOneEng: "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
        infoOneHr: "Ovu stranicu štiti Google reCAPTCHA kako bi se osiguralo da niste bot",
        infoTwoEng: `<div class="google_info">The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</div>`,
        infoTwoHr: `<div class="google_info">Informacije koje prikuplja Google reCAPTCHA podliježu Googleovim <a href="https://policies.google.com/privacy" target="_blank">Pravilima o Privatnosti</a> i <a href="https://policies.google.com/terms" target="_blank">Uvjetima Pružanja Usluge</a>, a koriste se za pružanje, održavanje i poboljšanje usluge reCAPTCHA te za opće sigurnosne svrhe (ne koriste se za personalizirano oglašavanje od strane Googlea).</div>`
      }
    },
    buttons: [
      {
        id: 1,
        frontendSlug: "submit",
        labelEng: "Start New Membership",
        labelHr: "Započni Novo Članstvo"
      },
      {
        id: 2,
        frontendSlug: "back",
        labelEng: "Back",
        labelHr: "Nazad"
      },
      {
        id: 3,
        frontendSlug: "next",
        labelEng: "Dalje",
        labelHr: "Nazad"
      }
    ],
    content: [
      {
        id: 1,
        step: 1,
        header: {
          labelEng: "Choose profile to transfer",
          labelHr: "Odaberite profil za prijenos"
        },
      },
      {
        id: 2,
        step: 2,
        header: {
          labelEng: "First, let's set up your new membership",
          labelHr: "Prvo, postavimo vaše novo članstvo"
        },
        subHeader: {
          labelEng: "We just need your email address to get started. We will notify the owner of the original account after the transfer is complete.",
          labelHr: "Potrebna nam je samo vaša adresa e-pošte da bismo započeli. Obavijestit ćemo vlasnika izvornog računa nakon dovršetka prijenosa."
        },
        inputs: [
          {
            id: 1,
            type: "text",
            labelEng: "New email address",
            labelHr: "Nova adresa e-pošte",
            placeholderEng: "Enter new email address",
            placeholderHr: "Unesite novu adresu e-pošte",
            validation: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
            errorEng: "Please enter a valid email address.",
            errorHr: "Unesite valjanu adresu e-pošte.",
            frontendSlug: "email",
            name: "email",
          },
          {
            id: 1,
            type: "password",
            labelEng: "New Password",
            labelHr: "Nova Lozinka",
            placeholderEng: "Enter new password",
            placeholderHr: "Unesite novu lozinku",
            validation: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&^_-]{8,}$",
            errorEng: "Please enter a valid new password.",
            errorHr: "Unesite valjanu novu lozinku.",
            frontendSlug: "newPassword",
            name: "newPassword",
          },
        ],
      },
      {
        id: 3,
        step: 3,
        stepTitleEng: "Choose your plan.",
        stepTitleHr: "Odaberite svoj plan.",
        planContent: [
          {
            id: 1,
            titleEng: "No commitments, cancel anytime.",
            titleHr: "Bez obveza, otkažite bilo kada.",
          },
          {
            id: 2,
            titleEng: "Everything on Netflix for one low price.",
            titleHr: "Sve na Netflixu po niskoj cijeni.",
          },
          {
            id: 3,
            titleEng: "Unlimited viewing on all your devices.",
            titleHr: "Neograničeno gledanje na svim vašim uređajima.",
          },
        ]
      },
      {
        id: 4,
        step: 4,
        stepTitleEng: "Choose the plan that’s right for you",
        stepTitleHr: "Odaberite plan koji vam odgovara",
        planContent: [
          {
            id: 1,
            titleEng: "Watch all you want. Ad-free.",
            titleHr: "Gledajte sve što želite. Bez oglasa.",
          },
          {
            id: 2,
            titleEng: "Recommendations just for you.",
            titleHr: "Preporuke samo za vas.",
          },
          {
            id: 3,
            titleEng: "Change or cancel your plan anytime.",
            titleHr: "Promijenite ili otkažite svoj plan bilo kada.",
          },
        ],
        planHeader: [
          {
            id: 1,
            frontendSlug: "basic",
            titleEng: "Basic",
            titleHr: "Osnovni"
          },
          {
            id: 2,
            frontendSlug: "standard",
            titleEng: "Standard",
            titleHr: "Standardni"
          },
          {
            id: 3,
            frontendSlug: "premium",
            titleEng: "Premium",
            titleHr: "Premium"
          }
        ],
        tableContent: {
          rows: [
            {
              id: 1,
              frontendSlug: "rowOne",
              content: [
                {
                  id: 1,
                  frontendSlug: "monthlyPrice",
                  titleEng: "Monthly price",
                  titleHr: "Mjesečna cijena"
                },
                {
                  id: 2,
                  frontendSlug: "priceBasic",
                  categorySlug: "basic",
                  title: "EUR4.99",
                },
                {
                  id: 3,
                  frontendSlug: "priceStandard",
                  categorySlug: "standard",
                  title: "EUR7.99",
                },
                {
                  id: 4,
                  frontendSlug: "pricePremium",
                  categorySlug: "premium",
                  title: "EUR9.99",
                }
              ]
            },
            {
              id: 2,
              frontendSlug: "rowTwo",
              content: [
                {
                  id: 1,
                  frontendSlug: "videoQuality",
                  titleEng: "Video quality",
                  titleHr: "Kvaliteta videa"
                },
                {
                  id: 2,
                  frontendSlug: "goodQuality",
                  categorySlug: "basic",
                  titleEng: "Good",
                  titleHr: "Dobra"
                },
                {
                  id: 3,
                  frontendSlug: "betterQuality",
                  categorySlug: "standard",
                  titleEng: "Better",
                  titleHr: "Bolja"
                },
                {
                  id: 4,
                  frontendSlug: "bestQuality",
                  categorySlug: "premium",
                  titleEng: "Best",
                  titleHr: "Najbolja"
                }
              ]
            },
            {
              id: 3,
              frontendSlug: "rowThree",
              content: [
                {
                  id: 1,
                  frontendSlug: "resolution",
                  titleEng: "Resolution",
                  titleHr: "Resolution"
                },
                {
                  id: 2,
                  frontendSlug: "hdResolution",
                  categorySlug: "basic",
                  title: "720p",
                },
                {
                  id: 3,
                  frontendSlug: "fullHdResolution",
                  categorySlug: "standard",
                  title: "1080p",
                },
                {
                  id: 4,
                  frontendSlug: "4kResolution",
                  categorySlug: "premium",
                  title: "4K+HDR",
                }
              ]
            },
            {
              id: 4,
              frontendSlug: "rowFour",
              content: [
                {
                  id: 1,
                  frontendSlug: "devices",
                  titleEng: "Watch on your TV, computer, mobile phone and tablet",
                  titleHr: "Gledajte na TV-u, računalu, mobilnom telefonu i tabletu"
                },
                {
                  id: 2,
                  frontendSlug: "checkMarkBasic",
                  categorySlug: "basic"
                },
                {
                  id: 3,
                  frontendSlug: "checkMarkStandard",
                  categorySlug: "standard",
                },
                {
                  id: 4,
                  frontendSlug: "checkMarkPremium",
                  categorySlug: "premium"
                }
              ]
            }
          ]
        },
        infoOne: {
          paragraphOneEng: "HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions.",
          paragraphOneHr: "Dostupnost HD (720p), Full HD (1080p), Ultra HD (4K) i HDR ovisi o vašoj internetskoj usluzi i mogućnostima uređaja. Nije sav sadržaj dostupan u svim rezolucijama.",
          paragraphTwoEng: "See our",
          paragraphTwoHr: "Pogledajte naše",
          paragraphThreeEng: "Terms of Use",
          paragraphThreeHr: "Uvjete Korištenja",
          paragraphFourEng: "for more details.",
          paragraphFourHr: "za više detalja."
        },
        infoTwo: {
          paragraphOneEng: "Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.",
          paragraphOneHr: "Samo osobe koje žive s vama mogu koristiti vaš račun. Gledajte na 4 različita uređaja istovremeno uz Premium, 2 uz Standard i 1 uz Basic.",
        }
      },
      {
        id: 5,
        step: 5,
        stepTitleEng: "Choose how to pay",
        stepTitleHr: "Odaberite način plaćanja",
        stepDescEng: "Your payment is encrypted and you can change how you pay anytime.",
        stepDescHr: "Vaše plaćanje je šifrirano i možete promijeniti način plaćanja u bilo kojem trenutku.",
        stepInfoOneEng: "Secure for peace of mind.",
        stepInfoOneHr: "Sigurno za duševni mir.",
        stepInfoTwoEng: "Cancel easily online.",
        stepInfoTwoHr: "Otkažite jednostavno online.",
        encryptionDescEng: "End-to-end encrypted",
        encryptionDescHr: "Šifrirano s kraja na kraj",
        paymentMethodsInputSelection: [
          {
            id: 1,
            frontendSlug: "creditDebitCard",
            placeholderEng: "Credit or Debit Card",
            placeholderHr: "Kreditna ili Debitna Kartica",
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
            ]
          },
          {
            id: 2,
            frontendSlug: "maestroCard",
            placeholderEng: "Maestro Card",
            placeholderHr: "Maestro Kartica",
            paymentImages: [
              {
                id: 1,
                frontendSlug: "maestroCard",
                image: "http://localhost:6060/images/signup/maestro.png",
                alt: "maestro",
              },
            ]
          },
        ],
      },
      {
        id: 6,
        step: 6,
        activeForm: {
          activeFormCreditCardTitleEng: "Set up your credit or debit card",
          activeFormCreditCardTitleHr: "Postavite svoju kreditnu ili debitnu karticu",
          paymentImages: [
            {
              id: 1,
              activeSlug: "creditDebitCard",
              frontendSlug: "visa",
              image: "http://localhost:6060/images/signup/visa.png",
              alt: "visa",
            },
            {
              id: 2,
              activeSlug: "creditDebitCard",
              frontendSlug: "master",
              image: "http://localhost:6060/images/signup/mastercard.png",
              alt: "master",
            },
            {
              id: 3,
              activeSlug: "creditDebitCard",
              frontendSlug: "amex",
              image: "http://localhost:6060/images/signup/amex.png",
              alt: "amex",
            },
            {
              id: 4,
              activeSlug: "maestroCard",
              frontendSlug: "maestroCard",
              image: "http://localhost:6060/images/signup/maestro.png",
              alt: "maestro",
            },
          ],
          activeFormInputs: [
            {
              id: 1,
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
            {
              id: 2,
              type: "text",
              placeholderEng: "MM/YY",
              placeholderHr: "MM/GG",
              validation: "",
              errorEng: `Expiration must be in (1-12) and (${currentYear?.toString().slice(-2)}-${maximumExpirationYear?.toString().slice(-2)}) range.`,
              errorHr: `Istek mora biti u rasponu (1-12) i (${currentYear?.toString().slice(-2)}-${maximumExpirationYear?.toString().slice(-2)}).`,
              frontendSlug: "expirationDate",
              maxLength: 5,
              min: currentYear,
              max: maximumExpirationYear,
              name: "expirationDate",
            },
            {
              id: 3,
              type: "text",
              placeholderEng: "CCV",
              placeholderHr: "CCV",
              validation: "^[0-9]{3,4}$",
              errorEng: "Please enter a valid CVV code.",
              errorHr: "Unesite važeći CVV kod.",
              frontendSlug: "ccv",
              maxLength: 4,
              name: "ccv",
            },
            {
              id: 4,
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
              id: 5,
              type: "text",
              placeholderEng: "Last name",
              placeholderHr: "Prezime",
              validation: "^[A-Za-z]+([-']?[A-Za-z]+)?$",
              errorEng: "Please enter a valid last name.",
              errorHr: "Unesite važeće prezime.",
              frontendSlug: "lastName",
              name: "lastName",
            }
          ],
          plans: [
            {
              id: 1,
              frontendSlug: "basic",
              titleEng: "Basic",
              titleHr: "Osnovni",
              costEng: "EUR4.99/month",
              costHr: "EUR4.99/mjesečno",
            },
            {
              id: 2,
              frontendSlug: "standard",
              titleEng: "Standard",
              titleHr: "Standardni",
              costEng: "EUR7.99/month",
              costHr: "EUR7.99/mjesečno",
            },
            {
              id: 3,
              frontendSlug: "premium",
              titleEng: "Premium",
              titleHr: "Premium",
              costEng: "EUR9.99/month",
              costHr: "EUR9.99/mjesečno",
            }
          ],
          inputFooterInfo: {
            creditCard: {
              infoOneEng: "By clicking the “Start Paid Membership” button below, you agree to our",
              infoOneHr: 'Klikom na gumb "Započni plaćeno članstvo" ispod, slažete se s našim',
              infoTwoEng: "Terms of Use",
              infoTwoHr: "Uvjetima korištenja",
              infoThreeEng: "and that you are over 18 and acknowledge the",
              infoThreeHr: "i da ste stariji od 18 godina te upoznati sa",
              infoFourEng: "Privacy Statement",
              infoFourHr: "Izjavom o Privatnosti",
              infoFiveEng: "Netflix will automatically continue your membership and charge the membership fee",
              infoFiveSecEng: "to your payment method until you cancel. You may cancel at any time to avoid future charges.",
              infoFiveHr: "Netflix će automatski nastaviti vaše članstvo i naplaćivati članarinu",
              infoFiveSecHr: "putem vašeg načina plaćanja dok ne otkažete. Možete otkazati bilo kada kako biste izbjegli buduće troškove.",
              infoSixEng: "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
              infoSixHr: "Ovu stranicu štiti Google reCAPTCHA kako bi se osiguralo da niste bot",
              infoSevenEng: `<div class="google_info">The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</div>`,
              infoSevenHr: `<div class="google_info">Informacije koje prikuplja Google reCAPTCHA podliježu Googleovim <a href="https://policies.google.com/privacy" target="_blank">Pravilima o Privatnosti</a> i <a href="https://policies.google.com/terms" target="_blank">Uvjetima Pružanja Usluge</a>, a koriste se za pružanje, održavanje i poboljšanje usluge reCAPTCHA te za opće sigurnosne svrhe (ne koriste se za personalizirano oglašavanje od strane Googlea).</div>`
            },
          },
          buttons: {
            creditCards: {
              buttonTitleEng: "Start Paid Membership",
              buttonTitleHr: "Započnite Plaćeno Članstvo"
            },
            planButton: {
              buttonTitleEng: "Change",
              buttonTitleHr: "Promijeni",
            }
          }
        },
      }
    ]
  }
}