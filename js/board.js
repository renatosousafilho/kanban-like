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

        var tasks = Task.query(function(){
            tasks.forEach(function(task){
                $scope.models.lists.todo.push({label: task.title});
            });
        });
    });
