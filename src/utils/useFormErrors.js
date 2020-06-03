import { useState } from 'react';

export const useFormErrors = (validationSchema) => {
  if (!validationSchema) {
    throw new Error(
      'You are trying to use useFormErrors hook without providing a validationSchema',
    );
  }

  if (!validationSchema.validateAt || validationSchema.validate) {
    throw new Error(
      "The validation schema don't the expected methods validateAt and/or validate",
    );
  }

  const [formErrors, setFormErrors] = useState({});

  const validate = (object) => {
    return new Promise((resolve) => {
      validationSchema
        .validate(object, { abortEarly: false })
        .then(resolve)
        .catch((errors) => {
          const fieldNames = errors.inner.map((error) => error.path);
          const fieldsErrors = fieldNames.reduce((errorObject, fieldName) => {
            // eslint-disable-next-line prettier/prettier
            const fieldError = errors.inner.filter((error) => error.path === fieldName).pop();
            errorObject[fieldName] = fieldError.message;
            return errorObject;
          }, {});

          setFormErrors(fieldsErrors);
        });
    });
  };

  const checkErrorsForField = (fieldName, value) => {
    const field = {};
    field[fieldName] = value;

    validationSchema.validateAt(fieldName, field).catch((error) => {
      const fieldErrorMessage = {};
      fieldErrorMessage[fieldName] = error.message;
      setFormErrors({ ...formErrors, ...fieldErrorMessage });
    });
  };

  const clearErrorsForField = (fieldName) => {
    const fieldErrors = {};
    fieldErrors[fieldName] = null;
    setFormErrors({ ...formErrors, ...fieldErrors });
  };

  return {
    formErrors,
    checkErrorsForField,
    clearErrorsForField,
    validate,
  };
};
