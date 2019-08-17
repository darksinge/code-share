'use strict';

const pad = require('pad');

const opcodes = {
  NOP: 0,
  LDA: 1,
  ADD: 2,
  SUB: 3,
  STA: 4,
  LDI: 5,
  JMP: 6,
  JCY: 7,
  JZO: 8,
  OUT: 14,
  HTL: 15
};

const padZero = value => pad(8, value, '0');

const toBinary = v => padZero(v.toString('02'));

const toHex = v => v.toString('16');

const printOpcodes = () => Object
  .entries(opcodes)
  .map(([key, value]) => [key, toBinary(value)])
  .forEach(data => console.log(...data));

module.exports = {
  opcodes,
  toBinary,
  toHex,
  printOpcodes
};
