angular.module("board", ["dndLists", "ngResource"]);

angular.module("board").factory('Task', function($resource){
    return $resource("http://localhost:3000/api/tasks/:id", {}, {
        create: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            isArray: true
        }
    });
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
            params = JSON.stringify($scope.models.lists.todo);
            Task.create(params);
        }, true);

        $scope.$watch('models.lists.doing', function(newValue, oldValue, scope){
            // submit to action to save in done
            params = JSON.stringify($scope.models.lists.doing);
            Task.create(params);
        }, true);

        $scope.$watch('models.lists.done', function(newValue, oldValue, scope){
            // submit to action to save in done
            params = JSON.stringify($scope.models.lists.doing);
            Task.create(params);
        }, true);

    });
