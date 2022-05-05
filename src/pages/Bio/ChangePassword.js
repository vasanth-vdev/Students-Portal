import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from "../../components/PageContent";
import GlassSheet from '../../components/GlassSheet';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

const InputHeader = styled.h1`
fontsize: 10rem;
letterspacing: 0.07rem;
margin: 4rem 0rem;
`;

const InputField = styled.input`
height: 1rem;
width: 8rem;
fontsize: 2rem;
padding: 1rem 2rem;
`;

const ChangePassword = () => {
    return (
    <div>
        <PageHeader text='Change Password'/>
<PageContent>
<GlassSheet height='auto' width='auto' borderRadius='4rem' padding='4rem 3rem'>
<Formik>
<Form>
<div>
<InputHeader>OldPassword</InputHeader>
<InputField type='password'/>
</div>
<div>
<h1 className='LabelText'>New Password</h1>
<Field 
classname="PasswordInput"
type="Password"
name='NewPassword'></Field></div>
</Form>
</Formik>
</GlassSheet>
        </PageContent>
    </div>
    );
}

export default ChangePassword;