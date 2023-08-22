import { TextField } from "@mui/material";
import { ReactElement } from "react";
import MinusIcon from "../../assets/icons/avertro_minus_icon";

interface Props {
  index: number,
  field: string,
  fields: string[],
  updateFields: (arr: string[]) => void,
  removeField: (key: number) => void,
  error: boolean,
}

const DynamicTextField = ({
  index,
  field,
  fields,
  updateFields,
  removeField,
  error,
}: Props): ReactElement => {
  
  return (
    <div key={index} style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      paddingBottom: '0.5rem',  
    }}>
      <TextField
        fullWidth
        multiline
        type='text'
        value={field}
        name={`key measure ${index}`}
        onChange={(e) => {
          const arr = fields;
          arr[index] = e.target.value;
          updateFields(arr);
        }}
        error={error}
      />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0.5rem',
        width: '1.5rem',
      }}>
        <button style={{
          display: `${(fields.length <= 1 && field.length < 1) ? 'none' : 'flex'}`,
          border: 'none',
          background: 'none',
          padding: '0',
          margin: '0',
          cursor: 'pointer',
        }} onClick={() => removeField(index)}>
          <MinusIcon size={'1rem'} />
        </button>
      </div>
    </div>
  );
}

export default DynamicTextField;
