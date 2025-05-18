import React from 'react'

const Contact = () => {
  return (
    <div className='mt-16'>
         <p>I’d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi — feel free to drop a message.</p>
      <div className='grid grid-cols-2 pt-10'>
        <div className='p-3'>
           
            <a href='/'>📧 Email: joshisuresh123u@gmail.com  </a><br></br>
            <a href='/'>📞 Phone: 8824365208   </a><br/>
            <a href='https://github.com/sureshjoshi88 '  target="_blank">🔗 GitHub </a><br/>
            <a href='https://linkedin.com/in/suresh-joshi-17a886314'  target="_blank">🔗 LinkedIn </a>
        </div>
        <div className='p-2'>
            <form action="">
               <div>
                 <label>Name</label><br/>
                <input type="text" className='border w-100 p-1 rounded-2xl' placeholder='Enter Your Name'  required/>
               </div>
               <div className='mt-2'>
                <label>Email</label><br/>
                <input type="email" className='border w-100 p-1 rounded-2xl' placeholder='Enter Your Email'  required/>
               </div>
                <div className='mt-2'>
                        <label htmlFor="">Message</label><br/>
                <textarea name="" id="" className='w-100 rounded border p-1' rows={5} placeholder='Enter your message'></textarea>
                </div>
                
                <button type='submit'className='rounded-3xl w-100 border bg-green-600 text-white p-2 mt-2'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
