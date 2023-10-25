export const handleDeleteUserAction = (req, res, users) => {
  let userPayloadData = req.body.payload;

  const { activeLanguage, email } = userPayloadData;

  delete users[email];

  res.status(200).json({
    message:
      activeLanguage === "English"
        ? "You have successfully canceled your membership!"
        : "Uspješno ste otkazali svoje članstvo!",
  });
};