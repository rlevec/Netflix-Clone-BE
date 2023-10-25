export const handleChangeUserProfileAutoplayNextAction = (req, res, users) => {
  let profilePayloadData = req.body.payload;

  const { newAutoplayNext, email, activeLanguage, initialAccountName } =
    profilePayloadData;

  const matchAccount =
    users[email].accounts.length &&
    users[email].accounts.find((el) => el?.accountName === initialAccountName);

  if (matchAccount) {
    const index = users[email].accounts?.indexOf(matchAccount);
    users[email].accounts[index].autoplayNext = newAutoplayNext;

    res.status(200).json({
      message:
        activeLanguage === "English"
          ? "You have successfully updated autoplay next settings!"
          : "Uspješno ste ažurirali postavke za reprodukciju sljedećeg sadržaja!",
    });
  }
};