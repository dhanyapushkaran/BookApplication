const express = require('express')
const cors = require('cors')
const dataservice = require('./service/data.service')
const session = require('express-session')


const app = express()

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))

app.use(session({
    secret: 'mybook',
    resave: false,
    saveUninitialized: false
}))
const autMiddleware = (req, res, next) => {
    if (!req.session.currentUser) {
        return res.json({
            statuscode: 422,
            message: "Please LogIn"
        })
    }
    else {
        next()
    }
}
app.use(express.json())
app.post('/', (req, res) => {
    res.send("hello post")
})

app.post('/home', (req, res) => {
    dataservice.searchBook(req.body.bname)
        .then(result => {
            res.status(result.statuscode).send(result)
        })

})
app.post('/register', (req, res) => {
    dataservice.register(req.body.uid, req.body.uname, req.body.pswd)
        .then(result => {
            res.status(result.statuscode).json(result)
        })

})
app.post('/login', (req, res) => {
    dataservice.login(req, req.body.uid, req.body.pswd)
        .then(result => {
            res.status(result.statuscode).json(result)
        })

})
app.post('/addBook', autMiddleware, (req, res) => {
    dataservice.addBook(req.body.bookname, req.body.author, req.body.price, req.body.no_copies, req.body.image)
        .then(result => {
            res.status(result.statuscode).json(result)
        })
})
app.post('/outstock', autMiddleware, (req, res) => {
    dataservice.outStockBooks(req.body.uid).then(result => {
        res.status(result.statuscode).json(result)
    })

})
app.post('/instock', autMiddleware, (req, res) => {
    dataservice.instock(req.body.uid).then(result => {
        res.status(result.statuscode).json(result)
    })

})
app.post('/buyBook', autMiddleware, (req, res) => {
    dataservice.buyBook(req.body.bookname, req.body.quantity).then(result => {
        res.status(result.statuscode).json(result)
    })

})

app.post('/viewBooks', autMiddleware, (req, res) => {
    dataservice.viewBooks().then(result => {
        res.status(result.statuscode).json(result)
    })

})

app.post('/logout', autMiddleware, (req, res) => {
    dataservice.logout(req.body.uid).then(result => {
        res.status(result.statuscode).json(result)
    })

})

app.listen(3000, () => {
    console.log("hai");
})