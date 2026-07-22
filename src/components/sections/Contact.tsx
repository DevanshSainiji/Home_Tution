"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Phone, Clock, Send, CheckCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  studentName: z.string().min(2, "Student name is required"),
  className: z.string().min(1, "Please select a class"),
  subject: z.string().min(1, "Please select a subject"),
  area: z.string().min(2, "Area is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        "service_hvfg2we",
        "template_gbq9j11",
        {
          parent_name: data.parentName,
          student_name: data.studentName,
          class_name: data.className,
          subject: data.subject,
          area: data.area,
          phone: data.phone,
          message: data.message || "No additional message.",
        },
        "wZEI2QmdsOJ_A8S7t"
      );

      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Email send failed:", err);
      setError("Failed to send your message. Please try again or contact us directly via WhatsApp/Call.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-transparent border-b border-border px-0 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors rounded-none font-medium placeholder:font-normal placeholder:text-text-muted";
  const labelClasses = "text-xs font-bold text-text-muted uppercase tracking-widest mb-1";

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Book a demo session or ask us anything. We're here to help."
            chapterNumber="07"
          />
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-0 mt-16 border border-border bg-card">
          {/* Contact Info (Orange Panel) */}
          <ScrollReveal delay={0.1} className="lg:w-[40%] bg-accent-primary text-primary p-8 md:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-heading font-bold mb-10">Direct Contact</h3>
              
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80 border-b border-primary/20 pb-2">Vijay Sir (Maths)</h4>
                  <div className="flex flex-col gap-3 font-medium">
                    <a href={`tel:+91${siteConfig.tutors.vijay.phone}`} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                      <Phone size={20} /> {siteConfig.tutors.vijay.phone}
                    </a>
                    <a href={`https://wa.me/91${siteConfig.tutors.vijay.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                      <WhatsAppIcon size={20} /> WhatsApp
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80 border-b border-primary/20 pb-2">Ashok Sir (Physics)</h4>
                  <div className="flex flex-col gap-3 font-medium">
                    <a href={`tel:+91${siteConfig.tutors.ashok.phone}`} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                      <Phone size={20} /> {siteConfig.tutors.ashok.phone}
                    </a>
                    <a href={`https://wa.me/91${siteConfig.tutors.ashok.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                      <WhatsAppIcon size={20} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-primary/20">
              <div className="flex items-start gap-4">
                <Clock size={24} className="shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">Teaching Hours</p>
                  <p className="text-sm opacity-90 font-medium">Mon–Sat: 7:00 AM – 9:00 PM</p>
                  <p className="text-sm opacity-90 font-medium">Sunday: 10:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2} className="lg:w-[60%] p-8 md:p-12 lg:p-16 bg-card">
            {isSuccess ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6 border border-[#25D366]/20">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-3xl font-bold font-heading text-text-primary mb-4">Message Sent!</h3>
                <p className="text-text-secondary text-lg font-serif italic mb-8">We will get back to you shortly.</p>
                <Button onClick={() => setIsSuccess(false)} variant="secondary" className="px-8">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 h-full justify-between">
                <div>
                  <h3 className="text-3xl font-heading font-bold mb-2">Request a Callback</h3>
                  <p className="text-text-secondary font-serif italic mb-8">Fill out the form below and we'll contact you.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div className="flex flex-col">
                      <label className={labelClasses}>Parent's Name</label>
                      <input 
                        {...register("parentName")}
                        className={inputClasses}
                        placeholder="e.g. Ramesh Kumar"
                      />
                      {errors.parentName && <span className="text-red-500 text-xs mt-1 font-medium">{errors.parentName.message}</span>}
                    </div>
                    <div className="flex flex-col">
                      <label className={labelClasses}>Student's Name</label>
                      <input 
                        {...register("studentName")}
                        className={inputClasses}
                        placeholder="e.g. Rahul"
                      />
                      {errors.studentName && <span className="text-red-500 text-xs mt-1 font-medium">{errors.studentName.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div className="flex flex-col">
                      <label className={labelClasses}>Class</label>
                      <select 
                        {...register("className")}
                        className={cn(inputClasses, "appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23999999%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_10px_center] bg-[length:10px]")}
                      >
                        <option value="">Select Class</option>
                        <option value="11th">Class 11th</option>
                        <option value="12th">Class 12th</option>
                        <option value="Dropper">Dropper</option>
                      </select>
                      {errors.className && <span className="text-red-500 text-xs mt-1 font-medium">{errors.className.message}</span>}
                    </div>
                    <div className="flex flex-col">
                      <label className={labelClasses}>Subject</label>
                      <select 
                        {...register("subject")}
                        className={cn(inputClasses, "appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23999999%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_10px_center] bg-[length:10px]")}
                      >
                        <option value="">Select Subject</option>
                        <option value="Mathematics">Mathematics (Vijay Sir)</option>
                        <option value="Physics">Physics (Ashok Sir)</option>
                        <option value="Both">Both Maths & Physics</option>
                      </select>
                      {errors.subject && <span className="text-red-500 text-xs mt-1 font-medium">{errors.subject.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div className="flex flex-col">
                      <label className={labelClasses}>Your Area</label>
                      <input 
                        {...register("area")}
                        className={inputClasses}
                        placeholder="e.g. Pratap Nagar"
                      />
                      {errors.area && <span className="text-red-500 text-xs mt-1 font-medium">{errors.area.message}</span>}
                    </div>
                    <div className="flex flex-col">
                      <label className={labelClasses}>Phone Number</label>
                      <input 
                        {...register("phone")}
                        type="tel"
                        className={inputClasses}
                        placeholder="10-digit mobile number"
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col mb-8">
                    <label className={labelClasses}>Message (Optional)</label>
                    <textarea 
                      {...register("message")}
                      rows={1}
                      className={cn(inputClasses, "resize-none")}
                      placeholder="Any specific requirement or query?"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full sm:w-auto px-8" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>Send Enquiry <Send size={18} className="ml-2" /></>
                    )}
                  </Button>
                  
                  {error && <p className="text-red-500 text-sm mt-4 font-medium">{error}</p>}
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
