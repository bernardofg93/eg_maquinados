import { makeStyles, Drawer, Divider } from '@material-ui/core'
import React from 'react'
import { DropMenu } from './DropMenu'
import black from '@material-ui/core/colors/grey';

const primary = black[900]; // #f44336

const styles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        backgroundColor: primary
    },
    toolbar: theme.mixins.toolbar,
    line: {
        backgroundColor:"#424242"
    }
}))

export const BoxDrawer = (props) => {

    const classes = styles()

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >

            <div className={classes.toolbar} />

            <Divider 
                 className={classes.line}
            />
            <DropMenu />
        </Drawer>
    )
}
