import React, { useContext,useEffect } from "react";
import { Language } from "../../context/languageContext";
import './Nav.css';
import Modal from '../Modal/Modal';
import Contact from '../Contact/Contact';
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import { easing } from "animejs";

function Nav() {
    const [openModal, setOpenModal] = React.useState(false);
    const { language } = useContext(Language);
    const title = {
        esp: 'C0NTACT0',
        por: 'C0NTAT0',
    };

    useEffect(()=> {
        anime({
            targets:".squarePortfolio",
            translateX:[-250,0],
            easing: 'easeOutInQuad',
            duration:500,
        })
        anime({
            targets:".squareContac",
            translateX:[0,250],
            direction: 'reverse',
            easing: 'easeOutInQuad',
            duration:500,
        })
    },[]);
    
    return (
        <div className="conteiner">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className="squarePortfolio">
                    P0RTF0LI0
                </div>
            </Link>
            <button  className="squareContac" onClick={() => setOpenModal(true)}>{title[language]}</button>
                <Modal open={openModal} onClickClose={() => setOpenModal(false)}>
                    <Contact />
                </Modal>
        </div>
    );
};

export default Nav;



