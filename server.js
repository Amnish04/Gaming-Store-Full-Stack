const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.port || 3001;
const exphbs = require('express-handlebars');
const pData = require("./modules/productData.js"); 

app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    layoutsDir: __dirname+"/views/layouts",
    partialsDir: __dirname+"/views/partials",
    helpers: {
        strong: function(options){
            return '<strong>' + options.fn(this) + '</strong>';
        },
        priceFormat: function(options) {
            return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
                options.fn(this) / 100);
        }   
    }
}));

app.set("view engine", ".hbs");

var options = {
};
app.use(express.static("public", options));

app.get("/", (req, res) => {
    pData.getProductsByCategory("c1")
    .then(function(data) {
        res.render('index', {
            data: data,
            layout: "mainLayout" // do not use the default Layout (main.hbs)
        });
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get("/Consoles", (req, res) => {
    pData.getProductsByCategory("c1").then(function(data) {
        res.render('index', {
            data: data,
            layout: "mainLayout" // do not use the default Layout (main.hbs)
        });
    }).catch((err) => {
        console.log(err);
    });
});

app.get("/Laptops", (req, res) => {
    pData.getProductsByCategory("c2").then(function(data) {
        res.render('index', {
            data: data,
            layout: "mainLayout" // do not use the default Layout (main.hbs)
        });
    }).catch((err) => {
        console.log(err);
    });
});

app.get("/Games", (req, res) => {
    pData.getProductsByCategory("c3").then(function(data) {
        res.render('index', {
            data: data,
            layout: "mainLayout" // do not use the default Layout (main.hbs)
        });
    }).catch((err) => {
        console.log(err);
    });
});

app.get("/PC%20Components", (req, res) => {
    pData.getProductsByCategory("c4").then(function(data) {
        res.render('index', {
            data: data,
            layout: "mainLayout" // do not use the default Layout (main.hbs)
        });
    }).catch((err) => {
        console.log(err);
    });
});
app.get("/Accessories", (req, res) => {
    pData.getProductsByCategory("c5").then(function(data) {
        res.render('index', {
            data: data,
            layout: "mainLayout" // do not use the default Layout (main.hbs)
        });
    }).catch((err) => {
        console.log(err);
    });
});

pData.initializeContent()
.then(() => {
    app.listen(PORT, () => {
        console.log("Now listening on port: " + PORT);
    });
})
.catch((msg) => {
    console.log(msg);
})

/* Doubt */
/*
pData.getAllProducts()
    .then((data) => {
        // res.render('/views/index', {
        //     data: data,
        //     layout: false // do not use the default Layout (main.hbs)
        // });
        res.send("Hello");
    })
    .catch((err) => {
        console.log(err);
    });
 */
