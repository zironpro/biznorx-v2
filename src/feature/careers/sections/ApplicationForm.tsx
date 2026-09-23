"use client"

import { useState, useRef } from "react"
import { UploadCloud, CheckCircle2, Star, TrendingUp, Heart, FileText, X } from "lucide-react"

export function ApplicationForm() {
  const [success, setSuccess] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(true)
    setFile(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      const validExtensions = ['.pdf', '.doc', '.docx']
      
      const fileExtension = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase()
      
      if (validTypes.includes(selectedFile.type) || validExtensions.includes(fileExtension)) {
        setFile(selectedFile)
      } else {
        alert("Please upload a PDF or DOCX file.")
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      }
    }
  }

  const removeFile = (e: React.MouseEvent) => {
    e.preventDefault()
    setFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <section className="w-full bg-neutral-50 relative -mt-10 rounded-t-[3rem] z-20 py-12">
      <div className="container-master px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left: Benefits & Information */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight mb-6">
              Why submit your profile to BiznorX?
            </h2>
            <p className="text-slate-600 mb-10 font-medium leading-relaxed">
              We work with the world's leading organizations to fill roles that are often never advertised publicly. By joining our network, you gain priority access to these exclusive opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full bg-biznorx-red/10 flex items-center justify-center shrink-0 group-hover:bg-biznorx-red transition-colors duration-300">
                  <Star className="w-5 h-5 text-biznorx-red group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-biznorx-navy mb-2">Exclusive Opportunities</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Access unlisted executive and technical roles before they hit the open market.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full bg-biznorx-red/10 flex items-center justify-center shrink-0 group-hover:bg-biznorx-red transition-colors duration-300">
                  <TrendingUp className="w-5 h-5 text-biznorx-red group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-biznorx-navy mb-2">Career Mapping</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">We don't just find you a job, we consult with you to map out your long-term career trajectory.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full bg-biznorx-red/10 flex items-center justify-center shrink-0 group-hover:bg-biznorx-red transition-colors duration-300">
                  <Heart className="w-5 h-5 text-biznorx-red group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-biznorx-navy mb-2">Absolute Confidentiality</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Your profile is kept strictly confidential and is never shared with an employer without your explicit consent.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Application Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-biznorx-navy/5 border border-neutral-100">
              
              {success ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-biznorx-navy tracking-tight mb-4">Application Received</h2>
                  <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-10">
                    Thank you for trusting BiznorX. Our intelligent systems have received your profile and will start the matching process immediately.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="bg-biznorx-navy text-white text-sm font-bold px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-lg"
                  >
                    Submit Another Profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="pb-6 border-b border-neutral-100 mb-2">
                    <h3 className="text-2xl font-bold text-biznorx-navy mb-1">Your Profile</h3>
                    <p className="text-sm text-slate-500">Submit your details to enter our talent pool.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                      <input type="text" required className="w-full bg-neutral-50/50 border border-neutral-200 focus:border-biznorx-red focus:ring-4 focus:ring-biznorx-red/10 rounded-lg px-4 py-3.5 outline-none transition-all text-sm font-medium" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                      <input type="email" required className="w-full bg-neutral-50/50 border border-neutral-200 focus:border-biznorx-red focus:ring-4 focus:ring-biznorx-red/10 rounded-lg px-4 py-3.5 outline-none transition-all text-sm font-medium" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contact Number</label>
                      <input type="tel" required className="w-full bg-neutral-50/50 border border-neutral-200 focus:border-biznorx-red focus:ring-4 focus:ring-biznorx-red/10 rounded-lg px-4 py-3.5 outline-none transition-all text-sm font-medium" placeholder="+91 9876543210" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">City</label>
                      <input type="text" required className="w-full bg-neutral-50/50 border border-neutral-200 focus:border-biznorx-red focus:ring-4 focus:ring-biznorx-red/10 rounded-lg px-4 py-3.5 outline-none transition-all text-sm font-medium" placeholder="Current City" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Industry Category</label>
                      <select required className="w-full bg-neutral-50/50 border border-neutral-200 focus:border-biznorx-red focus:ring-4 focus:ring-biznorx-red/10 rounded-lg px-4 py-3.5 outline-none transition-all text-sm font-medium text-slate-600">
                        <option value="">Select Category</option>
                        <option value="IT">Technology & IT</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance">Banking & Finance</option>
                        <option value="Engineering">Engineering & Manufacturing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Upload Resume (PDF/DOCX)</label>
                    
                    {!file ? (
                      <div className="border-2 border-dashed border-neutral-200 rounded-lg p-8 md:p-10 text-center hover:bg-biznorx-red/5 hover:border-biznorx-red transition-all cursor-pointer relative group">
                        <input 
                          type="file" 
                          required
                          ref={fileInputRef}
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                        />
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-12 h-12 bg-white text-neutral-400 group-hover:text-biznorx-red rounded-full flex items-center justify-center shadow-sm border border-neutral-100 transition-all">
                            <UploadCloud className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-biznorx-navy mb-1 group-hover:text-biznorx-red transition-colors">Click to Upload or Drag & Drop</p>
                            <p className="text-xs text-slate-500">PDF or DOCX files only (Max 5MB)</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="border border-neutral-200 rounded-lg p-4 flex items-center justify-between bg-neutral-50">
                        <div className="flex items-center gap-4 overflow-hidden">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                            <FileText className="w-5 h-5 text-biznorx-red" />
                          </div>
                          <div className="truncate">
                            <p className="text-sm font-bold text-slate-800 truncate">{file.name}</p>
                            <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <button 
                          onClick={removeFile}
                          className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm shrink-0 ml-4"
                          title="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  <button type="submit" className="w-full bg-biznorx-navy text-white font-bold text-sm py-4 rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-md mt-4">
                    Securely Submit Profile
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
