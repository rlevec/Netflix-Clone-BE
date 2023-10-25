export const handleRemoveContentFromMyList = (req, res, users) => {
  let profilePayloadData = req.body.payload;


  const { accountName, email, activeLanguage, listItem } = profilePayloadData;

  const matchAccount =
    users[email].accounts.length &&
    users[email].accounts.find((el) => el?.accountName === accountName);

  const accountIndex = users[email].accounts?.indexOf(matchAccount);

  if (accountIndex > -1) {
    const matchListIndex =
      users[email]?.accounts[accountIndex]?.myList?.indexOf(listItem);

    users[email]?.accounts[accountIndex]?.myList?.splice(matchListIndex, 1);

    res.status(200).json({
      message:
        activeLanguage === "English"
          ? "You have successfully remove this content from your list!"
          : "Uspješno ste izbrisali ovaj sadržaj sa svoje liste!",
    });
  }
};
