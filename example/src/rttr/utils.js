import queryString from 'query-string';
import {paramRegex} from './regex';

export const mapObject = (object, fn) => {
  return Object.keys(object).reduce((accum, objKey) => {
    const val = object[objKey];
    const {key, value} = fn(val, objKey);
    accum[key] = value;
    return accum;
  }, {});
};

export const getRegexMatches = (string, regexExpression, callback) => {
  let match;
  while ((match = regexExpression.exec(string)) !== null) {
    callback(match);
  }
};

export const replaceUrlParams = (path, params, queryParams = {}) => {
  const queryParamsString = queryString.stringify(queryParams).toString();
  const hasQueryParams = queryParamsString !== '';
  let newPath = path;

  getRegexMatches(
    path,
    paramRegex,
    ([fullMatch, paramKey, paramKeyWithoutColon]) => {
      const value = params[paramKeyWithoutColon];
      newPath = value
        ? newPath.replace(paramKey, value)
        : newPath.replace(`/${paramKey}`, '');
    }
  );

  return `${newPath}${hasQueryParams ? `?${queryParamsString}` : ''}`;
};
