import React, { useState } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { FaCaretDown, FaMapMarkerAlt, FaPen, FaExclamationCircle } from 'react-icons/fa';
import addp from './../../assets/images/addg.png';
import im1 from './../../assets/images/1im3.png';
import im2 from './../../assets/images/2im1.png';
import im3 from './../../assets/images/3im.png';
import av1 from './../../assets/images/av1.png';
import av2 from './../../assets/images/av2.png';
import av3 from './../../assets/images/av3.png';
import av4 from './../../assets/images/av4.png';
import PostCard from './PostCard/PostCard';
import Image from 'next/image';


const blogData = [
    {
        image: im1,
        type: "✍️ Article",
        heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
        details: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        writer: "Sarthak Kamra",
        avatar: av1,
        view: "1.4"
    },
    {
        image: im2,
        type: "🔬️ Education",
        heading: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        details: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        writer: "Sarah West",
        avatar: av2,
        view: "1.4"
    },
    {
        image: im3,
        type: "🗓️ Meetup",
        heading: "Finance & Investment Elite Social Mixer @Lujiazui",
        writer: "Ronal Jones",
        avatar: av3,
        view: "1.4",
        date: "Fri, 12 Oct, 2018",
        location: "Ahmedabad, India",
        website: "https://rajib-sarker-portfolio.netlify.app/"
    },
    {
        type: "💼️ Job",
        heading: "Software Developer",
        writer: "Joseph Gray",
        avatar: av4,
        view: "1.4",
        company: "Innovaccer Analytics Private Ltd.",
        location: "Nodia, India",
        job: "https://rajib-sarker-portfolio.netlify.app/"
    },
]


const BlogPost = () => {
    const [data, setdata] = useState(blogData);

    return (
        <div className='mt-5 blog'>
            <Container>
                <div className="d-flex d-block d-xl-none align-items-center justify-content-between">
                    <h2>Posts(363)</h2>
                    <Dropdown >
                        <Dropdown.Toggle style={{ background: '#F1F3F5 !important' }} variant="success" id="dropdown-basic">
                            Filter all
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Filter opr</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Filter opt</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Filter opt</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
                <div className="d-flex d-none d-xl-flex align-items-center justify-content-between">
                    <ul className='d-flex ps-0'>
                        <li><a className='active' href="#">All Posts (32)</a></li>
                        <li><a href="#">Article </a></li>
                        <li><a href="#">Event </a></li>
                        <li><a href="#">Education </a></li>
                        <li><a href="#">Job </a></li>
                    </ul>
                    <div>
                        <button className='write-btn'>Write a Post <FaCaretDown /></button>
                        <button className='join-btn'>
                            <Image src={addp} alt="prople" className="img-fluid" />
                            Join Group</button>
                    </div>
                </div>
                <hr className='mb-4 mt-1' />

                <div className="d-flex contents justify-content-xl-between justify-content-center">
                    <div className="cards">
                        {
                            data?.map((item, i) => <PostCard key={i} data={item} />)
                        }
                    </div>
                    <div className="search-opt">
                        <div className="d-flex align-items-center justify-content-between">
                            <p className='m-0'><FaMapMarkerAlt /> Nodia, India</p>
                            <button className='btn'><FaPen /></button>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div className="flex-shrink-0 me-2">
                                <FaExclamationCircle />
                            </div>
                            <p className='not'>Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>
                </div>
            </Container >

            <button className='btn position-fixed end-0 bottom-0 m-3 bg-warning border d-block d-xl-none'><FaPen /></button>
        </div >
    );
};

export default BlogPost;