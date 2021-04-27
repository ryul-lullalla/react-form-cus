import React, { createContext, useMemo } from 'react';
import useForm from '../../hooks/useForm/useForm';
import { FormContext } from '../../context';

const FormContainer = ({ formSubmit, children }, props) => {
  // const form = useMemo(() => {
  //   const formService = useForm({ handleSubmit });

  //   return formService;
  // }, [props]);

  // const { refStore, updateOrGetRef } = useForm();
  const form = useForm(formSubmit);
  console.log(form.isValid)
  return (
    <FormContext.Provider value={form}>
      <form onSubmit={form.submit}>{children}</form>
    </FormContext.Provider>
  );
};

export default FormContainer;
