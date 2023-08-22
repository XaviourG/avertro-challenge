import { Typography } from "@mui/material";
import { ReactElement } from "react";
import { observer } from "mobx-react-lite";
import DynamicTextField from "./DynamicTextField";
import DynamicFieldHeader from "./DynamicFieldHeader";

interface Props {
  title: string,
  addFieldText: string,
  fields: string[],
  maxFields: number,
  updateFields: (fields: string[]) => void,
  error: boolean,
  helperText: string,
}

const DynamicTextFieldList = observer(({
  title,
  addFieldText,
  fields,
  maxFields,
  updateFields,
  error,
  helperText,
}: Props): ReactElement => {

  const addField = () => {
    if (fields.length < maxFields) {
      updateFields([...fields, '']);
    }
  }

  const removeField = (key: number) => {
    let slice = [...fields.slice(0, key), ...fields.slice(key + 1)];
    if (slice.length < 1) {
      slice = [''];
    }
    updateFields(slice);
  }

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
        <DynamicFieldHeader
          title={title}
          addFieldText={addFieldText}
          addField={addField}
          isFull={fields.length < maxFields}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {
            fields.map((field, key) => (
              <DynamicTextField
                index={key}
                field={field}
                fields={fields}
                updateFields={updateFields}
                removeField={removeField}
                error={error}
              />
            ))
          }
        </div>
        {
          helperText.length >= 1 &&
          <Typography
            color={error ? 'error' : 'primary'}
            fontFamily='Inter'
            fontSize='0.75rem'
            pl='1rem'
          >
            {helperText}
          </Typography>
        }
    </div>
  );
});

export default DynamicTextFieldList;
