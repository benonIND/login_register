const bcrypt = require('bcrypt')
module.exports = {
    hashing: ( pass ) => bcrypt.hashSync( pass, 10 ),
    compare: ( pass, hash ) => bcrypt.compareSync( pass, hash )
}