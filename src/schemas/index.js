import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const basicSchema=yup.object().shape({
    email:yup
    .string()
    .email('Please enter a valid email address')
    .required('Entering your email is mandatory'),
    age:yup
    .number()
    .positive('Please enter a positive age')
    .integer('Please enter your age as an integer')
    .required('It is mandatory to enter age'),
    password:yup
    .string()
    .min(5,'Please enter minimum 5 characters')
    .matches(passwordRules,{
      message:'Please enter at least 1 capital letter, 1 lower case letter and 1 number.'
    })
    .required('Entering a password is mandatory'),
    confirmPassword:yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Re-entering password is required'),
});

export const advancedSchema=yup.object().shape({
  username:yup
  .string()
  .min(3,'Username must be at least 3 characters long')
  .required('Username is required'),
  university:yup
 .string().oneOf(['bogazici','gsu','odtu','itu'],'Please select your university')
 .required('Please select your university'),
  isAccepted:yup
  .boolean().oneOf([true],'Accept the terms of use'),
});