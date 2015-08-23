var angularParselyModule = angular.module('parsley', []);

var fileValidator = function(req, input, type){
  if (input.is(':not(input[type="file"])')) {
    console.log('Validation on maxsize only works on file input types');
    return true;
  }

  var max_bytes = req * 1024, files = input.get(0).files;
  if (files.length == 0) {
      return true;
  }
  var valid = false;
  if (type === 'minsize'){
    valid = files[0].size >= max_bytes;
  }else if (type === 'maxsize'){
    valid = files[0].size <= max_bytes;
  } else if (type === 'mimetype'){
    valid = req.indexOf(files[0].type) >=0;
  }

  return files.length == 1 && valid;;
};

// custom validatior for filesize
window.ParsleyValidator
  .addValidator('maxsize', function(value, requirement) {
      var reqs = requirement.split('||');
      var input = $('#'+reqs[0]);
      return fileValidator(reqs[1], input, 'maxsize');
    },1)

  .addValidator('minsize', function(value, requirement) {
      var reqs = requirement.split('||');
      var input = $('#'+reqs[0]);
      return fileValidator(reqs[1], input, 'minsize');
    },1)
  .addValidator('mimetype', function(value, requirement) {
      var reqs = requirement.split('||');
      var input = $('#'+reqs[0]);
      return fileValidator(reqs[1], input, 'mimetype');
    },1)
  .addMessage('en', 'mimetype', 'Wrong file type.')
  .addMessage('en', 'maxsize', 'The File size is too big.')
  .addMessage('en', 'minsize', 'The File size is too small.');


angularParselyModule.parsleyOptions = {
  priorityEnabled: false,
  errorsWrapper: '<ul class="parsley-error-list"></ul>'
};

angularParselyModule.directive('parsleyValidate', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    require: '?form',
    link: function(scope, elm, attrs, formController) {
      elm.bind('$destroy', function() {
        formController.parsley.destroy();
      });

      if(!formController.parsley) {
        formController.parsley = $(elm[0]).parsley(angularParselyModule.parsleyOptions);
        $timeout(function() {formController.parsley.validate()}, 100);
      }

      scope.$on('feedReceived', function() {
        if(!formController.parsley) {
          formController.parsley = $(elm[0]).parsley(angularParselyModule.parsleyOptions);
        }
        formController.parsley.validate();
      });
    }
};
}]);

//We register our parsley logic for various element types.
angularParselyModule.directive('input', parsleyFieldDirective);
angularParselyModule.directive('textarea', parsleyFieldDirective);
angularParselyModule.directive('select', parsleyFieldDirective);

function parsleyFieldDirective($timeout) {
  return {
    restrict: 'E',
    require: '^?form',
    link: function (scope, elm, attrs, formController) {

      if(formController.parsley) {
        $timeout(function() {formController.parsley.validate()}, 150); // Need to validate after the data is in the dom.
      }
    }
  };
}