const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/v1/users.route");
const { connectToServer } = require("./utilities/mongodb");
const errorHandler = require("./middleware/errorsHandlers");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

//middleware :
app.use(express.json());
app.use(cors());

//database connection :
connectToServer(error => {
    if (!error) {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
    } else { console.log(error); }
})

//routes :
app.use("/api/v1/users", usersRoute)

// errorHandler :
app.use(errorHandler);
//unhandled promise rejection :
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});
