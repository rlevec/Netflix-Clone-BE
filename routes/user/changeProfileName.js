export const handleChangeUserProfileNameAction = (req, res, users) => {
    let profilePayloadData = req.body.payload;

    const { newAccountName, email, activeLanguage, initialAccountName } =
      profilePayloadData;

    const matchAccount =
      users[email].accounts.length &&
      users[email].accounts.find(
        (el) => el?.accountName === initialAccountName
      );

    if (matchAccount) {
      if (
        users[email].accounts.length &&
        !!users[email].accounts.find(
          (el) =>
            el?.accountName === newAccountName &&
            newAccountName !== initialAccountName
        )
      )
        res.status(400).json({
          message:
            activeLanguage === "English"
              ? "A profile with that name already exists!"
              : "Profil sa unesenim imenom već postoji!",
        });
      else {
        const index = users[email].accounts?.indexOf(matchAccount);
        users[email].accounts[index].accountName = newAccountName;

        res.status(200).json({
          message:
            activeLanguage === "English"
              ? "You have successfully updated account name!"
              : "Uspješno ste ažurirali ime profila!",
        });
      }
    }
};