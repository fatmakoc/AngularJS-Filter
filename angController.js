function kitapCtrl($scope) {
    $scope.liste =[];
 
    $scope.Ekle = function() {
        var id = $scope.liste.length;
        $scope.liste.push(new kitap($scope.KitapAdi,id));
        $scope.KitapAdi='';
    };
}