'use strict';

describe('Directive: snapteste', function () {

  // load the directive's module
  beforeEach(module('milCoimbraApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<snapteste></snapteste>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the snapteste directive');
  }));
});
