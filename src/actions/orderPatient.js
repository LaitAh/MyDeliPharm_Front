// === ACTION TYPES ===
export const UPDATE_ORDER_FIELD = 'UPDATE_ORDER_FIELD';
export const UPDATE_ORDER_STEP_FORM = 'UPDATE_ORDER_STEP_FORM';
export const UPDATE_FILE_UPLOADED = 'UPDATE_FILE_UPLOADED';
export const SUBMIT_ORDER = 'SUBMIT_ORDER';

export const UPDATE_SELECTED_PHARMACY = 'UPDATE_SELECTED_PHARMACY';

export const UPDATE_CURRENT_VITAL_CARD = 'UPDATE_CURRENT_VITAL_CARD';
export const UPDATE_CURRENT_MUTUAL_CARD = 'UPDATE_CURRENT_MUTUAL_CARD';

// === ACTION CREATORS ===
export const updateOrderField = (value, name) => ({
  type: UPDATE_ORDER_FIELD,
  name: name,
  value: value,
});

export const handleTabChange = (data) => ({
  type: UPDATE_ORDER_STEP_FORM,
  activeIndex: data.activeIndex,
});

export const handleButtonTabChange = (activeIndex) => {
  const newIndex = activeIndex + 1;
  return ({
    type: UPDATE_ORDER_STEP_FORM,
    activeIndex: newIndex,
  });
};

export const updateFileUploaded = (event, name) => {
  const nameFile = `selected${name}`;
  const nameExtension = `extension${name}`;
  return ({
    type: UPDATE_FILE_UPLOADED,
    nameFile: nameFile,
    nameExtension: nameExtension,
    selectedFile: event.currentTarget.files[0],
    extensionFile: event.currentTarget.files[0].name.slice(event.currentTarget.files[0].name.length - 3),
  });
};

export const submitOrder = () => ({
  type: SUBMIT_ORDER,
});

export const updateSelectedPharmacy = (newValue) => ({
  type: UPDATE_SELECTED_PHARMACY,
  selectedPharmacy: newValue,
});

export const updateCurrentVitalCard = (newCv) => ({
  type: UPDATE_CURRENT_VITAL_CARD,
  vitalCardNumber: newCv,
});

export const updateCurrentMutualCard = (newMutual) => ({
  type: UPDATE_CURRENT_MUTUAL_CARD,
  mutuelleNumber: newMutual,
});
