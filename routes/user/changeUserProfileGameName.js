export const handleChangeUserProfileGameNameAction = (req, res, users) => {
    let profilePayloadData = req.body.payload;

    const { newGameName, email, activeLanguage, initialAccountName } =
      profilePayloadData;

    const matchAccount =
      users[email].accounts.length &&
      users[email].accounts.find(
        (el) => el?.accountName === initialAccountName
      );

    if (matchAccount) {
      const index = users[email].accounts?.indexOf(matchAccount);
      users[email].accounts[index].gameName = newGameName;

      res.status(200).json({
        message:
          activeLanguage === "English"
            ? "You have successfully updated game name!"
            : "Uspješno ste ažurirali ime za igre!",
      });
    }
};