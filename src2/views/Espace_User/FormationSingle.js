import React, { useEffect }  from 'react'
import './LatestCours.css'
import './FormationSingle.css'
import './styleAll.css'
import NavBar from './NavBar'
import Footer from './Footer'


const FormationSingle = () => {

  return (
                 
            <div>
                <NavBar/> 
                {/* EVENT SINGLE
            ================================================== */}
                <div className="sk-thumbnail img-ratio-7">
                <img src="../assets/img/covers/cover-22.jpg" alt="..." className="img-fluid" />
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-xl-10 mx-xl-auto mt-md-n10 mt-xl-n13 mb-8">
                    <div className="rounded bg-white p-5 p-lg-8">
                        <ul className="nav mx-n3 d-block d-md-flex justify-content-center mb-5 align-items-center">
                        <li className="nav-item px-3 mb-3 mb-md-0">
                            <span className="badge badge-lg badge-orange badge-pill px-5">
                            <span className="text-white fw-normal font-size-sm">06 Aprıl</span>
                            </span>
                        </li>
                        <li className="nav-item px-3 mb-3 mb-md-0">
                            <div className="d-flex align-items-center">
                            <div className="me-2 d-flex text-secondary icon-uxs">
                                {/* Icon */}
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="currentColor" />
                                <path d="M7.99967 2.66663C7.63167 2.66663 7.33301 2.96529 7.33301 3.33329V7.99996C7.33301 8.36796 7.63167 8.66663 7.99967 8.66663H11.333C11.701 8.66663 11.9997 8.36796 11.9997 7.99996C11.9997 7.63196 11.701 7.33329 11.333 7.33329H8.66634V3.33329C8.66634 2.96529 8.36768 2.66663 7.99967 2.66663Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="font-size-sm">8:00 am - 5:00 pm</div>
                            </div>
                        </li>
                        <li className="nav-item px-3 mb-3 mb-md-0">
                            <div className="d-flex align-items-center">
                            <div className="me-2 d-flex text-secondary icon-uxs">
                                {/* Icon */}
                                <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9748 3.12964C13.6007 1.14086 11.4229 0 9.0002 0C6.57754 0 4.39972 1.14086 3.02557 3.12964C1.65816 5.10838 1.34243 7.61351 2.17929 9.82677C2.40313 10.4312 2.75894 11.0184 3.23433 11.5687L8.52105 17.7784C8.64062 17.919 8.8158 18 9.0002 18C9.18459 18 9.35978 17.919 9.47934 17.7784L14.7646 11.5703C15.2421 11.0169 15.5974 10.4303 15.8194 9.83078C16.658 7.61351 16.3422 5.10838 14.9748 3.12964ZM14.6408 9.38999C14.4697 9.85257 14.1902 10.3099 13.8107 10.7498C13.8096 10.7509 13.8086 10.7519 13.8077 10.7532L9.0002 16.3999L4.1897 10.7497C3.8104 10.3101 3.53094 9.85282 3.35808 9.38581C2.66599 7.55539 2.92864 5.48413 4.06088 3.84546C5.19668 2.20155 6.9971 1.25873 9.0002 1.25873C11.0033 1.25873 12.8035 2.20152 13.9393 3.84546C15.0718 5.48413 15.3346 7.55539 14.6408 9.38999Z" fill="currentColor" />
                                <path d="M9.00019 3.73438C7.0569 3.73438 5.47571 5.31535 5.47571 7.25886C5.47571 9.20237 7.05668 10.7833 9.00019 10.7833C10.9437 10.7833 12.5247 9.20237 12.5247 7.25886C12.5247 5.31556 10.9435 3.73438 9.00019 3.73438ZM9.00019 9.52457C7.75088 9.52457 6.73444 8.50814 6.73444 7.25882C6.73444 6.00951 7.75088 4.99307 9.00019 4.99307C10.2495 4.99307 11.2659 6.00951 11.2659 7.25882C11.2659 8.50814 10.2495 9.52457 9.00019 9.52457Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="font-size-sm">London, UK</div>
                            </div>
                        </li>
                        </ul>
                        <h1 className="text-center mb-5">The Best UX and Design Events in 2020</h1>
                        <div className="row w-xl-65 mx-xl-auto text-center">
                        <div className="col-6 col-md-3 mb-6 mb-md-0">
                            <div className="h1 text-blue mb-2">20</div>
                            <p className="h5 mb-0">DAYS</p>
                        </div>
                        <div className="col-6 col-md-3 mb-6 mb-md-0">
                            <div className="h1 text-blue mb-2">17</div>
                            <p className="h5 mb-0">HOURS</p>
                        </div>
                        <div className="col-6 col-md-3 mb-6 mb-md-0">
                            <div className="h1 text-blue mb-2">36</div>
                            <p className="h5 mb-0">MINUTES</p>
                        </div>
                        <div className="col-6 col-md-3 mb-6 mb-md-0">
                            <div className="h1 text-blue mb-2">40</div>
                            <p className="h5 mb-0">SECONDS</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row mb-11">
                    <div className="col-lg-8 mb-6 mb-lg-0">
                    <h3 className>Event Description</h3>
                    <p className="mb-6 line-height-md">Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills.</p>
                    <p className="mb-6 line-height-md">Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. It's used by everyone from entrepreneurs and start-ups to Apple, Airbnb, Facebook, etc.</p>
                    <p className="collapse mb-6 line-height-md" id="readcollapseExample">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente  I will help you learn and master Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. It's used by everyone from entrepreneurs ea proident.</p>
                    <a className="text-teal read-more h6 d-inline-block mb-8" data-bs-toggle="collapse" href="#readcollapseExample" role="button" aria-expanded="false" aria-controls="readcollapseExample">
                        <span className="d-inline-flex align-items-center more">
                        Read More
                        <span className="d-flex align-items-center justify-content-center bg-teal rounded-circle ms-2 p-2 w-26p">
                            <i className="fas fa-plus font-size-10 text-white" />
                        </span>
                        </span>
                        <span className="d-inline-flex align-items-center less">
                        Read Less
                        <span className="d-flex align-items-center justify-content-center bg-teal rounded-circle ms-2 p-2 w-26p">
                            <i className="fas fa-minus font-size-10 text-white" />
                        </span>
                        </span>
                    </a>
                    <h3 className="mb-5">What you'll learn</h3>
                    <div className="row row-cols-lg-2 mb-8">
                        <div className="col-md">
                        <ul className="list-style-v1 list-unstyled">
                            <li>Become a UI/UX designer.</li>
                            <li>You will be able to start earning money skills.</li>
                            <li>Build a UI project from beginning to end.</li>
                            <li>Work with colors &amp; fonts.</li>
                            <li>You will create your own UI Kit.</li>
                        </ul>
                        </div>
                        <div className="col-md">
                        <ul className="list-style-v1 list-unstyled ms-xl-6">
                            <li>Build &amp; test a complete mobile app.</li>
                            <li>Learn to design mobile apps &amp; websites.</li>
                            <li>Design 3 different logos.</li>
                            <li>Create low-fidelity wireframe.</li>
                            <li>Downloadable exercise files.</li>
                        </ul>
                        </div>
                    </div>
                    <h3 className="mb-6">Comment</h3>
                    <ul className="list-unstyled pt-2">
                        <li className="media d-flex">
                        <div className="avatar avatar-xxl me-3 me-md-6 flex-shrink-0">
                            <img src="../assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
                        </div>
                        <div className="media-body flex-grow-1">
                            <div className="d-md-flex align-items-center mb-5">
                            <div className="me-auto mb-4 mb-md-0">
                                <h5 className="mb-0">Oscar Cafeo</h5>
                                <p className="font-size-sm font-italic">Beautiful courses</p>
                            </div>
                            <div className="star-rating">
                                <div className="rating" style={{width: '100%'}} />
                            </div>
                            </div>
                            <p className="mb-6 line-height-md">This course was well organized and covered a lot more details than any other Figma courses. I really enjoy it. One suggestion is that it can be much better if we could complete the prototype together. Since we created 24 frames, I really want to test it on Figma mirror to see all the connections. Could you please let me take a look at the complete prototype?</p>
                        </div>
                        </li>
                        <li className="media d-flex">
                        <div className="avatar avatar-xxl me-3 me-md-6 flex-shrink-0">
                            <img src="../assets/img/avatars/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
                        </div>
                        <div className="media-body flex-grow-1">
                            <div className="d-md-flex align-items-center mb-5">
                            <div className="me-auto mb-4 mb-md-0">
                                <h5 className="mb-0">Alex Morgan</h5>
                                <p className="font-size-sm font-italic">Beautiful courses</p>
                            </div>
                            <div className="star-rating">
                                <div className="rating" style={{width: '100%'}} />
                            </div>
                            </div>
                            <p className="mb-6 line-height-md">This course was well organized and covered a lot more details than any other Figma courses. I really enjoy it. One suggestion is that it can be much better if we could complete the prototype together. Since we created 24 frames, I really want to test it on Figma mirror to see all the connections. Could you please let me take a look at the complete prototype?</p>
                        </div>
                        </li>
                    </ul>
                    <div className="border shadow rounded p-6 p-md-9">
                        <h3 className="mb-2">Add Reviews &amp; Rate</h3>
                        <div className>What is it like to Course?</div>
                        <form>
                        <div className="clearfix">
                            <fieldset className="slect-rating mb-3">
                            <input type="radio" id="star5" name="rating" defaultValue={5} />
                            <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
                            <input type="radio" id="star4half" name="rating" defaultValue="4 and a half" />
                            <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars" />
                            <input type="radio" id="star4" name="rating" defaultValue={4} />
                            <label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
                            <input type="radio" id="star3half" name="rating" defaultValue="3 and a half" />
                            <label className="half" htmlFor="star3half" title="Meh - 3.5 stars" />
                            <input type="radio" id="star3" name="rating" defaultValue={3} />
                            <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                            <input type="radio" id="star2half" name="rating" defaultValue="2 and a half" />
                            <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars" />
                            <input type="radio" id="star2" name="rating" defaultValue={2} />
                            <label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
                            <input type="radio" id="star1half" name="rating" defaultValue="1 and a half" />
                            <label className="half" htmlFor="star1half" title="Meh - 1.5 stars" />
                            <input type="radio" id="star1" name="rating" defaultValue={1} />
                            <label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
                            <input type="radio" id="starhalf" name="rating" defaultValue="half" />
                            <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars" />
                            </fieldset>
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="exampleInputTitle1">Review Title</label>
                            <input type="text" className="form-control placeholder-1" id="exampleInputTitle1" placeholder="Courses" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="exampleFormControlTextarea1">Review Content</label>
                            <textarea className="form-control placeholder-1" id="exampleFormControlTextarea1" rows={6} placeholder="Content" defaultValue={""} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mw-md-300p">SUBMIT REVIEW</button>
                        </form>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    {/* SIDEBAR
                        ================================================== */}
                    <div className="rounded border p-2 shadow mb-6">
                        <div className="pt-5 pb-4 px-5 px-lg-3 px-xl-5">
                        <div className="d-flex align-items-center mb-2">
                            <ins className="h2 mb-0">$89.99</ins>
                            <del className="ms-3">339.99</del>
                            <div className="badge badge-lg badge-purple text-white ms-auto fw-normal">91% Off</div>
                        </div>
                        <div className="d-flex align-items-center text-alizarin mb-6">
                            {/* Icon */}
                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99974 3.0083C5.79444 3.0083 2.37305 6.42973 2.37305 10.635C2.37305 14.8405 5.79448 18.2619 9.99974 18.2619C14.2053 18.2619 17.6264 14.8405 17.6264 10.635C17.6264 6.42973 14.205 3.0083 9.99974 3.0083ZM9.99974 16.8797C6.55666 16.8797 3.7555 14.0783 3.7555 10.6353C3.7555 7.19219 6.55662 4.39103 9.99974 4.39103C13.4428 4.39103 16.244 7.19219 16.244 10.6353C16.244 14.0785 13.4428 16.8797 9.99974 16.8797Z" fill="currentColor" />
                            <path d="M12.1193 10.4048H10.2761V7.73202C10.2761 7.35022 9.9666 7.04077 9.5848 7.04077C9.20301 7.04077 8.89355 7.35022 8.89355 7.73202V11.0961C8.89355 11.4779 9.20301 11.7873 9.5848 11.7873H12.1194C12.5012 11.7873 12.8106 11.4779 12.8106 11.0961C12.8106 10.7143 12.5011 10.4048 12.1193 10.4048Z" fill="currentColor" />
                            <path d="M6.08489 15.5823C5.80102 15.3267 5.36391 15.35 5.10864 15.6336L3.0349 17.9378C2.77935 18.2214 2.80263 18.6585 3.08627 18.9138C3.2183 19.033 3.38372 19.0915 3.54849 19.0915C3.73767 19.0915 3.92614 19.0143 4.06255 18.8625L6.13629 16.5583C6.3918 16.2746 6.36852 15.8375 6.08489 15.5823Z" fill="currentColor" />
                            <path d="M16.9661 17.9381L14.8924 15.634C14.6375 15.3501 14.2002 15.327 13.9163 15.5826C13.6325 15.8379 13.6097 16.275 13.865 16.5586L15.9387 18.8628C16.0749 19.0144 16.2633 19.0916 16.4525 19.0916C16.6171 19.0916 16.7825 19.033 16.9147 18.9141C17.1986 18.6588 17.2214 18.2217 16.9661 17.9381Z" fill="currentColor" />
                            <path d="M5.96733 1.91597C4.59382 0.571053 2.3798 0.573123 1.03211 1.92105C0.361569 2.59132 -0.00479631 3.47819 4.74212e-05 4.41826C0.00512553 5.34705 0.373327 6.21665 1.03715 6.86689C1.17172 6.99845 1.34614 7.06411 1.52078 7.06411C1.69774 7.06411 1.87469 6.99638 2.00949 6.86181L5.9726 2.8987C6.10303 2.76808 6.17584 2.59085 6.17491 2.40632C6.17401 2.22171 6.09932 2.04523 5.96733 1.91597ZM1.5966 5.31939C1.45813 5.04037 1.38414 4.73162 1.38254 4.41088C1.37953 3.84315 1.60211 3.30581 2.00949 2.89843C2.41594 2.49222 2.95328 2.28921 3.49359 2.28921C3.80949 2.28921 4.12655 2.35855 4.4187 2.49726L1.5966 5.31939Z" fill="currentColor" />
                            <path d="M18.9673 1.92072C17.6194 0.573026 15.4053 0.570721 14.0318 1.91564C13.9 2.04489 13.8252 2.22142 13.8242 2.40595C13.8233 2.59052 13.8963 2.76794 14.0268 2.89833L17.9899 6.86144C18.1247 6.99648 18.3016 7.06398 18.4786 7.06398C18.6532 7.06398 18.8279 6.99831 18.9622 6.86628C19.6263 6.21628 19.9945 5.34672 19.9993 4.41789C20.0042 3.47809 19.6376 2.59122 18.9673 1.92072ZM18.4028 5.3193L15.5807 2.4972C16.3729 2.12114 17.3459 2.25458 17.9899 2.89856C18.3973 3.30594 18.6199 3.84301 18.6169 4.41102C18.6152 4.73152 18.5413 5.04051 18.4028 5.3193Z" fill="currentColor" />
                            </svg>
                            <span className="ms-2">2 days left at this price!</span>
                        </div>
                        <ul className="list-group list-group-flush mb-6">
                            <li className="list-group-item d-flex align-items-center py-3">
                            <div className="text-secondary d-flex">
                                {/* Icon */}
                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8102 9.52183C13.313 9.08501 12.7102 8.70758 12.0181 8.40008C11.7223 8.2687 11.3761 8.40191 11.2447 8.69762C11.1134 8.99334 11.2466 9.33952 11.5423 9.47102C12.1258 9.73034 12.6287 10.0436 13.0367 10.4021C13.5396 10.8441 13.8281 11.484 13.8281 12.1582V13.2422C13.8281 13.5653 13.5653 13.8281 13.2422 13.8281H1.75781C1.43475 13.8281 1.17188 13.5653 1.17188 13.2422V12.1582C1.17188 11.484 1.46038 10.8441 1.96335 10.4021C2.55535 9.88186 4.2802 8.67188 7.5 8.67188C9.89079 8.67188 11.8359 6.72672 11.8359 4.33594C11.8359 1.94515 9.89079 0 7.5 0C5.10921 0 3.16406 1.94515 3.16406 4.33594C3.16406 5.7336 3.82896 6.97872 4.85893 7.77214C2.97432 8.18642 1.80199 8.98384 1.18984 9.52183C0.433731 10.1862 0 11.147 0 12.1582V13.2422C0 14.2115 0.788498 15 1.75781 15H13.2422C14.2115 15 15 14.2115 15 13.2422V12.1582C15 11.147 14.5663 10.1862 13.8102 9.52183ZM4.33594 4.33594C4.33594 2.59129 5.75535 1.17188 7.5 1.17188C9.24465 1.17188 10.6641 2.59129 10.6641 4.33594C10.6641 6.08059 9.24465 7.5 7.5 7.5C5.75535 7.5 4.33594 6.08059 4.33594 4.33594Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h6 className="mb-0 ms-3 me-auto">Total Slot</h6>
                            <span>240</span>
                            </li>
                            <li className="list-group-item d-flex align-items-center py-3">
                            <div className="text-secondary d-flex">
                                {/* Icon */}
                                <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.625 7.34375H7.3423V4.13164C7.3423 2.715 8.53391 1.5625 9.99855 1.5625C11.4632 1.5625 12.6548 2.715 12.6548 4.13164V5.625H14.2173V4.13164C14.2173 1.85344 12.3248 0 9.99855 0C7.67234 0 5.7798 1.85344 5.7798 4.13164V7.34375H4.375C3.08266 7.34375 2.03125 8.39516 2.03125 9.6875V17.6562C2.03125 18.9486 3.08266 20 4.375 20H15.625C16.9173 20 17.9688 18.9486 17.9688 17.6562V9.6875C17.9688 8.39516 16.9173 7.34375 15.625 7.34375ZM16.4062 17.6562C16.4062 18.087 16.0558 18.4375 15.625 18.4375H4.375C3.94422 18.4375 3.59375 18.087 3.59375 17.6562V9.6875C3.59375 9.25672 3.94422 8.90625 4.375 8.90625H15.625C16.0558 8.90625 16.4062 9.25672 16.4062 9.6875V17.6562Z" fill="currentColor" />
                                <path d="M10 11.1719C9.20176 11.1719 8.55469 11.8189 8.55469 12.6172C8.55469 13.1269 8.81875 13.5746 9.2173 13.832V15.5469C9.2173 15.9783 9.56707 16.3281 9.99855 16.3281C10.43 16.3281 10.7798 15.9783 10.7798 15.5469V13.8338C11.18 13.5768 11.4453 13.1281 11.4453 12.6172C11.4453 11.8189 10.7982 11.1719 10 11.1719Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h6 className="mb-0 ms-3 me-auto">Booked Slot</h6>
                            <span>20</span>
                            </li>
                        </ul>
                        <button className="btn btn-primary btn-block mb-3" type="button" name="button">BOOK NOW</button>
                        <div className="text-center">
                            <a href="#" className="mx-auto text-teal fw-medium d-inline-flex align-items-center mt-2">
                            {/* Icon */}
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0283 6.25C14.3059 6.25 12.9033 4.84833 12.9033 3.125C12.9033 1.40167 14.3059 0 16.0283 0C17.7509 0 19.1533 1.40167 19.1533 3.125C19.1533 4.84833 17.7509 6.25 16.0283 6.25ZM16.0283 1.25C14.995 1.25 14.1533 2.09076 14.1533 3.125C14.1533 4.15924 14.995 5 16.0283 5C17.0616 5 17.9033 4.15924 17.9033 3.125C17.9033 2.09076 17.0616 1.25 16.0283 1.25Z" fill="currentColor" />
                                <path d="M16.0283 20C14.3059 20 12.9033 18.5983 12.9033 16.875C12.9033 15.1517 14.3059 13.75 16.0283 13.75C17.7509 13.75 19.1533 15.1517 19.1533 16.875C19.1533 18.5983 17.7509 20 16.0283 20ZM16.0283 15C14.995 15 14.1533 15.8408 14.1533 16.875C14.1533 17.9092 14.995 18.75 16.0283 18.75C17.0616 18.75 17.9033 17.9092 17.9033 16.875C17.9033 15.8408 17.0616 15 16.0283 15Z" fill="currentColor" />
                                <path d="M3.94531 13.125C2.22275 13.125 0.820312 11.7233 0.820312 10C0.820312 8.27667 2.22275 6.875 3.94531 6.875C5.66788 6.875 7.07031 8.27667 7.07031 10C7.07031 11.7233 5.66788 13.125 3.94531 13.125ZM3.94531 8.125C2.91199 8.125 2.07031 8.96576 2.07031 10C2.07031 11.0342 2.91199 11.875 3.94531 11.875C4.97864 11.875 5.82031 11.0342 5.82031 10C5.82031 8.96576 4.97864 8.125 3.94531 8.125Z" fill="currentColor" />
                                <path d="M6.12066 9.39154C5.90307 9.39154 5.69143 9.27817 5.57729 9.0766C5.40639 8.77661 5.51061 8.39484 5.8106 8.22409L13.5431 3.81568C13.8422 3.64325 14.2247 3.74823 14.3947 4.04914C14.5656 4.34912 14.4614 4.73075 14.1614 4.90164L6.42888 9.30991C6.33138 9.36484 6.22564 9.39154 6.12066 9.39154Z" fill="currentColor" />
                                <path d="M13.8524 16.2665C13.7475 16.2665 13.6416 16.2398 13.5441 16.1841L5.81151 11.7757C5.51152 11.6049 5.40745 11.2231 5.5782 10.9232C5.74818 10.6224 6.12996 10.5182 6.42994 10.6899L14.1623 15.0981C14.4623 15.269 14.5665 15.6506 14.3958 15.9506C14.2807 16.1531 14.0691 16.2665 13.8524 16.2665Z" fill="currentColor" />
                            </svg>
                            <span className="ms-3">Share this course</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        )}

export default FormationSingle 