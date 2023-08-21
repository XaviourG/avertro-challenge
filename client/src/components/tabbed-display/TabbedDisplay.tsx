import { ReactElement, useState } from "react";
import TabSelector from "./TabSelector";
import Colors from "../../core/ColorPalette";

export interface TabbedDisplayElement {
  title: string,
  element: ReactElement,
}

interface Props {
  tabs: TabbedDisplayElement[],
  startTab?: number,
}

const TabbedDisplay = ({
  tabs,
  startTab = 0,
}: Props): ReactElement => {
  const [focusTab, setFocusTab] = useState<number>(startTab);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <TabSelector
        tabTitles={tabs.map((tab) => tab.title)}
        focusTab={focusTab}
        setFocusTab={setFocusTab}
      />
      <div style={{
        backgroundColor: Colors.AVERTRO_WHITE,
        borderRadius: '0px 10px 10px 10px',
        padding: '1rem',
        transition: '500ms',
      }}>
        {tabs[focusTab].element}
      </div>
    </div>
  );
}

export default TabbedDisplay;
