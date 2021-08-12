import React from 'react';
import {makeStyles} from "@material-ui/core";
import{
    Button,
    TextField,
    Select,
    Input,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,

}from "@material-ui/core";
import { useFormControl,Controller } from "react-hook-form";
import * as yup from"yup";
import {yupResolver}from"@hookform/resolvers";


const useStyles = makeStyles((theme) => ({
    paper:{
        padding: theme.spaning(2)
    },
    textField:{
        marginBottom:theme.spacing(2),
    },


}));

const tags = ["fun","programming","health","science"];

const postSchema = yup.object().shape({
        title: yup.string().required(),
        title: yup.string().required(),

})


export const AddPostForm = () => {
    const classes = useStyles();

    return  <div></div>;
    
};







