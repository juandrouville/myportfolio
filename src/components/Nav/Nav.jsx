import React, { useContext } from "react";
import { Language } from "../../context/languageContext";
import './Nav.css';
import Modal from '../Modal/Modal';
import Contact from '../Contact/Contact';
import { Link } from "react-router-dom";

function Nav() {
    const [openModal, setOpenModal] = React.useState(false);
    const { language } = useContext(Language);
    const title = {
        esp: 'C0NTACT0',
        por: 'C0NTAT0',
    };

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



