
export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      res.status(500).json(`The server error ${err}`);
    });
  };
  