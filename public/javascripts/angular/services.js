appAngular.service('usersFactory', function($http){

    function getUsers(){
        return $http.get('/users/').then(function(res){
            return res.data;
        });
    }

    function create(data){
        return $http.post('/users/new', data).then(function(res){
            return res;
        });
    }

    return{
        getUsers: getUsers,
        create: create
    }
});
