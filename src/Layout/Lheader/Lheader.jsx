import React from 'react';
import headerLogo from "../../assets/headerLogo.svg";
import {Link, NavLink} from "react-router-dom";
import {Avatar, Box, Button, Menu, MenuItem, Modal, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {logout} from "../../features/slices/auth";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #FFFFFF',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};

const Lheader = () => {

    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [Mopen, MsetOpen] = React.useState(false);
    const MhandleOpen = () => MsetOpen(true);
    const MhandleClose = () => MsetOpen(false);

    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__logo">
                        <img src={headerLogo} alt="Logo"/>
                    </h1>
                    <Avatar
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{cursor: 'pointer'}}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose} component={Link} to='/profile'>Профиль</MenuItem>
                        <MenuItem onClick={handleClose}>Мой аккаунт</MenuItem>
                        <MenuItem onClick={() => {
                            handleClose()
                            MhandleOpen()
                        }}>Выйти</MenuItem>
                    </Menu>
                    <Modal
                        open={Mopen}
                        onClose={MhandleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Выйти
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                                Вы уверены что хотите выйти из аккаунта?
                            </Typography>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'end',
                                columnGap: '10px'
                            }}>
                                <Button variant='contained' onClick={MhandleClose}>Отмена</Button>
                                <Button variant='outlined' onClick={() => {
                                    dispatch(logout())
                                }} color='error'>Выйти</Button>
                            </div>
                        </Box>
                    </Modal>
                </nav>
            </div>
        </header>
    );
};

export default Lheader;