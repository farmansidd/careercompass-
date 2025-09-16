import React from 'react';
import FooterIMF from './img/logo-devloper/FooterIMG.png';
 const links = [
    "Properties in Andheri East for Sale",
    "Premium Apartments in Andheri East",
    "Luxury Flats in Andheri East",
    "Commercial Spaces in Andheri East",
    "New Projects in Andheri East",
    "Furnished Office Spaces in Andheri East",
    "Coworking Offices in Andheri East",
    "Commercial Offices Near Andheri East Metro",
    "Corporate Office Spaces in Andheri East",
    "Offices for Rent in Andheri East",
  ];
const Footer = () => {
  return (
    <>
     <div className="bg-[#f8f8f8] py-6">
      <div className="container mx-auto flex flex-wrap gap-4 px-[190px]">
        {Array(4).fill(null).map((_, colIndex) => (
          <div key={colIndex} className="flex-1 min-w-[20px]">
            <ul className="space-y-1 text-xs text-black leading-tight font-medium">
              {links.map((link, index) => (
                <li key={index}>
                  <a href="/properties" className="hover:underline hover:text-blue-600 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <footer className="bg-[#002d85] text-white pt-16 pb-12 px-6 relative">
      <img src={FooterIMF} alt="FooterIMF" className="absolute top-1/2 transform -translate-y-1/2" style={{opacity: 0.2, width: '654px', left: '63px'}} />
      <div className="container mx-auto max-w-6xl  mr-[83px] relative z-10">
        {/* Main footer content - 4 columns */}
        <div className="flex flex-wrap">
          
          {/* About ZeroBroker section */}
          <div className='col-one flex-1 ml-[50px]'>
            <h3 className="text-xs font-semibold mb-4 pt-[-30px]">About ZeroBroker</h3>
            <p className="text-gray-300 text-xs leading-none m-0 p-0 mb-4">
              We At Zerobroker.Com Assist Home Buyers In Negotiating With Developers, Act On Behalf Of Our Customers, And Ensure That You Receive The Best Deal In The Market. We Are Also Recognized As The "Leading Property Advisors In India" For Several Consecutive Years.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-xs mb-1">Total Free Customer Care</h4>
              <a href="tel:+917977351655" className="text-xs hover:text-blue-400 transition-colors">
                +91 7977351655
              </a>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-xs mb-1">Need Live Support?</h4>
              <div className="flex flex-col space-y-1">
                <a href="mailto:sales@zerobroker.in" className="text-xs hover:text-blue-400 transition-colors">
                  sales@zerobroker.in
                </a>
                <a href="mailto:info@zerobroker.in" className="text-xs hover:text-blue-400 transition-colors">
                  info@zerobroker.in
                </a>
              </div>
            </div>
            
            <div className="ml-2">
              <h4 className="font-semibold text-xs mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.twitter.com" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.instagram.com" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com" className="hover:text-blue-400 transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="https://www.pinterest.com" className="hover:text-blue-400 transition-colors" aria-label="Pinterest">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.012.001 12.017 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Category links */}
          <div className='col-two flex-1 ml-4'>
            <h3 className="text-xs font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li><a href="/rental-residential" className="text-gray-300 hover:text-white transition-colors text-xs">Rental Residential</a></li>
              <li><a href="/rental-commercial" className="text-gray-300 hover:text-white transition-colors text-xs">Rental Commercial</a></li>
              <li><a href="/resale-residential" className="text-gray-300 hover:text-white transition-colors text-xs">Resale Residential</a></li>
              <li><a href="/resale-commercial" className="text-gray-300 hover:text-white transition-colors text-xs">Resale commercial</a></li>
              <li><a href="/rent-agreement" className="text-gray-300 hover:text-white transition-colors text-xs">Rent agreement</a></li>
              <li><a href="/sale-agreement" className="text-gray-300 hover:text-white transition-colors text-xs">Sale agreement</a></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div className='col-three flex-1 ml-8'>
            <h3 className="text-xs font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-gray-300 hover:text-white transition-colors text-xs">About Us</a></li>
              <li><a href="/how-zerobroker-works" className="text-gray-300 hover:text-white transition-colors text-xs">How ZeroBroker works</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors text-xs">Blog</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors text-xs">Careers</a></li>
              <li><a href="/be-a-partner" className="text-gray-300 hover:text-white transition-colors text-xs">Be a partner</a></li>
            </ul>
          </div>
          
          {/* Support links */}
          <div className='col-four flex-1 ml-12'>
            <h3 className="text-xs font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/work-with-us" className="text-gray-300 hover:text-white transition-colors text-xs">Work With Us</a></li>
              <li><a href="/feedback" className="text-gray-300 hover:text-white transition-colors text-xs">Feedback</a></li>
              <li><a href="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and links */}
        <div className="border-t border-blue-800  pt-[54px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-gray-300 mb-4 md:mb-0">
              © Zerobroker - All rights reserved
            </div>
            <div className="flex space-x-6">
              <a href="/disclaimer" className="text-xs text-gray-300 hover:text-white transition-colors">Disclaimer</a>
              <a href="/privacy" className="text-xs text-gray-300 hover:text-white transition-colors">Privacy</a>
              <a href="/terms-and-conditions" className="text-xs text-gray-300 hover:text-white transition-colors">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;