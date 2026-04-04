import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = ({ target: { name, value } }) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset };
};