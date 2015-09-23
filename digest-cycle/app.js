
angular.module('App', []);

angular.module('App')
    .directive('outer', function() {
        return {
            scope:true,
            controllerAs: 'outer',
            controller: function($scope) {
                $scope.vm = {};
            }
        }
    });

angular.module('App')
    .directive('middle', function() {
        return {
            scope:true,
            controllerAs: 'middle'
        }
    });

angular.module('App')
    .directive('inner', function() {
        return {
            scope:true,
            controllerAs: 'inner',
            controller: function() {

                this.click = function() {
                    debugger;
                    throw new Error('BUUU');
                }

            }
        }
    });