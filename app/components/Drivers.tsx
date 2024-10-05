import './Home.css'
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

interface propsType{
    showDriverVerificationDetails: (id: number)=> void,
    hideDriverVerificationDetails: ()=> void,
    showDriverDetails: (id: number)=> void,
    hideDriverDetails: ()=> void,
}
export default function DriversPage( prop : propsType) {

  


    return (
        <div className='dashboard-home-container'>
            <div className='grid-overview'>
                <div className='overview-grid-item'>
                    <span className='overview-grid-item-text'>TOTAL TODAY PICKUPS</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='overview-grid-item-desc-text-1'>146</h4>
                        <span className='overview-grid-item-desc-text-2'>+36.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='overview-grid-item-text'>TOTAL PICKUP PAYMENTS</span>
                    <div className='overview-grid-item-desc'>
                    <h4 className='overview-grid-item-desc-text-1'>$33,493</h4>
                    <span className='overview-grid-item-desc-text-2 danger-text'>-10.5%<FaArrowDownLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='overview-grid-item-text'>ACTIVE DRIVERS</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='overview-grid-item-desc-text-1'>46</h4>
                        <span className='overview-grid-item-desc-text-2'>+20.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>

                <div className='overview-grid-item'>
                    <span className='overview-grid-item-text'>ADMIN EARNINGS</span>
                    <div className='overview-grid-item-desc'>
                        <h4 className='overview-grid-item-desc-text-1'>$33,493</h4>
                        <span className='overview-grid-item-desc-text-2'>+36.5%<FaArrowUpLong size={10} /> </span>
                    </div>

                </div>
            </div>

         

            <div className='grid-drivers-overview'>
            <div className='top-drivers'>
                    <div className='top-drivers-area'>
                        <span className='top-drivers-area-title'>Driver Verification</span>
                    </div>

                    <div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverVerificationDetails(1)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>Verify Driver</span>
                            </div>
                        </div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverVerificationDetails(1)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>Verify Driver</span>
                            </div>
                        </div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverVerificationDetails(2)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>Verify Driver</span>
                            </div>
                        </div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverVerificationDetails(3)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>Verify Driver</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='top-drivers'>
                    <div className='top-drivers-area'>
                        <span className='top-drivers-area-title'>Approved Drivers</span>
                    </div>

                    <div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverDetails(1)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>view details</span>
                            </div>
                        </div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverDetails(1)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>view details</span>
                            </div>
                        </div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverDetails(2)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>view details</span>
                            </div>
                        </div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverDetails(3)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>view details</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='top-drivers'>
                    <div className='top-drivers-area'>
                        <span className='top-drivers-area-title'>Top Drivers</span>
                    </div>

                    <div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverDetails(1)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>view details</span>
                            </div>
                        </div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverDetails(1)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>view details</span>
                            </div>
                        </div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverDetails(2)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>view details</span>
                            </div>
                        </div>

                        <div className='top-driver-item' onClick={()=> prop.showDriverDetails(3)}>
                            <div>
                            <img src='https://media.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1257287%2F307e3f5d-e99f-4b8f-bc61-55f475e28311.jpeg' className='top-driver-pic' />
                            </div>
                            <div>
                                <p className='top-driver-item-name'>Morrisa R. Williams</p>
                                <p className='top-driver-item-email'>morriswilliams@gmail.com</p>
                            </div>
                            <div>
                                <span className='view-details-btn'>view details</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}