import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import React from 'react';
import { Link } from 'react-scroll'

const useStyles = makeStyles(theme => ({
    list: {
        backgroundColor: 'theme.palette.background.paper'
    },
    links: {
        color: '#fff'
    }
}))

export const DropMenu = () => {
    const classes = useStyles();

    return (
        <div>
            <List className={classes.list}>
                <Link className={classes.links}>
                    <ListItem button>
                        <ListItemIcon>
                            <ArrowRightIcon
                                className={classes.links}
                            />
                        </ListItemIcon>

                        <ListItemText primary='Inicio' />

                    </ListItem>
                </Link>

                <Link
                    className={classes.links}
                    to="nosotros"
                    spy={true}
                    smooth={true}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ArrowRightIcon
                                className={classes.links}
                            />
                        </ListItemIcon>

                        <ListItemText primary='Nosotros' />

                    </ListItem>
                </Link>

                <Link
                    className={classes.links}
                    to="servicios"
                    spy={true}
                    smooth={true}

                >
                    <ListItem button>
                        <ListItemIcon>
                            <ArrowRightIcon
                                className={classes.links}
                            />
                        </ListItemIcon>

                        <ListItemText primary='Servicios' />

                    </ListItem>
                </Link>

                <Link
                    className={classes.links}
                    to="produccion"
                    spy={true}
                    smooth={true}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ArrowRightIcon
                                className={classes.links}
                            />
                        </ListItemIcon>

                        <ListItemText primary='Producción' />

                    </ListItem>
                </Link>

                <Link
                    className={classes.links}
                    to="informacion"
                    spy={true}
                    smooth={true}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ArrowRightIcon
                                className={classes.links}
                            />
                        </ListItemIcon>

                        <ListItemText primary='Información' />

                    </ListItem>
                </Link>

                <Link
                    className={classes.links}
                    to="contacto"
                    spy={true}
                    smooth={true}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ArrowRightIcon
                                className={classes.links}
                            />
                        </ListItemIcon>

                        <ListItemText primary='Contacto' />

                    </ListItem>
                </Link>

                <Divider
                />
            </List>
        </div>
    )
}
