const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    appointmentDate: { type: Date, required: true, validate: { validator: (v) => v > new Date(), message: 'Appointment date must be in the future' } },
    status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' }
}, { timestamps: true });

appointmentSchema.index({ appointmentDate: 1 });
appointmentSchema.index({ clientId: 1 });
appointmentSchema.index({ serviceId: 1 }); // Index for serviceId

// Change stream for real-time updates
appointmentSchema.post('save', function(doc) {
    console.log('New appointment created:', doc);
});

module.exports = mongoose.model('Appointment', appointmentSchema);
