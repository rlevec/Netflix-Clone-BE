export const handleLogoutUserAction = (req, res, users) => {
  let logUserPayloadData = req.body.payload;

  const { email: userEmail, activeLanguage } = logUserPayloadData;

  if (!users[userEmail])
    res.status(400).json({
      error:
        activeLanguage === "English"
          ? "No user matches provided email address!"
          : "Nijedan korisnik ne odgovara navedenoj adresi e-pošte!",
    });
  else if (users[userEmail]) {
    if (!users[userEmail].loggedStatus)
      res.status(400).json({
        error:
          activeLanguage === "English"
            ? "User already logged out!"
            : "Korisnik je već odjavljen!",
      });
    else {
      users[userEmail].loggedStatus = false;
      res.status(200).json({
        message:
          activeLanguage === "English"
            ? "You have successfully logged out!"
            : "Uspješno ste se odjavili!",
      });
    }
  }
};