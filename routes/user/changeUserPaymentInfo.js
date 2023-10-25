export const handleChangeUserPaymentInfoAction = (req, res, users) => {
     let payloadData = req.body.payload;

     const {
       email,
       activeLanguage,
       newCardNumber,
       newCcv,
       newFirstName,
       newLastName,
     } = payloadData;

     if (!users[email])
       res.status(400).json({
         error:
           activeLanguage === "English"
             ? "User does not exists in our database!"
             : "Korisnik ne postoji u našoj bazi podataka!",
       });
     else {
       users[email].cardNumber = newCardNumber;
       users[email].ccv = newCcv;
       users[email].firstName = newFirstName;
       users[email].lastName = newLastName;
       res.status(200).json({
         message:
           activeLanguage === "English"
             ? "You have successfully changed your payment info!"
             : "Uspješno ste promijenili informacije o plaćanju!",
       });
     }
};