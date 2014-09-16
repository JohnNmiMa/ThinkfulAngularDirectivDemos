angular.module('myApp', [])

.run(function($rootScope){
    var $scope = $rootScope;
    console.log('Set a watch on "enabled"');
    $scope.$watch('enabled', function(val) {
        console.log('You are now: ' + (val ? 'enabled' : 'disabled'));
    });

    // These three assignments all get executed "before" the digest cycle is run.
    // Therefore, the $watch function above will only be called once.
//    $scope.enabled = true;
//    $scope.enabled = false;
//    $scope.enabled = 1;

    // If you uncomment the following, then we will have the digest cycle run
    // each of the three $apply calls.
    $scope.$apply(function() {
        $scope.enabled = true;
    });
    $scope.$apply(function() {
        $scope.enabled = false;
    });
    $scope.$apply(function() {
        $scope.enabled = 1;
    });
});
