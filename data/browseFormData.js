export const browseFormData = {
  errorMap: {
    deleteAccount: {
      success: {
        labelEng: "You have successfully canceled your membership!",
        labelHr: "Uspješno ste otkazali svoje članstvo!",
      },
      error: {
        labelEng:
          "An error has occurred when attempting to cancel your membership!",
        labelHr:
          "Došlo je do pogreške prilikom pokušaja otkazivanja vašeg članstva!",
      },
    },
    changeEmail: {
      success: {
        labelEng: "You have successfully changed your email!",
        labelHr: "Uspješno ste promijenili adresu e-pošte!",
      },
      error: {
        labelEng: "Provided email already exists!",
        labelHr: "Navedena adresa e-pošte već postoji!",
      },
    },
    changeCardNumber: {
      success: {
        labelEng: "You have successfully changed your payment info!",
        labelHr: "Uspješno ste promijenili podatke o plaćanju!",
      },
      error: {
        labelEng: "Enter a different payment info from the one you had!",
        labelHr: "Unesite drugačije podatke o plaćanju od onih koju ste imali!",
      },
    },
    changePassword: {
      success: {
        labelEng: "You have successfully changed your password!",
        labelHr: "Uspješno ste promijenili lozinku!",
      },
      error: {
        labelEng: "Enter a different password from the one you had!",
        labelHr: "Unesite drugačiju lozinku od one koju ste imali!",
      },
    },
    changeBillingDay: {
      success: {
        labelEng: "You have successfully changed your billing day!",
        labelHr: "Uspješno ste promijenili dan plaćanja!",
      },
      error: {
        labelEng: "Choose a different billing day from the one you had!",
        labelHr: "Odaberite drugačiji dan plaćanja od onoga kojeg ste imali!",
      },
    },
    changeActivePlan: {
      success: {
        labelEng: "You have successfully changed your active plan!",
        labelHr: "Uspješno ste promijenili svoj aktivni plan!",
      },
      error: {
        labelEng: "Choose a different active plan from the one you had!",
        labelHr: "Odaberite drugačiji aktivni plan od onoga kojeg ste imali!",
      },
    },
    changeAccountName: {
      success: {
        labelEng: "You have successfully changed your account name!",
        labelHr: "Uspješno ste promijenili ime profila!",
      },
      error: {
        labelEng: "Choose a different account name from the one you had!",
        labelHr: "Odaberite drugačije ime profila od onoga kojeg ste imali!",
      },
    },
    changeForKids: {
      success: {
        labelEng: 'You have successfully changed your "for kids" status!',
        labelHr: 'Uspješno ste promijenili "za djecu" status!',
      },
      error: {
        labelEng: 'Choose a different "for kids" status from the one you had!',
        labelHr:
          'Odaberite drugačiji "za djecu" status od onoga kojeg ste imali!',
      },
    },
    changeGameName: {
      success: {
        labelEng: "You have successfully changed your game name!",
        labelHr: "Uspješno ste promijenili ime u igrama!",
      },
      error: {
        labelEng: "Choose a different game name from the one you had!",
        labelHr: "Odaberite drugačije ime u igrama od onoga kojeg ste imali!",
      },
    },
    changeLanguage: {
      success: {
        labelEng: "You have successfully changed your browse language!",
        labelHr: "Uspješno ste promijenili jezik pregledavanja!",
      },
      error: {
        labelEng: "Choose a different browse language from the one you had!",
        labelHr:
          "Odaberite drugačiji jezik pregledavanja od onoga kojeg ste imali!",
      },
    },
    changeMaturitySettings: {
      success: {
        labelEng: "You have successfully changed your maturity settings!",
        labelHr: "Uspješno ste promijenili svoje postavke zrelosti!",
      },
      error: {
        labelEng: "Choose a different maturity settings from the one you had!",
        labelHr:
          "Odaberite drugačije postavke zrelosti od onih kojih ste imali!",
      },
    },
    changeAutoplayNext: {
      success: {
        labelEng: "You have successfully changed your autoplay next settings!",
        labelHr: "Uspješno ste promijenili postavke automatske reprodukcije!",
      },
      error: {
        labelEng: "Choose a different maturity settings from the one you had!",
        labelHr:
          "Odaberite drugačije postavke automatske reprodukcije od onih kojih ste imali!",
      },
    },
    changeAutoplayPreviews: {
      success: {
        labelEng:
          "You have successfully changed your autoplay previews settings!",
        labelHr:
          "Uspješno ste promijenili postavke pregleda automatske reprodukcije!",
      },
      error: {
        labelEng:
          "Choose a different autoplay previews settings from the one you had!",
        labelHr:
          "Odaberite drugačije postavke pregleda automatske reprodukcije od onih kojih ste imali!",
      },
    },
    changeProfileImage: {
      success: {
        labelEng: "You have successfully changed your profile image!",
        labelHr: "Uspješno ste promijenili sliku profila!",
      },
      error: {
        labelEng: "Choose a different profile image from the one you had!",
        labelHr: "Odaberite drugačiju sliku profila od one koju ste imali!",
      },
    },
    deleteProfile: {
      success: {
        labelEng: "You have successfully canceled your membership!",
        labelHr: "Uspješno ste otkazali svoje članstvo!",
      },
      error: {
        labelEng: "",
        labelHr: "",
      },
    },
  },
  header: {
    categories: [
      {
        id: 1,
        frontendSlug: "home",
        titleEng: "Home",
        titleHr: "Početna",
      },
      {
        id: 2,
        frontendSlug: "shows",
        titleEng: "Series",
        titleHr: "Serije",
      },
      {
        id: 3,
        frontendSlug: "movies",
        titleEng: "Movies",
        titleHr: "Filmovi",
      },
      {
        id: 4,
        frontendSlug: "newPopular",
        titleEng: "New and popular",
        titleHr: "Novo i popularno",
      },
      {
        id: 5,
        frontendSlug: "myList",
        titleEng: "My list",
        titleHr: "Moj popis",
      },
    ],
    searchInput: {
      type: "text",
      frontendSlug: "browseSearch",
      placeholderEng: "Titles, people, genres",
      placeholderHr: "Naslovi, osobe, žanrovi",
      validation: "",
      name: "browseSearch",
    },
    controls: [
      {
        id: 1,
        frontendSlug: "manageProfiles",
        titleEng: "Manage profiles",
        titleHr: "Upravljaj profilima",
      },
      {
        id: 2,
        frontendSlug: "transferProfile",
        titleEng: "Transfer profile",
        titleHr: "Prenesi profil",
      },
      {
        id: 3,
        frontendSlug: "account",
        titleEng: "Account",
        titleHr: "Račun",
      },
      {
        id: 4,
        frontendSlug: "helpCenter",
        titleEng: "Help center",
        titleHr: "Centar za pomoć",
      },
    ],
    logout: {
      frontendSlug: "logout",
      titleEng: "Log out of netflix",
      titleHr: "Odjavi se iz netflixa",
    },
  },
  categorizedActivePageContent: [
    {
      id: 1,
      frontendSlug: "home",
      movieSlug: "nowhere",
      image:
        "http://localhost:6060/images/browse/home_background_image_nowhere.webp",
      video: "http://localhost:6060/videos/home_background_trailer_nowhere.mp4",
      buttons: [
        {
          id: 1,
          frontendSlug: "play",
          labelEng: "Play",
          labelHr: "Pokreni",
        },
        {
          id: 2,
          frontendSlug: "info",
          labelEng: "More Info",
          labelHr: "Više Informacija",
        },
      ],
      contentData: {
        frontendSlug: "nowhere",
        image:
          "http://localhost:6060/images/browse/home_background_image_nowhere.webp",
        nameEng: "Nowhere",
        nameHr: "Nigdje",
        genres: [
          {
            id: 1,
            frontendSlug: "drama",
            labelEng: "Drama",
            labelHr: "Drama",
          },
          {
            id: 2,
            frontendSlug: "thriller",
            labelEng: "Thriller",
            labelHr: "Triler",
          },
        ],
        isTrending: false,
        runTime: {
          hour: 1,
          minutes: 49,
        },
        tags: [],
        productionYear: 2023,
        videoContent:
          "http://localhost:6060/videos/watchable_movie_content.mp4",
        trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
        about: {
          director: "Albert Pintó",
          cast: ["Anna Castillo", "Tamar Novas", "Tony Corvillo"],
          writers: ["Miguel Ruz", "Ernest Riera", "Indiana Lista"],
          maturityRating: 18,
          maturityTags: [
            {
              id: 1,
              frontendSlug: "violence",
              labelEng: "Violence",
              labelHr: "Nasilje",
            },
            {
              id: 2,
              frontendSlug: "survivalDrama",
              labelEng: "Survival Drama",
              labelHr: "Drama preživljavanja",
            },
          ],
        },
        descEng:
          "A young pregnant woman named Mia escapes from a country at war by hiding in a maritime container aboard a cargo ship. After a violent storm, Mia gives birth to her child while lost at sea, where she must fight to survive.",
        descHr:
          "Mlada trudna žena po imenu Mia bježi iz zemlje u ratu skrivajući se u pomorskom kontejneru na teretnom brodu. Nakon jake oluje, Mia rađa svoje dijete izgubljena u moru, gdje se mora boriti da preživi.",
        imdbLink: "https://www.imdb.com/title/tt15789472",
      },
    },
    {
      id: 2,
      frontendSlug: "movies",
      movieSlug: "takeCareOfMaya",
      image:
        "http://localhost:6060/images/browse/movies_background_image_takeCareOfMaya.webp",
      video:
        "http://localhost:6060/videos/movies_background_trailer_takeCareOfMaya.mp4",
      buttons: [
        {
          id: 1,
          frontendSlug: "play",
          labelEng: "Play",
          labelHr: "Pokreni",
        },
        {
          id: 2,
          frontendSlug: "info",
          labelEng: "More Info",
          labelHr: "Više Informacija",
        },
      ],
      contentData: {
        movieSlug: "takeCareOfMaya",
        frontendSlug:
          "http://localhost:6060/images/browse/movies_background_image_takeCareOfMaya.webp",
        image:
          "http://localhost:6060/images/browse/movies_background_image_takeCareOfMaya.webp",
        nameEng: "Take Care of Maya",
        nameHr: "Čuvaj Mayu",
        genres: [
          {
            id: 1,
            frontendSlug: "documentary",
            labelEng: "Documentary",
            labelHr: "Dokumentarni",
          },
        ],
        isTrending: false,
        runTime: {
          hour: 1,
          minutes: 43,
        },
        tags: [],
        productionYear: 2023,
        videoContent:
          "http://localhost:6060/videos/watchable_movie_content.mp4",
        trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
        about: {
          director: "Henry Roosevel",
          cast: [],
          writers: ["Henry Roosevel"],
          maturityRating: 14,
          maturityTags: [
            {
              id: 1,
              frontendSlug: "parentalRights",
              labelEng: "Parental Rights",
              labelHr: "Prava Roditelja",
            },
            {
              id: 2,
              frontendSlug: "hospital",
              labelEng: "Hospital",
              labelHr: "Bolnica",
            },
          ],
        },
        descEng:
          "As a medical team tries to understand 10-year-old Maya Kowalski's rare illness, they begin to question her parents. Suddenly, Maya is in state custody - despite a family desperate to bring their daughter home.",
        descHr:
          "Dok liječnički tim pokušava razumjeti rijetku bolest 10-godišnje Maye Kowalski, počinju ispitivati ​​njezine roditelje. Odjednom, Maya je u državnom pritvoru - unatoč obitelji koja očajnički želi vratiti svoju kćer kući.",
        imdbLink: "https://www.imdb.com/title/tt15789472",
      },
    },
    {
      id: 3,
      frontendSlug: "shows",
      movieSlug: "aliceInBorderland",
      image:
        "http://localhost:6060/images/browse/series_background_image_inTime.webp",
      video:
        "http://localhost:6060/videos/series_background_trailer_aliceInBorderland.mp4",
      buttons: [
        {
          id: 1,
          frontendSlug: "play",
          labelEng: "Play",
          labelHr: "Pokreni",
        },
        {
          id: 2,
          frontendSlug: "info",
          labelEng: "More Info",
          labelHr: "Više Informacija",
        },
      ],
      contentData: {
        seasons: [
          [
            {
              season: 1,
              episodes: [
                {
                  id: 1,
                  croatian_title: "Igra počinje",
                  english_title: "The Game Begins",
                  croatian_description:
                    "Ryohei Arisu and his friends find themselves in a deserted Tokyo and are forced to play a deadly game to survive.",
                  english_description:
                    "Ryohei Arisu and his friends find themselves in a deserted Tokyo and are forced to play a deadly game to survive.",
                  image:
                    "http://localhost:6060/images/browse/series_background_image_inTime.webp",
                  videoContent:
                    "http://localhost:6060/videos/watchable_movie_content.mp4",
                  trailer:
                    "http://localhost:6060/videos/watchable_movie_content.mp4",
                },
                {
                  id: 2,
                  croatian_title: "Vrhunac opasnosti",
                  english_title: "Peak of Danger",
                  croatian_description:
                    "The group faces a new set of challenges as they continue to play the dangerous games in the parallel world.",
                  english_description:
                    "The group faces a new set of challenges as they continue to play the dangerous games in the parallel world.",
                  image:
                    "http://localhost:6060/images/browse/series_background_image_inTime.webp",
                  videoContent:
                    "http://localhost:6060/videos/watchable_movie_content.mp4",
                  trailer:
                    "http://localhost:6060/videos/watchable_movie_content.mp4",
                },
                {
                  id: 3,
                  croatian_title: "Ponovno pokretanje",
                  english_title: "Restart",
                  croatian_description:
                    "Ryohei Arisu and his friends must confront their past and make difficult choices in the game.",
                  english_description:
                    "Ryohei Arisu and his friends must confront their past and make difficult choices in the game.",
                  image:
                    "http://localhost:6060/images/browse/series_background_image_inTime.webp",
                  videoContent:
                    "http://localhost:6060/videos/watchable_movie_content.mp4",
                  trailer:
                    "http://localhost:6060/videos/watchable_movie_content.mp4",
                },
                {
                  id: 4,
                  croatian_title: "Izlaz",
                  english_title: "Exit",
                  croatian_description:
                    "The group is determined to find an exit from the parallel world, but it comes with its own challenges and surprises.",
                  english_description:
                    "The group is determined to find an exit from the parallel world, but it comes with its own challenges and surprises.",
                  image:
                    "http://localhost:6060/images/browse/series_background_image_inTime.webp",
                  videoContent:
                    "http://localhost:6060/videos/watchable_movie_content.mp4",
                  trailer:
                    "http://localhost:6060/videos/watchable_movie_content.mp4",
                },
              ],
            },
          ],
        ],
        frontendSlug: "aliceInBorderland",
        image:
          "http://localhost:6060/images/browse/series_background_image_inTime.webp",
        nameEng: "Alice in Borderland",
        nameHr: "Alisa u Pograničnoj zemlji",
        genres: [
          {
            id: 1,
            frontendSlug: "mystery",
            labelEng: "Mystery",
            labelHr: "Zagonetno",
          },
          {
            id: 2,
            frontendSlug: "drama",
            labelEng: "Drama",
            labelHr: "Drama",
          },
          {
            id: 3,
            frontendSlug: "action",
            labelEng: "Action",
            labelHr: "Akcija",
          },
        ],
        isTrending: false,
        runTime: {
          hour: 0,
          minutes: 43,
        },
        tags: [],
        productionYear: 2020,
        videoContent:
          "http://localhost:6060/videos/watchable_movie_content.mp4",
        trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
        about: {
          director: "Haro Aso",
          cast: ["Kento Yamazaki", "Tao Tsuchiya", "Nijirô Murakami"],
          writers: ["Haro Aso"],
          maturityRating: 17,
          maturityTags: [
            {
              id: 1,
              frontendSlug: "survival",
              labelEng: "Survival",
              labelHr: "Preživljavanje",
            },
            {
              id: 2,
              frontendSlug: "gameOfDeath",
              labelEng: "Game of Death",
              labelHr: "Igra Smrti",
            },
          ],
        },
        descEng:
          "Obsessed gamer Arisu suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.",
        descHr:
          "Opsjednuti igrač Arisu iznenada se nađe u čudnoj, ispražnjenoj verziji Tokija u kojoj se on i njegovi prijatelji moraju natjecati u opasnim igrama kako bi preživjeli.",
        imdbLink: "https://www.imdb.com/title/tt10795658",
      },
    },
    {
      id: 4,
      frontendSlug: "newPopular",
      movieSlug: "forgottenLove",
      image:
        "http://localhost:6060/images/browse/newPopular_background_image_forgottenLove.webp",
      video:
        "http://localhost:6060/videos/newPopular_forgotten_love_trailer.mp4",
      buttons: [
        {
          id: 1,
          frontendSlug: "play",
          labelEng: "Play",
          labelHr: "Pokreni",
        },
        {
          id: 2,
          frontendSlug: "info",
          labelEng: "More Info",
          labelHr: "Više Informacija",
        },
      ],
      contentData: {
        frontendSlug: "forgottenLove",
        image:
          "http://localhost:6060/images/browse/newPopular_background_image_forgottenLove.webp",
        nameEng: "Forgotten Love",
        nameHr: "Zaboravljena Ljubav",
        genres: [
          {
            id: 1,
            frontendSlug: "drama",
            labelEng: "Drama",
            labelHr: "Drama",
          },
          {
            id: 2,
            frontendSlug: "romance",
            labelEng: "Romance",
            labelHr: "Romantika",
          },
        ],
        isTrending: false,
        runTime: {
          hour: 2,
          minutes: 20,
        },
        tags: [],
        productionYear: 2023,
        videoContent:
          "http://localhost:6060/videos/watchable_movie_content.mp4",
        trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
        about: {
          director: "Michal Gazda",
          cast: ["Leszek Lichota", "Maria Kowalska", "Ignacy Liss"],
          writers: [
            "Marcin Baczynski",
            "Mariusz Kuczewski",
            "Tadeusz Dolega-Mostowicz",
          ],
          maturityRating: 14,
          maturityTags: [
            {
              id: 1,
              frontendSlug: "nudity",
              labelEng: "Nudity",
              labelHr: "Golotinja",
            },
          ],
        },
        descEng:
          "Professor Wilczur, from whom his wife and beloved daughter left, is looking for oblivion in alcohol. Severely wounded in the head during an attempted robbery , he loses his memory.",
        descHr:
          "Profesor Wilczur, od kojeg su otišle njegova žena i voljena kći, traži zaborav u alkoholu. Teško ranjen u glavu prilikom pokušaja pljačke, gubi pamćenje.",
        imdbLink: "https://www.imdb.com/title/tt26596953",
      },
    },
  ],
};
