const UsersApi = require('./../components/users/api');
const PicturesApi = require('./../components/pictures/api');

class ApiV1{
    initialize(app){
        app.use('/api/users',UsersApi);
        app.use('/api/pics',PicturesApi);
        app.get('/',(req,res)=>{
            return res.send('it works');
        })
    }
}
module.exports = new ApiV1();
