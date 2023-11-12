export default function Footer() {
  return (
    <div className="border bg-white flex flex-wrap justify-between items-start px-5 border-solid border-black">
      <div className="flex flex-col items-start mt-10 mb-16">
        <img
          src="src/assets/logo.png"
          className="aspect-[4.89] object-contain object-center w-[455px] overflow-hidden max-w-full"
        />
        <div className="items-stretch flex flex-col mt-4">
          <div className="text-black text-base font-semibold ml-10">
            Board Games and Cafes
          </div>
          <div className="text-black text-base mt-5 ml-10">Lorem</div>
        </div>
        <div className="items-stretch flex flex-col ml-12 mt-11">
          <div className="flex justify-between gap-4">
            <img
              src="src/assets/pin.png"
              className="object-contain object-center w-6 overflow-hidden max-w-full mt-2"
            />
            <div className="text-black text-base">Address</div>
          </div>
          <div className="flex items-stretch justify-between gap-5 mt-7">
            <img
              src="src/assets/email.png"
              className="object-contain object-center w-6 overflow-hidden max-w-full"
            />
            <div className="text-black text-base mt-1 self-start">Email</div>
          </div>
          <div className="flex items-stretch justify-between gap-4 mt-7">
            <img
              src="src/assets/phone.png"
              className="object-contain object-center w-6 overflow-hidden max-w-full"
            />
            <div className="text-black text-base mt-1 self-start">
              Contact No
            </div>
          </div>
        </div>
      </div>

      <div className="items-center flex grow flex-col mt-10">
            <div className="text-black text-2xl font-semibold self-center">
              Question us
            </div>
            <input className="border text-black text-base rounded bg-white mt-4 px-4 py-4 w-[50%]"
            type="text"
            name="name"
            placeholder="Name"
          />
        
        <input className="border text-black text-base rounded bg-white mt-4 px-4 py-4 w-[50%]"
            type="tel"
            name="telephone"
            placeholder="Telephone"
          />
            <input className="border text-black text-base rounded bg-white mt-4 px-4 py-4 w-[50%]"
            type="email"
            name="email"
            placeholder="Email"
          />
            <input className="border h-40 text-black bg-gray text-base rounded mt-4 px-4 py-4 w-[50%]"
            type="text"
            name="comment"
            placeholder="Comment"
          />
            <button className="text-white text-center text-lg font-medium justify-center items-center rounded border bg-orange w-[161px] max-w-full mt-5 px-5 py-4 border-solid border-orange mb-5">
              Submit
            </button>
            </div>
      <div className="company-container flex flex-col max-md:items-center mt-[5%] mr-[15%]">
        <div className="text-black text-3xl font-semibold">
          Company
        </div>
        <button className="text-black text-base mt-3.5 hover:underline">About Us</button>
        <button className="text-black text-base mt-3.5 hover:underline">Careers</button>
        <button className="text-black text-base mt-3.5 hover:underline">FAQs</button>
        <button className="text-black text-base mt-3.5 hover:underline">Contact Us</button>
        
        <div className="items-stretch flex gap-4 max-md:justify-center">
          <img
            src="src/assets/facebook.png"
            className="object-contain object-center w-10 overflow-hidden max-w-full"
          />
          <img
            src="src/assets/twitter.png"
            className="object-contain object-center w-10 overflow-hidden max-w-full"
          />
          <img
            src="src/assets/linkedin.png"
            className="object-contain object-center w-10 overflow-hidden max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

  
  