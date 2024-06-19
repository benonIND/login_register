const { hashing, compare } = require('../helpers/bcrypt')
const { createToken, verif } = require('../helpers/jwt')
const { User, Data } = require('../models')
class Controller {
    static async Register( req, res ) {
        try {
            let { name, email, password } = req.body
            let createUser = await User.create({ name, email, password: hashing( password ) })
            res.status(201).json({
                id: createUser.id,
                email: createUser.email
            })
        } catch( err ) {
            res.status(400).json( err )
        }
    }
// Yopie Rizqi Maulana
    static async Login( req, res ) {
        try {
            let { email, password } = req.body
            let checkUser = await User.findOne({ where: { email }})
            // console.log( checkUser.email );
            if( checkUser ) {
                let comparePass = compare(password, checkUser.password )
                if( comparePass ) {
                    res.status(200).json({ access_token: createToken({ checkUser })})
                } else {
                    res.status(400).json({ error: `invalid email/password`})
                }
            } else {
                res.status(400).json({ error: `invalid email/password`})
            }
        } catch( err ) {
            res.status(400).json( err )
        }
    }

    static async getData( req, res ) {
        try {
            let get_data = await Data.findAll()
            res.status(200).json( get_data )
        }catch( err ) {
            res.status(400).json( err )
        }
    }
}

module.exports = Controller
