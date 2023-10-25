export const handleChangeUserPasswordAction = (req, res, users) => {
  let passwordChangePayloadData = req.body.payload;

  const { email, activeLanguage, newPassword } = passwordChangePayloadData;

  if (!users[email])
    res.status(400).json({
      error:
        activeLanguage === "English"
          ? "User does not exists in our database!"
          : "Korisnik ne postoji u našoj bazi podataka!",
    });
  else {
    users[email].password = newPassword;
    res.status(200).json({
      message:
        activeLanguage === "English"
          ? "You have successfully changed your password!"
          : "Uspješno ste promijenili lozinku!",
    });
  }
};