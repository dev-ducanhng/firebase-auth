import firebase from "../config/firebase-config";

const socialMediaAuth = async (provider) => {
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      // console.log(res)
      return res.user;
    })
    .catch((err) => {
      return err;
    });
};

export default socialMediaAuth;