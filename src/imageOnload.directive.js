/**
 * User: Anderlu
 * Date: 15/4/14
 * Time: 上午10:11
 */
angular.module('image.onload', []);
angular.module('image.onload').directive('imageonload', function() {
    return {
        restrict: 'AC',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                console.log('onload');
                scope.$apply(attrs.imageonload);
            });
            element.bind('error', function() {
                console.log('onerror');
                scope.$apply(attrs.imageonerror);
            });
        }
    };
});