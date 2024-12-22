const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message });
	} 
	console.error(err); // Log unexpected errors for debugging
	return res.status(500).json({ message: 'Unexpected error!' });
}
// "next" func isn't processed due to errorHandler is executed last (it is trailing)