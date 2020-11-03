import React from 'react';
import { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import{  emailjs, sendForm } from 'emailjs-com';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Tron
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const Courses = [
//   {
//     value: 'A',
//     label: 'C++',
//   },
//   {
//     value: 'B',
//     label: 'Python',
//   },
//   {
//     value: 'C',
//     label: 'Data Science',
//   },
//   {
//     value: 'D',
//     label: 'React',
//   },
// ];

// const [errorText,seterrorText]=useState()

// onChange(event) {
//   if (event.target.value.match(phoneRegex)) {
//     this.setState({ errorText: '' })
//   } else {
//     this.setState({ errorText: 'Invalid format: ###-###-####' })
//   }
// }

function sendEmail(e) {
  e.preventDefault();
  sendForm('gmail', 'template_444xazn', e.target, 'user_yZ4qx21CEABzeqlY3feB7')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  e.target.reset();
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {

  
  const classes = useStyles();

  // const [Course, setCourse] = React.useState('EUR');

  // const handleChange = (event) => {
  //   setCourse(event.target.value);
  // };

  

  return (
    <Fragment >
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={sendEmail} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
            {/* <TextField
              id="standard-select-currency"
              select
              label="Course Select"
              value={Course}
              onChange={handleChange}
              helperText="Please select a course"
            >
              {Courses.map((option) => (
                <MenuItem key={option.value} value={option.value} name={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
                <TextField id="standard-basic" label="Phone Number" fullWidth name="phone" required />

              </Grid>
              
              <Grid item xs={12}>
              <TextField id="standard-basic" label="Course Name" fullWidth name="course" required/>

              </Grid>
              <Grid item xs={12}>
              <TextField id="standard-basic" label="Whatsapp Number" fullWidth name="whatsappNumber" required/>

              </Grid>

              <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="get updates via email."
                />
                <p style={{fontWeight:"large"}}>
                  Rs<del>5000</del> Rs <strong>2500</strong> </p>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
              className={classes.submit}
              
          >
              Submit
          </Button>
          <span>
          Submit will send a email to us and our team will revert you soon.
        </span>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link  href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>
          {/* <Copyright /> */}
      </Box>
    </Container>
    </Fragment>
    
  );
}