import { Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ReactElement } from "react";
import CalendarIcon from "../../assets/icons/avertro_calendar_icon";

interface Props {
  title: string,
  name: string,
  value: Date | null,
  onChange: (value: Date | null, fieldName: string) => void,
}

const DatePickerIcon = () => <CalendarIcon size={'1rem'}/>

const AvertroDatePicker = ({
  title,
  name,
  value,
  onChange,
}: Props): ReactElement => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}>
      <Typography variant="h2" sx={{ pb: '0.5rem' }}>
        {title}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ width: '100%' }}
          format="DD/MM/YYYY"
          value={value}
          onChange={(e) => {onChange(e, name)}}
          slots={{
            openPickerIcon: DatePickerIcon,
          }}
          slotProps={{
            inputAdornment: { position: 'start'}
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default AvertroDatePicker;
