import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Stack, Button, IconButton } from '@mui/material';
import logo from '../Images/Logo.png';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
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
import DynamicNavBar from '../../Component/DynamicNavBar';

const StdDash = () => {
    const [open, setOpen] = React.useState(false);
    const navigation = useNavigate()


    return (
        <div>
        <DynamicNavBar side="Icon" StudentShow={"Student"}/>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '120px', textDecoration: 'underline' }}>
                <div>
                    <Typography variant="h4" component="div">
                        Welcome to Student Quiz Portal
                    </Typography>
                </div>
            </div>

            <div >
                <Typography variant="h5" component="div" style={{ marginTop: '5%', textDecoration: 'underline', padding: '6px' }}>
                    Hi, XYZ
                </Typography>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2%' }}>
                <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }} onClick={()=>{navigation("/Quiz")}}>
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography fontWeight="md" textColor="success.plainColor">
                            Python
                        </Typography>
                        <Typography level="body-sm">Quiz 01</Typography>
                    </CardContent>
                    <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                            px: 0.2,
                            writingMode: 'vertical-rl',
                            justifyContent: 'center',
                            fontSize: 'xs',
                            fontWeight: 'xl',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderLeft: '1px solid',
                            borderColor: 'divider',
                        }}>
                        Start
                    </CardOverflow>
                </Card>

                <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }} style={{ marginLeft: '3%' }}>
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography fontWeight="md" textColor="success.plainColor">
                            Python
                        </Typography>
                        <Typography level="body-sm">Quiz 01</Typography>
                    </CardContent>
                    <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                            px: 0.2,
                            writingMode: 'vertical-rl',
                            justifyContent: 'center',
                            fontSize: 'xs',
                            fontWeight: 'xl',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderLeft: '1px solid',
                            borderColor: 'divider',
                        }}>
                        Start
                    </CardOverflow>
                </Card>

                <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }} style={{ marginLeft: '3%' }}>
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography fontWeight="md" textColor="success.plainColor">
                            Python
                        </Typography>
                        <Typography level="body-sm">Quiz 01</Typography>
                    </CardContent>
                    <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                            px: 0.2,
                            writingMode: 'vertical-rl',
                            justifyContent: 'center',
                            fontSize: 'xs',
                            fontWeight: 'xl',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderLeft: '1px solid',
                            borderColor: 'divider',
                        }}>
                        Start
                    </CardOverflow>
                </Card>

            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2%' }}>
                <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography fontWeight="md" textColor="success.plainColor">
                            Python
                        </Typography>
                        <Typography level="body-sm">Quiz 01</Typography>
                    </CardContent>
                    <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                            px: 0.2,
                            writingMode: 'vertical-rl',
                            justifyContent: 'center',
                            fontSize: 'xs',
                            fontWeight: 'xl',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderLeft: '1px solid',
                            borderColor: 'divider',
                        }}>
                        Start
                    </CardOverflow>
                </Card>

                <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }} style={{ marginLeft: '3%' }}>
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography fontWeight="md" textColor="success.plainColor">
                            Python
                        </Typography>
                        <Typography level="body-sm">Quiz 01</Typography>
                    </CardContent>
                    <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                            px: 0.2,
                            writingMode: 'vertical-rl',
                            justifyContent: 'center',
                            fontSize: 'xs',
                            fontWeight: 'xl',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderLeft: '1px solid',
                            borderColor: 'divider',
                        }}>
                        Start
                    </CardOverflow>
                </Card>

                <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }} style={{ marginLeft: '3%' }}>
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography fontWeight="md" textColor="success.plainColor">
                            Python
                        </Typography>
                        <Typography level="body-sm">Quiz 01</Typography>
                    </CardContent>
                    <CardOverflow
                        variant="soft"
                        color="primary"
                        sx={{
                            px: 0.2,
                            writingMode: 'vertical-rl',
                            justifyContent: 'center',
                            fontSize: 'xs',
                            fontWeight: 'xl',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            borderLeft: '1px solid',
                            borderColor: 'divider',
                        }}>
                        Start
                    </CardOverflow>
                </Card>

            </div>



        </div>
    )
}

export default StdDash
