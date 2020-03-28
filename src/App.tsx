import React from 'react';
import clsx from 'clsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import View1 from "./View1";
import View2 from "./View2";
import SideNavigation from "./SideNavigation";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function App() {

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerWidth = 85;

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Router>
          <CssBaseline />
          <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
          >
            <Toolbar>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                React Material multi view
              </Typography>
            </Toolbar>
          </AppBar>
          <SideNavigation open={open} handleDrawerClose={handleDrawerClose} drawerWidth={drawerWidth}/>
          <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
          >
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/view1" component={View1}/>
              <Route path="/view2" component={View2}/>
            </Switch>
          </main>
        </Router>
      </div>
  );
}

export default App;
