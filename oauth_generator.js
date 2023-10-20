const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();
const data = {
  web: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    project_id: "ytchimp",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: [...process.env.GOOGLE_REDIRECT_URI.split(" ")],
    javascript_origins: [...process.env.GOOGLE_JS_ORIGIN.split(" ")],
  },
};
fs.mkdirSync("./dist/util", { recursive: true }, (err) => {
  if (err) throw err;
});

fs.writeFileSync("./dist/util/oauth.json", JSON.stringify(data), (err) => {
  if (err) throw err;
});
