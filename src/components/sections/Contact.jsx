import React,{useState} from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


export const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  function handleButton(e){
    setName("");
    setEmail("");
    setMessage("");
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center "
    >
      <RevealOnScroll>
        
        <div className="px-5 w-full min-w-[300px] md:w-[520px] lg:w-[600px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>

          <form action='https://getform.io/f/bejjmdka' method="POST" onSubmit={handleButton}>
            <div>
                <div>
                  <div className='my-5 '>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      placeholder="Name...." 
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded px-3 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                    />
                  </div>
                </div>

                <div>
                  <div className='my-5 '>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder="yourEmail@mail.com" 
                      className="w-full bg-white/5 border border-white/10 rounded px-3 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                    />
                  </div>
                </div>

                <div >
                  <div className='my-5 '>
                    <textarea  
                      name="message" 
                      id="message"
                      required
                      rows={6}
                      placeholder="Message...." 
                      value={message}
                      onChange={(e)=>setMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded px-3 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                    />
                  </div>
                </div>

                <div className='sm:col-span-2 '>
                  <button 
                    type='submit' 
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-blue-400  " 
                  > 
                      <p className="text-lg font-bold ">  Send Message </p>
                  </button>
                </div>

            </div>
          </form>

          <div className="icon-container mt-20 flex flex-row justify-center items-center gap-10 ">
            <a href="https://www.linkedin.com/in/kumar-sourav-225395247/" target="_blank" >
              <FaLinkedin size={30} className="hover:opacity-50" />
            </a>
            <a href="https://x.com/kumarsourav_tw" target="_blank" >
              <FaTwitter size={30} className="hover:opacity-50" />
            </a>
            <a href="https://github.com/kumar01dev" target="_blank" >
              <FaGithub size={30} className="hover:opacity-50" />
            </a>
          </div>

        </div>

      </RevealOnScroll>
    </section>
  );
};