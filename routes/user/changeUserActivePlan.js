export const handleChangeUserActivePlanAction = (req, res, users) => {
  let payloadData = req.body.payload;

  const { email, activeLanguage, newActivePlan } = payloadData;

  if (!users[email])
    res.status(400).json({
      error:
        activeLanguage === "English"
          ? "User does not exists in our database!"
          : "Korisnik ne postoji u našoj bazi podataka!",
    });
  else {
    users[email].activePlan = newActivePlan;
    res.status(200).json({
      message:
        activeLanguage === "English"
          ? "You have successfully changed your active plan!"
          : "Uspješno ste promijenili aktivni plan!",
    });
  }
};