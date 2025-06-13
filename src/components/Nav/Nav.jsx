import React, { useContext,useEffect } from "react";
import { Language } from "../../context/languageContext";
import './Nav.css';
import Modal from '../Modal/Modal';
import Contact from '../Contact/Contact';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

function Nav() {
    const [openModal, setOpenModal] = React.useState(false);
    const { language } = useContext(Language);
    const location = useLocation();
    
    let delay = location.pathname === '/' && location.key === 'default' ? 3.5 : 0;

    const title = {
        esp: 'C0NTACT0',
        por: 'C0NTAT0',
    };

    useEffect(()=> {
        gsap.to(['.squarePortfolio','.squareContac'],{x:0,duration:0.8,ease:"power1.inOut",delay:delay});
    },[]);

    
    return (
        <div className="conteinerNav">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className="squarePortfolio square">
                    JUAN DR0UVILLE 
                </div>
            </Link>
            <div className="squareContac square" onClick={() => setOpenModal(true)}>{title[language]}</div>
                <Modal open={openModal} onClickClose={() => setOpenModal(false)}>
                    <Contact />
                </Modal>
        </div>
    );
};

export default Nav;
