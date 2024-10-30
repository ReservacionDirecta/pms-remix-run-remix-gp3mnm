interface ErrorResponse {
  message: string;
  code: string;
  details?: unknown;
}

export enum ErrorCode {
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  // Añadir más códigos según necesites
}

export class AppError extends Error {
  code: string;
  details?: unknown;

  constructor({ 
    message, 
    code = ErrorCode.INTERNAL_ERROR,
    details
  }: ErrorResponse) {
    super(message);
    this.code = code;
    this.details = details;
  }
}

export function handleError(error: unknown): ErrorResponse {
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code,
      details: error.details
    };
  }

  return {
    message: 'Ha ocurrido un error inesperado',
    code: 'INTERNAL_ERROR'
  };
} 