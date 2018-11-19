const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns the given string if string length is less than number', () => {
    expect(wrap("this is short", 20)).to.equal("this is short")
  });

  it('Doesnt split up words', () => {
    expect(wrap("please dont split my words", 9)).to.equal("please\ndont\nsplit my\nwords")
  });

  it('splits up a paragraph coreectly', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.")
  });
});

