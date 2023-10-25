export const handleUpdateUserProfileMyListAction = (req, res, users) => {
  let profilePayloadData = req.body.payload;

  console.log("profilePayloadData", profilePayloadData);

  const { email, activeLanguage, initialAccountName, data } =
    profilePayloadData;

  const matchAccount =
    users[email].accounts.length &&
    users[email].accounts.find((el) => el?.accountName === initialAccountName);

  const index = users[email].accounts?.indexOf(matchAccount);

  users[email].accounts[index].myList?.push(data);

  res.status(200).json({
    message:
      activeLanguage === "English"
        ? "You have successfully updated your list!"
        : "Uspješno ste ažurirali svoju listu!",
  });
};
