angular.module('app')
    .controller('ProfileController', function($scope, CurrentUser, UserService) {
      $scope.puser = CurrentUser.user();
      // console.log($scope.user);

      function loadAllUsers() {
        UserService.getAll().then(function(res) {
          // console.log('listUsers', res);
          $scope.listUsers = res.data;
          // console.log('res.data', res.data);
        });
      }
      loadAllUsers();

    });
