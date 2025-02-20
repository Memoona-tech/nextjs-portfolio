"use client";
import React, { ChangeEvent, FormEvent, useState  } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Toast } from "./ui/toast";
import SuccessMessage from "./successMessage";


const ContactForm = () => {
  const [success , setSuccess] = useState(false);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
    Service: "",
  });

  const handleSelectChange = (value:string) =>{    
    setFormData((prevData) => ({
        ...prevData,
        Service: value,
    }));
}

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
        setIsLoading(true);
        if(!formData.Name.trim() || !formData.Email.trim()){
            Toast({
                title:"Error: Something is wrong",
                
                variant:"destructive",
            });
            return;
        }
    
        const form = new FormData();
        const currentDateTime = new Date().toLocaleString();
        form.append('Name', formData.Name);
        form.append('Email', formData.Email);
        form.append('Address', formData.Address);
        form.append('Message', formData.Message);
        form.append('Service', formData.Service);
        form.append('DateTime', currentDateTime);
      
        const response = await fetch('https://getform.io/f/aejrjgdb' ,{

            method: 'POST',
            body:form,
        } );
        if(response?.ok){
            setSuccess(true)
            setStatus("Success! Your message has sent successfully!");
            setFormData({
                Name: "",
                Email: "",
                Phone: "",
                Address: "",
                Message: "",
                Service: "",
            })
        }else{
            setStatus("Error! Unable to send message.");
        }
      }catch(error){
        console.error("Data submitting error",error);
        setStatus("Error! Something went wrong");
    }finally{
        setIsLoading(false);
    };
  }
  return (
    <div className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">
        Let&apos;s work together
      </h3>
      <p className="text-white/80">
        If you wanna get in touch, talk to me about a project collaboration or have any query, feel free to fill out the form below or drop an inbox.
      </p>
     <>
        {success ? <SuccessMessage status={status} /> :  (<form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Input
              type="text"
              id="Name"
              name="Name"
              required
              placeholder="Your name"
              value={formData.Name}
              onChange={handleChange}
              disabled={isLoading}
              className="disabled:bg-white/10"
            />

            <Input
              type="mail"
              id="Email"
              name="Email"
              required
              placeholder="Email address"
              value={formData.Email}
              onChange={handleChange}
              disabled={isLoading}
              className="disabled:bg-white/10"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Input
              type="text"
              id="Phone"
              name="Phone"
              placeholder="Phone number"
              value={formData.Phone}
              onChange={handleChange}
              disabled={isLoading}
              className="disabled:bg-white/10"
            />

            <Input
              type="text"
              id="Address"
              name="Address"
              placeholder="Address"
              value={formData.Address}
              onChange={handleChange}
              disabled={isLoading}
              className="disabled:bg-white/10"
            />
          </div>

          <Textarea
            name="Message"
            id="Message"
            placeholder="Text here"
            required
            rows={6}
            value={formData.Message}
            onChange={handleChange}
            disabled={isLoading}
            className="disabled:bg-white/10"
          />

          <Select onValueChange={handleSelectChange} disabled={isLoading}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="text-white border-white/10 bg-bodyColor font-semibold">
              <SelectGroup>

                <SelectItem value="Asset Management">Asset Management</SelectItem>

              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            disabled={isLoading}
            type="submit"
            className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect "
          >
            {isLoading ? "Submitting message..." : "Send message"}
          </Button>
        </div>
      </form>) }
     </>

    </div>
  );
};

export default ContactForm;


