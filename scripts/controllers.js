function addContactCtrl($scope, $state, $firebaseObject) {

    let ref = firebase.database().ref('Users/');
    let pushKey = ref.push().key;
    $scope.formData = $firebaseObject(ref.child(pushKey));

    $scope.add = function(){
        $scope.formData.$save().then(() => {
            $state.go('home');
        });
    }
};function homeCtrl($scope, $firebaseObject){
    const ref = firebase.database().ref('Users');
    $scope.contacts = $firebaseObject(ref);
}

angular
    .module('app')
    .controller('addContactCtrl', addContactCtrl)
    .controller('homeCtrl', homeCtrl)
    .controller('addContactCtrl', addContactCtrl)