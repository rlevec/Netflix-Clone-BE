export const handleChangeProfileForKidsSectionAction = (req, res, users) => {
    let profilePayloadData = req.body.payload;

    const { newForKids, email, activeLanguage, initialAccountName } =
      profilePayloadData;

    const matchAccount =
      users[email].accounts.length &&
      users[email].accounts.find(
        (el) => el?.accountName === initialAccountName
      );

    if (matchAccount) {
      const index = users[email].accounts?.indexOf(matchAccount);
      users[email].accounts[index].forKids = newForKids;

      res.status(200).json({
        message:
          activeLanguage === "English"
            ? "You have successfully updated for kids selector!"
            : "Uspješno ste ažurirali selektor za djecu!",
      });
    }
};