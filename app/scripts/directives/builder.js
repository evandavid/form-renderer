App
  .directive('builder', function(){
    return {
      restrict: 'A',
      scope: { data: '='},
      templateUrl: 'views/builder/layout.html',
      controller: function($scope){
        var vm = this;
      },
      controllerAs: 'vm',
    };
  })
  .directive('builderValidations', function(){
    return {
      restrict: 'A',
      scope: { data: '=validations', builderModel: '=' },
      link: function(scope, elem){
        // bind file to ng-model
        if (scope.data.type === 'file'){
          elem.bind('change', function(){
            var file              = $(elem).get(0).files[0];
            var transformToBase64 = function(file, callback){
              var FR= new FileReader();
              FR.onload = callback;
              FR.readAsDataURL( file );
            };

            transformToBase64(file, function(e){
              scope.builderModel= e.target.result;
            });
          });
        }

        if (scope.data.validations !== undefined){
          $.each(scope.data.validations, function(key, value){
            if (key === 'maxsize' || key === 'minsize' || key === 'mimetype'){
              $(elem).attr('data-parsley-'+key, scope.data.id+'||'+value.rule);
            }else {
              if (value.rule){
                $(elem).attr('data-parsley-'+key, value.rule);
              }else if (key === 'disabled' || key === 'readonly'){
                $(elem).attr(key, key);
              }else {
                $(elem).attr('data-parsley-'+key, key);
              }
            }

            $(elem).attr('data-parsley-errors-container', '#error-for-'+scope.data.id);

            if (value.message){
              $(elem).attr('data-parsley-'+key+'-message', value.message);
            }
          });
        }
      }
    }
  })
  .directive('builderLabelRequired', function(){
    return {
      restrict: 'A',
      scope: { data: '=' },
      link: function(scope, elem){
        if (scope.data.validations){
          if (scope.data.validations.required){
            $(elem).html( scope.data.label + ' <span class="required">*</span>');
          }
        }
      }
    }
  });