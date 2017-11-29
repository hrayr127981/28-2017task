/**
 * Created by hrayr on 11/23/2017.
 */
class BaseDAO{
    constructor(collection){
        this.collection = collection;
    }
    getData(query){
    query = query || {};
    return  this.collection.find(query);
    }
    insertData(query){
        if(!query) {
            throw 'query invalid';
        }
        return this.collection.create(query);
    }
    updateData(){

    }
    deleteData(){

    }
}
module.exports = BaseDAO;