export const handleChangeUserEmailAction = (req, res, users) => {
  let payloadData = req.body.payload;

  const { email, activeLanguage, newEmail } = payloadData;

  if (!users[email])
    res.status(400).json({
      error:
        activeLanguage === "English"
          ? "User does not exists in our database!"
          : "Korisnik ne postoji u našoj bazi podataka!",
    });
  else {
    users[email].loggedStatus = false;
    users[newEmail] = users[email];
    delete users[email];
    res.status(200).json({
      message:
        activeLanguage === "English"
          ? "You have successfully changed your email!"
          : "Uspješno ste promijenili adresu e-pošte!",
    });
  }
};