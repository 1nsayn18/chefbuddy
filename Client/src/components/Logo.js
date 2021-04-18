import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  media: {
    height: 54,
    paddingTop: 5
  }
});
const Logo = (props) => {
  const classes = useStyles();
  return (
    <img
      alt="Logo"
      src="/static/logo.png"
      className={classes.media}
      {...props}
    />
  );
};

export default Logo;
