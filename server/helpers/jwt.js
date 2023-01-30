const jwt = require('jsonwebtoken')
module.exports = {
    createToken: ( params ) => jwt.sign( params, 'yorima_'),
    verif: ( token ) => jwt.verify( token, 'yorima_')
}