export const fightClubData =  {
      id: 16,
      image: "http://localhost:6060/images/movies/fightClub.jpg",
      frontendSlug: "fightClub",
      categorySlug: "movies",
      nameEng: "Fight Club",
      nameHr: "Klub boraca",
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
      isTrending: true,
      runTime: {
        hour: 2,
        minutes: 19,
      },
      tags: [
        {
          id: 1,
          frontendSlug: "mindBending",
          labelEng: "Mind-Bending",
          labelHr: "Iskrivljen um",
        },
        {
          id: 2,
          frontendSlug: "anarchy",
          labelEng: "Anarchy",
          labelHr: "Anarhija",
        },
      ],
      productionYear: 1999,
      videoContent: "http://localhost:6060/videos/watchable_movie_content.mp4",
      trailer: "http://localhost:6060/videos/watchable_movie_content.mp4",
      about: {
        director: "David Fincher",
        cast: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"],
        writers: ["Chuck Palahniuk", "Jim Uhls"],
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
            frontendSlug: "existentialCrisis",
            labelEng: "Existential Crisis",
            labelHr: "Egzistencijalna kriza",
          },
        ],
      },
      descEng:
        "The film follows an insomniac office worker who forms an underground fight club as a form of male bonding and anarchy. It explores themes of consumerism, identity, and the consequences of living in a materialistic society.",
      descHr:
        "Film prati nesanicu muškarca zaposlenog u uredu koji osniva ilegalni klub boraca kao oblik muškog povezivanja i anarhije. Istražuje teme konzumerizma, identiteta i posljedica života u materijalističkom društvu.",
      imdbLink: "https://www.imdb.com/title/tt0137523",
    }