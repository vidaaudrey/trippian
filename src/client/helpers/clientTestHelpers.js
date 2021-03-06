export default {
  React: require('react'),
  chai: require('chai'),
  jsdom: require('jsdom'),
  expect: require('chai').expect,
  equalJSX: require('chai-equal-jsx'),
  chaiImmutable: require('chai-immutable'),
  TestUtils: require('react-addons-test-utils'),
  JSXHelper: require('./clientTestUnitJSXHelper'),
  ImmutableHelper: require('./clientTestUnitImmutableHelper'),
  ReactTestHelper: require('./clientTestReactHelper'),
  UnitTestHelper: require('./clientTestUnitHelper'),
  DomTestHelper: require('./clientTestUnitDomHelper')
}
