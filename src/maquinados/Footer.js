import React from 'react';
import Logo from '../img/logo.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        input: {
            color: 'primary',

        }
    },
}));

export const Footer = () => {

    const classes = useStyles();

    return (
        <div className="footer">
            <div className="grid__footer">
                <div className="bx__footer-links">
                    <ul>
                        <li>Inicio</li>
                        <li>Nosotros</li>
                        <li>Servicios</li>
                        <li>Produccion</li>
                        <li>Informacion</li>
                        <li>Contacto</li>
                    </ul>
                    <ul>
                        <li>0102 Direccion, Calle</li>
                        <li>Correo:</li>
                        <li>egmail@gmail.com</li>
                    </ul>
                </div>
                <div className="bx__footer-subscribe">
                    <div className="subcribe__bx">
                        <div className="align__bx-footer">
                            <div>
                                <img
                                    src={Logo}
                                    className="logoFooter"
                                    alt="eg-maquinados"
                                />
                            </div>

                            <div>
                                <p className="news">Newsletter</p>
                                <p className="txt-subscribe">Subscribite para recibir
                                    Información de nuestros productos</p>

                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField
                                        required
                                        label="Dirección email"
                                        variant="filled"
                                        className="input__text"
                                        size="small"
                                        id="filled-size-small"
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        className={classes.btnSubmit}
                                    >
                                        Enviar
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
