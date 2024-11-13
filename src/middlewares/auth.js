// auth not enabled till now now!

const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
	const token = req.header("Authorization").replace("Bearer ", "");
	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) return res.status(401).send("Unauthorized");
		req.user = decoded;
		next();
	});
};

const authorize = (roles = []) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return res.status(403).send("Forbidden");
		}
		next();
	};
};

module.exports = { authenticate, authorize };
