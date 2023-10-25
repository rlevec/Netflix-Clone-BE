export const psychoData =  {
      id: 43,
      image: "http://localhost:6060/images/movies/psycho.jpg",
      frontendSlug: "psycho",
      categorySlug: "movies",
      nameEng: "Psycho",
      nameHr: "Psiho",
      genres: [
        {
          id: 1,
          frontendSlug: "horror",
          labelEng: "Horror",
          labelHr: "Horor",
        },
        {
          id: 2,
          frontendSlug: "mystery",
          labelEng: "Mystery",
          labelHr: "Misterija",
        },
      ],
      isTrending: false,
      runTime: {
        hour: 1,
        minutes: 49,
      },
      tags: [
        {
          id: 1,
          frontendSlug: "psychologicalThriller",
          labelEng: "Psychological Thriller",
          labelHr: "Psihološki triler",
        },
        {
          id: 2,
          frontendSlug: "batesMotel",
          labelEng: "Bates Motel",
          labelHr: "Bates Motel",
        },
      ],
      productionYear: 1960,
      videoContent: "http://localhost:6060/videos/watchable_movie_content.mp4",
      trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
      about: {
        director: "Alfred Hitchcock",
        cast: ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
        writers: ["Joseph Stefano", "Robert Bloch"],
        maturityRating: 15,
        maturityTags: [
          {
            id: 1,
            frontendSlug: "psychoanalysis",
            labelEng: "Psychoanalysis",
            labelHr: "Psihoanaliza",
          },
          {
            id: 2,
            frontendSlug: "suspense",
            labelEng: "Suspense",
            labelHr: "Napetost",
          },
        ],
      },
      descEng:
        "The film is a classic horror thriller that follows the unsettling events at the Bates Motel. Marion Crane checks in and meets the enigmatic Norman Bates, leading to a series of terrifying and suspenseful twists.",
      descHr:
        "Film je klasik horor trilera koji prati uznemirujuće događaje u Bates Motelu. Marion Crane se prijavljuje i susreće enigmatičnog Normana Batesa, što dovodi do niza zastrašujućih i napetih obrata.",
      imdbLink: "https://www.imdb.com/title/tt0054215",
    }