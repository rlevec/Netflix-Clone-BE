import { profileGameNames } from "./helpers.js";

export const handleAddUserProfileAction = (req, res, users) => {
  let profilePayloadData = req.body.payload;

  const {
    accountName,
    forKids,
    email,
    activeLanguage,
    imageSlug,
    image,
    language,
    autoplayNext,
    autoplayPreview,
  } = profilePayloadData;

  const accountsLength = users[email].accounts.length;

  const findGameNameToPost = profileGameNames?.find(
    (el) => el?.id === accountsLength
  )?.name;

  if (users[email]) {
    if (
      users[email].accounts.length &&
      users[email].accounts.find((el) => el?.accountName === accountName)
    )
      res.status(400).json({
        message:
          activeLanguage === "English"
            ? "A profile with that name already exists!"
            : "Profil sa unesenim imenom već postoji!",
      });
    else {
      users[email].accounts?.push({
        accountName,
        forKids,
        imageSlug,
        image,
        gameName: findGameNameToPost,
        language,
        myList: [],
        likedContent: [],
        maturitySetting: {
          value: "allMaturityRatings",
          titleEng: "All Maturity Ratings",
          titleHr: "Sve Ocjene Zrelosti",
          limiter: null,
        },
        autoplayNext,
        autoplayPreview,
      });
      res.status(200).json({
        message:
          activeLanguage === "English"
            ? "You have successfully created a profile!"
            : "Uspješno ste kreairali profil!",
      });
    }
  }
};
