var myApp = angular.module("app", []);

myApp.controller("appCtrl", function ($scope) {
    $scope.tblRows = [{
        "id": 1,
        "name": "Swati",
        "email": "abc@xyz.com"
    }];

    $scope.addRow = function () {
        var checkIfExist = Object.keys($scope.tblRows).some(function (k) {
            return $scope.tblRows[k].id === $scope.id;
        });

        console.log("checkIfExist  ", checkIfExist);
        if (!checkIfExist) {
            $scope.tblRows.push({
                "id": $scope.id,
                "name": $scope.name,
                "email": $scope.email
            });
            $scope.displayMsg = "";
            $scope.id = '';
            $scope.name = '';
            $scope.email = '';
            $scope.dataForm.$setPristine();

            console.log($scope.dataForm.$pristine)
        } else {
            $scope.displayMsg = "Id already exists!";
        }
    }


    $scope.deleteRow = function () {
        $scope.tblRows.pop();
        $scope.displayMsg = "";
    }

    $scope.$watch('$scope.displayMsg', function () {
        alert('value changed')
    })

})