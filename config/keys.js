// add thsi file in .gitignore

module.exports = {

    //google autenticate key
    google: {

        clientID: '688100053480-npbg0pnpgng6biepf2evvloa3khu03f4.apps.googleusercontent.com',
        clientSecret: 'ZTTtb47aLkxvvQYQ0n6fZ-qA'
    },
    
    // github

    github:{
      
    clientID: 'ac5235f3862841dc826c',
    clientSecret: '4a7de666c57f6c0a73e1b2a683988d3cfc22c76f'
    },

    // twitter

    twitter:{
        consumerKey: '4thdI7cygRTQzR2OKuKmqDSS1',
        consumerSecret: 'wbJbInZooOdZsLgL9FbnAUgGNeGhpx1i7x9cDNJEO6crAD4jiM'
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