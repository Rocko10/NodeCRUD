appAngular.service('usersFactory', function($http){

    function getUsers(){
        return $http.get('/users/').then(function(res){
            return res.data;
        });
    }
    function getUser(id){
        return $http.get('/users/' + id).then(function(res){
            return res;
        });
    }

    function create(data){
        return $http.post('/users/new', data).then(function(res){
            return res;
        });
    }

    function deleteUser(id){
        return $http.delete('/users/delete/' + id).then(function(res){
            return res;
        });
    }

    function update(id, data){
        return $http.patch('/users/' + id, data).then(function(res){
            return res;
        });
    }

    return{
        getUsers: getUsers,
        create: create,
        deleteUser: deleteUser,
        getUser: getUser,
        update: update
    }
});
