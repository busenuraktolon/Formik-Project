import React from 'react';
import { Form,Formik } from "formik";
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';

const onSubmit = async (values,actions) =>{


  await new Promise((resolve)=>{
      setTimeout(resolve,1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput 
            label="Username" 
            name="username" 
            type="text" 
            placeholder="Please enter your username"
            />
            <CustomSelect
            label="University"
            name="university"
            placeholder="Please select your university"
            >
              <option value="">Please select your university</option>
              <option value="bogazici">Bogazici University</option>
              <option value="gsu">Galatasaray University</option>
              <option value="odtu">ODTU</option>
              <option value="itu">ITU</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted"/>
            <button disabled={isSubmitting} type='submit'>
              Save
            </button>
            <Link className="formLink" to="/">
            Go To Main Form
            </Link>
          </Form>
        )}
      </Formik>
      </>
  )
}

export default PortalForm