const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String },
		price: { type: Number, required: true },
	},
	{ timestamps: true }
);

serviceSchema.index({ description: "text" }); // Text search indexing
serviceSchema.index({ price: 1 }); // Index for price

module.exports = mongoose.model("Service", serviceSchema);
