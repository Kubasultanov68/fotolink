import React from 'react';
import {Box, Button, Fab, Modal, Typography} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {generateFakeData} from "../UserProfile/UserProfile";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import * as Post from '../../features/slices/post'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreatePost = ({Mopen, MhandleClose, }) => {

    const [images, setImages] = React.useState('')

    const dispatch = useDispatch()

    const {isLoading} = useSelector(store => store.post.create)
    const {user} = useSelector(store => store.auth)

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            defaultValues
        },
        setError,
        setValue
    } = useForm({
        defaultValues: {
            user: user._id,
            tags: null,
            desc: ''
        },
    })

    const onSubmit = ({tags, desc, user}) => {
        dispatch(Post.create({
            tags: tags.split(' '),
            desc,
            images: images.split(' '),
            user
        }))
    }

    return (
        <Modal
            open={Mopen}
            onClose={() => {
                MhandleClose()
                setImages('')
                setValue('tags',null)
                setValue('desc','')
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box component='form' sx={style} onSubmit={handleSubmit(onSubmit)}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Создать
                </Typography>

                <textarea {...register('desc')} placeholder='Описание поста' style={{width: '100%'}}>

                </textarea>
                <div className='post__content'>
                    {images.split(' ').map((item, index) => (
                        <img key={index}
                             src={item}
                             alt="img"/>
                    ))}
                </div>

                <textarea
                    placeholder='картинки'
                    style={{width: '100%'}}
                    value={images}
                    onChange={(e) => setImages(e.target.value)}
                >

                </textarea>

                <textarea {...register('tags')} placeholder='теги' style={{width: '100%'}}>

                </textarea>
                {/*<Fab color="primary" aria-label="add">*/}
                {/*    <AddAPhotoIcon />*/}
                {/*</Fab>*/}
                <div style={{
                    display: 'flex',
                    justifyContent: 'end',
                    columnGap: '10px'
                }}>
                    <Button
                        variant='contained'
                        disabled={isLoading}
                        type='submit'
                    >
                        Создать
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default CreatePost;