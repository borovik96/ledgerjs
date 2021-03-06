//@flow

import { encodeURIScheme, decodeURIScheme } from "./CurrencyURIScheme";

import { getFiatUnit, hasFiatUnit } from "./data/fiat";

import {
  listCurrencies,
  getCurrencyByCoinType,
  getDefaultUnitByCoinType,
  hasCurrencyByCoinType
} from "./data/cryptocurrencies";

import {
  formatCurrencyUnit,
  formatCurrencyUnitFragment
} from "./formatCurrencyUnit";

import countervalueForRate from "./countervalueForRate";

export {
  listCurrencies,
  getFiatUnit,
  hasFiatUnit,
  formatCurrencyUnit,
  formatCurrencyUnitFragment,
  getCurrencyByCoinType,
  getDefaultUnitByCoinType,
  hasCurrencyByCoinType,
  countervalueForRate,
  encodeURIScheme,
  decodeURIScheme
};

export type { Currency, Unit, Rate, UnitValue } from "./types";
