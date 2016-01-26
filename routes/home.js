var express = require("express")
var merge = require("object-merge")
var config = require(rootDir + "bin/config")

var meta = require(rootDir + "locales/" + config.lang + "/common/meta")
var header = require(rootDir + "locales/" + config.lang + "/common/header")
var footer = require(rootDir + "locales/" + config.lang + "/common/footer")
var home = require(rootDir + "locales/" + config.lang + "/home")
var content = merge(meta, header, footer, home)

// -----------------------------------------

var router = express.Router()

router.get("/home", function(req, res, next)
    {
    config.debug.routing("GET request -> /home")

    res.render("home", content)
    })

// -----------------------------------------

module.exports = router