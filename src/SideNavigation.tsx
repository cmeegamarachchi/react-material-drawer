import React from 'react';
import Divider from "@material-ui/core/Divider";
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";


interface IProps {
    open: boolean,
    handleDrawerClose: () => void,
    drawerWidth: number
}

const SideNavigation = ({open, handleDrawerClose, drawerWidth}: IProps) => {

    const useStyles = makeStyles(theme => ({
        drawer: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 2),
            justifyContent: 'flex-center',
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 2),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-center',
            width: drawerWidth
        },
        link: {
            textDecoration: 'none',
            color: 'unset'
        }
    }));

    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider />
            <div className={classes.drawer}>
                <IconButton>
                    <Link className={classes.link} to="/"><HomeIcon/></Link>
                </IconButton>
            </div>
            <div className={classes.drawer}>
                <IconButton>
                    <Link className={classes.link} to="/view1"><DynamicFeedIcon/></Link>
                </IconButton>
            </div>
            <div className={classes.drawer}>
                <IconButton>
                    <Link className={classes.link} to="/view2"><FingerprintIcon/></Link>
                </IconButton>
            </div>
        </Drawer>
    );
};

export default SideNavigation;