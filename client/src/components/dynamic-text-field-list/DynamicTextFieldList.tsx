import { TextField, Typography } from "@mui/material";
import { ReactElement } from "react";
import PlusIcon from "../../assets/icons/avertro_plus_icon";
import MinusIcon from "../../assets/icons/avertro_minus_icon";
import Colors from "../../core/ColorPalette";

interface Props {
  title: string,
  addFieldText: string,
  fields: string[],
  maxFields: number,
  updateFields: (fields: string[]) => void,
}

const DynamicTextFieldList = ({
  title,
  addFieldText,
  fields,
  maxFields,
  updateFields,
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
      <div style={{
          paddingTop: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Typography variant="h2" sx={{ pb: '0.5rem' }}>
            {title}
          </Typography>
          <div style={{
            display: 'flex',
            cursor: 'pointer',
            paddingRight: '1.5rem'
          }} onClick={addField}>
            <Typography variant="h3" sx={{color: `${(fields.length < maxFields) ? Colors.AVERTRO_BLUE : Colors.TEXT_BORDER}`}}>
              {addFieldText}
            </Typography>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '0.5rem',
            }}>
              <PlusIcon
                size="1rem"
                primaryColor={(fields.length < maxFields) ? Colors.AVERTRO_BLUE : Colors.TEXT_BORDER}
                secondaryColor={Colors.AVERTRO_WHITE}
              />
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {
            fields.map((field, key) => (
              <div key={key} style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                paddingBottom: '0.5rem',  
              }}>
                <TextField
                  fullWidth
                  type='text'
                  value={field}
                  name={`key measure ${key}`}
                  onChange={(e) => {
                    const arr = fields;
                    arr[key] = e.target.value;
                    updateFields(arr);
                  }}
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
                  }} onClick={() => removeField(key)}>
                    <MinusIcon size={'1rem'} />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  );
}

export default DynamicTextFieldList;
