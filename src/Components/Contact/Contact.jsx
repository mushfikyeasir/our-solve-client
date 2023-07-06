import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import axios from "axios";


const Contact = () => {
	const { register, handleSubmit, reset } = useForm();
	const [submitting, setSubmitting] = useState(false);
	const onSubmit = ({ userName, email, subject, message }) => {
		const data = {
			userName,
			email,
			subject,
			message,
			submitTime: new Date(),
		};
		setSubmitting(true);
		axios
			.post(`https://fierce-caverns-90976.herokuapp.com/email`, data)
			.then(function(response) {
				setSubmitting(false);
				Swal.fire({
					icon: "success",
					title: "Your Mail Sent Successfully",
					showConfirmButton: true,
					timer: 1500,
				});
				reset();
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	return (
		<div
			className='  grid  
    grid-cols-1 
    md:grid-cols-1 
    xl:grid-cols-2 
    lg:grid-cols-2 
    md:px-16 
    lg:px-16 
    xl:px-16 
    py-16 
    mx-auto 
    text-gray-900 bg-slate-800'>
			<form onSubmit={handleSubmit(onSubmit)} method='post'>
				<div>
					<h1 className='text-left text-3xl uppercase font-semibold md:mb-9 mb-5 text-red-500'>
						Contact Us
					</h1>
					<h2>Have a question or just want to say hi? We'd love to hear from you.</h2>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
					<div className='text-left'>
						<input
							className='w-full bg-gray-100 text-gray-900 mt-2 py-3 px-4 rounded-lg'
							type='text'
							placeholder='Full Name'
							{...register("userName", { required: true })}
						/>
					</div>
					<div className='text-left'>
						<input
							className='w-full bg-gray-100 text-gray-900 mt-2 py-3 px-4 rounded-lg'
							type='email'
							placeholder='Email'
							{...register("email", { required: true })}
						/>
					</div>
				</div>
				<div className='mt-3 text-left'>
					<input
						className='w-full bg-gray-100 text-gray-900 mt-2 py-3 px-4 rounded-lg'
						type='text'
						placeholder='Subject'
						{...register("subject", { required: true })}
					/>
				</div>
				<div className='mt-3 text-left'>
					<textarea
						className='w-full h-32 bg-gray-100 text-gray-900 mt-2 py-3 px-4 rounded-lg'
						placeholder='Message'
						{...register("message", { required: true })}></textarea>
				</div>
				<div className='mt-3 text-left'>
					<button
						className='uppercase text-sm tracking-wide bg-gray-900 text-gray-100 py-3 px-4 hover:bg-gray-800 rounded-lg w-64'
						type='submit'>
						Send Message
					</button>
				</div>
			</form>
			<div
				className='bg-white py-12 
      mt-6
      mx-4 
      lg:mx-20 
      xl:mx-20 
      md:mx-20 
      lg:mt-0 
      xl:mt-0 
      md:mt-0
      rounded-lg 
      drop-shadow-2xl'>
				<div className='text-left px-8'>
					<div className='flex items-baseline'>
						<div>
              <svg className='text-lg text-red-500 pr-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
						</div>
						<div>
							<h2 className='text-lg font-bold'>New York Office</h2>
							<span className='text-sm'>
								Maypole Crescent 70-80 Upper St Norwich NR2 1LT
							</span>
						</div>
					</div>
				</div>
				<div className='text-left px-8 mt-10'>
					<div className='flex items-baseline'>
						<div>
              <svg className='text-lg text-red-500 pr-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
						</div>
						<div>
							<h2 className='text-lg font-bold'>Email Us Directly</h2>
							<span className='text-sm'>
								support@eduBuddies.com <br />
								info@eduBuddies.com
							</span>
						</div>
					</div>
				</div>
				<div className='text-left px-8 mt-10'>
					<div className='flex items-baseline'>
						<div>
              <svg className='text-lg text-red-500 pr-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
						</div>
						<div>
							<h2 className='text-lg font-bold'>Phone</h2>
							<span className='text-sm'>
								+(224) 762 442 32 <br />
								+(426) 742 26 44
							</span>
						</div>
					</div>
				</div>
				<div className='text-left px-8 mt-10'>
					<div className='flex items-baseline'>
						
            <svg className='text-lg text-white pr-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
						<div>
							<h2 className='text-lg font-bold'>FOLLOW US</h2>
							<div className='mt-4 flex gap-3'>
								<a
									href='https://img.freepik.com/free-photo/pile-3d-facebook-logos_1379-875.jpg?w=740'
									target='_blank'
									rel='noopener noreferrer'
									class='bg-blue-300 hover:bg-blue-500 px-3 py-2 text-white inline-flex items-center space-x-2 rounded'>
                  <svg className='text-xl text-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
								</a>
								<a
									href='https://img.freepik.com/free-photo/pile-3d-twitter-logos_1379-879.jpg?w=740'
									target='_blank'
									rel='noopener noreferrer'
									class='bg-cyan-200 hover:bg-cyan-400 px-3 py-2 text-white inline-flex items-center space-x-2 rounded'>
                  <svg className='text-xl text-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
								</a>
								<a
									href='https://img.freepik.com/free-photo/pile-3d-pinterest-logos_1379-877.jpg?w=740'
									target='_blank'
									rel='noopener noreferrer'
									class='bg-rose-300 hover:bg-rose-500 px-3 py-2 text-white inline-flex items-center space-x-2 rounded'>
                  <svg className='text-xl text-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{submitting }
		</div>
	);
};

export default Contact;

// import React from 'react'

// function Contact() {
//   return (
// 	<div>Contact</div>
//   )
// }

// export default Contact