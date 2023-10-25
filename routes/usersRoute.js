import express from "express";

const router = express.Router();

import { handleUserRegisterAction } from "./user/registerUser.js";
import { handleLogUserAction } from "./user/logUser.js";
import { handleLogoutUserAction } from "./user/logoutUser.js";
import { handleDeleteUserAction } from "./user/deleteUser.js";
import { handleChangeUserPasswordAction } from "./user/changeUserPassword.js";
import { handleAddUserProfileAction } from "./user/addUserProfile.js";
import { handleUpdateUserProfileAction } from "./user/updateUserProfile.js";
import { handleUpdateUserProfileImageAction } from "./user/updateUserProfileImage.js";
import { handleDeleteUserProfileAction } from "./user/deleteUserProfile.js";
import { handleChangeUserEmailAction } from "./user/changeUserEmail.js";
import { handleChangeUserPaymentInfoAction } from "./user/changeUserPaymentInfo.js";
import { handleChangeUserBillingDayAction } from "./user/changeUserBillingDay.js";
import { handleChangeUserActivePlanAction } from "./user/changeUserActivePlan.js";
import { handleChangeUserProfileNameAction } from "./user/changeProfileName.js";
import { handleChangeProfileForKidsSectionAction } from "./user/changeProfileForKidsSection.js";
import { handleChangeUserProfileGameNameAction } from "./user/changeUserProfileGameName.js";
import { handleChangeUserProfileBrowseContentLanguageAction } from "./user/changeUserBrowseContentLanguage.js";
import { handleChangeUserProfileMaturityRatingAction } from "./user/changeUserProfileMaturityRating.js";
import { handleChangeUserProfileAutoplayNextAction } from "./user/changeUserProfileAutoplayNext.js";
import { handleChangeUserProfileAutoplayPreviewAction } from "./user/changeUserProfileAuroplayPreview.js";
import { handleTransferUserProfileAction } from "./user/transferUserProfile.js";
import { handleUpdateUserProfileMyListAction } from "./user/updateUserProfileMyList.js";
import { handleUpdateUserProfileMyLikesAction } from "./user/updateUserProfileMyLikes.js";
import { handleRemoveContentFromMyList } from "./user/removeContentFromProfileMyList.js";
import { handleRemoveContentFromMyLikes } from "./user/removeContentFromProfileMyLikes.js";

let users = {};

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/register_user", (req, res) =>
  handleUserRegisterAction(req, res, users)
);

router.post("/log_user", (req, res) => handleLogUserAction(req, res, users));

router.post("/logout_user", (req, res) =>
  handleLogoutUserAction(req, res, users)
);

router.post("/delete_user", (req, res) =>
  handleDeleteUserAction(req, res, users)
);

router.post("/password_change", (req, res) =>
  handleChangeUserPasswordAction(req, res, users)
);

router.post("/add_profile", (req, res) =>
  handleAddUserProfileAction(req, res, users)
);

router.post("/update_profile", (req, res) =>
  handleUpdateUserProfileAction(req, res, users)
);

router.post("/update_profile_image", (req, res) =>
  handleUpdateUserProfileImageAction(req, res, users)
);

router.post("/delete_profile", (req, res) =>
  handleDeleteUserProfileAction(req, res, users)
);

router.post("/change_email", (req, res) =>
  handleChangeUserEmailAction(req, res, users)
);

router.post("/change_payment_info", (req, res) =>
  handleChangeUserPaymentInfoAction(req, res, users)
);

router.post("/change_billing_day", (req, res) =>
  handleChangeUserBillingDayAction(req, res, users)
);

router.post("/change_active_plan", (req, res) =>
  handleChangeUserActivePlanAction(req, res, users)
);

router.post("/change_account_name", (req, res) =>
  handleChangeUserProfileNameAction(req, res, users)
);

router.post("/change_for_kids", (req, res) =>
  handleChangeProfileForKidsSectionAction(req, res, users)
);

router.post("/change_game_name", (req, res) =>
  handleChangeUserProfileGameNameAction(req, res, users)
);

router.post("/change_browse_content_language", (req, res) =>
  handleChangeUserProfileBrowseContentLanguageAction(req, res, users)
);

router.post("/change_amr", (req, res) =>
  handleChangeUserProfileMaturityRatingAction(req, res, users)
);

router.post("/change_autoplay_next", (req, res) =>
  handleChangeUserProfileAutoplayNextAction(req, res, users)
);

router.post("/change_autoplay_preview", (req, res) =>
  handleChangeUserProfileAutoplayPreviewAction(req, res, users)
);

router.post("/update_user_profile_transfer", (req, res) =>
  handleTransferUserProfileAction(req, res, users)
);

router.post("/update_user_profile_my_list", (req, res) =>
  handleUpdateUserProfileMyListAction(req, res, users)
);

router.post("/update_user_profile_my_likes", (req, res) =>
  handleUpdateUserProfileMyLikesAction(req, res, users)
);

router.post("/remove_my_list_content", (req, res) =>
  handleRemoveContentFromMyList(req, res, users)
);

router.post("/remove_my_likes_content", (req, res) =>
  handleRemoveContentFromMyLikes(req, res, users)
);

export default router;
