const mongoose = require("mongoose")

const ULR_DB = "mongodb+srv://Paises:4910247Jr@cluster0.5ocwqrw.mongodb.net/"

const initDB = () => {
    try {
        mongoose.connect(ULR_DB)
        console.log("la coneccion fue exitosa");
    } catch (error) {
        console.log(error);
    }
}

module.exports = initDB