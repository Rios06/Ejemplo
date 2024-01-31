const countrieRouter = require("./countrieRoutes")

const routerAPI = (app) => {
    app.use("/countries", countrieRouter)
}

module.exports = routerAPI