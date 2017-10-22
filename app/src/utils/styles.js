import { blue, purple } from 'material-ui/colors'

export const primary = `#0099ff`
export const primaryHover = `#1976d2`
export const secondary = `#4caf50`
export const secondaryHover = `#388e3c`
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
    padding: 0,
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
    padding: theme.spacing.unit*2,
  },
  category: {
    display: `flex`,
    flexFlow: `row nowrap`,
    justifyContent: `center`,
    backgroundColor: blue[500], // #2196f3
  },
  button: {
    margin: theme.spacing.unit*1.375,
    fontSize: `1rem`,
    whiteSpace: `nowrap`,
  },
  catLabel: {
    textTransform: `uppercase`,
    color: `rgba(255, 255, 255, 0.5)`,
    '&:active': {
      color: `rgba(255, 255, 255, 0.82)`,
    },
    '&:focus': {
      color: `rgba(255, 255, 255, 0.96)`,
    },
  },
  catLink: {
    textDecoration: `none`,
  },
  mainContentWrapper: {
    minHeight: `calc(100vh - 188px)`,
    maxWidth: `860px`,
    marginRight: `auto`,
    marginLeft: `auto`,
  },
  sortWrapper: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing.unit*3,
    paddingBottom: theme.spacing.unit,
    textAlign: `left`,
  },
  sortBy: {
    display: `inline-block`,
    verticalAlign: `super`,
    marginLeft: theme.spacing.unit,
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
    height: theme.spacing.unit*4,
    paddingTop: 0,
    paddingBottom: 0,
  },
  iconButton: {
    color: `rgba(0, 0, 0, 0.24)`,
    '&:hover': {
      backgroundColor: `rgba(158, 158, 158, 0.2)`,
    },
    width: theme.spacing.unit*4,
    height: theme.spacing.unit*4,
  },
  addPostIcon: {
    backgroundColor: accent,
    '&:hover': {
      backgroundColor: accentHover,
    },
    position: `fixed`,
    bottom: theme.spacing.unit*5,
    right: theme.spacing.unit*5,
  },
  deletePostIcon: {
    backgroundColor: primary,
    '&:hover': {
      backgroundColor: primaryHover,
    },
    width: theme.spacing.unit*5,
    height: theme.spacing.unit*5,
    marginLeft: theme.spacing.unit*3,
  },
  editPostIcon: {
    backgroundColor: primary,
    '&:hover': {
      backgroundColor: primaryHover,
    },
    width: theme.spacing.unit*5,
    height: theme.spacing.unit*5,
    marginLeft: theme.spacing.unit*2,
  },
  postWrapper: {
    display: `flex`,
    flexFlow: `column nowrap`,
    alignItems: `center`,
  },
  cardPost: {
    padding: 0,
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
    marginLeft: -theme.spacing.unit*0.5,
    marginRight: theme.spacing.unit*2.5,
  },
  postInfoText: {
    verticalAlign: `super`,
    marginLeft: theme.spacing.unit*0.5,
  },
  postBody: {
    fontSize: `1.1rem`,
    paddingTop: theme.spacing.unit*2,
    fontWeight: 300,
    color: `rgba(0, 0, 0, 0.87)`,
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
    paddingLeft: theme.spacing.unit*0.25,
    paddingRight: theme.spacing.unit*0.25,
  },
  sectionHeader: {
    margin: 0,
    paddingTop: theme.spacing.unit*3,
    paddingBottom: theme.spacing.unit*3,
    color: primary,
    fontWeight: 300,
    fontSize: `2.875rem`,
    fontFamily: `Roboto, Helvetica, Arial, sans-serif`,
    opacity: 0.84,
  },
  formWrapper: {
    display: `flex`,
    flexFlow: `column nowrap`,
    alignItems: `center`,
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
  cancelButtonWrapper: {
    textDecoration: `none`,
  },
  cancelButton: {
    backgroundColor: accent,
    '&:hover': {
      backgroundColor: accentHover,
    },
  },
  categoryMenuItem: {
    fontWeight: 300,
    '&:focus': {
      backgroundColor: `#eee`,
    },
    '&:hover': {
      backgroundColor: `#e3f2fd`,
    },
    textTransform: `lowercase`,
    height: theme.spacing.unit*4,
    paddingTop: 0,
    paddingBottom: 0,
  },
  errorContainer: {
    backgroundColor: primary,
    height: `calc(100vh - 188px)`,
    width: `100vw`,
    opacity: 0.9,
    textAlign: `center`,
    color: theme.palette.common.fullWhite,
  },
  error404: {
    fontSize: `220px`,
    fontWeight: 300,
    top: `15vh`,
    margin: 0,
    position: `relative`,
  },
  errorReturn: {
    bottom: `-10vh`,
    position: `relative`,
    color: `rgba(255, 255, 255, 0.6)`,
    fontSize: `20px`,
    fontWeight: 300,
    letterSpacing: `-0.04em`,
    margin: 0,
  },
  errorReturnLink: {
    paddingBottom: theme.spacing.unit*0.125,
    color: theme.palette.common.fullWhite,
    textDecoration: `none`,
    borderBottom: `1px solid rgba(255, 255, 255, 0.6)`,
    transition: `border-color 0.1s ease-in`,
  },
  postDetailsWrapper: {
    paddingTop: theme.spacing.unit*3,
  },
  commentsWrapper: {
    display: `block`,
  },
  commentHeader: {
    fontWeight: 300,
    fontSize: `28px`,
    color: `rgba(0,0,0,0.54)`,
    alignSelf: `flex-start`,
    paddingTop: theme.spacing.unit*4,
    paddingBottom: theme.spacing.unit*0.5,
    width: `100%`,
    display: `flex`,
    borderBottom: `1px solid #e6e6e6`,
  },
  commentIcon: {
    paddingTop: theme.spacing.unit*0.625,
    paddingLeft: theme.spacing.unit*2,
    paddingRight: theme.spacing.unit*0.625,
  },
  commentIconText: {
    fontSize: `1.1rem`,
    paddingTop: theme.spacing.unit*0.875,
  },
  voteScoreComment: {
    color: secondary,
  },
  deleteCommentIcon: {
    backgroundColor: secondary,
    '&:hover': {
      backgroundColor: secondaryHover,
    },
    width: theme.spacing.unit*5,
    height: theme.spacing.unit*5,
    marginLeft: theme.spacing.unit*3,
  },
  editCommentIcon: {
    backgroundColor: secondary,
    '&:hover': {
      backgroundColor: secondaryHover,
    },
    width: theme.spacing.unit*5,
    height: theme.spacing.unit*5,
    marginLeft: theme.spacing.unit*2,
  },
  cardCommentControls: {
    paddingLeft: theme.spacing.unit*2.5,
    paddingRight: theme.spacing.unit*3,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: `left`,
    backgroundColor: `#efefef`,
    display: `inline-flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `flex-start`,
  },
  addCommentIcon: {
    backgroundColor: accent,
    '&:hover': {
      backgroundColor: accentHover,
    },
    position: `fixed`,
    bottom: theme.spacing.unit*5,
    right: theme.spacing.unit*5,
  },
})
