import './Footer.css';
import { FaFacebookF,FaLinkedinIn  } from 'react-icons/fa';
import { BsInstagram,BsTwitter } from "react-icons/bs";
export const Footer = () => {
    return (
        <div className="mainFooterDiv">
        <div className="footerContainer">
            <div>
                <br/>
                <div style={{padding:'1em'}}>
                    <svg width="81" height="20" viewBox="0 0 81 20" xmlns="http://www.w3.org/2000/svg" className="footerlogo"><g transform="translate(0, 0) scale(1)"><path class="fill" d="M78.3352549,14.3292706 C77.0678017,14.3292706 76.0403439,15.3567284 76.0403439,16.6243597 C76.0403439,17.8916348 77.0678017,18.9192707 78.3352549,18.9192707 C79.6027081,18.9192707 80.630344,17.8916348 80.630344,16.6243597 C80.630344,15.3567284 79.6027081,14.3292706 78.3352549,14.3292706" fill="white"></path><path class="fill" d="M70.7958568,7.22817345 L70.7958568,6.4467803 L74.4529833,6.4467803 L74.4529833,18.6618356 L70.7958568,18.6618356 L70.7958568,17.8811547 C69.7626656,18.5857975 68.5156063,19 67.1704277,19 C63.6107082,19 60.7250027,16.1142945 60.7250027,12.554575 C60.7250027,8.99485561 63.6107082,6.10915009 67.1704277,6.10915009 C68.5156063,6.10915009 69.7626656,6.52335256 70.7958568,7.22817345 Z M67.4697718,15.6974209 C69.3000267,15.6974209 70.7835696,14.2902722 70.7835696,12.554575 C70.7835696,10.8188779 69.3000267,9.41208536 67.4697718,9.41208536 C65.6395168,9.41208536 64.1559739,10.8188779 64.1559739,12.554575 C64.1559739,14.2902722 65.6395168,15.6974209 67.4697718,15.6974209 Z" fill="white"></path><path class="fill" d="M54.2263333,6.11823191 C52.765406,6.11823191 51.3828316,6.57178896 50.4584442,7.82312205 L50.4584442,6.4474926 L46.8169884,6.4474926 L46.8169884,18.6618356 L50.503141,18.6618356 L50.503141,12.2427657 C50.503141,10.3852653 51.7487757,9.47565814 53.2485235,9.47565814 C54.8558285,9.47565814 55.7798597,10.4358386 55.7798597,12.2174791 L55.7798597,18.6618356 L59.4327124,18.6618356 L59.4327124,10.8940256 C59.4327124,8.05141421 57.1725844,6.11823191 54.2263333,6.11823191" fill="white"></path><path class="fill" d="M41.5278044,8.03788051 L41.5278044,6.44695838 L37.7834212,6.44695838 L37.7834212,18.6618356 L41.536174,18.6618356 L41.536174,12.9588053 C41.536174,11.0347048 43.6216104,10.0004452 45.0686479,10.0004452 C45.0834281,10.0004452 45.097318,10.0018698 45.1120982,10.0020479 L45.1120982,6.44767068 C43.6269526,6.44767068 42.2609392,7.08357654 41.5278044,8.03788051" fill="white"></path><path class="fill" d="M32.2128788,7.22817345 L32.2128788,6.4467803 L35.8701833,6.4467803 L35.8701833,18.6618356 L32.2128788,18.6618356 L32.2128788,17.8811547 C31.1796876,18.5857975 29.9326283,19 28.5876277,19 C25.0279083,19 22.1422028,16.1142945 22.1422028,12.554575 C22.1422028,8.99485561 25.0279083,6.10915009 28.5876277,6.10915009 C29.9326283,6.10915009 31.1796876,6.52335256 32.2128788,7.22817345 Z M28.8867938,15.6974209 C30.7170487,15.6974209 32.2007697,14.2902722 32.2007697,12.554575 C32.2007697,10.8188779 30.7170487,9.41208536 28.8867938,9.41208536 C27.0567169,9.41208536 25.5729959,10.8188779 25.5729959,12.554575 C25.5729959,14.2902722 27.0567169,15.6974209 28.8867938,15.6974209 Z" fill="white"></path><path class="fill" d="M16.8150889 18.6618356 20.6429893 18.6618356 20.6429893 1.00338343 16.8150889 1.00338343z" fill="white"></path><path class="fill" d="M14.1770857,1 L10.2104649,1 C10.2104649,4.25111544 8.71570325,7.23511837 6.10957549,9.1873547 L4.53806353,10.3642524 L10.6271604,18.6673559 L15.6335612,18.6673559 L10.0307872,11.0272257 C12.6865979,8.38263373 14.1770857,4.82469505 14.1770857,1" fill="white"></path><path class="fill" d="M0 18.6666436 4.05334336 18.6666436 4.05334336 1 0 1z" fill="white"></path></g></svg><br/>
                </div>
                <br/>
                <div>
                    <select placeholder="select a country" className="selectCountry">
                        <option value="au" label="Australia">Australia</option>
                        <option value="at" label="Austria">Austria</option>
                        <option value="be" label="Belgium (nl)">Belgium (nl)</option>
                        <option value="fr-be" label="Belgium (fr)">Belgium (fr)</option>
                        <option value="dk" label="Denmark">Denmark</option>
                        <option value="fi" label="Finland">Finland</option>
                        <option value="fr" label="France">France</option>
                        <option value="de" label="Germany">Germany</option>
                        <option value="it" label="Italy">Italy</option>
                        <option value="ie" label="Ireland">Ireland</option>
                        <option value="nl" label="Netherlands">Netherlands</option>
                        <option value="no" label="Norway">Norway</option>
                        <option value="nz" label="New Zealand">New Zealand</option>
                        <option value="pl" label="Poland">Poland</option>
                        <option value="es" label="Spain">Spain</option>
                        <option value="se" label="Sweden">Sweden</option>
                        <option value="ch" label="Switzerland (de)">Switzerland (de)</option>
                        <option value="en-ch" label="Switzerland (en)">Switzerland (en)</option>
                        <option value="fr-ch" label="Switzerland (fr)">Switzerland (fr)</option>
                        <option value="it-ch" label="Switzerland (it)">Switzerland (it)</option>
                        <option value="uk" label="United Kingdom">United Kingdom</option>
                        <option selected="" value="us" label="United States">United States</option>
                        <option value="international" label="International">International</option>
                        <option value="ca" label="Canada">Canada</option>
                        <option value="fr-ca" label="Canada (fr)">Canada (fr)</option>
                    </select>
                </div>
                <br/>

                <div className="social">
                    <div>
                    <FaFacebookF  className="socialMedia"/>
                    </div>
                    <div>
                        <FaLinkedinIn  className="socialMedia"/>
                    </div>
                    <div>
                        <BsTwitter  className="socialMedia"/>
                    </div>
                    <div>
                    <BsInstagram  className="socialMedia"/>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="terms">
                    <ul>
                    <li style={{fontWeight:"bold",marginBottom:"5px"}}><strong>Klarna</strong></li>
                    <li>Abous us</li>
                    <li>Careers</li>
                    <li>Legal</li>
                    <li>Press</li>
                    <li>Extra O blog</li>
                    <li>Privacy</li>
                    <li>Email connect</li>
                    <li>Sustainability</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="displayNone" >
                <ul>
                <li style={{fontWeight:"bold",marginBottom:"5px"}}><strong>Customer</strong></li>
                    <li>Buy now pay later</li>
                    <li>Contact us via app</li>
                    <li>Klarna stores</li>
                    <li>Shopping app</li>
                    <li>Rewards club</li>
                    <li>Buyer Protection Policy</li>
                    <li>Feedback and complaints</li>
                    <li>Shopping inspiration</li>
                </ul>
                </div>
        </div>
            <div> 
                <div className="thirdFooter">
                    <ul>
                    <li style={{fontWeight:"bold",marginBottom:"5px"}}><strong>Business</strong></li>
                    <li>Sell with Klarna </li>
                    <li>Payment methods </li>
                    <li>Platforms and partners </li>
                    <li>Business loing </li>
                    <li>Business support </li>
                    <li>Privacy </li>
                    <li>Operational status </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="finalFooter">
                <div>Monthly financing through Klarna is issued by WebBank, member FDIC. Copyright © 2005-2022 Klarna Inc. NMLS #1353190, 629 N. High Street, Third Floor, Columbus, OH 43215. Other CA resident loans made or arranged pursuant to a California Finance Lenders Law license.</div>
                <div className="finalDivFlex">
                    <div>Legal</div>
                    <div>Terms</div>
                    <div>Privacy & policy</div>
                    <div>Cookies</div>
                    <div>Sitemap</div>
                </div>
            </div>
        </div>
    )
}