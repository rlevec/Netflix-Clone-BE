export const collateralData =  {
      id: 5,
      image: "http://localhost:6060/images/movies/collateral.jpg",
      frontendSlug: "collateral",
      categorySlug: "movies",
      nameEng: "Collateral",
      nameHr: "Kolateralno",
      genres: [
        {
          id: 1,
          frontendSlug: "action",
          labelEng: "Action",
          labelHr: "Akcija",
        },
        {
          id: 2,
          frontendSlug: "thriller",
          labelEng: "Thriller",
          labelHr: "Triler",
        },
      ],
      isTrending: true,
      runTime: {
        hour: 2,
        minutes: 0,
      },
      tags: [
        {
          id: 1,
          frontendSlug: "assassin",
          labelEng: "Assassin",
          labelHr: "Ubica",
        },
        {
          id: 2,
          frontendSlug: "urbanCrime",
          labelEng: "Urban Crime",
          labelHr: "Gradski kriminal",
        },
      ],
      productionYear: 2004,
      videoContent: "http://localhost:6060/videos/watchable_movie_content.mp4",
      trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
      about: {
        director: "Michael Mann",
        cast: ["Tom Cruise", "Jamie Foxx", "Jada Pinkett Smith"],
        writers: ["Stuart Beattie"],
        maturityRating: 17,
        maturityTags: [
          {
            id: 1,
            frontendSlug: "violence",
            labelEng: "Violence",
            labelHr: "Nasilje",
          },
          {
            id: 2,
            frontendSlug: "crimeThemes",
            labelEng: "Crime Themes",
            labelHr: "Kriminalne teme",
          },
        ],
      },
      descEng:
        "A taxi driver named Max is unexpectedly forced into driving a contract killer named Vincent to various targets in Los Angeles over the course of one night. As Max becomes an unwilling accomplice, he must find a way to survive while Vincent carries out his deadly assignments.",
      descHr:
        "Taksi vozač po imenu Max neočekivano se prisiljen voziti profesionalnog ubicu po imenu Vincent do različitih ciljeva u Los Angelesu tijekom jedne noći. Dok Max postaje nevoljni saučesnik, mora pronaći način kako preživjeti dok Vincent obavlja svoje smrtonosne zadatke.",
      imdbLink: "https://www.imdb.com/title/tt0369339",
    }