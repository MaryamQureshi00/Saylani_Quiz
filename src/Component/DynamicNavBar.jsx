import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material'
import logo from '../Screen/Images/Logo.png';
import "../App.css"
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';
import Groups2Icon from '@mui/icons-material/Groups2';
import BarChartIcon from '@mui/icons-material/BarChart';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
export default function DynamicNavBar(props) {

    const navigation = useNavigate()

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const [ValueDahboard, setValueDahboard] = React.useState([ { name: 'Announcement', path: "/getAnnouncement" },]);

    const [StudentValueDahboard, setStudentValueDahboard] = React.useState([ { name: 'Student Dashboard', path: "/getStdDash" }, { name: 'Announcement', path: "/Announcement"},{name:"Progress",path:"/progress" }]);

    



    const logOut = ()=>{
        localStorage.clear();

        navigation("/")
    }



    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
            
                { props.StudentShow == "Student"?
                
                StudentValueDahboard.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => { navigation(text.path) }}>
                            <ListItemIcon>
                                {index === 0 ? <Groups2Icon /> : index === 1 ? < CampaignIcon /> : < Groups2Icon />}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))
                :
                
                ValueDahboard.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => { navigation(text.path) }}>
                            <ListItemIcon>
                                {index === 0 ? <DashboardIcon /> : index === 1 ? < CampaignIcon /> : < Groups2Icon />}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))
                }

            
            </List>
            <Divider />
            <List>
                {["LogOut"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={logOut}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <PowerSettingsNewIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (

        <Box>
            <AppBar>
                <Toolbar class="nav">
                    <Typography variant="h4" component="div" height={80}>
                     {props.showimage== "Link" ?
<img className='logo' src={logo} alt='hosh kr khargosh' onClick={()=>navigation("/")} style={{cursor:"pointer" ,objectFit:"cover"}} />
:
<img className='logo' src={logo} alt='hosh kr khargosh' height={80}  style={{objectFit:"cover"}}/>
                    }   
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Stack direction="row" spacing={2}>
                            {props.side == "Icon" ?
                                <div>
                                    {['right'].map((anchor) => (
                                        <React.Fragment key={anchor}>
                                            <IconButton aria-label="delete" sx={{ color: "black" }} onClick={toggleDrawer(anchor, true)}>
                                                <DensityMediumIcon />
                                            </IconButton>
                                            <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                                onClose={toggleDrawer(anchor, false)}
                                            >
                                                {list(anchor)}
                                            </Drawer>
                                        </React.Fragment>
                                    ))}
                                </div> : props.side == "Main" ? <>

                                    <Button style={{ backgroundColor: 'white' }} color="inherit" onClick={() => navigation("/TeacherLogin")} ><i class=" mainIcon fa-solid fa-user-shield"></i> Teacher</Button>
                                    <Button style={{ backgroundColor: 'white' }} color="inherit" onClick={() => navigation("/SignUp")} ><i className=" mainIcon fa-solid fa-user-graduate"></i>Student</Button>
                                </>: props.side == "Login" ? <>

<Button style={{ backgroundColor: 'white' }} color="inherit" onClick={() => navigation("/SignUp")} ><i class=" mainIcon fa-solid fa-user-shield"></i> SignUp</Button>

</>: props.side == "SignUp" ? <>

<Button style={{ backgroundColor: 'white' }} color="inherit" onClick={() => navigation("/Login")} ><i class=" mainIcon fa-solid fa-user-shield"></i> Login</Button>

</>
                                    : <>
                                    </>
                            }
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}