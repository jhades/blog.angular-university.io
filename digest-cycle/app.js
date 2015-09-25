
angular.module('App', []);

angular.module('App')
    .directive('ngOptClick', function() {
        return {
            scope: false,
            link: function(scope, element, attrs) {
                element.on('click', function() {
                    scope.vm.text = 'Hello';
                    scope.$digest();
                });
            }
        }
    });


angular.module('App')
    .directive('outer', function() {
        return {
            scope:true,
            controllerAs: 'outer',
            controller: function($scope) {
                $scope.vm = {};

                this.say = function(msg) {
                    $scope.vm.text = msg;
                }

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
                    throw new Error('BUUU');
                }

            }
        }
    });