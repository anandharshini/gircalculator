/* (Very) simple controller that sets scope variables we
 *   will bind to.
 
 angular.module('project', []).
     config(function($routeProvider) {
         $routeProvider.
             when('/', {templateUrl:'index.html'}).
             when('/list', {templateUrl:'listEmployees.html'}).
             when('/edit/:projectId', {templateUrl:'editEmployee.html'}).
             when('/new', {templateUrl:'editEmployee.html'}).
             otherwise({redirectTo:'/'});
 });

function MainCtrl($scope){
    $scope.options = [
        {text: "Employee", id: "newEmployee", tgt: "list", ctr: "EmployeesCtrl", render: ""},
        {text: "Workloads", id: "workload", tgt: "list",  ctr: "WorkloadsCtrl", render: ""},
        {text: "Reports", id: "report", tgt: "list",  ctr: "ReportsCtrl", render: ""}
    ];
}
*/
function Ctrl($scope) {

    $scope.calculateGIR = function(){
        if ($scope.d5Rate > 0)
        {
            $scope.totalResult = (parseFloat($scope.d5Rate) * parseFloat($scope.drateRate) * parseFloat($scope.dRate) * 1000 ) / ($scope.weight * 60 * 100);
        }
        else if ($scope.d10Rate > 0)
        {
            $scope.totalResult = (parseFloat($scope.d10Rate) * parseFloat($scope.drateRate) * parseFloat($scope.dRate) * 1000 ) / ($scope.weight * 60 * 100);
        }
    };
}
