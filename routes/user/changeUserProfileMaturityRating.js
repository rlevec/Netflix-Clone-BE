export const handleChangeUserProfileMaturityRatingAction = (req, res, users) => {
      let profilePayloadData = req.body.payload;

      const { newMaturitySetting, email, activeLanguage, initialAccountName } =
        profilePayloadData;

      const matchAccount =
        users[email].accounts.length &&
        users[email].accounts.find(
          (el) => el?.accountName === initialAccountName
        );

      if (matchAccount) {
        const index = users[email].accounts?.indexOf(matchAccount);
        users[email].accounts[index].maturitySetting = newMaturitySetting;

        res.status(200).json({
          message:
            activeLanguage === "English"
              ? "You have successfully updated maturity settings!"
              : "Uspješno ste ažurirali postavke zrelosti!",
        });
      }
};