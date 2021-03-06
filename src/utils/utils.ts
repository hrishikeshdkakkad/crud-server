import moment from 'moment';

export const isEmpty = (value: any): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export const mongoFieldValueCheck = (field: string): boolean => {
  const mongoDBFields = ['name', 'dob', 'salary', 'employeeID'];
  const doesInclude = mongoDBFields.includes(field);
  return doesInclude;
};

export const isValidDateChecker = (date: string): boolean => {
  const isValid = moment(date, 'DD/MM/YYYY', true).isValid();
  console.log(isValid);
  return isValid;
};
