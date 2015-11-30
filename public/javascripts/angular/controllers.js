appAngular.controller('usersCtrl', function($scope, usersFactory){

    var users = usersFactory.getUsers().then(function(response){
        $scope.users = response;
    });

    $scope.new = function(){
        var data = {
            name: $scope.name,
            age: $scope.age
        };
        $scope.status = usersFactory.create(data);
    }
});
