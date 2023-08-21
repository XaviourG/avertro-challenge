import { createTheme } from "@mui/material/styles";
import Colors from "./ColorPalette";

const DefaultTheme = createTheme({
  palette: {
    background: {
      default: Colors.AVERTRO_BACKGROUND,
    }
  },
  typography: {
    fontFamily: ['Inter', 'Nunito'].join(','),
    h1: {
      fontFamily: 'Nunito',
      fontSize: '1.125rem',
      color: Colors.AVERTRO_BLUE,
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: '1.25rem',
      color: Colors.AVERTRO_BLUE,
      fontWeight: 700,
      lineHeight: '1.75rem',
      letterSpacing: '-2%',
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: '0.825rem',
      color: Colors.AVERTRO_BLUE,
      fontWeight: 500,
      lineHeight: '1.25rem',
    },
    body1: {
      fontFamily: 'Nunito',
      fontSize: '0.8rem',
      color: Colors.BODY_TEXT,
      fontWeight: 400,
      lineHeight: '1.125rem',
    },
  },
});

export default DefaultTheme;
