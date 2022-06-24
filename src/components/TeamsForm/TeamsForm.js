import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from "react-redux";

import Input from '../Input/Input';
import TeamsButton from '../TeamsButton/TeamsButton';
import Select from '../Select/Select';

import { useSelect } from '../Select/SelectHooks';
import { addTeam } from '../../redux/Slices/teamsSlice';
import { teamsFormValidation } from './TeamsFormValidation';

import './TeamsForm.scss';

const TeamsForm = () => {

    const dispatch = useDispatch();
    const { selectConference, setSelectConference } = useSelect();

    return (
        <div>
            <Formik 
                initialValues={{
                    name: '',
                    city: '',
                    abbreviation: '',
                    conference: selectConference,
                }}
                validationSchema={teamsFormValidation}
                onSubmit={(values) => dispatch(addTeam({...values, conference: selectConference}))}
            >
                {({ errors, touched }) => (
                    <Form className="teams__form">
                        <Input name="name" label="Name" placeholder="Name" />
                        <Input name="city" label="City" placeholder="City" error={errors.city} touched={touched.city} />
                        <Input name="abbreviation" label="Abbreviation" placeholder="Only uppercase" />
                        <Select selectFunc={setSelectConference} name="conference" label="Conference" options={['East', 'West']} />
                        <TeamsButton/>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default TeamsForm;