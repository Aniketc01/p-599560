
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      className="flex-1 bg-white p-8 rounded-md shadow-md"
    >
      <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
        <Input
          type="text"
          name="firstName"
          placeholder="First Name*"
          value={formData.firstName}
          onChange={handleChange}
          className="border border-neutral-200 rounded-md w-full p-3"
          required
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name*"
          value={formData.lastName}
          onChange={handleChange}
          className="border border-neutral-200 rounded-md w-full p-3"
          required
        />
      </div>
      
      <Input
        type="email"
        name="email"
        placeholder="Enter Your Email*"
        value={formData.email}
        onChange={handleChange}
        className="border border-neutral-200 rounded-md w-full p-3 mb-4"
        required
      />
      
      <div className="flex gap-4 mb-4 items-center max-sm:flex-col">
        <div className="flex items-center border border-neutral-200 rounded-md px-3 py-2 max-sm:w-full">
          <span className="text-sm">+91 IN</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
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
        <Input
          type="tel"
          name="phone"
          placeholder="Enter Mobile Number*"
          value={formData.phone}
          onChange={handleChange}
          className="border border-neutral-200 rounded-md w-full p-3 flex-1"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
        <Input
          type="text"
          name="pinCode"
          placeholder="Pin Code"
          value={formData.pinCode}
          onChange={handleChange}
          className="border border-neutral-200 rounded-md w-full p-3"
        />
        <Input
          type="text"
          name="cityName"
          placeholder="City Name"
          value={formData.cityName}
          onChange={handleChange}
          className="border border-neutral-200 rounded-md w-full p-3"
        />
      </div>
      
      <Textarea
        name="comments"
        placeholder="Enter Comments"
        value={formData.comments}
        onChange={handleChange}
        className="border border-neutral-200 rounded-md w-full p-3 mb-6 h-[200px] resize-none"
      />
      
      <div className="flex items-start gap-2 mb-6">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            name="promotionalOffers"
            id="promotionalOffers"
            checked={formData.promotionalOffers}
            onChange={handleChange}
            className="h-4 w-4 text-[#5C2E2E] border-gray-300 rounded cursor-pointer"
          />
        </div>
        <label htmlFor="promotionalOffers" className="text-sm">
          I Agree To Receive Promotional Offers From Titlemine
        </label>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-[#5C2E2E] hover:bg-[#4a2424] text-white py-3 px-4 rounded-md"
      >
        Submit
      </Button>
    </form>
  );
};
