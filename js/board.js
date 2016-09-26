angular.module("board", ["dndLists", "ngResource"]);

angular.module("board").factory('Task', function($resource){
    return $resource("http://localhost:3000/api/tasks/:id");
});

angular.module("board").
    controller('boardController', function($scope, Task){
        $scope.tasks = Task.query();

        $scope.models = {
            selected: null,
            lists: { 'todo': [], "doing": [], "done": []}
        };

        // Não está executando este loop
        $scope.tasks.forEach(function(task){
            console.log(task);
            $scope.models.lists.todo.push({label: task.title});
        });

    });
