// === ACTION TYPES ===
export const UPLOAD_PRESCRIPTION = 'UPLOAD_PRESCRIPTION';
export const UPLOAD_VITAL_CARD = 'UPLOAD_VITAL_CARD';
export const UPLOAD_MUTUAL_CARD = 'UPLOAD_MUTUAL_CARD';

// === ACTION CREATORS ===
export const submitUploadPrescription = (orderId) => ({
  type: UPLOAD_PRESCRIPTION,
  orderId: orderId,
});

export const submitUploadVitalCard = (patientId) => ({
  type: UPLOAD_VITAL_CARD,
  patientId: patientId,
});

export const submitUploadMutualCard = (patientId) => ({
  type: UPLOAD_MUTUAL_CARD,
  patientId: patientId,
});
