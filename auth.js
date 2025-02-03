import jwt from 'jsonwebtoken'
import brcrypt from 'bcrypt'

export const comparePasswords = (password, hashedPassword) => {
    return brcrypt.compare(password, hashedPassword)
}

export const hashPassword = (password) => {
    return brcrypt.hash(password, 5)
}

export const CreateJWT = (user) => {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET)
    return token
} 

export const protect = (req, res, next) => {
    const bearer = req.cookies.authorization.token

    if (!bearer) {
        res.status(401)
        res.send('Not authorized')
        return
    }

    // const [, token] = bearer.split('=')
    // if (!bearer) {
    //     res.status(401)
    //     res.send('Not authorized')
    //     return
    // }

    try {
        const user = jwt.verify(bearer, process.env.JWT_SECRET)
        req.user = user
        console.log(user)
        next()
    } catch (e) {
        res.status(401)
        res.send('Not authorized')
        return
    }
}