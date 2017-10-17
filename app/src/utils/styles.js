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
    maxWidth: `860px`,
    marginRight: `auto`,
    marginLeft: `auto`,
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
    bottom: `40px`,
    right: `40px`,
  },
  deletePostIcon: {
    backgroundColor: primary,
    '&:hover': {
      backgroundColor: primaryHover,
    },
    width: `40px`,
    height: `40px`,
    marginLeft: `24px`,
  },
  editPostIcon: {
    backgroundColor: primary,
    '&:hover': {
      backgroundColor: primaryHover,
    },
    width: `40px`,
    height: `40px`,
    marginLeft: `16px`,
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
    width: `100%`,
    maxWidth: `96vw`,
  },
  cardContent: {
    padding: theme.spacing.unit*3,
    textAlign: `left`,
  },
  postTitle: {
    fontSize: `1.5rem`,
    fontWeight: `400`,
    color: primary,
    textDecoration: `none`,
    display: `block`,
  },
  postInfo: {
    fontSize: `0.7rem`,
    color: `#999`,
    display: `inline-block`,
    marginLeft: `-4px`,
    marginRight: `20px`,
  },
  postInfoText: {
    verticalAlign: `super`,
    marginLeft: `4px`,
  },
  postBody: {
    fontSize: `0.9rem`,
    paddingTop: theme.spacing.unit*2,
  },
  cardControls: {
    paddingLeft: theme.spacing.unit*3,
    paddingRight: theme.spacing.unit*3,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: `left`,
    backgroundColor: `#efefef`,
    display: `inline-flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `flex-end`,
  },
  voteScore: {
    color: primary,
    paddingLeft: `2px`,
    paddingRight: `2px`,
  },
  formWrapper: {
    display: `flex`,
    flexFlow: `column nowrap`,
    alignItems: `center`,
    paddingTop: theme.spacing.unit*4,
  },
  textField: {
    width: `75%`,
    marginBottom: theme.spacing.unit*3,
  },
  buttonGroup: {
    flexDirection: `row`,
  },
  submitButton: {
    marginLeft: theme.spacing.unit*2,
    backgroundColor: primary,
    '&:hover': {
      backgroundColor: primaryHover,
    },
  },
  cancelButton: {
    backgroundColor: accent,
    '&:hover': {
      backgroundColor: accentHover,
    },
  },
  categoryMenuItem: {
    fontWeight: `300`,
    '&:focus': {
      backgroundColor: `#eee`,
    },
    '&:hover': {
      backgroundColor: `#e3f2fd`,
    },
    textTransform: `lowercase`,
    height: `32px`,
  }
});
