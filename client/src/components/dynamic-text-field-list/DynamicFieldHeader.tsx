import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactElement } from "react";
import Colors from "../../core/ColorPalette";
import PlusIcon from "../../assets/icons/avertro_plus_icon";

interface Props {
  title: string,
  addFieldText: string,
  addField: () => void,
  isFull: boolean,
}

const DynamicFieldHeader = ({
  title,
  addFieldText,
  addField,
  isFull,
}: Props): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
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
        <Typography variant="h3" sx={{color: `${isFull ? Colors.AVERTRO_BLUE : Colors.TEXT_BORDER}`}}>
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
            primaryColor={isFull ? Colors.AVERTRO_BLUE : Colors.TEXT_BORDER}
            secondaryColor={Colors.AVERTRO_WHITE}
          />
        </div>
      </div>
    </div>
  );
}

export default DynamicFieldHeader;
