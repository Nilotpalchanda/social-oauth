// add thsi file in .gitignore

module.exports = {

    //google autenticate key
    google: {

        clientID: '688100053480-npbg0pnpgng6biepf2evvloa3khu03f4.apps.googleusercontent.com',
        clientSecret: 'ZTTtb47aLkxvvQYQ0n6fZ-qA'
    },

    //mongodb db connection url with password
    mongodb: {

        dbURI: 'mongodb://admin:test@ds147668.mlab.com:47668/oauthapp'

    },

    //cookie key
    session:{
    	cookieKey : 'nilotpalchandacookie'
    }
}