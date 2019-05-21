function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
       .state('home', {
            url: "/home",
            templateUrl: "views/home.html"
        })
        .state('add', {
            url: "/add",
            templateUrl: "views/add.html"
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