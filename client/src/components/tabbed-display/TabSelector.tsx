import { ReactElement } from "react";
import { Typography } from "@mui/material";
import Colors from "../../core/ColorPalette";

interface Props {
  tabTitles: string[],
  focusTab: number,
  setFocusTab: (tabIndex: number) => void,
}

const TabSelector = ({
  tabTitles,
  focusTab,
  setFocusTab
}: Props): ReactElement => {
  return <div style={{
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
        padding: '0.5rem 1.5rem 0.5rem 1.5rem',
        transition: '500ms',
      }} onClick={() => setFocusTab(key)}>
        <Typography variant="h2" sx={{
          m: '0',
        }}>
          {title}
        </Typography>
      </div>)
    }
  </div>
}

export default TabSelector;
