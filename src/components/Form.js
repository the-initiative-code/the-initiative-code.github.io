import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    fontSize: 20,
    fontFamily: "Arial",
    useNextVariants: true
  }
});

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textField: {
    width: "100%",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  }
});

class OutlinedTextFields extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <MuiThemeProvider theme={theme}>
          <TextField
            id="outlined-multiline-static"
            label="What are you selling?"
            multiline
            rows="4"
            defaultValue="Laptops and Mobile Devices"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="Who are your customers?"
            multiline
            rows="4"
            defaultValue="Oil and gas corporations"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="What is your brand?"
            multiline
            rows="8"
            defaultValue="We offer customers value added contracts that include client care and conferencing capabilities."
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </MuiThemeProvider>
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
