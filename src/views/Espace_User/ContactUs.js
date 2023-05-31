import {React,useState} from 'react'
import './ContactUs.css'
import './styleAll.css'
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios';



const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  console.log(formData)
    try {
      await axios.post('http://127.0.0.1:8000/api/contact-us', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      console.log('Email sent successfully!!!');
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  

  return (
            <div>
                <NavBar/>
              {/* PAGE TITLE 
          ================================================== */}
              <header className="py-8 py-md-11" style={{backgroundImage: 'none'}}>
                <div className="container text-center py-xl-2">
                  <h1 className="display-4 fw-semi-bold mb-0">Contact Us </h1>
                </div>
              </header>
              {/* CONTACT
          ================================================== */}
              <div className="container">
                <div className="row row-cols-md-2 mb-8 mb-lg-11">
                  <div className="col-md">
                    <h1 className="mb-6">Contact Details</h1>
                    <div className="row row-cols-12 row-cols-xl-2">
                      <div className="col-xl mb-6">
                        <div className="media d-flex">
                          <div className="me-5">
                            {/* Icon */}
                            <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.1563 6.10857C9.51012 6.10857 8.98438 5.57813 8.98438 4.9262C8.98438 4.27428 9.51012 3.74384 10.1563 3.74384C10.8024 3.74384 11.3282 4.27428 11.3282 4.9262C11.3282 5.57813 10.8025 6.10857 10.1563 6.10857Z" fill="currentColor" />
                              <path d="M24.9751 21.6358L23.0707 8.82697C22.9047 7.70855 21.9705 6.89675 20.8494 6.89675H13.5955C14.2338 5.67842 14.2226 4.24519 13.5551 3.02396C12.8802 1.78912 11.6562 1.02758 10.2809 0.986735C10.1985 0.984321 10.114 0.984321 10.0311 0.986735C8.65603 1.02753 7.43212 1.78912 6.7572 3.02396C6.08995 4.2447 6.07852 5.67729 6.71687 6.89675H4.15064C3.02947 6.89675 2.09526 7.70855 1.92924 8.82677L0.0248985 21.6358C-0.0721255 22.2889 0.117186 22.9504 0.544297 23.4508C0.971456 23.9511 1.59178 24.2381 2.24629 24.2381H22.7537C23.4082 24.2381 24.0285 23.9511 24.4556 23.4508C24.8828 22.9505 25.0721 22.289 24.9751 21.6358ZM8.12554 3.7853C8.53683 3.03287 9.24813 2.58722 10.0769 2.56263C10.103 2.56185 10.1296 2.5615 10.1562 2.5615C10.1828 2.5615 10.2094 2.5619 10.2353 2.56263C11.0643 2.58722 11.7756 3.03287 12.1869 3.7853C12.6165 4.57128 12.6046 5.49924 12.1551 6.26788L10.1562 9.66325L8.15792 6.26887C7.70786 5.50003 7.69575 4.57158 8.12554 3.7853ZM23.2717 22.4221C23.1954 22.5116 23.0265 22.6617 22.7537 22.6617H8.59924C8.63571 22.2922 8.8052 21.737 9.44608 21.3821C9.82437 21.1727 9.96275 20.6936 9.75518 20.3119C9.5476 19.9302 9.07259 19.7906 8.69436 20.0001C7.86694 20.4581 7.32147 21.1774 7.11692 22.0798C7.06912 22.2906 7.04602 22.4883 7.0367 22.6617H2.24629C1.97353 22.6617 1.80463 22.5116 1.72826 22.4221C1.65189 22.3326 1.52977 22.1418 1.5702 21.8697L3.47455 9.06059C3.52508 8.72031 3.80942 8.47334 4.15069 8.47334H7.63832L9.15428 11.0485C9.36659 11.4102 9.74111 11.6262 10.1562 11.6262C10.5713 11.6262 10.9458 11.4102 11.1575 11.0495L12.6741 8.47334H20.8494C21.1906 8.47334 21.475 8.72031 21.5255 9.06073L23.4299 21.8697C23.4702 22.1418 23.3481 22.3326 23.2717 22.4221Z" fill="currentColor" />
                              <path d="M13.5285 10.8785C13.1191 10.7407 12.6767 10.9641 12.5403 11.3771C12.4038 11.79 12.6251 12.2364 13.0344 12.3741C13.0424 12.3768 13.843 12.6656 14.1029 13.4521C14.2119 13.7824 14.5168 13.9913 14.8439 13.9913C14.9258 13.9913 15.0092 13.9782 15.0911 13.9506C15.5005 13.8129 15.7217 13.3665 15.5852 12.9535C15.0769 11.415 13.5915 10.8997 13.5285 10.8785Z" fill="currentColor" />
                              <path d="M14.1905 15.8431C13.7836 15.6982 13.3373 15.9136 13.1938 16.3241C12.7528 17.5846 11.2415 18.126 11.2097 18.1371C10.8021 18.2758 10.5821 18.7212 10.7183 19.1333C10.8274 19.4636 11.1323 19.6725 11.4594 19.6725C11.5413 19.6725 11.6246 19.6594 11.7066 19.6318C11.7985 19.6009 13.9667 18.8514 14.6673 16.8488C14.8109 16.4383 14.5974 15.988 14.1905 15.8431Z" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="media-body flex-shrink-1">
                            <h5 className="mb-4">Find Us</h5>
                            <address className>
                              2301 Marrakech shshshsh,
                            </address>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl mb-6">
                        <div className="media d-flex">
                          <div className="me-5">
                            {/* Icon */}
                            <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.9679 25C17.1609 25 16.3607 24.8573 15.5783 24.5731C12.1313 23.3209 8.93169 21.2814 6.32535 18.6751C3.71901 16.0688 1.67955 12.8692 0.427403 9.42217C0.0250265 8.31441 -0.0937186 7.1709 0.074585 6.02329C0.232245 4.94833 0.648634 3.90477 1.27878 3.00539C1.91172 2.10206 2.75553 1.35073 3.71897 0.832632C4.74637 0.280164 5.86775 0 7.05208 0C7.42043 0 7.73877 0.257363 7.81597 0.617504L9.04218 6.33988C9.0977 6.599 9.01806 6.86862 8.83072 7.05601L6.73544 9.15124C8.71202 13.0811 11.9193 16.2883 15.8491 18.2649L17.9444 16.1696C18.1318 15.9823 18.4014 15.9028 18.6605 15.9582L24.3829 17.1844C24.7431 17.2616 25.0004 17.5799 25.0004 17.9483C25.0004 19.1326 24.7202 20.2541 24.1677 21.2815C23.6496 22.2449 22.8983 23.0887 21.9949 23.7216C21.0956 24.3518 20.052 24.7682 18.977 24.9258C18.6402 24.9753 18.3034 25 17.9679 25ZM6.42789 1.59661C4.8657 1.76907 3.47913 2.58788 2.55837 3.90204C1.52296 5.37976 1.28152 7.19731 1.89595 8.88875C4.30327 15.5157 9.48475 20.6972 16.1117 23.1045C17.8031 23.719 19.6207 23.4776 21.0984 22.4421C22.4126 21.5213 23.2314 20.1348 23.4039 18.5726L18.7487 17.5751L16.5605 19.7633C16.3277 19.9961 15.9739 20.058 15.6759 19.9179C11.0282 17.7344 7.26604 13.9723 5.08253 9.32452C4.94255 9.02653 5.00436 8.67274 5.23721 8.43994L7.42541 6.25175L6.42789 1.59661Z" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="media-body flex-shrink-1">
                            <h5 className="mb-4">Phone</h5>
                            <a href="tel:3159052321" className="text-gray-800 d-block">+(212) 6-53479289</a>
                            <a href="tel:3159052322" className="text-gray-800 d-block">+(221) 6-25356367</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl mb-6">
                        <div className="media d-flex">
                          <div className="me-5">
                            {/* Icon */}
                            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.99974 3.0083C5.79444 3.0083 2.37305 6.42973 2.37305 10.635C2.37305 14.8405 5.79448 18.2619 9.99974 18.2619C14.2053 18.2619 17.6264 14.8405 17.6264 10.635C17.6264 6.42973 14.205 3.0083 9.99974 3.0083ZM9.99974 16.8797C6.55666 16.8797 3.7555 14.0783 3.7555 10.6353C3.7555 7.19219 6.55662 4.39103 9.99974 4.39103C13.4428 4.39103 16.244 7.19219 16.244 10.6353C16.244 14.0785 13.4428 16.8797 9.99974 16.8797Z" fill="currentColor" />
                              <path d="M12.1193 10.4048H10.2761V7.73202C10.2761 7.35022 9.9666 7.04077 9.5848 7.04077C9.20301 7.04077 8.89355 7.35022 8.89355 7.73202V11.0961C8.89355 11.4779 9.20301 11.7873 9.5848 11.7873H12.1194C12.5012 11.7873 12.8106 11.4779 12.8106 11.0961C12.8106 10.7143 12.5011 10.4048 12.1193 10.4048Z" fill="currentColor" />
                              <path d="M6.08489 15.5823C5.80102 15.3267 5.36391 15.35 5.10864 15.6336L3.0349 17.9378C2.77935 18.2214 2.80263 18.6585 3.08627 18.9138C3.2183 19.033 3.38372 19.0915 3.54849 19.0915C3.73767 19.0915 3.92614 19.0143 4.06255 18.8625L6.13629 16.5583C6.3918 16.2746 6.36852 15.8375 6.08489 15.5823Z" fill="currentColor" />
                              <path d="M16.9661 17.9381L14.8924 15.634C14.6375 15.3501 14.2002 15.327 13.9163 15.5826C13.6325 15.8379 13.6097 16.275 13.865 16.5586L15.9387 18.8628C16.0749 19.0144 16.2633 19.0916 16.4525 19.0916C16.6171 19.0916 16.7825 19.033 16.9147 18.9141C17.1986 18.6588 17.2214 18.2217 16.9661 17.9381Z" fill="currentColor" />
                              <path d="M5.96733 1.91597C4.59382 0.571053 2.3798 0.573123 1.03211 1.92105C0.361569 2.59132 -0.00479631 3.47819 4.74212e-05 4.41826C0.00512553 5.34705 0.373327 6.21665 1.03715 6.86689C1.17172 6.99845 1.34614 7.06411 1.52078 7.06411C1.69774 7.06411 1.87469 6.99638 2.00949 6.86181L5.9726 2.8987C6.10303 2.76808 6.17584 2.59085 6.17491 2.40632C6.17401 2.22171 6.09932 2.04523 5.96733 1.91597ZM1.5966 5.31939C1.45813 5.04037 1.38414 4.73162 1.38254 4.41088C1.37953 3.84315 1.60211 3.30581 2.00949 2.89843C2.41594 2.49222 2.95328 2.28921 3.49359 2.28921C3.80949 2.28921 4.12655 2.35855 4.4187 2.49726L1.5966 5.31939Z" fill="currentColor" />
                              <path d="M18.9673 1.92072C17.6194 0.573026 15.4053 0.570721 14.0318 1.91564C13.9 2.04489 13.8252 2.22142 13.8242 2.40595C13.8233 2.59052 13.8963 2.76794 14.0268 2.89833L17.9899 6.86144C18.1247 6.99648 18.3016 7.06398 18.4786 7.06398C18.6532 7.06398 18.8279 6.99831 18.9622 6.86628C19.6263 6.21628 19.9945 5.34672 19.9993 4.41789C20.0042 3.47809 19.6376 2.59122 18.9673 1.92072ZM18.4028 5.3193L15.5807 2.4972C16.3729 2.12114 17.3459 2.25458 17.9899 2.89856C18.3973 3.30594 18.6199 3.84301 18.6169 4.41102C18.6152 4.73152 18.5413 5.04051 18.4028 5.3193Z" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="media-body flex-shrink-1">
                            <h5 className="mb-4">Working Hours</h5>
                            <p className="mb-0">Mon-Fri: 8 AM - 5 PM</p>
                            <p className="mb-0">Sat-Sun: 8 AM - 2 PM</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl mb-6">
                        <div className="media d-flex">
                          <div className="me-5">
                            {/* Icon */}
                            <svg width={25} height={25} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.3651 20H2.50025L9.0205 18.581C9.1475 18.5599 9.26518 18.5011 9.3583 18.4121L20.4055 7.36492C21.2125 6.55966 21.6627 5.46438 21.6555 4.32443C21.657 3.17561 21.2082 2.07199 20.4055 1.25011C19.6003 0.44311 18.505 -0.00714406 17.365 0.000162955C16.2177 -0.00998926 15.1173 0.45462 14.3245 1.28393L3.311 12.3311C3.21388 12.4093 3.14307 12.5154 3.10828 12.6351L1.68943 19.1554C1.6507 19.3895 1.72596 19.628 1.89215 19.7973C2.01689 19.9246 2.18689 19.9974 2.3651 20ZM17.365 1.35151C18.9882 1.35138 20.3042 2.66722 20.3043 4.29048C20.3043 4.30179 20.3043 4.31311 20.3041 4.32443C20.3152 5.09774 20.0101 5.84209 19.4596 6.3852L15.3042 2.19602C15.8516 1.652 16.5931 1.34808 17.365 1.35151ZM14.3582 3.1758L18.5136 7.33116L8.88528 16.9257L4.72992 12.804L14.3582 3.1758ZM4.1894 14.1555L7.53394 17.5L3.24343 18.446L4.1894 14.1555Z" fill="currentColor" />
                              <path d="M23.8175 23.6486H1.18251C0.809333 23.6486 0.506836 23.9511 0.506836 24.3243C0.506836 24.6975 0.809333 25 1.18251 25H23.8175C24.1907 25 24.4932 24.6975 24.4932 24.3243C24.4932 23.9511 24.1907 23.6486 23.8175 23.6486Z" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="media-body flex-shrink-1">
                            <h5 className="mb-4">Write to Us</h5>
                            <a href="mailto:info@skola.com" className="text-gray-800">abdelghafour@gmail.com</a><br></br>
                            <a href="mailto:courses@skola.com" className="text-gray-800">courses@gmail.com</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl mb-6">
                        <div className="media d-flex">
                          <div className="me-5">
                            {/* Icon */}
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.0283 6.25C14.3059 6.25 12.9033 4.84833 12.9033 3.125C12.9033 1.40167 14.3059 0 16.0283 0C17.7509 0 19.1533 1.40167 19.1533 3.125C19.1533 4.84833 17.7509 6.25 16.0283 6.25ZM16.0283 1.25C14.995 1.25 14.1533 2.09076 14.1533 3.125C14.1533 4.15924 14.995 5 16.0283 5C17.0616 5 17.9033 4.15924 17.9033 3.125C17.9033 2.09076 17.0616 1.25 16.0283 1.25Z" fill="currentColor" />
                              <path d="M16.0283 20C14.3059 20 12.9033 18.5983 12.9033 16.875C12.9033 15.1517 14.3059 13.75 16.0283 13.75C17.7509 13.75 19.1533 15.1517 19.1533 16.875C19.1533 18.5983 17.7509 20 16.0283 20ZM16.0283 15C14.995 15 14.1533 15.8408 14.1533 16.875C14.1533 17.9092 14.995 18.75 16.0283 18.75C17.0616 18.75 17.9033 17.9092 17.9033 16.875C17.9033 15.8408 17.0616 15 16.0283 15Z" fill="currentColor" />
                              <path d="M3.94531 13.125C2.22275 13.125 0.820312 11.7233 0.820312 10C0.820312 8.27667 2.22275 6.875 3.94531 6.875C5.66788 6.875 7.07031 8.27667 7.07031 10C7.07031 11.7233 5.66788 13.125 3.94531 13.125ZM3.94531 8.125C2.91199 8.125 2.07031 8.96576 2.07031 10C2.07031 11.0342 2.91199 11.875 3.94531 11.875C4.97864 11.875 5.82031 11.0342 5.82031 10C5.82031 8.96576 4.97864 8.125 3.94531 8.125Z" fill="currentColor" />
                              <path d="M6.12066 9.39154C5.90307 9.39154 5.69143 9.27817 5.57729 9.0766C5.40639 8.77661 5.51061 8.39484 5.8106 8.22409L13.5431 3.81568C13.8422 3.64325 14.2247 3.74823 14.3947 4.04914C14.5656 4.34912 14.4614 4.73075 14.1614 4.90164L6.42888 9.30991C6.33138 9.36484 6.22564 9.39154 6.12066 9.39154Z" fill="currentColor" />
                              <path d="M13.8524 16.2665C13.7475 16.2665 13.6416 16.2398 13.5441 16.1841L5.81151 11.7757C5.51152 11.6049 5.40745 11.2231 5.5782 10.9232C5.74818 10.6224 6.12996 10.5182 6.42994 10.6899L14.1623 15.0981C14.4623 15.269 14.5665 15.6506 14.3958 15.9506C14.2807 16.1531 14.0691 16.2665 13.8524 16.2665Z" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="media-body flex-shrink-1">
                            <h5 className="mb-4">Follow Us</h5>
                            {/* Social */}
                            <ul className="list-unstyled list-inline list-social mb-4 mb-md-0 mx-n4">
                              <li className="list-inline-item list-social-item">
                                <a href="#" className="text-secondary font-size-sm w-36 h-36 shadow-dark-hover d-flex align-items-center justify-content-center rounded-circle border-hover">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li className="list-inline-item list-social-item">
                                <a href="#" className="text-secondary font-size-sm w-36 h-36 shadow-dark-hover d-flex align-items-center justify-content-center rounded-circle border-hover">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li className="list-inline-item list-social-item">
                                <a href="#" className="text-secondary font-size-sm w-36 h-36 shadow-dark-hover d-flex align-items-center justify-content-center rounded-circle border-hover">
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                              <li className="list-inline-item list-social-item">
                                <a href="#" className="text-secondary font-size-sm w-36 h-36 shadow-dark-hover d-flex align-items-center justify-content-center rounded-circle border-hover">
                                  <i className="fab fa-linkedin-in" />
                                </a>
                              </li>
                              <li className="list-inline-item list-social-item">
                                <a href="#" className="text-secondary font-size-sm w-36 h-36 shadow-dark-hover d-flex align-items-center justify-content-center rounded-circle border-hover">
                                  <i className="fab fa-skype" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <h1 className="mb-6">Have A Question?</h1>
                    <form className="row" onSubmit={handleSubmit}>
                      <div className="form-group mb-6 col-xl-6">
                        <label htmlFor="exampleInputTitle1">Name</label>
                        <input type="text" className="form-control placeholder-1" id="exampleInputTitle1" placeholder value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                      </div>
                      <div className="form-group mb-6 col-xl-6">
                        <label htmlFor="exampleInputTitle2">Email</label>
                        <input type="email" className="form-control placeholder-1" id="exampleInputTitle2" placeholder  value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                      </div>
                      <div className="form-group mb-6 col-12">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control placeholder-1" id="exampleFormControlTextarea1" rows={6} placeholder="Content"  value={formData.message}
  onChange={(e) => setFormData({ ...formData, message: e.target.value })}/>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-block mw-md-300p">SEND</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mb-8 mb-md-11 rounded overflow-hidden grayscal-hover">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.78021623226!2d80.06892628543156!3d13.04782226851664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1605787834828!5m2!1sen!2sin" width={1200} height={550} style={{border: 0, width: '100%'}} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
              </div>
              <Footer/>
            </div>
  )}
  
export default ContactUs 