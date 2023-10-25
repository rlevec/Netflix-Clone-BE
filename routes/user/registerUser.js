import { handleDateObject } from "./helpers.js";

export const handleUserRegisterAction = (req, res, users) => {
  let registerUserPayloadData = req.body.payload;

  const {
    email: userEmail,
    password,
    cardNumber,
    ccv,
    firstName,
    lastName,
    activeLanguage,
    accounts,
    loggedStatus,
    activePlan,
    profileTransfer,
  } = registerUserPayloadData;

  if (users[userEmail])
    res.status(400).json({
      error:
        activeLanguage === "English"
          ? "User already exists!"
          : "Korisnik već postoji!",
    });
  else {
    users[userEmail] = {
      password,
      cardNumber,
      ccv,
      firstName,
      lastName,
      accounts,
      loggedStatus,
      activePlan,
      profileTransfer,
      billingDay: handleDateObject()?.dayOfMonth,
      registerDate: {
        month: handleDateObject()?.monthTitle,
        year: handleDateObject()?.year,
      },
    };
    res.status(200).json({
      message:
        activeLanguage === "English"
          ? "You have successfully registered!"
          : "Uspješno ste se registrirali!",
    });
  }
};
