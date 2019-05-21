function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
       .state('home', {
            url: "/home.html",
            templateUrl: "/home.html"
        })
        .state('add', {
            url: "/add.html",
            templateUrl: "/add.html"
        })
}
function addContactCtrl($scope, $state, $firebaseObject) {
    let ref = firebase.database().ref('Contacts');
    let pushKey = ref.push().key;
    $scope.formData = $firebaseObject(ref.child(pushKey));
    $scope.add = function(){
        $scope.formData.$save().then(() => {
            $state.go('home');
        });
    }
}
angular
    .module('app')
    .config(config)