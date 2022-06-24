import * as Yup from 'yup';

export const teamsFormValidation = Yup.object().shape({
    city: Yup.string()
        .required('City is required!')
        .matches(/^[aA-zZ\s]+$/, "Only letters!")
})