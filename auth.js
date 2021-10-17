const express = require('express')
const router = express()
const path = require('path')
const Todos = require('./db')
const jwt = require('jsonwebtoken')

router.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'html', 'login.html'))
})
router.post('/login', async (req, res)=>{
    const check_user = await Todos.findOne({"email": req.body.email})
    // * if no user
    if(check_user !== null){
        payload = {
            email: req.body.email,
        }
        // now all of our data is stored to the JWT
        const token = await jwt.sign({
                payload
            },
            process.env.JWTSecret, {
                algorithm: 'HS256'
            },
        )
        res.setHeader('Set-Cookie', `token=${token}; path=/posts;`)
        res.redirect('/posts/todos')
    } 
    // * if there is a user
    else{
        res.send('STOP TRYING TO GET INTO DANS SECRET TODOS.')
    }
})

module.exports = router