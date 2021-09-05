const db = require('./db')

// Books = [
//     { bookname: "the alchemist", author: "paulo", price: 200, no_copies: 5, sold: 5, },
//     { bookname: "alice in wonderland", author: "lewis", price: 500, no_copies: 10, sold: 2 },
//     { bookname: "harry porter", author: "rowling", price: 400, no_copies: 3, sold: 1 },
//     { bookname: "pathumede aadu", author: "basheer", price: 100, no_copies: 20, sold: 20 }

// ]

users = {
    1000: { uid: 1000, uname: "jio", pswd: "jio" }
}
outstocks = []
instocks = []

const register = (uid, uname, pswd) => {
    return db.User.findOne({
        uid
    }).then(user => {
        if (user) {
            return {
                statuscode: 422,
                message: "user alredy exist"
            }


        }
        else {
            const newUser = new db.User(
                {
                    uid, uname, pswd
                })
            newUser.save()
            return {
                statuscode: 200,
                status: true,
                newUser: newUser.uid,
                message: "Register Successfully"
            }
        }
    })


}
const login = (req, uid, pswd) => {
    return db.User.findOne({
        uid, pswd
    }).then(user => {
        if (user) {
            req.session.currentUser = user.uid
            return {
                statuscode: 200,
                status: true,
                message: "login Successfully",
                currentAcc: user.uid,
                userName: user.uname
            }

        }
        else {
            return {
                statuscode: 422,
                status: false,
                message: "invalid account"
            }
        }
    })

}

const addBook = (bookname, author, price, no_copies, image) => {
    return db.Book.findOne({
        bookname
    }).then(book => {
        if (book) {
            return {
                statuscode: 422,
                message: "Book alredy exist"
            }


        }
        else {
            const newBook = new db.Book(
                {
                    bookname, author, price, no_copies, image, sold: 0
                })
            newBook.save()
            return {
                statuscode: 200,
                status: true,
                newBook: newBook,
                message: "Book added Successfully"
            }
        }
    })
}

const searchBook = (bookname) => {
    return db.Book.findOne({
        bookname
    }).then(book => {
        if (book) {
            console.log(book);

            return {
                statuscode: 200,
                book: book,
                message: "Found Book"

            }
        }
        else {
            return {
                statuscode: 422,
                status: true,
                message: "book not found"
            }
        }
    })

}
const outStockBooks = (uid) => {
    return db.Book.find({ stock: { $eq: 0 } })
        .then(book => {
            if (book) {
                return {
                    statuscode: 200,
                    status: true,
                    outstocks: book,
                    message: book.length + "OutOfStock Books"
                }
            }
            else {
                return {
                    statuscode: 422,
                    status: true,
                    message: "no outOfStock Books"
                }
            }

        })
    // for (let book of Books) {
    //     if (book["no_copies"] == book["sold"]) {
    //         outstocks.push(book)

    //     }
    // }


}

const instock = (uid) => {
    return db.Book.find({ stock: { $ne: 0 } })
        .then(book => {
            return {
                statuscode: 200,
                status: true,
                instocks: book,
                message: book.length + "inStock Books"
            }
        })

}

const buyBook = (bookname, quantity) => {
    return db.Book.find({ bookname })
        .then(book => {
            if (book) {
                console.log(book[0].stock);
                var qty = parseInt(quantity)
                if (book[0].stock >= qty) {
                    book[0].stock -= qty

                    book[0].save()

                    return {
                        statuscode: 200,
                        status: true,
                        message: " Your order is successfully placed" + "available stock is" + book[0].stock
                    }
                }


            }


        })
}
const viewBooks = () => {
    return db.Book.find({

    })
        .then(book => {
            if (book) {
                console.log(book)
                return {
                    statuscode: 200,
                    status: true,
                    books: book,
                    message: " books displayed successfully"
                }
            }
        })
    
}

const logout = () => {

}


module.exports = { searchBook, register, login, instock, outStockBooks, addBook, buyBook, logout, viewBooks }