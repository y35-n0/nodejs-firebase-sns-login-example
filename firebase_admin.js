
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");
// const serviceAccount = require("./firebase_admin_private_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;