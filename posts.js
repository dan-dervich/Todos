const express = require('express')
const router = express()
const path = require('path')
require('dotenv').config()
const Todos = require('./db')
const jwt = require('jsonwebtoken')

router.get('/todos', (req, res) => {
    jwt.verify(req.cookies['token'],
        process.env.JWTSecret,
        (err, verifiedJwt) => {
            if (err) {
                // res.json(err.message);
                console.log(err.message);
                res.redirect('/auth/login')
            } else {
                var verifjwt = verifiedJwt
                // res.setHeader('Set-Cookie', `token = ${token}; path=/posts; max-age=31536000`)
                res.sendFile(path.join(__dirname, 'views', 'html', 'todos.html'))
            }
        })
})
// Create Todos
router.post('/create', async (req, res) => {
    jwt.verify(req.cookies['token'],
        process.env.JWTSecret,
        async (err, verifiedJwt) => {
            if (err) {
                // res.json(err.message);
                console.log(err.message);
                res.redirect('/auth/login')
            } else {
                var verifjwt = verifiedJwt
                if (req.body.time_to_expire == 'daily') {
                    const docs = new Todos({
                        email: verifiedJwt.payload.email,
                        daily_todos: {
                            todo_name: req.body.todo_name,
                            todo: req.body.todo
                        },
                        todo_type: req.body.time_to_expire
                    })
                    docs.save()
                    res.redirect('/posts/todos')
                }
                // * weekly
                else if (req.body.time_to_expire == 'weekly') {
                    const docs = new Todos({
                        email: verifiedJwt.payload.email,
                        weekly_todos: {
                            todo_name: req.body.todo_name,
                            todo: req.body.todo
                        },
                        todo_type: req.body.time_to_expire
                    })
                    docs.save()
                    res.redirect('/posts/todos')
                }
                // * monthly
                else if (req.body.time_to_expire == 'monthly') {
                    const docs = new Todos({
                        email: verifiedJwt.payload.email,
                        monthly_todos: {
                            todo_name: req.body.todo_name,
                            todo: req.body.todo
                        },
                        todo_type: req.body.time_to_expire
                    })
                    docs.save()
                    res.redirect('/posts/todos')
                }
                else if (req.body.time_to_expire == 'yearly') {
                    const docs = new Todos({
                        email: verifiedJwt.payload.email,
                        yearly_todos: {
                            todo_name: req.body.todo_name,
                            todo: req.body.todo
                        },
                        todo_type: req.body.time_to_expire
                    })
                    docs.save()
                    res.redirect('/posts/todos')
                }
            }
        })
})
// Get Todos
router.get('/daily_todos', (req, res) => {
    jwt.verify(req.cookies['token'],
        process.env.JWTSecret,
        async (err, verifiedJwt) => {
            if (err) {
                // res.json(err.message);
                console.log(err.message);
                res.redirect('/auth/login')
            } else {
                var verifjwt = verifiedJwt
                const docs = await Todos.find({
                    email: verifiedJwt.payload.email,
                    todo_type: "daily"
                })
                res.json({
                    docs
                })
            }
        })
})
router.get('/weekly_todos', (req, res) => {
    jwt.verify(req.cookies['token'],
        process.env.JWTSecret,
        async (err, verifiedJwt) => {
            if (err) {
                // res.json(err.message);
                console.log(err.message);
                res.redirect('/auth/login')
            } else {
                var verifjwt = verifiedJwt
                const docs = await Todos.find({
                    email: verifiedJwt.payload.email,
                    todo_type: "weekly"
                })
                res.json({
                    docs
                })
            }
        })
})
router.get('/monthly_todos', (req, res) => {
    jwt.verify(req.cookies['token'],
        process.env.JWTSecret,
        async (err, verifiedJwt) => {
            if (err) {
                // res.json(err.message);
                console.log(err.message);
                res.redirect('/auth/login')
            } else {
                var verifjwt = verifiedJwt
                const docs = await Todos.find({
                    email: verifiedJwt.payload.email,
                    todo_type: "monthly"
                })
                res.json({
                    docs
                })
            }
        })
})
router.get('/yearly_todos', (req, res) => {
    jwt.verify(req.cookies['token'],
        process.env.JWTSecret,
        async (err, verifiedJwt) => {
            if (err) {
                // res.json(err.message);
                console.log(err.message);
                res.redirect('/auth/login')
            } else {
                var verifjwt = verifiedJwt
                const docs = await Todos.find({
                    email: verifiedJwt.payload.email,
                    todo_type: "yearly"
                })
                res.json({
                    docs
                })
            }
        })
})
// Finish Todos
router.get('/finish/:id', async (req, res) => {
    const docs = await Todos.deleteOne({
        "_id": req.params.id
    })
    res.json(docs)
})
// Delete Todos
router.get('/delete/:id', async (req, res) => {
    const docs = await Todos.deleteOne({
        "_id": req.params.id
    })
    res.json({
        docs
    })
})
// Edit Todo
router.get('/edit/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'html', 'edit.html'))
})
router.post('/edit/:id', async (req, res) => {
    if (req.body.time_to_expire == 'daily') {
        const docs = await Todos.updateOne({
            "_id": req.params.id
        }, {
            $set: {
                daily_todos: {
                    todo_name: req.body.todo_name,
                    todo: req.body.todo
                }
            }
        })
        docs
        res.redirect('/posts/todos')
    }
    // * weekly
    else if (req.body.time_to_expire == 'weekly') {
        const docs = await Todos.updateOne({
            "_id": req.params._id
        }, {
            $set: {
                weekly_todos: {
                    todo_name: req.body.todo_name,
                    todo: req.body.todo
                }
            }
        })
        docs
        res.redirect('/posts/todos')
    }
    // * monthly
    else if (req.body.time_to_expire == 'monthly') {
        const docs = await Todos.updateOne({
            "_id": req.params._id
        }, {
            $set: {
                monthly_todos: {
                    todo_name: req.body.todo_name,
                    todo: req.body.todo
                }
            }
        })
        docs
        res.redirect('/posts/todos')
    }
    else if (req.body.time_to_expire == 'yearly') {
        const docs = await Todos.updateOne({
            "_id": req.params._id
        }, {
            $set: {
                yearly_todos: {
                    todo_name: req.body.todo_name,
                    todo: req.body.todo
                }
            }
        })
        docs
        res.redirect('/posts/todos')
    }
})
module.exports = router