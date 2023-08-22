import BusinessObjectiveDTO from "../../models/DTOs/BusinessObjectiveDTO";
import BusinessObjectiveFormState, { EmptyFormState } from "../../models/DTOs/BusinessObjectiveFormState";


const ObjectivesFormValidator = (
  formData: BusinessObjectiveDTO,
): BusinessObjectiveFormState => {
  const validation: BusinessObjectiveFormState = EmptyFormState;

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

  return validation;
};

export default ObjectivesFormValidator;
