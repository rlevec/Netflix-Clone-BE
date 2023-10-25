export const handleUpdateUserProfileAction = (req, res, users) => {
  let profilePayloadData = req.body.payload;

  const { email, activeLanguage, initialAccountName, accountName } =
    profilePayloadData;

  const matchAccount =
    users[email].accounts.length &&
    users[email].accounts.find((el) => el?.accountName === initialAccountName);
  if (matchAccount) {
    if (
      users[email].accounts.length &&
      !!users[email].accounts.find(
        (el) =>
          el?.accountName === accountName && accountName !== initialAccountName
      )
    )
      res.status(400).json({
        message:
          activeLanguage === "English"
            ? "A profile with that name already exists!"
            : "Profil sa unesenim imenom već postoji!",
      });
    else {
      Object.keys(profilePayloadData)?.forEach((key) => {
        if (
          key === "email" ||
          key === "activeLanguage" ||
          key === "initialAccountName"
        )
          return null;
        matchAccount[key] = profilePayloadData[key];
      });

      const index = users[email].accounts?.indexOf(matchAccount);
      users[email].accounts[index] = matchAccount;

      res.status(200).json({
        message:
          activeLanguage === "English"
            ? "You have successfully updated a profile!"
            : "Uspješno ste ažurirali profil!",
      });
    }
  }
};
