export const handleChangeUserProfileBrowseContentLanguageAction = (
  req,
  res,
  users
) => {
    let profilePayloadData = req.body.payload;

    const { newBrowseLanguage, email, activeLanguage, initialAccountName } =
      profilePayloadData;

    const matchAccount =
      users[email].accounts.length &&
      users[email].accounts.find(
        (el) => el?.accountName === initialAccountName
      );

    if (matchAccount) {
      const index = users[email].accounts?.indexOf(matchAccount);
      users[email].accounts[index].language = newBrowseLanguage;

      res.status(200).json({
        message:
          activeLanguage === "English"
            ? "You have successfully updated browse content language!"
            : "Uspješno ste ažurirali jezik za aktualni sadržaj!",
      });
    }
};