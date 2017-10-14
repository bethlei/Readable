import { blue, purple } from 'material-ui/colors'

export const primary = `#0099ff`;
export const accent = purple[`A200`]; // #E040FB

export const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    height: `100vh`,
    width: `100vw`,
  },
  paper: {
    padding: theme.spacing.unit*2,
    textAlign: `center`,
    color: theme.palette.text.secondary,
  },
  header: {
    backgroundColor: primary,
    color: theme.palette.common.fullWhite,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightLight,
    fontSize: `4.5rem`,
    fontStyle: `italic`,
    lineHeight: 1,
    textDecoration: `none`,
    textAlign: `center`,
    padding: theme.spacing.unit*3,
  },
  category: {
    display: `flex`,
    flexFlow: `row wrap`,
    justifyContent: `center`,
    backgroundColor: blue[500], // #2196F3
  },
  button: {
    margin: theme.spacing.unit*2,
    fontSize: `1rem`,
    color: `rgba(255, 255, 255, 0.5)`,
  },
  catLabel: {
    textTransform: `uppercase`,
  },
  catLink: {
    textDecoration: `none`,
    color: `rgba(255, 255, 255, 0.5)`,
    '&:active': {
      color: `rgba(255, 255, 255, 0.82)`,
    },
    '&:focus': {
      color: `rgba(255, 255, 255, 0.92)`,
    },
  },
  mainContentWrapper: {
    minHeight: `calc(100vh - 220px)`
  }
});
