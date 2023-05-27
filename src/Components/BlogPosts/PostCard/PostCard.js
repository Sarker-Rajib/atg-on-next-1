import React from 'react';
import sharebt from './../../../assets/images/share.png';
import eye from './../../../assets/images/eye.png';
import dot from './../../../assets/images/dot.png';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import Image from 'next/image';


const PostCard = ({ data }) => {
    const {
        image,
        type,
        heading,
        details,
        writer,
        avatar,
        view,
        date,
        location,
        website,
        job,
        company
    } = data;

    return (
        <div className='card-body'>
            <div className="image">
                {
                    image && <Image src={image} alt="images" className="img-fluid" />
                }
            </div>
            <div className="text">
                <p className='type m-0'>{type}</p>
                <div className="d-flex justify-content-between">
                    <h2 className='heading'>{heading}</h2>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <Image src={dot} alt="sd" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Oops !!</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {
                    details && <p className="details m-0">{details}</p>
                }
                <div className="d-flex">
                    <div>
                        {date && <p className="date m-0"><FaCalendarAlt className='me-2' /> {date}</p>}
                        {company && <p className="company"><FaBriefcase className='me-2' /> {company}</p>}
                    </div>
                    <div>
                        {location && <p className="location"><FaMapMarkerAlt className='me-1' /> {location}</p>}
                    </div>
                </div>
                <div>
                    {
                        website && <a className='web-btn red w-100' href={website}>Visit Website</a>
                    }
                </div>
                {
                    job && <a className='web-btn green w-100' href={job}>Apply on Timesjobs</a>
                }
                <div className="d-flex justify-content-between">
                    <div className='d-flex align-items-center'>
                        <div>
                            {
                                avatar && <Image src={avatar} alt="avatar" className='me-2' />
                            }
                        </div>
                        <div>
                            {
                                writer && <p className='writter m-0'>{writer}</p>
                            }
                            {
                                <p className='view d-block d-lg-none'><Image className='me-2' src={eye} alt="eye" />{view}k views</p>
                            }
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='view d-none d-lg-block'><Image className='me-2' src={eye} alt="eye" />{view}k views</p>
                        <a href="#" className="sharebtn"><Image className='flex-shrink-0' src={sharebt} alt="s" /><span className='d-inline-block d-lg-none ms-2 text-dark'>Share</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;