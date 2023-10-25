export const handleUpdateUserProfileMyLikesAction = (req, res, users) => {
  let profilePayloadData = req.body.payload;


  const { email, activeLanguage, initialAccountName, data } =
    profilePayloadData;

  const matchAccount =
    users[email].accounts.length &&
    users[email].accounts.find((el) => el?.accountName === initialAccountName);

 
  const index = users[email].accounts?.indexOf(matchAccount);


  users[email].accounts[index].likedContent?.push(data);

  res.status(200).json({
    message:
      activeLanguage === "English"
        ? "You have successfully updated your likes!"
        : "Uspješno ste ažurirali svoje naklonosti!",
  });
};
