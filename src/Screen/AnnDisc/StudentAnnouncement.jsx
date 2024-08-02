import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material'
import "../../App.css"
import React, { useEffect, useState } from 'react';
import AnnPic from '../Images/AnnPic.png';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DynamicNavBar from '../../Component/DynamicNavBar';

export default function StudentAnnouncement() {

  const navigation = useNavigate()

  const [getAnnouncementValue, setgetAnnouncementValue] = useState([]);
 
  const getAnnouncement = () => {
    const announcements = [
      { _id: 1, announcement: "Yeh hai announcement 1", Date:"2/2/2024" },
      { _id: 2, announcement: "Yeh hai announcement 2" ,Date:"3/4/2024"},
    ];
    setgetAnnouncementValue(announcements);
  };

 



  useEffect(() => {
    getAnnouncement();
  }, []);

  return (

    <div>
      <div>
    <DynamicNavBar side={"Icon"}  StudentShow={"Student"}/>
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
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button  variant="solid" onClick={() => setOpen(true)} sx={{ height: '30px', borderRadius: '15px', backgroundColor: '#87D3C6', border: 'none' ,color:"white"}}>Announce</Button>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        {getAnnouncementValue ? (
          getAnnouncementValue.map((item, index) => {
            return (
              <div style={{ display: "flex", marginBottom: 10, marginTop: 30, backgroundColor: "lightblue" , justifyContent:"space-around" }}>
                <p style={{ }}>
                  {
                  item.announcement
                  }
                </p>

                <p>{item.Date}</p>

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

</Box>

    </div>
  );
}