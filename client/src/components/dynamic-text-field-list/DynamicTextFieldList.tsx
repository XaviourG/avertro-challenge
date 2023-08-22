import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactElement } from "react";
import PlusIcon from "../../assets/icons/avertro_plus_icon";
import Colors from "../../core/ColorPalette";
import { observer } from "mobx-react-lite";
import DynamicTextField from "./DynamicTextField";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
              {isMobile ? '' : addFieldText}
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
