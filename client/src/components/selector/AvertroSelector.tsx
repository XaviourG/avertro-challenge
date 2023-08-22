import { ReactElement, useState } from "react";
import Colors from "../../core/ColorPalette";
import { Typography } from "@mui/material";

interface Props {
  options: string[],
  select: (index: number) => void,
}

const AvertroSelector = ({
  options,
  select,
}: Props): ReactElement => {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      borderRadius: '10px',
      backgroundColor: Colors.AVERTRO_BACKGROUND,
      padding: '0rem',
      border: `2px solid ${Colors.AVERTRO_BACKGROUND}`
    }}>
      {
        options.map((option, key) => (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '0.25rem 1rem 0.25rem 1rem',
            backgroundColor: (key === selected) ? Colors.AVERTRO_WHITE : Colors.AVERTRO_BACKGROUND,
            borderRadius: '10px',
            transition: '500ms',
            cursor: 'pointer',
            color: (key === selected) ? Colors.BODY_TEXT : Colors.PAGE_BORDER,
          }} onClick={() => setSelected(key)}>
            <Typography color='inherit' variant="h3" sx={{ fontSize: '0.75rem'}}>
              {option}
            </Typography>
          </div>
        ))
      }

    </div>
  );
}

export default AvertroSelector;