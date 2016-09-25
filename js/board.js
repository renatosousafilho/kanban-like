angular.module("board", ["dndLists"]);
angular.module("board").
    controller('boardController', function($scope){
        $scope.models = {
            selected: null,
            lists: { 'A': [], "B": [], "C": []}
        };

        for (var i=1; i<=3; ++i) {
            $scope.models.lists.A.push({label: "Item A" +i});
            $scope.models.lists.B.push({label: "Item B" +i});
            $scope.models.lists.C.push({label: "Item C" +i});
        }

        $scope.$watch('models', function(model){
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);
    });
