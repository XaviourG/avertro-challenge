import BusinessObjectiveDTO from "../../models/DTOs/BusinessObjectiveDTO";
import BusinessObjectiveFormState from "../../models/DTOs/BusinessObjectiveFormState";


const ObjectivesFormValidator = (
  formData: BusinessObjectiveDTO,
): BusinessObjectiveFormState => {
  const validation: BusinessObjectiveFormState = {
    errors: {
      title: false,
      keyMeasures: false,
      startDate: false,
      endDate: false,
    },
    errorText: {
      title: '',
      keyMeasures: '',
      startDate: '',
      endDate: '',
    },
  };

  if (formData.title.length < 2) {
    validation.errors.title = true;
    validation.errorText.title = 'Your objective must be between at least 1 character in length'
  } else if (formData.title.length > 255) {
    validation.errors.title = true;
    validation.errorText.title = 'Your objective cannot exceed 255 characters in length'
  } else {
    validation.errors.title = false;
    validation.errorText.title = ''
  }

  if (formData.keyMeasures.length <= 1 && formData.keyMeasures[0].length < 1) {
    validation.errors.keyMeasures = true;
    validation.errorText.keyMeasures = 'An objective must have at least one key measure';
  } else if (
    ((formData.keyMeasures.length >= 1) && (formData.keyMeasures[0].length < 1)) ||
    ((formData.keyMeasures.length >= 2) && (formData.keyMeasures[1].length < 1)) ||
    ((formData.keyMeasures.length >= 3) && (formData.keyMeasures[2].length < 1))
  ) {
    validation.errors.keyMeasures = true;
    validation.errorText.keyMeasures = 'Objective key measures cannot be blank';
  } else {
    validation.errors.keyMeasures = false;
    validation.errorText.keyMeasures = '';
  }

  return validation;
};

export default ObjectivesFormValidator;
