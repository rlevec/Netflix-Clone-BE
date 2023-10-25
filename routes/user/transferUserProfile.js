export const handleTransferUserProfileAction = (req, res, users) => {
  let profilePayloadData = req.body.payload;

  const { newProfileTransfer, email, activeLanguage } = profilePayloadData;

  if (!users[email])
    res.status(400).json({
      error:
        activeLanguage === "English"
          ? "User does not exists in our database!"
          : "Korisnik ne postoji u našoj bazi podataka!",
    });
  else {
    users[email].profileTransfer = newProfileTransfer;
    res.status(200).json({
      message:
        activeLanguage === "English"
          ? "You have successfully enabled profile transfer!"
          : "Uspješno ste osposobili prijenos profila!",
    });
  }
};