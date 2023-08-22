import { Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { ReactElement } from "react";
import CalendarIcon from "../../assets/icons/avertro_calendar_icon";

interface Props {
  title: string,
  name: string,
  value: Date | null,
  onChange: (value: Date | null, fieldName: string) => void,
  minDate?: Date | null,
  maxDate?: Date | null,
}

const DatePickerIcon = () => <CalendarIcon size={'1rem'}/>

const AvertroDatePicker = ({
  title,
  name,
  value,
  onChange,
  minDate = null,
  maxDate = null,
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
          minDate={dayjs(minDate)}
          maxDate={dayjs(maxDate)}
          sx={{ width: '100%' }}
          format="DD/MM/YYYY"
          value={dayjs(value)}
          onChange={(e) => {
            let date: Date | null = null;
            if (e) {
              date = e.toDate()
            }
            onChange(date, name);
          }}
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
