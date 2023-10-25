export const handleLogUserAction = (req, res, users) => {
  let logUserPayloadData = req.body.payload;

  const { email: userEmail, activeLanguage, password } = logUserPayloadData;

  if (!users[userEmail])
    res.status(400).json({
      error:
        activeLanguage === "English"
          ? "No user matches provided email address!"
          : "Nijedan korisnik ne odgovara navedenoj adresi e-pošte!",
    });
  else if (users[userEmail]) {
    if (users[userEmail].loggedStatus)
      res.status(400).json({
        error:
          activeLanguage === "English"
            ? "User already logged in!"
            : "Korisnik je već prijavljen!",
      });
    else {
      if (users[userEmail]?.password === password) {
        users[userEmail].loggedStatus = true;
        res.status(200).json({
          message:
            activeLanguage === "English"
              ? "You have successfully logged in!"
              : "Uspješno ste se prijavili!",
        });
      } else
        res.status(400).json({
          error:
            activeLanguage === "English"
              ? "Incorrect password!"
              : "Pogrešna lozinka!",
        });
    }
  }
};