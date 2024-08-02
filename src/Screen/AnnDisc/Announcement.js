import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material'
import "../../App.css"
import React, { useEffect, useState } from 'react';
import AnnPic from '../Images/AnnPic.png';
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
import DynamicNavBar from '../../Component/DynamicNavBar';

export default function Announcement() {

  const navigation = useNavigate()

  const [getAnnouncementValue, setgetAnnouncementValue] = useState([]);
  const [showcreate, setshowcreate] = useState(false);
  const [getValue, setgetValue] = useState("");
  const [isEdit, setisEdit] = useState(false);
  const [getvaueid, setgetvaueid] = useState("");

  const getAnnouncement = () => {
    const announcements = [
      { _id: 1, announcement: "Yeh hai announcement 1" },
      { _id: 2, announcement: "Yeh hai announcement 2" },
    ];
    setgetAnnouncementValue(announcements);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateAnnouncement = (item) => {
    console.log(item);
    setgetValue(item.announcement);
    setgetvaueid(item._id);
    setshowcreate(true);
    setisEdit(true);
  };

  const createAnnouncement = () => {
    if (isEdit) {

      const updatedAnnouncements = getAnnouncementValue.map((announcement) => {
        if (announcement._id === getvaueid) {
          announcement.announcement = getValue;
        }
        return announcement;
      });
      setgetAnnouncementValue(updatedAnnouncements);
      setshowcreate(false);
      setisEdit(false);
    } else {
      const newAnnouncement = { _id: getAnnouncementValue.length + 1, announcement: getValue };
      setgetAnnouncementValue([...getAnnouncementValue, newAnnouncement]);
      setshowcreate(false);
    }
  };

  const deleteAnnouncement = (id) => {
    const updatedAnnouncements = getAnnouncementValue.filter((announcement) => announcement._id !== id);
    setgetAnnouncementValue(updatedAnnouncements);
  };

  useEffect(() => {
    getAnnouncement();
  }, []);

  return (

    <div>
      <div>
    <DynamicNavBar side={"Icon"} />
      </div>
      <div className='AnnBack' style={{
        width: '100%', height: '180px', marginTop: '120px',
        backgroundColor: "#fff", display: "flex", justifyContent: "space-between"
      }}>
        <Typography varient='h3' component="div">
          <img src={AnnPic} style={{ width: '90%', height: '120%', objectFit: 'contain' }} alt='Announcement' />
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '40%' }}>
          <div>
            <h1>Announcement</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button  variant="solid" onClick={() => setOpen(true)} sx={{ height: '30px', borderRadius: '15px', backgroundColor: '#87D3C6', border: 'none' ,color:"white"}}>Announce</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {getAnnouncementValue ? (
          getAnnouncementValue.map((item, index) => {
            return (
              <div style={{ display: "flex", marginBottom: 10, marginTop: 30, backgroundColor: "lightblue" , alignContent:"center" ,alignItems:"center" }}>
                <p style={{ textAlign: "center", width: "90%" }}>
                  {item.announcement}
                </p>
                <IconButton aria-label="delete" >
  <DriveFileRenameOutlineIcon   fontSize="inherit" />
</IconButton>
                <IconButton aria-label="delete" >
  <DeleteIcon fontSize="inherit" color="error"/>
</IconButton>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>
            No Announcement
          </p>
        )}
      </div>

<Box>
<React.Fragment>
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title"   sx={{width:400}}>
          {"Create Announcement"}
        </DialogTitle>
        <DialogContent>
        <TextField id="standard-basic" label="Announement" variant="standard" fullWidth    onChange={(e) => setgetValue(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cencel</Button>
          <Button onClick={createAnnouncement} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
</Box>

    </div>
  );
}