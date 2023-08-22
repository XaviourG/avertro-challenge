import { ReactElement } from "react"
import AvertroLogo from "./AvertroLogo"
import Colors from "../../core/ColorPalette";

const TopNav = (): ReactElement =>
  <div style={{
    width: '100vw',
    backgroundColor: Colors.AVERTRO_WHITE,
    paddingTop: '0.825rem',
    paddingBottom: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 4px 10px 0px #0000000A',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  }}>
    <a href="https://www.avertro.com/">
      <AvertroLogo/>
    </a>
  </div>

export default TopNav;
