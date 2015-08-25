App
  .directive('renderer', function(){
    return {
      restrict: 'A',
      scope: { data: '='},
      templateUrl: 'views/builder/renderer.html',
      controller: function($scope){
        // var vm = this;

        // vm.next = function(index){
        //   console.log($scope.currentStep);
        //   $scope.currentStep = index + 1;
        //   console.log($scope.currentStep);
        // };

        // create holderVariabel
        $scope.holderData = angular.copy($scope.data);

        // transform data to key value pair object
        var transformData = function(data){
          var holder = {};
          $.each(data, function(key, value){
            var obj = {};
            obj[value.contentId] =  value.value;
            angular.extend(holder,obj);
          });
          return holder;
        };

        $.each($scope.holderData.data, function(key, data){
          $scope.holderData.data[data.pageId]          = {};
          $scope.holderData.data[data.pageId].contents = transformData(data.contents);
        });

        console.log($scope.holderData);
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
  });