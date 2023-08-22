export const EmptyFormState: BusinessObjectiveFormState = {
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
}


interface BusinessObjectiveFormState {
  errors: {
    title: boolean,
    keyMeasures: boolean,
    startDate: boolean,
    endDate: boolean,
  },
  errorText: {
    title: string,
    keyMeasures: string,
    startDate: string,
    endDate: string,
  },
}

export default BusinessObjectiveFormState;
