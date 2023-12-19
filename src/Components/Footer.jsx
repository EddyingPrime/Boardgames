import logo from "../assets/logo.png";
import pin from "../assets/pin.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="border bg-white flex flex-wrap justify-between px-[10%] py-5 border-solid">
      <div className="flex flex-col items-start ">
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
            <div className="text-black text-lg hover:underline">Address</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img src={email} alt="Email" className="w-6 h-6 max-w-full" />
            <div className="text-black text-lg hover:underline">
              <a href="mailto:touchgrass012@gmail.com">TouchGrass@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img src={phone} alt="Phone" className="w-6 h-6 max-w-full" />
            <div className="text-black text-lg hover:underline">Contact No</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8 w-[100%] max-w-md -ml">
        <div className="text-black text-3xl font-bold self-center mb-4">
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
          className="border h-[90px] text-black bg-gray text-base rounded mb-2 px-4 py-2 w-full"
          name="comment"
          placeholder="Comment"
        />
        <button className="text-white text-center text-lg font-medium bg-orange rounded border w-full py-2">
          Submit
        </button>
      </div>

      <div className="w-50 mr-[5%] lg:w-1/4 mb-6 lg:mb-0">
        <h4 className="text-lg md:text-xl font-bold mt-10">COMPANY</h4>
        <ul className="text-md">
          <li className="mb-2 hover:underline">
            <a href="#">About Us</a>
          </li>
          <li className="mb-2 hover:underline">
            <a href="#">News</a>
          </li>
          <li className="mb-2 hover:underline">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <h4 className="text-lg md:text-xl font-bold mb-1 mt-5">USEFUL LINKS</h4>
        <ul className="text-md">
          <li className="mb-2 hover:underline">
            <a href="#">Help</a>
          </li>
          <li className="mb-2 hover:underline">
            <a href="#">Beginner's Guide</a>
          </li>
        </ul>

        <h3 className="text-lg md:text-xl font-bold mt-5">FOLLOW US ON</h3>
        <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
          <a
            href="www.facebook.com/louraine16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md hover:underline"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href="www.instagram.com/_loooreyn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md hover:underline"
          >
            <AiOutlineInstagram />
          </a>
          <a href="/facebook.com" className="text-md hover:underline">
            <AiOutlineGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md hover:underline"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="www.twitter.com/_loooreyn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md hover:underline"
          >
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
