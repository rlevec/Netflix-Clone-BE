const currentDate = new Date();

const currentYear = currentDate.getFullYear();

let maximumExpirationYear = currentYear + 4



export const accountFormData = {
  headerTitleEng: "Account",
  headerTitleHr: "Račun",
  buttonTitleEng: "Done",
  buttonTitleHr: "Gotovo",
  memebershipSection: {
    titleEng: "Member Since",
    titleHr: "Član od"
  },
  contentSection: {
    membershipBilling: {
      header: {
        titleEng: "Membership & Billing",
        titleHr: "Članstvo & Naplata"
      },
      button: {
        titleEng: "Cancel Membership",
        titleHr: "Otkaži Članstvo"
      },
      readOnlyContent: [
        {
          id: 1,
          frontendSlug: "email",
          labelEng: "Email",
          labelHr: "E-pošta",
        },
        {
          id: 2,
          frontendSlug: "password",
          labelEng: "Password",
          labelHr: "Lozinka",
        },
        {
          id: 3,
          frontendSlug: "cardNumber",
          labelEng: "Card number",
          labelHr: "Broj kartice",
        },
        {
          id: 4,
          frontendSlug: "billingDay",
          labelEng: "Billing day",
          labelHr: "Dan naplate",
        }
      ],
      editableContent: [
        {
          id: 1,
          frontendSlug: "email",
          labelEng: "Change email",
          labelHr: "Promijeni adresu e-pošte",
          form: {
            header: {
              labelEng: "Change email",
              labelHr: "Promijeni adresu e-pošte",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            inputs: {
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
          }
        },
        {
          id: 2,
          frontendSlug: "password",
          labelEng: "Change password",
          labelHr: "Promijeni lozinku",
          form: {
            header: {
              labelEng: "Change password",
              labelHr: "Promijeni lozinku",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            inputs: [
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
            ]
          }
        },
        {
          id: 3,
          frontendSlug: "cardNumber",
          labelEng: "Change payment info",
          labelHr: "Promijeni podatke o plaćanju",
          form: {
            header: {
              labelEng: "Change payment info",
              labelHr: "Promijeni podatke o plaćanju",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "next",
                buttonTitleEng: "Next",
                buttonTitleHr: "Dalje",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              },
            ],
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
              activeFormButtons: [
                {
                  id: 1,
                  frontendSlug: "back",
                  buttonTitleEng: "Back",
                  buttonTitleHr: "Nazad",
                },
                {
                  id: 1,
                  frontendSlug: "submit",
                  buttonTitleEng: "Done",
                  buttonTitleHr: "Gotovo",
                }
              ]
            },
          }
        },
        {
          id: 4,
          frontendSlug: "billingDay",
          labelEng: "Change billing day",
          labelHr: "Promijeni dan naplate",
          form: {
            header: {
              labelEng: "Change billing day",
              labelHr: "Promijeni dan naplate",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            inputs: {
              label: {
                titleEng: "Your new billing day",
                titleHr: "Vaš novi obračunski dan"
              },
              placeholderEng: "Day",
              placeholderHr: "Dan",
              options: [
                {id: 1, value: 1 , titleEng: "First of the month (1st)", titleHr: "Početkom mjeseca (1.)"},
                {id: 2, value: 15, titleEng: "Middle of the month (15st)", titleHr: "Sredinom mjeseca (15.)"},
                {id: 3, value: 30,  titleEng: "End of the month (30th, 28th if Feb)", titleHr: "Krajem mjeseca (30., 28th ako Velj)"},
              ]
            }
          }
        },
      ]
    },
    planDetails: {
      header: {
        titleEng: "Plan details",
        titleHr: "Detalji plana"
      },
      readOnlyContent: {
        id: 1,
        frontendSlug: "activePlan",
        labelEng: "Active plan",
        labelHr: "Aktivni plan",
      },
      editableContent: {
        id: 1,
        frontendSlug: "activePlan",
        labelEng: "Change plan",
        labelHr: "Promijeni plan",
        form: {
          header: {
            labelEng: "Change plan",
            labelHr: "Promijeni plan",
          },
          buttons: [
            {
              id: 1,
              frontendSlug: "submit",
              buttonTitleEng: "Done",
              buttonTitleHr: "Gotovo",
            },
            {
              id: 2,
              frontendSlug: "back",
              buttonTitleEng: "Back",
              buttonTitleHr: "Nazad",
            }
          ],
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
        }
      }
    },
    profileParentalControls: {
      header: {
        titleEng: "Profile & parental controls",
        titleHr: "Profil & roditeljski nadzor"
      },
      readOnlyContent: [
        {
          id: 1,
          frontendSlug: "accountName",
          labelEng: "Account name",
          labelHr: "Ime računa",
        },
        {
          id: 2,
          frontendSlug: "forKids",
          labelEng: "For kids",
          labelHr: "Za djecu",
        },
        {
          id: 3,
          frontendSlug: "gameName",
          labelEng: "Your name in games",
          labelHr: "Vaše ime u igrama",
        },
        {
          id: 4,
          frontendSlug: "language",
          labelEng: "Language",
          labelHr: "Jezik",
        },
        {
          id: 5,
          frontendSlug: "maturitySetting",
          labelEng: "Maturity settings",
          labelHr: "Postavke zrelosti",
        },
        {
          id: 6,
          frontendSlug: "autoplayNext",
          labelEng: "Autoplay next episode in a series on all devices",
          labelHr: "Automatska reprodukcija sljedeće epizode u seriji na svim uređajima",
        },
        {
          id: 7,
          frontendSlug: "autoplayPreview",
          labelEng: "Autoplay previews while browsing on all devices",
          labelHr: "Automatska reprodukcija pregleda tijekom pregledavanja na svim uređajima",
        },
        {
          id: 8,
          frontendSlug: "profileImage",
          labelEng: "Change profile image",
          labelHr: "Promijeni sliku profila",
          form: {
            label: {
              labelEng: "Change profile image",
              labelHr: "Promijeni sliku profila",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
          }
        },
      ],
      editableContent: [
        {
          id: 1,
          frontendSlug: "accountName",
          labelEng: "Change",
          labelHr: "Promijeni",
          form: {
            label: {
              labelEng: "Account name",
              labelHr: "Ime računa",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            input: {
              id: 1,
              type: "text",
              placeholderEng: "Name",
              placeholderHr: "Ime",
              validation: "^[A-Za-z]+([-']?[A-Za-z]+)?$",
              errorEng: "Please enter a valid name.",
              errorHr: "Unesite važeće ime.",
              frontendSlug: "accountName",
              name: "accountName",
            }
          }
        },
        {
          id: 2,
          frontendSlug: "forKids",
          labelEng: "Change",
          labelHr: "Promijeni",
          form: {
            label: {
              labelEng: "For kids",
              labelHr: "Za djecu",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            inputs: {
              type: "checkbox",
              name: "forKids",
            }
          }
        },
        {
          id: 3,
          frontendSlug: "gameName",
          labelEng: "Change",
          labelHr: "Promijeni",
          form: {
            label: {
              labelEng: "Game Handle:",
              labelHr: "Igrače Ime:",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            input: {
              id: 1,
              type: "text",
              placeholderEng: "Game name",
              placeholderHr: "Ime u igrama",
              validation: "^[A-Za-z]+([-']?[A-Za-z]+)?$",
              errorEng: "Please enter a valid name.",
              errorHr: "Unesite važeće ime.",
              frontendSlug: "gameHandle",
              name: "gameHandle",
            }
          }
        },
        {
          id: 4,
          frontendSlug: "language",
          labelEng: "Change",
          labelHr: "Promijeni",
          form: {
            label: {
              labelEng: "Language:",
              labelHr: "Jezik:",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            inputs: {
              options: [{value: "hrvatski", title: "Hrvatski"}, {value: "english", title: "English"}]
            }
          }
        },
        {
          id: 5,
          frontendSlug: "maturitySetting",
          labelEng: "Change",
          labelHr: "Promijeni",
          form: {
            label: {
              labelEng: "Maturity settings",
              labelHr: "Postavke zrelosti",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            inputs: {
              options: [
                {
                  value: "allMaturityRatings",
                  titleEng: "All Maturity Ratings",
                  titleHr: "Sve Ocjene Zrelosti",
                  limiter: null
                },
                {value: "sevenPlus", titleEng: "7+", titleHr: "7+", limiter: 7},
                {value: "tenPlus", titleEng: "10+", titleHr: "10+", limiter: 10},
                {value: "thirteenPlus", titleEng: "13+", titleHr: "13+", limiter: 13},
                {value: "sixteenPlus", titleEng: "16+", titleHr: "16+", limiter: 16},
                {value: "eighteenPlus", titleEng: "18+", titleHr: "18+", limiter: 18},
              ]
            }
          }
        },
        {
          id: 6,
          frontendSlug: "autoplayNext",
          labelEng: "Change",
          labelHr: "Promijeni",
          form: {
            label: {
              labelEng: "Autoplay next episode in a series on all devices",
              labelHr: "Automatska reprodukcija sljedeće epizode u seriji na svim uređajima",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            inputs: {
              type: "checkbox",
              frontendSlug: "autoplayNext",
              name: "autoplayNext",
            }
          }
        },
        {
          id: 7,
          frontendSlug: "autoplayPreview",
          labelEng: "Change",
          labelHr: "Promijeni",
          form: {
            label: {
              labelEng: "Autoplay previews while browsing on all devices",
              labelHr: "Automatska reprodukcija pregleda tijekom pregledavanja na svim uređajim:",
            },
            buttons: [
              {
                id: 1,
                frontendSlug: "submit",
                buttonTitleEng: "Done",
                buttonTitleHr: "Gotovo",
              },
              {
                id: 2,
                frontendSlug: "back",
                buttonTitleEng: "Back",
                buttonTitleHr: "Nazad",
              }
            ],
            inputs: {
              type: "checkbox",
              frontendSlug: "autoplayPreviews",
              name: "autoplayPreviews",
            }
          }
        },
        {
          id: 8,
          frontendSlug: "profileImage",
          labelEng: "Change profile image",
          labelHr: "Promijeni sliku profila",
          buttons: [
            {
              id: 1,
              frontendSlug: "submit",
              buttonTitleEng: "Done",
              buttonTitleHr: "Gotovo",
            },
            {
              id: 2,
              frontendSlug: "back",
              buttonTitleEng: "Back",
              buttonTitleHr: "Nazad",
            }
          ],
        },
      ]
    }
  }
}