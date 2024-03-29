App
  .directive('renderer', function(){
    return {
      restrict: 'A',
      scope: { data: '=', next: '&', prev: '&', submit: '&'},
      templateUrl: 'views/builder/page.html',
      controller: function($scope){
        console.log($scope.data)
        var vm = this;
        // transform data to key value pair object
        // var transformData = function(data){
        //   var holder = {};
        //   $.each(data, function(key, value){
        //     var obj = {};
        //     obj[value.contentId] =  value.value;
        //     angular.extend(holder,obj);
        //   });
        //   return holder;
        // };

        // native for each are faster than $.each
        var getValues = function() {
          var values = [];
          for (var i = 0; i < $scope.data.panels.length; i++) {
            var panel = $scope.data.panels[i];
            for (var i = 0; i < panel.fields.length; i++) {
              var field = panel.fields[i];
              var obj = {}

              obj['fieldId'] = field.id;
              obj['value']   = field.value;
              if (field.type === 'disclosure'){
                obj['read']  = field.read;
              }

              values.push(obj);
            };
          };
          return values;
        };

        vm.next = function(){
          $scope.next({pageId: $scope.data.id, values: getValues()});
        };

        vm.prev = function(){
          $scope.prev({pageId: $scope.data.id, values: getValues()});
        };

        vm.submit = function(){
          $scope.submit({pageId: $scope.data.id, values: getValues()});
        };
      },
      controllerAs: 'vm',
    };
  })
  .directive('renderLabel', function(){
    return {
      restrict: 'E',
      scope: { data: '=', content: '='},
      link: function(scope, elem){
        var html = '<';
        html += scope.content.elementType;
        html += ' class="'+scope.content.html.className+'"';
        html += ' style="'+scope.content.html.style+'">';
        html += scope.data.contents[scope.content.id];
        html += '</'+ scope.content.elementType +'>';
        elem.replaceWith(html);
      }
    };
  })
  .directive('renderTextArea', function(){
    return {
      restrict: 'E',
      scope: { data: '=', content: '='},
      link: function(scope, elem){
        var html = '<div';
        html += ' class="'+scope.content.html.className+'"';
        html += ' style="'+scope.content.html.style+'">';
        html += scope.data.contents[scope.content.id];
        html += '</div>';
        elem.replaceWith(html);
      }
    };
  })
  .directive('nextStep', function(){
    return {
      restrict: 'A',
      link: function(scope, elem){
        elem.bind('click', function(){
          jQuery(elem).parent().siblings().addClass('hide');
          jQuery(elem).parent().addClass('hide');
          jQuery(elem).parent().next().removeClass('hide');
        });
      }
    };
  })
  .directive('prevStep', function(){
    return {
      restrict: 'A',
      link: function(scope, elem){
        elem.bind('click', function(){
          jQuery(elem).parent().siblings().addClass('hide');
          jQuery(elem).parent().addClass('hide');
          jQuery(elem).parent().prev().removeClass('hide');
        });
      }
    };
  })
  .directive('script', function(UUID) {
    return {
      restrict: 'E',
      scope: {script: '='}  ,
      link: function(scope, elem, attr){
        if (attr.type === 'text/javascript-lazy') {
          var scriptTag = angular.element(
              document.createElement("script"));
          source = "//@ sourceURL=" + UUID.generate() + "\n" + scope.script;
          scriptTag.text(scope.script)
          $("#customJS").append(scriptTag);
        }
      }
    };
  })
  .directive('changeTitle', function($rootScope){
    return {
      restrict: 'A',
      link: function(scope, elem, attr){
        $rootScope.title = attr.changeTitle;
      }
    };
  })
  .directive('pikaday', function () {
    return {
      restrict: 'C',
      require: 'ngModel',
      link: function (scope, element, attr, ngModel) {
        new Pikaday({
          field: jQuery(element)[0],
          format: 'YYYY-MM-DD',
          onSelect: function() {
            ngModel.$setViewValue(this.getMoment().format('YYYY-MM-DD'));
          }
        });
      }
    };
  });


  // outside angular for pickaday
  // jQuery(document).on('focus', '.pikaday', function(){
  //   new Pikaday({
  //     field: jQuery(this)[0],
  //     format: 'YYYY-MM-DD'
  //   });
  // })