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
import {yupResolver}from"@hookform/resolvers/yup";


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
        subtitle: yup.string().required(),
       content: yup.string().min(20).required(),
        tag: yup.mixed().oneOf(tags),
});


 const AddPostForm = (open ,handleClose) => {


    const{register, handleSubmit, control , error , reset} = useForm({
        resolve:yupResolver(postSchema)
    })
    const classes = useStyles();

    return  (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle >Yeni yazı olustur                    </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Yeni Bir yazı eklemek için aşagıdakı formu doldurun.
                    </DialogContentText>
                    <div className={classes.root}>
                        <form noValidate autoComplete="off" >
                            <TextField
                            id="title"
                            label="Başlık"
                            name="title"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors.title ? true : false}
                            fullWidth

                            /> 
                            <TextField
                            id="subtitle"
                            label="Alt Başlık"
                            name="subtitle"
                            variant="outlined"
                            className={classes.textField}
                            size="small"
                            inputRef={register}
                            error={errors.subtitle ? true : false}
                            fullWidth
                            /> 
                                <Controller
                                   as={
                                       <Select
                                          input={<input/>}
                                          className={classes.textField}
                                          fullWidth
                                       >
                                           {
                                               tags.map((tag , index) =>(
                                                   <MenuItem key={index} value={tag}>
                                                        {tag}  
                                                   </MenuItem>
                                               ))}


                                       </Select>
                                   }
                                        name="tag"
                                        control={control}
                                        error={errors.tag ? true : false }
                                        defaultValue={tags[0]}

                                />
                             <TextField
                                id="content"
                                label="İçerik"
                                name="content"
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.textField}
                                size="small"
                                inputRef={register}
                                error={errors.content ? true : false}
                                fullWidth
                            /> 

                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color="inherit">Vazgec</Button>
                    <Button type="submit" variant="autlined" color="primary">Yayınla</Button>
                </DialogActions>

        </Dialog>
    )
    
};
export default AddPostForm;







