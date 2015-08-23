'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.data = {
      'schema': {
        'title': 'This is title form',
        'fields': [{
          'id': 'label',
          'type': 'label',
          'label': 'This is label',
          'fieldName': 'label',
        },{
          'id': 'textbox',
          'type': 'text',
          'label': 'Textbox',
          'fieldName': 'textbox',
          'placeholder': 'Text Box',
          'validations': {
            'required': {
              'message': 'This field is required.'
            },
            'maxsize': {
              'rule': 12,
              'message': 'This field is required.'
            },
            'maxlength': {
              'rule': 10
            }
          },
          'events': {
            'change': function(){
              alert("The value was changed to: " + this.getValue());
            }
          }
        },{
          'id': 'select',
          'type': 'select',
          'label': 'Dropdown',
          'fieldName': 'select',
          'options': ['option1', 'option2', 'option3'],
          'optionLabels': ['Option 1', 'Option 2', 'Option 3'],
        },{
          'id': 'radio',
          'type': 'radio',
          'label': 'Radio Button',
          'fieldName': 'radio',
          'options': ['option1', 'option2', 'option3'],
          'optionLabels': ['Option 1', 'Option 2', 'Option 3'],
          'validations': {
            'required': {
              'message': 'This field is required.'
            }
          }
        },{
          'id': 'file',
          'type': 'file',
          'label': 'File Upload',
          'fieldName': 'file',
          'validations': {
            'maxsize': {
              'rule': 500
            },
            'mimetype': {
              'rule': 'application/pdf'
            }
          },
        },{
          'id': 'imageUpload',
          'type': 'file',
          'label': 'Image Upload',
          'fieldName': 'imageUpload',
        },{
          'id': 'textarea',
          'type': 'textarea',
          'label': 'Text Area',
          'fieldName': 'textarea',
          'validations': {
            'disabled': true
          }
        },{
          'id': 'checkbox',
          'type': 'checkbox',
          'label': 'Checkbox',
          'fieldName': 'checkbox',
          'options': ['option1', 'option2', 'option3'],
          'optionLabels': ['Option 1', 'Option 2', 'Option 3'],
          'validations': {
            'required': {
              'message': 'This field is required.'
            },
            'mincheck': {
              'rule': 2
            }
          }
        },{
          'id': 'url',
          'type': 'url',
          'label': 'Link',
          'fieldName': 'url',
          'validations': {
            'required': {
              'message': 'This field is required.'
            }
          },
        },{
          'id': 'image',
          'type': 'image',
          'label': 'Image',
          'fieldName': 'image'
        },{
          'id': 'button',
          'type': 'button',
          'label': 'Button',
          'fieldName': 'button',
          'buttonType': 'submit',
          'class': 'ui button blue'
        }]
      },
      'data': {
        'image': 'http://placehold.it/500x150',
        'file': 'http://placehold.it/500x150',
        'url': 'http://google.com'
      }
    };
  });
