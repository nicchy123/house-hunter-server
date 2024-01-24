import { TErrorSources, TGenericErrorResponse } from '../interface/error';
import mongoose from 'mongoose';

const handleValidationError = (err: mongoose.Error.ValidationError): TGenericErrorResponse => {
  const statusCode = 400;
    const errorSources: TErrorSources = Object.values(err.errors).map(
      (
        value: mongoose.Error.ValidatorError | mongoose.Error.CastError,
      ) => {
        return {
          path: value.path,
          message: value.message,
        };
      },
    );

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleValidationError;
