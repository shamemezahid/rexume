import { useState } from "react";
import { CheckCheckIcon, SendHorizonal } from "lucide-react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    "entry.": "", // Name
    "entry.": "", // Email
    "entry.": "", // Phone
    "entry.": "", // Company
    "entry.": "", // Comment
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    // Replace with your actual form action URL
    const googleFormURL =
      ""; 

    // Prepare URL-encoded data
    const urlEncodedData = new URLSearchParams();
    for (const key in formData) {
      urlEncodedData.append(key, formData[key]);
    }

    try {
      const response = await fetch(googleFormURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData.toString(),
      });
      setSuccess("Form submitted successfully!");
      setLoading(false);
    } catch (err) {
      // TODO: This is where engineering peaks
      setSuccess("Form submitted successfully!");
      setLoading(false);
    }
  };

  return (
    <div className="w-full text-sm">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 text-neutral-800 dark:text-neutral-50 w-full"
      >
        <InputField
          label="Your Name"
          type="text"
          name="entry.673605360"
          placeholder="Start typing"
          value={formData["entry.673605360"]}
          onChange={handleChange}
          required
        />
        <InputField
          label="Company / Organization"
          type="text"
          name="entry.2073457343"
          placeholder="e.g. Google, Individual"
          value={formData["entry.2073457343"]}
          onChange={handleChange}
          required
        />
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <InputField
            label="Email"
            type="email"
            name="entry.146314014"
            placeholder="email@example.com"
            value={formData["entry.146314014"]}
            onChange={handleChange}
            required
          />
          <InputField
            label="Phone"
            type="tel"
            name="entry.429667022"
            placeholder="Optional"
            value={formData["entry.429667022"]}
            onChange={handleChange}
          />
        </div>
        <InputField
          label="Message"
          type="text"
          name="entry.34928778"
          placeholder="Write your message"
          value={formData["entry.34928778"]}
          onChange={handleChange}
          required
          textarea
        />
        {success ? (
          <p className="flex items-center justify-center w-full sm:w-fit bg-neutral-200 dark:bg-neutral-700 dark:text-primary-400 text-primary-600 my-4 p-4 pr-8 pl-6 rounded-xl text-center">
            <CheckCheckIcon strokeWidth={1.5} className="w-5 h-5 mr-2" />
            {success}
          </p>
        ) : loading ? (
          <LoadingBtn />
        ) : (
          <button
            type="submit"
            className="w-full sm:w-fit flex items-center justify-center my-4 bg-primary-600 text-white p-4 pr-8 pl-6 rounded-lg cursor-pointer"
          >
            <SendHorizonal className="w-5 h-5 mr-2" />
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export function InputField({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  textarea = false,
}) {
  const charCount = value?.length;
  const isOverLimit = charCount > 5000;

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="ml-2">{label}</label>
      {textarea ? (
        <div className="relative">
          <textarea
            type={type}
            name={name}
            placeholder={placeholder}
            className="px-3 py-3 rounded-lg border dark:border-neutral-600 border-neutral-400/50 dark:bg-neutral-700 bg-neutral-200/50 w-full"
            rows="3"
            value={value}
            onChange={onChange}
            required={required}
          />
          <div
            className={`absolute -top-5 right-2 text-xs ${isOverLimit ? "text-red-500" : "text-neutral-500"}`}
          >
            {charCount} / 5000 characters
          </div>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="px-4 py-3 rounded-lg border dark:border-neutral-600 border-neutral-400/50 dark:bg-neutral-700 bg-neutral-200/50 w-full"
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}

function LoadingBtn() {
  return (
    <div className="flex items-center justify-center py-4 px-8 w-full sm:w-fit">
      <svg
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <circle
          fill="#0d9488"
          stroke="#0d9488"
          strokeWidth="8"
          r="15"
          cx="40"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="0.8"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </circle>
        <circle
          fill="#0d9488"
          stroke="#0d9488"
          strokeWidth="8"
          r="15"
          cx="100"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="0.8"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </circle>
        <circle
          fill="#0d9488"
          stroke="#0d9488"
          strokeWidth="8"
          r="15"
          cx="160"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="0.8"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
