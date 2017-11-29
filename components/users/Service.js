
const UsersDao = require('./private/dao');
class UserService {
    getUsers() {
        UsersDao.getData({}).then(data=>{

        }).catch(err =>{

        })
    }
}
module.exports = new UserService();