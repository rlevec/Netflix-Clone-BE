export const chernobylData = {
  id: 6,
  image: "http://localhost:6060/images/shows/chernobyl.jpg",
  frontendSlug: "chernobly",
  categorySlug: "tv",
  nameEng: "Chernobly",
  nameHr: "Černobli",
  genres: [
    {
      id: 1,
      frontendSlug: "drama",
      labelEng: "Drama",
      labelHr: "Drama",
    },
    {
      id: 2,
      frontendSlug: "history",
      labelEng: "History",
      labelHr: "Povijest",
    },
    {
      id: 3,
      frontendSlug: "thriller",
      labelEng: "Thriller",
      labelHr: "Triler",
    },
  ],
  isTrending: true,
  runTime: {
    hour: 0,
    minutes: 50,
  },
  tags: [
    {
      id: 1,
      frontendSlug: "disaster",
      labelEng: "Disaster",
      labelHr: "Katastrofa",
    },
    {
      id: 2,
      frontendSlug: "history",
      labelEng: "History",
      labelHr: "Povijest",
    },
  ],
  productionYear: 2019,
  videoContent: "http://localhost:6060/videos/watchable_movie_content.mp4",
  trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
  about: {
    writers: ["Craig Mazin"],
    cast: ["Jared Harris", "Stellan Skarsgård", "Emily Watson"],
    maturityRating: 16,
    maturityTags: [
      {
        id: 1,
        frontendSlug: "intense",
        labelEng: "Intense",
        labelHr: "Intenzivan",
      },
      {
        id: 2,
        frontendSlug: "historical",
        labelEng: "Historical",
        labelHr: "Povijesno",
      },
    ],
  },
  descEng:
    "Chernobly is a historical drama thriller series that explores the events of the Chernobyl nuclear disaster and its aftermath. It delves into the lives of those who tried to contain the disaster and the political struggles behind it.",
  descHr:
    "Černobli je povijesna dramska trilerna serija koja istražuje događaje nuklearne katastrofe u Černobilu i njezine posljedice. Bavi se životima onih koji su pokušali suzbiti katastrofu te političkim borbama iza nje.",
  imdbLink: "https://www.imdb.com/title/tt7366338",
  seasons: [
    [
      {
        season: 1,
        episodes: [
          {
            id: 1,
            croatian_title: "Eksplozija reaktora",
            english_title: "Reactor Explosion",
            croatian_description:
              "Serija počinje s eksplozijom reaktora u nuklearnoj elektrani u Černobilu i njenim katastrofalnim posljedicama.",
            english_description:
              "The series begins with the explosion of the reactor at the Chernobyl nuclear power plant and its catastrophic consequences.",
            image: "http://localhost:6060/images/shows/chernobyl.jpg",
            videoContent:
              "http://localhost:6060/videos/watchable_movie_content.mp4",
            trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
          },
          {
            id: 2,
            croatian_title: "Vatra i pepeo",
            english_title: "Fire and Ash",
            croatian_description:
              "Pokušaji gašenja požara na reaktoru suočavaju se s teškoćama, dok ljudi hrabro rizikuju svoje živote.",
            english_description:
              "Efforts to extinguish the reactor fire face difficulties as people bravely risk their lives.",
            image: "http://localhost:6060/images/shows/chernobyl.jpg",
            videoContent:
              "http://localhost:6060/videos/watchable_movie_content.mp4",
            trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
          },
          {
            id: 3,
            croatian_title: "Otisci na tlu",
            english_title: "Footprints on the Ground",
            croatian_description:
              "Nuklearni inženjeri se suočavaju s opasnostima izloženosti radijaciji dok rade na stabilizaciji reaktora.",
            english_description:
              "Nuclear engineers face the dangers of radiation exposure as they work to stabilize the reactor.",
            image: "http://localhost:6060/images/shows/chernobyl.jpg",
            videoContent:
              "http://localhost:6060/videos/watchable_movie_content.mp4",
            trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
          },
          {
            id: 4,
            croatian_title: "Ispod vodene površine",
            english_title: "Beneath the Surface",
            croatian_description:
              "U nastojanjima da ograniče katastrofu, ljudi se suočavaju s potresnim odlukama i teškoćama.",
            english_description:
              "In their efforts to contain the disaster, people face heartbreaking decisions and challenges.",
            image: "http://localhost:6060/images/shows/chernobyl.jpg",
            videoContent:
              "http://localhost:6060/videos/watchable_movie_content.mp4",
            trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
          },
        ],
      },
    ],
  ],
};
