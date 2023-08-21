import { ReactElement } from "react";
import { Typography } from "@mui/material";
import TabbedDisplay from "../components/tabbed-display/TabbedDisplay";
import Colors from "../core/ColorPalette";

const SecurityStrategyAuditPage = (): ReactElement => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <div style={{
      width: '100%',
      maxWidth: '90em',
      padding: '2rem',
    }}>
      <div style={{
        width: '100%',
        borderBottom: `1px solid ${Colors.PAGE_BORDER}`,
        paddingBottom: '1.25rem',
        marginBottom: '1.5rem',
      }}>
        <Typography variant="h1">
          Set Security Strategy
        </Typography>
      </div>
      <TabbedDisplay
        startTab={1}
        tabs={[
          {title: 'Mission & Vision', element: <>MISSION TAB</>},
          {title: 'Strategic Business Objectives', element: <>OBJECTIVES TAB</>}
        ]}
      />
    </div>
  </div>
);

export default SecurityStrategyAuditPage;
