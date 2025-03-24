export const ContactInfo = () => {
  return (
    <div className="flex-1">
      <h2 className="text-[#5C2E2E] text-2xl font-semibold mb-5">Contact Us</h2>
      <p className="text-base leading-[25px] mb-10">
        Have questions about land ownership, mining history, or past winners?
        We're here to help! Reach out to us for any inquiries related to land
        records, mining details, and more. Our team is ready to assist you with
        accurate and up-to-date information.
      </p>
      <h2 className="text-[#5C2E2E] text-2xl font-semibold mb-5">
        Still Need Help?
      </h2>
      <div className="flex flex-col gap-[30px] max-sm:gap-5">
        <div className="flex items-center border border-neutral-200 bg-white p-[26px] rounded-[5px] border-solid">
          <div className="w-[68px] h-[68px] flex items-center justify-center bg-[#FEB9B9] mr-[25px] rounded-[5px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.945 14.1838L16.1176 12.0182C15.5718 11.5995 14.8862 11.4063 14.2021 11.4785C13.518 11.5507 12.8878 11.8827 12.4414 12.4061L11.7415 13.226C9.63308 12.1089 7.90863 10.3843 6.79157 8.27573L7.6094 7.57583C8.13334 7.13032 8.466 6.50046 8.53858 5.81653C8.61115 5.1326 8.41809 4.44695 7.99932 3.90139L5.83377 1.07181C5.60558 0.773267 5.31725 0.52596 4.98745 0.345888C4.65765 0.165817 4.29372 0.0569923 3.91921 0.0264566C3.5447 -0.0040791 3.16795 0.0443539 2.81334 0.168622C2.45872 0.29289 2.13415 0.490225 1.86061 0.747859L0.847822 1.70172C0.581185 1.95056 0.368386 2.25143 0.222566 2.58573C0.0767447 2.92004 0.000996977 3.28069 0 3.64542C0.0826871 7.95778 1.85519 12.0653 4.93596 15.0837C7.9623 18.1669 12.0838 19.9298 16.4036 19.989H16.4086C16.7713 19.9865 17.1298 19.9101 17.462 19.7645C17.7943 19.6189 18.0934 19.4071 18.3411 19.1421L19.2679 18.1522C19.525 17.8789 19.7219 17.5547 19.8459 17.2005C19.97 16.8463 20.0184 16.4701 19.988 16.0961C19.9577 15.722 19.8493 15.3585 19.6698 15.029C19.4903 14.6995 19.2438 14.4112 18.946 14.1828L18.945 14.1838Z"
                fill="#5C2E2E"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Contact Number</h3>
            <p>+91 1234567890</p>
          </div>
        </div>
        <div className="flex items-center border border-neutral-200 bg-white p-[26px] rounded-[5px] border-solid">
          <div className="w-[68px] h-[68px] flex items-center justify-center bg-[#FEB9B9] mr-[25px] rounded-[5px]">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.7168 3.28589C1.7168 2.67964 1.95759 2.09821 2.38621 1.66952C2.81483 1.24084 3.39616 1 4.00231 1H19.9989C20.605 1 21.1864 1.24084 21.615 1.66952C22.0436 2.09821 22.2844 2.67964 22.2844 3.28589V14.7143C22.2839 15.3203 22.0429 15.9013 21.6143 16.3297C21.1858 16.7581 20.6048 16.9989 19.9989 16.9992H4.00231C3.39616 16.9992 2.81483 16.7583 2.38621 16.3297C1.95759 15.901 1.7168 15.3195 1.7168 14.7133V3.28589Z"
                stroke="#5C2E2E"
                strokeWidth="1.9999"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.7168 3.28613L12.0006 10.1428L22.2834 3.28613"
                stroke="#5C2E2E"
                strokeWidth="1.9999"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Email Id</h3>
            <p>info@titlemine.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};
