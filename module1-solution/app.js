(function () {
    'use strict'
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchItems = '';
        $scope.checkMessage = '';
        $scope.isItemPresent = false;
        $scope.isItemAbsent = true;

        $scope.checkTooMuch = function () {

            var items = $scope.lunchItems.split(',').filter(item => item.trim());

            if (items.length > 0 && items.length <= 3) {
                $scope.checkMessage = 'Enjoy!';
                $scope.isItemPresent = true;
                $scope.isItemAbsent = false;
            }
            else if (items.length > 3) {
                $scope.checkMessage = 'Too much!';
                $scope.isItemPresent = true;
                $scope.isItemAbsent = false;
            }
            else {
                $scope.checkMessage = 'Please enter data first';
                $scope.isItemPresent = false;
                $scope.isItemAbsent = true;
            }

        }
    }
})();