import { ReactElement } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Colors from "../../core/ColorPalette";

interface Props {
  tabTitles: string[],
  focusTab: number,
  setFocusTab: (tabIndex: number) => void,
}

const acronym = (s: string): string => {
  const words = s.split(' ');
  const initals = words.map((word) => (word.length >= 1 ? word[0] : ''));
  return initals.join('');
}

const TabSelector = ({
  tabTitles,
  focusTab,
  setFocusTab
}: Props): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'start',
    }}>
      {
        tabTitles.map((title, key) => <div key={key} style={{
          cursor: 'pointer',
          borderRadius: '10px 10px 0px 0px',
          backgroundColor:`${
            focusTab === key ? Colors.AVERTRO_WHITE : Colors.PAGE_BORDER
          }`,
          padding: isMobile ? '0.5rem 0.75rem 0.5rem 0.75rem' : '0.5rem 1.5rem 0.5rem 1.5rem',
          transition: '500ms',
        }} onClick={() => setFocusTab(key)}>
          <Typography variant="h2" sx={{
            m: '0',
            fontSize: isMobile ? '1rem' : '1.25rem'
          }}>
            {(isMobile && focusTab !== key) ? acronym(title) : title}
          </Typography>
        </div>)
      }
    </div>
  );
};

export default TabSelector;
