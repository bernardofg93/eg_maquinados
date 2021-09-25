import React from 'react'
import MasDeImg from '../img/mas_de.png';
import IconInov from '../img/icon_ino.svg';
import IconTrab from '../img/icon_trab.svg';
import IconPrec from '../img/icon_prec.svg';

export const SectionExperience = () => {
    return (
        <div className="container__experience" id="produccion">
            <div className="grid__experience">
                <div className="bx__experience-icons">
                    <h2>Mas de 25 años de experiencia</h2>
                    <p>
                        El desarrollo constante de nuestra organización 
                        nos ha permitido la permanecia por más de dos 
                        decadas en la industria. Siempre aportando mediante 
                        los estandares de calidad requeridos.
                    </p>

                    <div className="cont__icons-exp">
                        <div className="bx__img-exp">
                            <div>
                                <img
                                    src={IconInov}
                                    alt="icon"
                                    className="icon__exp"
                                />
                                <p>Innovación  </p>
                            </div>
                        </div>

                        <div className="bx__img-exp">
                            <div>
                                <img
                                    src={IconTrab}
                                    alt="icon"
                                    className="icon__exp"
                                />
                                <p className="txt__trab">Trabajo </p>
                            </div>
                        </div>

                        <div className="bx__img-exp">
                            <div>
                                <img
                                    src={IconPrec}
                                    alt="icon"
                                    className="icon__exp"
                                />
                                <p>Precisión</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bx__experience">
                    <img
                        src={MasDeImg}
                        alt="masde"
                        className="mas__img"
                    />
                </div>
            </div>
        </div>
    )
}
