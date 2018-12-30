// main imports
import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

// styles
import style from './Form.module.css'

// components
import { sendEmail } from './Emailjs'

const theme = createMuiTheme({
  typography: {
    // fontSize: 20,
    // fontFamily: "Arial",
    useNextVariants: true,
  },
})

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    width: '100%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
})

class OutlinedTextFields extends React.Component {
  onSubmit = this.onSubmit.bind(this)

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  async onSubmit(e) {
    e.preventDefault()
    const sendCheck = await sendEmail({ data: this.state, user: 'panzerstadt' })
    const sendCheck2 = await sendEmail({ data: this.state, user: 'mayojich' })
    if (sendCheck) {
      this.props.onSubmit(this.state)
    } else {
      console.log('there is an error')
      this.error = 'there is an error in the sending process.'
    }
  }

  render() {
    const { classes } = this.props

    const template_params = {
      user_name: 'user_name_value',
      user_email: 'user_email_value',
      product: 'product_value',
      target_audience: 'target_audience_value',
      description: 'description_value',
    }

    return (
      <form
        onSubmit={this.onSubmit}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <MuiThemeProvider theme={theme}>
          <TextField
            id="outlined-multiline-static"
            label="What are you selling?"
            multiline
            rows="4"
            placeholder="Laptops and Mobile Devices"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('product')}
          />
          <TextField
            id="outlined-multiline-static"
            label="Who are your customers?"
            multiline
            rows="4"
            placeholder="Oil and gas corporations"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('target_audience')}
          />
          <TextField
            id="outlined-multiline-static"
            label="What is your brand?"
            multiline
            rows="8"
            placeholder="We offer customers value added contracts that include client care and conferencing capabilities."
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('description')}
          />
          <TextField
            id="outlined-multiline-static"
            label="how may we call you?"
            multiline
            rows="1"
            placeholder="your name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('user_name')}
          />
          <TextField
            id="outlined-multiline-static"
            label="please leave us your email."
            multiline
            rows="1"
            placeholder="your email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('user_email')}
          />
        </MuiThemeProvider>

        <button className={style.submit + ' color-animation'}>
          contact us
        </button>
      </form>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OutlinedTextFields)
