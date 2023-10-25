export const handleChangeUserProfileAutoplayPreviewAction = (req, res, users) => {
      let profilePayloadData = req.body.payload;

      const { newAutoplayPreview, email, activeLanguage, initialAccountName } =
        profilePayloadData;

      const matchAccount =
        users[email].accounts.length &&
        users[email].accounts.find(
          (el) => el?.accountName === initialAccountName
        );

      if (matchAccount) {
        const index = users[email].accounts?.indexOf(matchAccount);
        users[email].accounts[index].autoplayPreview = newAutoplayPreview;

        res.status(200).json({
          message:
            activeLanguage === "English"
              ? "You have successfully updated autoplay preview settings!"
              : "Uspješno ste ažurirali postavke pregleda automatske reprodukcije!",
        });
      }
};