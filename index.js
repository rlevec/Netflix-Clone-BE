import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

import homepageUnauthenticatedFormDataRoute from "./routes/homepageUnauthenticatedFormDataRoute.js";
import footerFormDataRoute from "./routes/footerFormDataRoute.js";
import signUpFormDataRoute from "./routes/signUpFormDataRoute.js";
import signInFormDataRoute from "./routes/signInFormDataRoute.js";
import forgotEmailPasswordFormDataRoute from "./routes/forgotEmailPasswordFormDataRoute.js"
import headerFormDataRoute from "./routes/headerFormDataRoute.js";
import profilesFormDataRoute from "./routes/profilesFormDataRoute.js";
import browseFormDataRoute from "./routes/browseFormDataRoute.js";
import accountFormDataRoute from "./routes/accountFormDataRoute.js";
import profileTransferFormDataRoute from "./routes/profileTransferFormDataRoute.js";
import watchableContentFormDataRoute from "./routes/watchableContentFormDataRoute.js"

import usersFormDataRoute from "./routes/usersRoute.js"

const app = express();
const PORT = 6060;


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static("./public"))
app.use(cors())


const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"]

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    // Set other CORS headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Allow credentials (if needed)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    next();
});

app.use("/homepage_unauthenticated_formdata", homepageUnauthenticatedFormDataRoute)
app.use("/footer_formdata", footerFormDataRoute)
app.use("/signup_formdata", signUpFormDataRoute)
app.use("/signin_formdata", signInFormDataRoute)
app.use("/forgot_email_password_formdata", forgotEmailPasswordFormDataRoute)
app.use("/header_form_data", headerFormDataRoute)
app.use("/profiles_form_data", profilesFormDataRoute)
app.use("/browse_form_data", browseFormDataRoute)
app.use("/account_form_data", accountFormDataRoute)
app.use("/profile_transfer_form_data", profileTransferFormDataRoute)
app.use("/watchable_content_form_data", watchableContentFormDataRoute)

app.use("/users", usersFormDataRoute)

app.get("/", (req, res) => {
    res.send(`
           <div style="
                        display: flex;
                        background: #F0F8FF;
                        margin: 0 auto;
                        color: #002878;
                        height: 100%;
                        width: 100vw;
                        font-size: 56px;
                        justify-content: center;
                        align-items: center;
                        font-family: -apple-system, -apple-system, 
                        BlinkMacSystemFont, 'Segoe UI', Roboto, 
                        Oxygen, Ubuntu, Cantarell, 'Open Sans', 
                        'Helvetica Neue', sans-serif;
                         font-weight: 600;"
                 >⚡️[server]: http://localhost:${PORT}<div>
`
    );
})

app.listen(PORT) ;

