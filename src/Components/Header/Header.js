import React from 'react';
import { Container } from 'react-bootstrap';
import logo from './../../assets/images/logo.png';
import login from './../../assets/images/log.png';
import g from './../../assets/images/g.png';
import f from './../../assets/images/f.png';
import { FaSearch } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';


const Header = ({ props }) => {
    const { show2, setShow2, show, setShow } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className='d-none d-xl-block'>
            <div className="d-flex justify-content-between align-items-center py-3">
                <div className="flex-shrink-0">
                    <Image src={logo} alt="bannerlogo" className="img-fluid" />
                </div>
                <div className="search">
                    <FaSearch />
                    <input className='w-100 ms-2 px-3 bg-transparent border-0 form-control' type="text" placeholder='Search for your favorite groups in ATG' />
                </div>
                <>
                    <p className='account m-0' variant="primary" onClick={handleShow}>Create account. <span>It s free!</span></p>
                </>
            </div>


            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <p className='head'>Let s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                <Modal.Body className='p-5'>
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>Create Account</h3>
                        <p>Already have an account? <span className='signIn' onClick={() => { setShow(false); setShow2(true) }}>Sign In</span></p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="row g-0">
                                    <div className="col-6">
                                        <input type="text" placeholder='First Name' />
                                    </div>
                                    <div className="col-6">
                                        <input type="text" placeholder='Last Name' />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder='Email' />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" placeholder='Password' />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" placeholder='Confirm Password' />
                                    </div>
                                </div>
                                <button className='acc-button'>Create Account</button>
                            </form>
                            <button className="sos-button"><Image src={f} alt="f" /> Sign up with Facebook</button>
                            <button className="sos-button"><Image src={g} alt="m" /> Sign up with Google</button>
                        </div>
                        <div className="col-md-6">
                            <Image src={login} alt="imas" className="img-fluid" />

                            <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={show2} size="lg" onHide={handleClose}>
                <Modal.Header >
                    <div className="d-flex justify-content-end w-100">

                        <span className='signIn' onClick={() => { setShow2(false) }}>X</span>
                    </div>
                </Modal.Header>
                <p className='head'>Let s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                <Modal.Body className='p-5'>
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>Create Account</h3>
                        <p>Don t have an account? <span className='signIn' onClick={() => { setShow2(false); setShow(true) }}>Create account</span></p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="row g-0">
                                    <div className="col-12">
                                        <input type="text" placeholder='Email' />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" placeholder='Password' />
                                    </div>
                                </div>
                                <button className='acc-button'>Sign in</button>
                            </form>
                            <button className="sos-button"><Image src={f} alt="f" /> Sign up with Facebook</button>
                            <button className="sos-button"><Image src={g} alt="m" /> Sign up with Google</button>
                            <button className="sos-button">Forgot Password</button>
                        </div>
                        <div className="col-md-6">
                            <Image src={login} alt="imas" className="img-fluid" />

                            <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Container >
    );
};

export default Header;