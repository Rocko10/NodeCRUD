appAngular.controller('usersCtrl', function($scope, usersFactory){

    usersFactory.getUsers().then(function(response){
        $scope.users = response;
    });

    $scope.new = function(){
        var data = {
            name: $scope.name,
            age: $scope.age
        };
        usersFactory.create(data).then(function(res){
            $scope.status = res.data.status;
            $scope.name = '';
            $scope.age = '';
        });
    }

    $scope.deleteUser = function(user){
        var id = user._id;
        var parent = document.getElementById('usuarios');
        var child = document.getElementById(id);

        if(confirm('Estas seguro que deseas eliminar a ' + id)){

            usersFactory.deleteUser(id).then(function(res){
                if(res.data.status){
                    parent.removeChild(child);
                }
            });
        }
        else{
            return;
        }
    }
});

appAngular.controller('usersDetailCtrl', function($scope, usersFactory){

    $scope.update = function(){
        var data = {
            name: $scope.name,
            age: $scope.age
        };
        usersFactory.update($scope.id, data).then(function(res){
            $scope.status = res.data.status;
        });
    }

});
