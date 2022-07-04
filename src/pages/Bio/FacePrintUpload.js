import { arrayUnion, where } from 'firebase/firestore';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useFirestore } from './../../Context/FirestoreContext';
import { loadModels, getFullFaceDescription } from './../../api/faceapi';
import InputField from '../../components/InputField';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';

const FacePrintUpload = () => {
  const { addData, getData, updateData } = useFirestore();
  useEffect(() => {
    loadModels();
  }, []);
  return (
    <>
      <GlassSheet>
        <Formik
          initialValues={{
            batch: '',
            department: '',
            photo: '',
            rollno: '',
          }}
          onSubmit={async (values) => {
            const fullFaceDescription = await getFullFaceDescription(
              values.photo
            );

            if (fullFaceDescription.length > 1) {
              alert('Upload a Image 1 face within it or Try Cropping the face');
              document.querySelector('#facePrintForm').reset();
              document.querySelector('#facePrintUpload').value = '';
            } else if (fullFaceDescription.length === 0) {
              alert('Upload a Image with a face');
              document.querySelector('#facePrintForm').reset();
              document.querySelector('#facePrintUpload').value = '';
            } else if (fullFaceDescription.length === 1) {
              let des = new Array(...fullFaceDescription[0].descriptor);
              const faceData = {
                rollno: values.rollno.toUpperCase(),
                batch: values.batch,
                department: values.department,
                face_data: [{ des, date: new Date().toLocaleString() }],
              };
              const data = await getData(
                'faceData',
                [where('rollno', '==', values.rollno.toUpperCase())],
                true
              );
              console.log(data);
              if (data) {
                await updateData('faceData', data[0].uid, {
                  face_data: arrayUnion({
                    des,
                    date: new Date().toLocaleString(),
                  }),
                });
                document.querySelector('#facePrintForm').reset();
                document.querySelector('#facePrintUpload').value = '';
              } else {
                await addData('faceData', faceData);
                document.querySelector('#facePrintForm').reset();
                document.querySelector('#facePrintUpload').value = '';
              }
            }
          }}>
          {({ isSubmitting, setFieldValue }) => (
            <Form id='facePrintForm' autoComplete='off'>
              <label>Roll No :</label>
              <InputField type='text' name='rollno' required />
              <label>Batch :</label>
              <Field as='select' name='batch' required className='selectField'>
                <option disabled>Select</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
              </Field>
              <label>Department :</label>
              <Field
                as='select'
                name='department'
                required
                className='selectField'>
                <option disabled>Select</option>
                <option value='Apparel Technology'>DAT</option>
                <option value='Automobile Engneering'>DAE</option>
                <option value='Computer Engneering'>DCE</option>
                <option value='Computer Networking'>DCN</option>
                <option value='Electrical and Electronics Engneering'>
                  DEEE
                </option>
                <option value='Electronics and Communication Engneering'>
                  DECE
                </option>
                <option value='Foundary Technology'>DFT</option>
                <option value='Information Technology'>DIT</option>
                <option value='Mechanical Engneering'>DME</option>
                <option value='Mechatronics Engneering'>DMT</option>
                <option value='Textile Technology'>DFT</option>
              </Field>
              <div>
                <label>Photo :</label>
                <input
                  id='facePrintUpload'
                  type='file'
                  name='photo'
                  style={{
                    position: 'relative',
                    zIndex: '1',
                    fontSize: '2rem',
                    border: 'none',
                  }}
                  onChange={(e) =>
                    setFieldValue(
                      'photo',
                      URL.createObjectURL(e.currentTarget.files[0])
                    )
                  }
                  required
                />
              </div>
              <GreenButton type='submit' disabled={isSubmitting}>
                Submit
              </GreenButton>
            </Form>
          )}
        </Formik>
      </GlassSheet>
    </>
  );
};

export default FacePrintUpload;
