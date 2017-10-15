import { blue, purple } from 'material-ui/colors'

export const primary = `#0099ff`;
export const primaryHover = `#1976d2`
export const accent = purple[`A200`]
export const accentHover = purple[`A400`]

export const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    height: `100vh`,
    width: `100vw`,
    fontFamily: theme.typography.fontFamily,
  },
  paper: {
    padding: theme.spacing.unit*0,
    textAlign: `center`,
    color: theme.palette.text.secondary,
    backgroundColor: `#f5f5f5`,
    boxShadow: `none`,
  },
  header: {
    backgroundColor: primary,
    color: theme.palette.common.fullWhite,
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
    backgroundColor: blue[500], // #2196f3
  },
  button: {
    margin: theme.spacing.unit*2,
    fontSize: `1rem`,
    color: `rgba(255, 255, 255, 0.7)`,
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
      color: `rgba(255, 255, 255, 0.96)`,
    },
  },
  mainContentWrapper: {
    minHeight: `calc(100vh - 188px)`,
  },
  sortWrapper: {
    paddingLeft: theme.spacing.unit*0,
    paddingRight: theme.spacing.unit*0,
    paddingTop: theme.spacing.unit*3,
    paddingBottom: theme.spacing.unit*3,
  },
  sortBy: {
    display: `inline-block`,
    verticalAlign: `super`,
    marginLeft: theme.spacing.unit*1,
    fontStyle: `italic`,
    fontSize: `1.1rem`,
  },
  sortType: {
    textTransform: `lowercase`,

  },
  sortMenuItem: {
    fontWeight: `300`,
    '&:focus': {
      backgroundColor: `#eee`,
    },
    '&:hover': {
      backgroundColor: `#e3f2fd`,
    },
    textTransform: `lowercase`,
    height: `32px`,
  },
  iconButton: {
    color: `rgba(0, 0, 0, 0.24)`,
    '&:hover': {
      backgroundColor: `rgba(158, 158, 158, 0.2)`,
    },
    width: `32px`,
    height: `32px`,
  },
  addPostIcon: {
    backgroundColor: accent,
    '&:hover': {
      backgroundColor: accentHover,
    },
    position: `fixed`,
    top: `200px`,
    right: `200px`,
  },
  deletePostIcon: {
    backgroundColor: primary,
    '&:hover': {
      backgroundColor: primaryHover,
    },
    width: `40px`,
    height: `40px`,
  },
  editPostIcon: {
    backgroundColor: primary,
    '&:hover': {
      backgroundColor: primaryHover,
    },
    width: `40px`,
    height: `40px`,
    marginLeft: `8px`,
  },
  voteScore: {
    display: `inline-block`,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    verticalAlign: `super`,
  },
  postWrapper: {
    display: `flex`,
    flexFlow: `column nowrap`,
    alignItems: `center`,
  },
  cardPost: {
    padding: theme.spacing.unit*0,
    marginBottom: theme.spacing.unit,
    backgroundColor: theme.palette.common.fullWhite,
    display: `flex`,
    flexFlow: `column nowrap`,
    width: `800px`,
    maxWidth: `800px`,
  },
  cardContent: {
    padding: theme.spacing.unit*3,
  },
  cardControls: {
    padding: theme.spacing.unit,
    backgroundColor: `#efefef`,
  },
});
