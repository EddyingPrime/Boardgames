import logo from "../assets/logo.png";
import pin from "../assets/pin.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="border bg-white flex flex-wrap justify-between items-start px-5 py-10 border-solid border-black">
      <div className="flex flex-col items-start">
        <img src={logo} alt="Logo" className="w-full max-w-md mb-4" />
        <div className="flex flex-col items-start">
          <div className="text-black text-base font-semibold">
            Board Games and Cafes
          </div>
          <div className="text-black text-base mt-2">Lorem</div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center gap-2">
            <img src={pin} alt="Pin" className="w-6 max-w-full" />
            <div className="text-black text-base">Address</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img src={email} alt="Email" className="w-6 max-w-full" />
            <div className="text-black text-base">Email</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img src={phone} alt="Phone" className="w-6 max-w-full" />
            <div className="text-black text-base">Contact No</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-4 max-w-md">
        <div className="text-black text-2xl font-semibold self-center mb-4">
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

      <div className="flex flex-col max-w-md mt-4">
        <div className="text-black text-3xl font-semibold mb-2">Company</div>
        <button className="text-black text-base mb-1 hover:underline">
          About Us
        </button>
        <button className="text-black text-base mb-1 hover:underline">
          Careers
        </button>
        <button className="text-black text-base mb-1 hover:underline">
          FAQs
        </button>
        <button className="text-black text-base mb-1 hover:underline">
          Contact Us
        </button>
        <div className="flex items-center gap-2 mt-4">
          <img src={facebook} alt="Facebook" className="w-10 max-w-full" />
          <img src={twitter} alt="Twitter" className="w-10 max-w-full" />
          <img src={linkedin} alt="LinkedIn" className="w-10 max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
