angular.module("board", ["dndLists", "ngResource"]);

angular.module("board").factory('Task', function($resource){
    return $resource("http://localhost:3000/api/tasks/:id");
});

angular.module("board").
    controller('boardController', function($scope, Task){

        $scope.models = {
            selected: null,
            lists: { 'todo': [], "doing": [], "done": []}
        };

        $scope.dropCallback = function(list, item, index) {
            return item;
        }


        var tasks = Task.query(function(){
            tasks.forEach(function(task){
                $scope.models.lists.todo.push(task);
            });
        });

        $scope.$watch('models.lists.todo', function(newValue, oldValue, scope){
            // submit to action to save in done
            console.log(newValue);
        }, true);

        $scope.$watch('models.lists.doing', function(newValue, oldValue, scope){
            // submit to action to save in done
            console.log(newValue);
        }, true);

        $scope.$watch('models.lists.done', function(newValue, oldValue, scope){
            // submit to action to save in done
            console.log(newValue);
        }, true);

    });
