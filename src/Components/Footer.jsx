import logo from "../assets/logo.png";
import pin from "../assets/pin.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="border bg-gray flex flex-wrap justify-between items-start px-[10%] py-10 border-solid border-black">
      <div className="flex flex-col items-start">
        <img src={logo} alt="Logo" className="w-50 mb-4" />
        <div className="flex flex-col items-start">
          <div className="text-black text-xl font-semibold">
            Board Games and Cafes
          </div>
          <div className="text-black text-xl mt-2"></div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center gap-2">
            <img src={pin} alt="Pin" className="w-6 h-6 max-w-full" />
            <div className="text-black text-xl">Address</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img src={email} alt="Email" className="w-6 h-6 max-w-full" />
            <div className="text-black text-xl">
              <a href="mailto:touchgrass012@gmail.com">TouchGrass@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img src={phone} alt="Phone" className="w-6 h-6 max-w-full" />
            <div className="text-black text-xl">Contact No</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-4 w-[100%] max-w-md -ml">
        <div className="text-black text-3xl font-semibold self-center mb-4">
          Question us
        </div>
        <input
          className="border text-black text-base rounded bg-white mb-2 px-4 py-2 w-full"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="border text-black text-base rounded bg-white mb-2 px-4 py-2 w-full"
          type="tel"
          name="telephone"
          placeholder="Telephone"
        />
        <input
          className="border text-black text-base rounded bg-white mb-2 px-4 py-2 w-full"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="border h-40 text-black bg-gray text-base rounded mb-2 px-4 py-2 w-full"
          name="comment"
          placeholder="Comment"
        />
        <button className="text-white text-center text-lg font-medium bg-orange rounded border w-full py-2">
          Submit
        </button>
      </div>

      <div className="w-50 mr-[5%] lg:w-1/4 mb-6 lg:mb-0">
      <h4 className="text-lg font-semibold mt-10">Company</h4>
<ul className="text-sm">
  <li className="mb-2"><a href="#">About Us</a></li>
  <li className="mb-2"><a href="#">News</a></li>
  <li className="mb-2"><a href="#">Privacy Policy</a></li>
  {/* Add more links as needed */}
</ul>
<h4 className="text-lg font-semibold mb-4 mt-9">Useful Links</h4>
<ul className="text-sm">
  <li className="mb-2"><a href="#">Help</a></li>
  <li className="mb-2"><a href="#">Beginner's Guide</a></li>
  <li className="mb-2"><a href="#">Tournaments</a></li>
</ul>
</div>
{/* <div className="w-full md:w-1/2 -mt-[7%] md:mt-0">
      <h4 className="text-lg font-semibold mb-4">Social Media</h4>
      <div className="flex items-center gap-2">
        <a href="www.facebook.com/louraine16" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="w-10 h-10 max-w-full" />
        </a>
        <a href="www.twitter.com/_loooreyn" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="w-10 h-10 max-w-full" />
        </a>
        <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-10 h-10 max-w-full" />
        </a>
      </div> */}
      </div>
  );
};

export default Footer;

