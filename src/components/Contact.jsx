import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, {
      publicKey: publicKey,
    })
    .then(
      () => {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      },
      () => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-t-full blur-[100px] -z-10"></div>
      <div className="max-w-4xl mx-auto px-6">
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-display">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">Let's Work <span className="text-primary">Together</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-neutral-400 max-w-xl mx-auto text-base">
            I'm currently looking for new opportunities as a fresher in Data Science, AI/ML, or Data Analytics. Have a question or want to collaborate? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-stretch">
          {/* Info cards */}
          <div className="md:col-span-2 flex flex-col justify-between gap-6">
            <div className="bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col gap-6 h-full justify-center">
              <a href="mailto:saurabhvora27@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Email Me</p>
                  <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">saurabhvora27@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919974645560" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Call Me</p>
                  <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">+91 9974645560</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Location</p>
                  <p className="text-sm font-semibold text-white">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-neutral-900/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col gap-5 relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-neutral-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-neutral-950/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 placeholder:text-neutral-600 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-neutral-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-neutral-950/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 placeholder:text-neutral-600 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-neutral-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey Saurabh, I would love to chat about..."
                  className="w-full bg-neutral-950/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 placeholder:text-neutral-600 resize-none transition-all"
                />
              </div>

              <Magnetic className="w-full">
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full bg-white hover:bg-neutral-200 text-black font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {status === 'idle' && (
                    <>Send Message <Sparkles size={16} /></>
                  )}
                  {status === 'sending' && (
                    <>Sending Message...</>
                  )}
                  {status === 'sent' && (
                    <>Message Sent Successfully! 🎉</>
                  )}
                  {status === 'error' && (
                    <>Failed to Send. Try Again ⚠️</>
                  )}
                </button>
              </Magnetic>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
