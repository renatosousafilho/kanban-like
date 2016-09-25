angular.module("helloWorld", []);
angular.module("helloWorld").
    controller('helloWorldCtrl', function($scope){
        $scope.app = "Hello World";
        $scope.tasks = [
            "Buy like",
            "Take garbage off",
            "Do the dishes"
        ];
        $scope.contact = {
            name: "Renato",
            phone: ""
        }
    });

