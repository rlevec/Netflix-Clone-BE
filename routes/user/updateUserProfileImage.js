export const handleUpdateUserProfileImageAction = (req, res, users) => {
      let profilePayloadData = req.body.payload;

      const { newImageSlug, email, activeLanguage, initialAccountName } =
        profilePayloadData;

      const matchAccount =
        users[email].accounts.length &&
        users[email].accounts.find(
          (el) => el?.accountName === initialAccountName
        );

      const index = users[email].accounts?.indexOf(matchAccount);
      users[email].accounts[index].image = newImageSlug;

      res.status(200).json({
        message:
          activeLanguage === "English"
            ? "You have successfully updated profile image!"
            : "Uspješno ste ažurirali sliku profila!",
      });
};