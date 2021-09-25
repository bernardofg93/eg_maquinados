import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
        input: {
            color: 'primary',
        }
    },
    btnSubmit: {
        backgroundColor: '#100056'
    }
}));

export const SectionContact = () => {

    const classes = useStyles();

    return (
        <section className="main__contact" id="informacion">
            <div className="container__grid-contact">

                <div className="container__ubicacion">
                    <div className="txt__ubicacion">
                        <div className="bx__ubicacion">
                            <h2>Datos de Contacto</h2>
                            <p>Ubicación</p>
                            <p>Privada Narcisos 2247</p>
                            <p>Lomas Terrabella 22203</p>
                            <p>Tel Oficina: (664) 880-3571</p>
                            <p>Cel: (663) 211-5423</p>
                        </div>

                        <div className="bx__ubicacion">
                            <p>Cel: (663) 211-5423 </p>
                            <p>Edgar Garduño</p>
                            <p>Privada Narcisos 2247</p>
                            <p>Lomas Terrabella 22203</p>
                            <p>Email: edgar.garduno@</p>
                        </div>

                        <div className="bx__ubicacion">
                            <p>Cel: (664) 669-4274</p>
                            <p>Emilio Garduño</p>
                            <p>Privada Narcisos 2247</p>
                            <p>Lomas Terrabella 22203</p>
                            <p>Email: emilio.garduno@</p>
                        </div>
                    </div>
                </div>

                <div className="container__form-text" id="contacto">
                    <div className="container__form-size">
                        <div className="txt__form">
                            <h2>Contacto</h2>
                        </div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                required
                                label="Nombre"
                                variant="filled"
                                className="input__text"
                                size="small"
                                id="filled-size-small"
                            />
                            <TextField
                                required
                                size="small"
                                id="filled-size-small"
                                label="Correo"
                                variant="filled"
                                className="input__text"
                            />
                            <TextField
                                required
                                size="small"
                                id="filled-size-small"
                                label="Teléfono"
                                variant="filled"
                                className="input__text"
                            />
                            <TextField
                                required
                                size="small"
                                id="filled-size-small"
                                label="Asunto"
                                variant="filled"
                                className="input__text"
                            />
                            <textarea
                                aria-label="maximum height"
                                placeholder="Mensaje"
                                defaultValue=""
                                className="input__text-area"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                className="submit__btn"
                            >
                                Enviar
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
