import { handleDateObject } from "./helpers.js";

export const handleChangeUserBillingDayAction = (req, res, users) => {
  let payloadData = req.body.payload;

  const { email, activeLanguage, newBillingDay } = payloadData;

  if (!users[email])
    res.status(400).json({
      error:
        activeLanguage === "English"
          ? "User does not exists in our database!"
          : "Korisnik ne postoji u našoj bazi podataka!",
    });
  else {
    let billingDayChecked;
    if (newBillingDay === 30 && handleDateObject()?.month === 2)
      billingDayChecked = 28;
    else billingDayChecked = newBillingDay;
    users[email].billingDay = billingDayChecked;
    res.status(200).json({
      message:
        activeLanguage === "English"
          ? "You have successfully changed your billing day!"
          : "Uspješno ste promijenili dan plaćanja!",
    });
  }
};
