var watchFLNames = function(newVals, oldVals, scope) {
  scope.fullName = newVals[0] + ' ' + newVals[1];
  scope.charCount = newVals[0].length + newVals[1].length;
};

var app = angular.module('todoApp', []);
app.controller('nameCtrl', ['$scope', function($scope) {
  $scope.firstName = 'Gayatri';
  $scope.lastName = 'Rath';

  $scope.$watchGroup(['firstName', 'lastName'], watchFLNames);
}]);

app.controller('todoCtrl', ['$scope', '$filter', function($scope, $filter) {
  $scope.todoList = [
    {task: 'sweety', done: true, editing: false},
    {task: 'ameet',  done: false, editing: false},
    {task: 'mamuni', done: true, editing: false}
  ];

  $scope.add = function() {
    var newTask = {task: $scope.todoInput, done: false};
    $scope.todoList.push(newTask);
    $scope.todoInput = '';
  };

  $scope.removeCompleted = function() {
    $scope.todoList = $filter('filter')($scope.todoList, {done: false});
    /*for(var x = 0; x < $scope.todoList.length; x++){
          if($scope.todoList[x].done){
            $scope.todoList.splice(x, 1);
      }
    }*/
  };
  
  $scope.edit = function(currentItem) {
    currentItem.oldVal = currentItem.task;
    currentItem.editing = true;
  };
  
  $scope.editSave = function(currentItem) {
    currentItem.editing = false; 
    delete currentItem.oldVal;
  };
  
  $scope.editCancel = function(currentItem) {
    currentItem.editing = false;
    if (typeof currentItem.oldVal !== 'undefined') {
      currentItem.task =  currentItem.oldVal;
    }
  };

  $scope.remove = function(i) {
    $scope.todoList.splice(i, 1);
  };

  $scope.$watch('todoList', function(newList, oldList, scope) {
    scope.countDone2 = $filter('filter')(newList, {done: true}).length;
    scope.countRem2 = newList.length - scope.countDone2;
  }, true);

  /*$scope.countDone = function() {
    return $scope.todoList.reduce(function(count, item) {
      if (item.done) {
        count++;
      }

      return count;
    }, 0);
  };

  $scope.countRem = function() {
    return $scope.todoList.reduce(function(count, item) {
      if (!item.done) {
        count++;
      }

      return count;
    }, 0);
  };*/
}]);