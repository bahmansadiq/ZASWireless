(function() {
    'use strict';

    angular
        .module('app')
        .controller('ZASWirelessController', ZASWirelessController);
    ZASWirelessController.$inject = ['ZASWiressFactory', 'toastr','$state','$scope'];
    /* @ngInject */
    function ZASWirelessController(ZASWiressFactory, toastr, $state, $scope) {
        var vm = this;
        vm.title = 'ZASWirelessController';

        activate();

        ////////////////

        function activate() {}
/*scroll navbar starts*/

var mn=$(".main-nav");
$(window).scroll(function(){
    if($(this).scrollTop() > 250){
      mn.addClass("main-nav-scrolled");    
      console.log("nav bar is scrolled");
    }
    else{
        mn.removeClass("main-nav-scrolled");
    }
});
}    
})();