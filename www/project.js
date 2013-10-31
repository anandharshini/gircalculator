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