import './CheckoutHeader.css';
import {Link} from 'react-router';
import DesktopLogo from './../assets/images/logo.png'
import MobileLogo from './../assets/images/mobile-logo.png'
import CheckoutLock from './../assets/images/icons/checkout-lock-icon.png'
export function CheckoutHeader() {
    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo" src={DesktopLogo} />
                        <img className="mobile-logo" src={MobileLogo} />
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link"
                        to="/">3 items</Link>)
                </div>

                <div className="checkout-header-right-section">
                    <img src={CheckoutLock} />
                </div>
            </div>
        </div>
    )
}