import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { getNames, getCode, getCallingCode } from 'country-list';
import "../index.css"
// Get and sort country options
const countryOptions = getNames()
  .map(country => ({
    value: country,
    label: country,
    code: getCode(country).toLowerCase()
  }))
  .sort((a, b) => a.value.localeCompare(b.value));

const EmployerSignupForm = () => {
    const { register, handleSubmit, setValue, 
     //need  for attension with getCalling import and watch  
    formState: { errors }, watch } = useForm();
    const [submitted, setSubmitted] = useState(false);
    const [phone, setPhone] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('us');
    const [phoneError, setPhoneError] = useState(false);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number email and pasword validation

    const onSubmit = data => {
        if (validatePhoneNumber(phone)) {
            data.phoneNumber = phone;
            console.log(data);
            setSubmitted(true);
        } else {
            setPhoneError(true);
        }
    };

    const handleCountryChange = (option) => {
        setValue('country', option.value);
        setSelectedCountry(option.code);
    };

    const validatePhoneNumber = (value) => {
        const cleanedValue = value.replace(/[^0-9]/g, '');
        const phoneLength = cleanedValue.length;
        // lets say the maximum and minimum lengths for phone numbers as per country codes
        const minPhoneLengths = {
            us: 10,
            gb: 10,
            //Need for other countries and their  respective minimum phon numbers lengths here
        };
        const maxPhoneLengths = {
            us: 11,
            gb: 11,
            // Need for other countries and their respective max lengths here
        };

        const { min, max } = {
            min: minPhoneLengths[selectedCountry] || 8,
            max: maxPhoneLengths[selectedCountry] || 15,
        };

        return phoneLength >= min && phoneLength <= max;
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h2 className="text-2xl font-bold mb-4">Check your email to verify your account!</h2>
                <p>We have sent a verification link to your email. Please check your inbox and click the link to verify your email address.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl font-bold mb-6 text-center">Sign up as a recruiter</h2>
                <p className="text-center mb-6">Register your account and get started</p>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="companyname">Company Name</label>
                    <input type="text" {...register('companyName', { required: true })} className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your company name"  id="companyname" name="companyname"/>
                    {errors.companyName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="companyaddress">Company's Address</label>
                    <input type="text" {...register('companyAddress', { required: true })} className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your company address" id="companyaddress" name="companyAddress" />
                    {errors.companyAddress && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="company-email">Company's Email Address</label>
                    <input type="email" id ="company-email" {...register('companyEmail', { required: true, pattern: emailPattern })} className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your company email" name="companyEmail" />
                    {errors.companyEmail && errors.companyEmail.type === 'required' && <span className="text-red-500">This field is required</span>}
                    {errors.companyEmail && errors.companyEmail.type === 'pattern' && <span className="text-red-500">Invalid email address</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="name">Full Name</label>
                    <input type="text" {...register('fullName', { required: true })} className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your name"  id="name" name="name"/>
                    {errors.fullName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="Country">Country</label>
                    <Select
                        id="Country"
                        name="country"
                        options={countryOptions}
                        onChange={handleCountryChange}
                        className="mt-1"
                        classNamePrefix="react-select"
                        
                    />
                    {errors.country && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="phone">Phone Number</label>
                    <PhoneInput
                       id="phone"
                       name="phonenumber"
                        country={selectedCountry}
                        value={phone}
                        onChange={(phone) => {
                            setPhone(phone);
                            setPhoneError(false);
                        }}
                        containerClass="mt-1 w-full"
                        inputClass="w-full p-2 border rounded-md"
                        countrySelectProps={{
                            className: 'react-select-container',
                            classNamePrefix: 'react-select'
                        }} 
                    />
                    {phoneError && <span className="text-red-500">Invalid phone number length for {selectedCountry.toUpperCase()}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="pass">Password</label>
                    <input type="password" {...register('password', { required: true, pattern: passwordPattern })} id="pass" name="password" className="mt-1 p-2 w-full border rounded-md" placeholder="********" />
                    {errors.password && errors.password.type === 'required' && <span className="text-red-500">This field is required</span>}
                    {errors.password && errors.password.type === 'pattern' && <span className="text-red-500">Password must be at least 8 characters long and include at least one letter and one number</span>}
                       </div><div className="mb-4">
                    <label className="inline-flex items-center" htmlFor="check">
                        <input type="checkbox" {...register('terms', { required: true })} className="form-checkbox" id="check" />
                        <span className="ml-2">I accept the terms of services, privacy policy, terms and conditions</span>
                    </label>
                    {errors.terms && <span className="text-red-500">This field is required</span>}
                </div>
                <button type="submit"id="btn2" className="w-full bg-purple-900 text-white py-2 px-4 rounded-md">Create account</button>
                <div className="text-center mt-4">
                    <p>Looking for female talents? <a href="#" className="text-purple-900">Apply as a Recruiter</a></p>
                </div>
                    <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-400"></div>
                    <span className="flex-shrink text-sm text-gray-500 px-4">Or</span>
                    <div className="flex-grow h-px bg-gray-400"></div>
                </div>
                <button id ="mybtn"
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

export default EmployerSignupForm;
