export const handleDeleteUserProfileAction = (req, res, users) => {
  let profilePayloadData = req.body.payload;

  const { accountName, email, activeLanguage } = profilePayloadData;

  const matchAccount =
    users[email].accounts.length &&
    users[email].accounts.find((el) => el?.accountName === accountName);

  const index = users[email].accounts?.indexOf(matchAccount);

  if (index > -1) {
    users[email].accounts?.splice(index, 1);
    res.status(200).json({
      message:
        activeLanguage === "English"
          ? "You have successfully deleted your profile!"
          : "Uspješno ste izbrisali svoj profil!",
    });
  }
};