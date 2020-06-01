
import React from 'react';
import {Button, TextInput,StyleSheet, View, Text} from 'react-native';

import { globalStyles } from '../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../shared/button';

const PharmacieSchema = yup.object({
    name: yup.string().required(),
})

export default function AddPharmacie({ addPharmacie }){

    return(
        <View style={globalStyles.container}>
          <Formik
           initialValues={{ name: '',date: '', prix:''}}
           validationSchema={PharmacieSchema}
           onSubmit={( values, actions )=>{
             actions.resetForm();
             addPharmacie(values)
           }}
          >
           {(props) => (
             <View>
                 <TextInput style={globalStyles.input} placeholder='Pharmacie' onChangeText={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')} />
                 <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

                 

            

                 <TextInput style={globalStyles.input} placeholder='Date' onChangeText={props.handleChange('date')} value={props.values.date} onBlur={props.handleBlur('date')} />
                 <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>

                 <TextInput style={globalStyles.input} placeholder='Prix' onChangeText={props.handleChange('prix')} value={props.values.prix} onBlur={props.handleBlur('prix')} />
                 <Text style={globalStyles.errorText}>{props.touched.prix && props.errors.prix}</Text>

                 
                 
                 <FlatButton text="Enregistrer" onPress={props.handleSubmit} />
                 
             </View>
           )}
          </Formik>
        </View>
    )
}
