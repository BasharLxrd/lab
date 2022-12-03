import '../Style/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
    return (
        <div className='big_container'>
            <div className='footer_container'>
                <div className='contacts'>
                    <div className='name_container'>
                        <h2>contacts</h2>

                    </div>
                    <p>+(373) 00000000</p>
                    <p>info@callme.com</p>
                </div>

                <div className='categories'>
                    <div className='name_container'>
                        <h2>Categories</h2>
                    </div>
                    <p>Products</p>
                    <p>Calculator</p>
                    <p>Blog</p>
                </div>

                <div className='info'>
                    <div className='name_container'>
                        <h2>Information</h2>
                    </div>
                    <p>About Us</p>
                    <p>Privecy Policy</p>
                    <p>Accessibility</p>

                </div>

                <div className='Social'>
                    <h2>
                        Connect with us
                    </h2>
                    <ul className='socialMedia'>
                        <li>
                            <a href='#'>
                                <InstagramIcon sx={{ color: 'white' }} />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <MailOutlineIcon sx={{ color: 'white' }} />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FacebookIcon sx={{ color: 'white' }} />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='copyrights '>
                <p>Copyright © {new Date().getFullYear()}. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;