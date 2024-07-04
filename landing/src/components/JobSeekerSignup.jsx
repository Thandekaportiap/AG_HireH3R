import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getData } from 'country-list';
import { scroller } from 'react-scroll';

const africanCountryCodes = [
  "DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CD", 
  "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN", "GW", "CI", 
  "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MA", "MZ", 
  "NA", "NE", "NG", "CG", "RE", "RW", "SH", "ST", "SN", "SC", "SL", "SO", 
  "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "EH", "ZM", "ZW"
];

const africanCountries = getData()
  .filter(country => africanCountryCodes.includes(country.code))
  .sort((a, b) => a.name.localeCompare(b.name));

//  the minimum and maximum length for phone numbers per african country code
const phoneNumberLengths = {
  DZ: { min: 9, max: 9 }, AO: { min: 9, max: 9 }, BJ: { min: 8, max: 8 }, BW: { min: 8, max: 8 },
  BF: { min: 8, max: 8 }, BI: { min: 8, max: 8 }, CV: { min: 7, max: 7 }, CM: { min: 9, max: 9 },
  CF: { min: 8, max: 8 }, TD: { min: 8, max: 8 }, KM: { min: 7, max: 7 }, CD: { min: 9, max: 9 },
  DJ: { min: 8, max: 8 }, EG: { min: 10, max: 10 }, GQ: { min: 9, max: 9 }, ER: { min: 7, max: 7 },
  SZ: { min: 8, max: 8 }, ET: { min: 9, max: 9 }, GA: { min: 8, max: 8 }, GM: { min: 7, max: 7 },
  GH: { min: 9, max: 9 }, GN: { min: 9, max: 9 }, GW: { min: 7, max: 7 }, CI: { min: 8, max: 8 },
  KE: { min: 10, max: 10 }, LS: { min: 8, max: 8 }, LR: { min: 7, max: 7 }, LY: { min: 10, max: 10 },
  MG: { min: 9, max: 9 }, MW: { min: 9, max: 9 }, ML: { min: 8, max: 8 }, MR: { min: 8, max: 8 },
  MU: { min: 8, max: 8 }, YT: { min: 9, max: 9 }, MA: { min: 9, max: 9 }, MZ: { min: 9, max: 9 },
  NA: { min: 8, max: 8 }, NE: { min: 8, max: 8 }, NG: { min: 10, max: 10 }, CG: { min: 9, max: 9 },
  RE: { min: 9, max: 9 }, RW: { min: 9, max: 9 }, SH: { min: 4, max: 4 }, ST: { min: 7, max: 7 },
  SN: { min: 9, max: 9 }, SC: { min: 7, max: 7 }, SL: { min: 8, max: 8 }, SO: { min: 8, max: 8 },
  ZA: { min: 9, max: 9 }, SS: { min: 9, max: 9 }, SD: { min: 9, max: 9 }, TZ: { min: 9, max: 9 },
  TG: { min: 8, max: 8 }, TN: { min: 8, max: 8 }, UG: { min: 9, max: 9 }, EH: { min: 9, max: 9 },
  ZM: { min: 9, max: 9 }, ZW: { min: 9, max: 9 }
};

const JobSeekeSignup = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onSubmit = data => {
    console.log(data);
    alert('Registration Successful');
    scroller.scrollTo('profileCompletionSection', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5">Jobseeker Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="fullname">Full Name</label>
          <input
          id="fullName"
            name="fullName"
            {...register('fullName', { required: true })}
            className={`mt-1 block w-full p-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">Full Name is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700"htmlFor="email">Email Address</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address'
              }
            })}
            type="email"
            className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            id="email"
            name="Email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="country">Country of Origin</label>
          <Controller
            name="country"
            id="country"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={africanCountries.map(country => ({ value: country.code, label: country.name }))}
                onChange={handleCountryChange}
                className="mt-1 block w-full"
                
                
              />
            )}
          />
          {errors.country && <p className="text-red-500 text-xs mt-1">Country is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">Phone Number</label>
          <Controller
            name="phone"
            id="phoneNumer"
            control={control}
            rules={{
              required: 'Phone Number is required',
              minLength: {
                value: selectedCountry ? phoneNumberLengths[selectedCountry.value].min : 1,
                message: `Phone number must be at least ${selectedCountry ? phoneNumberLengths[selectedCountry.value].min : 1} digits`
              },
              maxLength: {
                value: selectedCountry ? phoneNumberLengths[selectedCountry.value].max : 15,
                message: `Phone number must be at most ${selectedCountry ? phoneNumberLengths[selectedCountry.value].max : 15} digits`
              }
            }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={selectedCountry ? selectedCountry.value.toLowerCase() : ''}
                onlyCountries={africanCountries.map(country => country.code.toLowerCase())}
                countryCodeEditable={false}
                placeholder="Enter phone number"
                inputStyle={{ width: '100%' }}
                containerStyle={{ width: '100%' }}
                
              />
            )}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message: 'Password must contain at least one letter and one number'
              }
            })}
            type="password"
            className={`mt-1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            id="password"
            name="password"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
          
          <input
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: value => value === watch('password') || 'Passwords do not match'
            })}
            type="password 
            "id='confirmPassword' 
           
            name="confirmPassword"
            className={`mt-1 block w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
        </div>

        <div className="mb-4 flex items-center">
          <input
            {...register('africanWoman', { required: true })}
            type="checkbox"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            id="woman"
            name="africanWoman"
          />
          <label className="ml-2 block text-sm text-gray-900" htmlFor="woman">I am an African woman</label>
        </div>
        {errors.africanWoman && <p className="text-red-500 text-xs mt-1">You must be an African woman</p>}
        <div className="mb-4">
          <label className="inline-flex items-center" for ="check">
              <input type="checkbox" {...register('terms', { required: true })} className="form-checkbox"  id="checkbox"/>
              <span className="ml-2">I accept the terms of services, privacy policy, terms and conditions</span>
          </label>
          {errors.terms && <span className="text-red-500">This field is required</span>}
       </div>
          <button type="submit" id="btn" className="w-full bg-purple-900 text-white py-2 px-4 rounded-md">Create account</button>
          <div className="text-center mt-4">
          <p>Looking for female talents? <a href="#" className="text-purple-900">Apply as a Recruiter</a></p>
      </div>
      <div className="flex items-center my-4">
          <div className="flex-grow h-px        bg-gray-400"></div>
           <span className="flex-shrink text-sm text-gray-500 px-4">Or</span>
           <div className="flex-grow h-px bg-gray-400"></div>
        </div>
        <button
        id="button"
          onClick={() => window.location.href = 'https://www.google.com'}
          className="flex items-center text-blue-600 hover:underline"
            >
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="mr-2" alt="Google" />
          Sign Up with Google
      </button>

      </form>
    </div>
  );
};

export default JobSeekeSignup;
