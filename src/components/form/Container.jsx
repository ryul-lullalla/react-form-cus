import React, { createContext, useMemo } from 'react';
import useForm from '../../hooks/useForm/useForm';
import { FormContext } from '../../context';

const FormContainer = ({ formSubmit, children }, props) => {
  console.log('FormContainer');
  // const form = useMemo(() => {
  //   const formService = useForm({ handleSubmit });

  //   return formService;
  // }, [props]);
  console.log(props);
  console.log(formSubmit);

  console.log(FormContext);
  // const { refStore, updateOrGetRef } = useForm();
  const form = useForm(formSubmit);
  console.log(form, form.submit);
  console.log('refStore!!!!!', form.refStore);
  return (
    <FormContext.Provider value={form}>
      <form onSubmit={form.submit}>{children}</form>
    </FormContext.Provider>
  );
};

export default FormContainer;
