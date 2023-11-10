export default function Footer() {

    return (
      <div className="border bg-white flex flex-col items-center px-5 border-solid border-black">
        <div className="flex w-full  items-stretch justify-between gap-5 mt-16 mb-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:my-10">
          <div className="flex grow flex-col items-stretch mt-2.5 self-start max-md:max-w-full">
            <img
              src="src/assets/logo.png"
              className="aspect-[4.89] object-contain object-center w-[455px] overflow-hidden max-md:max-w-full"
            />
            <div className="items-stretch flex w-[407px] max-w-full flex-col mt-4">
              <div className="text-black text-base font-semibold">
                Board Games and Cafes
              </div>
              <div className="text-black text-base mt-5">Lorem</div>
            </div>
            <div className="items-stretch flex w-[124px] max-w-full flex-col ml-12 mt-11 self-start max-md:ml-2.5 max-md:mt-10">
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
                <div className="text-black text-base mt-1 self-start">
                  Email
                </div>
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
          <div className="items-center flex grow flex-col max-md:max-w-full">
            <div className="text-black text-3xl font-semibold self-center">
              Question us
            </div>
            <input className="border text-black text-base self-stretch rounded bg-neutral-100 mt-4 px-4 py-4 max-md:max-w-full"
            type="text"
            name="name"
            placeholder="Name"
          />
        
        <input className="border text-black text-base self-stretch rounded bg-neutral-100 mt-4 px-4 py-4 max-md:max-w-full"
            type="tel"
            name="telephone"
            placeholder="Telephone"
          />
            <input className="border text-black text-base self-stretch rounded bg-neutral-100 mt-4 px-4 py-4 max-md:max-w-full"
            type="email"
            name="email"
            placeholder="Email"
          />
            <input className="border h-[100%] text-black text-base self-stretch rounded bg-neutral-100 mt-4 px-4 py-4 max-md:max-w-full"
            type="text"
            name="comment"
            placeholder="Comment"
          />
            <button className="text-neutral-700 text-center text-lg font-medium justify-center items-center rounded border bg-orange-500 w-[161px] max-w-full mt-5 px-5 py-4 border-solid border-orange-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  
  