'use strict';

angular.module('milCoimbraApp')
.directive('snapteste', function () {

    return {
      restrict: 'A',
      scope: {
        snapData: '=',
        control: '='
    },
    link:function(scope, element, attrs) {


        var redutor={volume:1500000,empregados:2};
        
        scope.control.anos ={atual:0,maximo:2,base:2012,agora:2012};
        scope.control.anos.ano=function () { scope.control.anos.agora= scope.control.anos.base-scope.control.anos.atual};
        scope.control.ano=2012-scope.control.anos.atual;
        var geracor=function () { return '#'+Math.floor(Math.random()*16777215).toString(16);};
        
        var s = Snap(element[0]);
        var i=0;
        for ( i = 0; i<scope.snapData.length; i++) {
            scope.snapData[i].boneco=s.rect(50*i, 50, 50, scope.snapData[i].volume[scope.control.anos.atual]/redutor.volume);

            scope.snapData[i].boneco.attr({fill: geracor()})
            .data("nome", scope.snapData[i].nome)
            .click(function () {
                alert(this.data("nome"));
            });
        }

        scope.control.mais = function() {
          scope.control.anos.atual++;
          if (scope.control.anos.atual>2)
            scope.control.anos.atual=0;

        scope.control.anima();

    };
    scope.control.menos = function() {
        scope.control.anos.atual--;
        if (scope.control.anos.atual <0)
            scope.control.anos.atual=scope.control.anos.maximo;
        scope.control.anima();
    };



    scope.control.anima = function() {
        scope.control.anos.ano();

        for ( i = 0; i<scope.snapData.length; i++) {
            scope.snapData[i].boneco.animate({height: scope.snapData[i].volume[scope.control.anos.atual]/redutor.volume }, 500,mina.linear);
        }
    }

      scope.control.emp = function() {
        

        for ( i = 0; i<scope.snapData.length; i++) {
            scope.snapData[i].boneco.animate({height: scope.snapData[i].empregados/redutor.empregados }, 750,mina.bounce);
        }
    }
    

}
}
});
