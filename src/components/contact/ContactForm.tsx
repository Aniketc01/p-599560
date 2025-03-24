import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pinCode: "",
    cityName: "",
    comments: "",
    promotionalOffers: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 border shadow-[0_0_15px_rgba(0,0,0,0.06)] bg-white p-[35px] rounded-[5px] border-solid border-[#FEB9B9] max-md:mt-[30px]"
    >
      <div className="flex gap-3 mb-[15px] max-sm:flex-col max-sm:gap-[15px]">
        <input
          type="text"
          name="firstName"
          placeholder="First Name*"
          value={formData.firstName}
          onChange={handleChange}
          className="border border-neutral-200 text-sm w-full px-[21px] py-[15.5px] rounded-[5px] border-solid"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name*"
          value={formData.lastName}
          onChange={handleChange}
          className="border border-neutral-200 text-sm w-full px-[21px] py-[15.5px] rounded-[5px] border-solid"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email*"
        value={formData.email}
        onChange={handleChange}
        className="border border-neutral-200 text-sm w-full px-[21px] py-[15.5px] rounded-[5px] border-solid mb-[15px]"
        required
      />
      <div className="flex gap-3 mb-[15px] max-sm:flex-col max-sm:gap-[15px]">
        <div className="flex items-center border border-neutral-200 w-[139px] px-2.5 py-[7px] rounded-[5px] border-solid max-sm:w-full max-sm:mb-[15px]">
          <span className="select-text text-sm mr-auto">+91 IN</span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.18457 9L12.1846 15L18.1846 9"
              stroke="#202124"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Mobile Number*"
          value={formData.phone}
          onChange={handleChange}
          className="border border-neutral-200 text-sm w-full px-[21px] py-[15.5px] rounded-[5px] border-solid"
          required
        />
      </div>
      <div className="flex gap-3 mb-[15px] max-sm:flex-col max-sm:gap-[15px]">
        <input
          type="text"
          name="pinCode"
          placeholder="Pin Code"
          value={formData.pinCode}
          onChange={handleChange}
          className="border border-neutral-200 text-sm w-full px-[21px] py-[15.5px] rounded-[5px] border-solid"
        />
        <input
          type="text"
          name="cityName"
          placeholder="City Name"
          value={formData.cityName}
          onChange={handleChange}
          className="border border-neutral-200 text-sm w-full px-[21px] py-[15.5px] rounded-[5px] border-solid"
        />
      </div>
      <textarea
        name="comments"
        placeholder="Enter Comments"
        value={formData.comments}
        onChange={handleChange}
        className="w-full h-[251px] border border-neutral-200 text-sm resize-none mb-[25px] px-[21px] py-[11px] rounded-[5px] border-solid"
      />
      <div className="flex items-center gap-2.5 mb-[25px]">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-5 h-5 border flex items-center justify-center bg-white rounded-[5px] border-solid border-[#5C2E2E]">
            <input
              type="checkbox"
              name="promotionalOffers"
              checked={formData.promotionalOffers}
              onChange={handleChange}
              className="sr-only"
            />
            {formData.promotionalOffers && (
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6014 1.38197C10.7133 1.27353 10.8631 1.21289 11.0189 1.21289C11.1747 1.21289 11.3245 1.27353 11.4364 1.38197C11.491 1.43484 11.5345 1.49816 11.5642 1.56817C11.5939 1.63817 11.6091 1.71343 11.6091 1.78947C11.6091 1.86551 11.5939 1.94077 11.5642 2.01077C11.5345 2.08078 11.491 2.1441 11.4364 2.19697L4.3504 9.11297C4.23847 9.22141 4.08874 9.28205 3.9329 9.28205C3.77706 9.28205 3.62733 9.22141 3.5154 9.11297L0.562399 6.23397C0.507752 6.1811 0.464297 6.11778 0.434619 6.04777C0.404942 5.97777 0.389648 5.90251 0.389648 5.82647C0.389648 5.75043 0.404942 5.67517 0.434619 5.60517C0.464297 5.53516 0.507752 5.47184 0.562399 5.41897C0.674326 5.31053 0.824055 5.24989 0.979899 5.24989C1.13574 5.24989 1.28547 5.31053 1.3974 5.41897L3.9324 7.89397L10.6014 1.38197Z"
                  fill="#5C2E2E"
                  stroke="#5C2E2E"
                  strokeWidth="0.5"
                />
              </svg>
            )}
          </div>
          <span className="text-sm">
            I agree to receive promotional offers from Titlemine
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="w-[298px] h-12 text-white text-base font-medium shadow-[0_4px_14px_rgba(92,46,46,0.25)] bg-[#5C2E2E] mx-auto my-0 rounded-[5px] border-[none] max-sm:w-full"
      >
        Submit
      </button>
    </form>
  );
};
