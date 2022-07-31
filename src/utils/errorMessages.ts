const errorMessage = (error: unknown) => {
  let errorMessage = 'Unknown Error';
  if (error instanceof Error) errorMessage = error.message;
  return errorMessage;
};

export default errorMessage;
