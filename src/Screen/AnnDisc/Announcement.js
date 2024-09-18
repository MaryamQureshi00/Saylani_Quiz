import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Slide } from '@mui/material'
import "../../App.css"
import React, { useEffect, useState } from 'react';
import AnnPic from '../Images/AnnPic.png';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DynamicNavBar from '../../Component/DynamicNavBar';
import axios from 'axios';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Announcement() {

  const navigation = useNavigate()

  const [getAnnouncementValue, setgetAnnouncementValue] = useState([]);
  const [showcreate, setshowcreate] = useState(false);
  const [getValue, setgetValue] = useState("");
  const [isEdit, setisEdit] = useState(false);
  const [getvaueid, setgetvaueid] = useState("");

const [buttonDis,setbuttonDis] = useState(false)
const [deleteOpt,setDeleteOpt]= useState(false)

  const getAnnouncement = () => {
   
    axios.get(`https://saylani-quiz-backend.vercel.app/api/announcement/getAnnouncement`)  
    .then(function (response) {
        console.log(response.data.allAnnouncements);
        
        setgetAnnouncementValue(response.data.allAnnouncements);
        
    })
    .catch(function (error) {
        console.log(error);
        
        
    });
  
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

 const  deletehandleClose =()=>{
  setDeleteOpt(false)
  
 }


 const deletehandleOpen=(id)=>{

  setDeleteOpt(true)
  setgetvaueid(id)

 }
  const handleClose = () => {
    setOpen(false);
  };

  const updateAnnouncement = (item) => {
    console.log(item);
    setgetValue(item.announcement);
    setgetvaueid(item._id);
    setOpen(true)
    setshowcreate(true);
    setisEdit(true);
  };

  const createAnnouncement = () => {
    setbuttonDis(true)
    if (isEdit) {
      console.log('Asd')

      axios.post(`https://saylani-quiz-backend.vercel.app/api/announcement/editAnnouncement?id=${getvaueid}`,{
        announcement:getValue
      })  
      .then(function (response) {
          console.log(response.data.allAnnouncements);
          if(response.data.message == "Announcement updated successfully"){
            setOpen(false);
            getAnnouncement()
          
            setbuttonDis(false)
          }
          // setgetAnnouncementValue(response.data.message);
          
      })
      .catch(function (error) {
          console.log(error);
          setOpen(false);
          setbuttonDis(false)
          
      });

      setshowcreate(false);
      setisEdit(false);
    } else {
      // const newAnnouncement = { _id: getAnnouncementValue.length + 1, announcement: getValue };
      // setgetAnnouncementValue([...getAnnouncementValue, newAnnouncement]);

console.log(getValue)
      axios.post(`https://saylani-quiz-backend.vercel.app/api/announcement/postAnnouncement`,{
        announcement:getValue
      })  
      .then(function (response) {
          console.log(response.data.allAnnouncements);
          if(response.data.message == "Announcement created successfully"){
            setOpen(false);
            getAnnouncement()
            setbuttonDis(false)
          }
          // setgetAnnouncementValue(response.data.message);
          
      })
      .catch(function (error) {
          console.log(error);
          setOpen(false);
          setbuttonDis(false)
          
      });



      setshowcreate(false);
    }
  };

  const deleteAnnouncement = () => {
    setbuttonDis(true)
    axios.delete(`https://saylani-quiz-backend.vercel.app/api/announcement/deleteAnnouncement?id=${getvaueid}`)  
    .then(function (response) {
        console.log(response.data.allAnnouncements);
        if(response.data.message == "Announcement deleted successfully"){
          getAnnouncement()
          setDeleteOpt(false);
          setbuttonDis(false)
        }
        // setgetAnnouncementValue(response.data.message);
        
    })
    .catch(function (error) {
        console.log(error);
        setDeleteOpt(false);
        setbuttonDis(false)
        
    });



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
              <div style={{ display: "flex", marginBottom: 10, marginTop: 30, backgroundColor: "lightblue" , alignContent:"center" ,alignItems:"center", width: "100%" }}>
                <p style={{ textAlign: "center", width: "85%" }}>
                  {item.announcement}
                </p>
                <Box sx={{display:"flex"}} pr={5}> 


                <IconButton aria-label="delete" >
  <DriveFileRenameOutlineIcon   fontSize="inherit" onClick={()=>updateAnnouncement(item)}/>
</IconButton>
                <IconButton aria-label="delete" onClick={()=>deletehandleOpen(item._id)} >
  <DeleteIcon fontSize="inherit" color="error"/>
</IconButton>
  
  </Box>
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
        <TextField id="standard-basic" label="Announement" variant="standard" fullWidth  value={getValue}  onChange={(e) => setgetValue(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cencel</Button>
          <Button onClick={createAnnouncement} autoFocus  disabled={buttonDis}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
</Box>


<React.Fragment>
   
      <Dialog
        open={deleteOpt}
        TransitionComponent={Transition}
        keepMounted
        onClose={deletehandleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Once it is deleted, it cannot be restored.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deletehandleClose}>Disagree</Button>
          <Button onClick={deleteAnnouncement}  disabled={buttonDis}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </div>
  );
}