import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#BBE2BC',
            contrastText: '#B22222',
            light: '#F0E68C',
       },
        secondary: {
            main: '#FFFFFF',
            light: '#F0E68C',
            contrastText:'#232959',
        },
        background: {
            default: '#FAFAFA'
        },
        error: {
            main: '#BC0E2D',
            contrastText: '#232959',
            light: '#F0E68C',
        },
        text: {
            primary: '#232959',
            secondary: '#FFFFFF'
        },
        divider: '#DFE0E7',
    },
    typography: {
        fontSize: 10,
        htmlFontSize: 10,
        fontFamily: 'Fira Sans'
    },
})

export default theme;