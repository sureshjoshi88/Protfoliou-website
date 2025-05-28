import React from 'react'

const Contact = () => {
  return (
    <div className='mt-16 p-1'>
         <p>I d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi — feel free to drop a message.</p>
      <div className='grid md:grid-cols-2 pt-10'>
        <div className='p-3 flex justify-center items-center'>
           
       <div>
            <a className='text-2xl font-semibold mt-2' href='/'>📧 Email: joshisuresh123u@gmail.com  </a><br/>
            <a className='text-2xl font-semibold mt-2' href='/'>📞 Phone: 8824365208   </a><br/>
            <a className='text-2xl font-semibold mt-2' href='https://github.com/sureshjoshi88 '  target="_blank">🔗 GitHub </a><br/>
            <a className='text-2xl font-semibold mt-2' href='https://linkedin.com/in/suresh-joshi-17a886314'  target="_blank">🔗 LinkedIn </a>
       </div>
        </div>
        <div className='p-2'>
            <form action="">
               <div>
                 <label htmlFor='text' className='ps-1'>Name</label><br/>
                <input type="text" id='text' className='border w-full p-2 rounded-3xl' placeholder='Enter Your Name'  required/>
               </div>
               <div className='mt-2'>
                <label htmlFor='email' className='ps-1'>Email</label><br/>
                <input type="email" id='email' className='border w-full p-2 rounded-3xl' placeholder='Enter Your Email'  required/>
               </div>
                <div className='mt-2'>
                  <label htmlFor='textarea' className='ps-1'>Message</label><br/>
                <textarea name="" id="textarea" className='w-full rounded-2xl border p-1' rows={5} placeholder='Enter your message'></textarea>
                </div>
                
                <button type='submit'className='rounded-3xl w-full border bg-green-600 text-white p-2 mt-2'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
