
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="container py-8">
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className="p-6 h-full">
            <h2 className="text-xl font-medium mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please provide details about your inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button
                type="submit" 
                className="w-full bg-brand hover:bg-brand-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
        
        <div className="flex flex-col gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-medium mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-brand/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    123 Commerce Street<br />
                    Suite 500<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567<br />
                    Monday to Friday, 9am to 6pm PST
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    support@nexusshop.example<br />
                    sales@nexusshop.example
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 flex-1">
            <h2 className="text-xl font-medium mb-4">Business Hours</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-2">Customer Support</h3>
              <p className="text-muted-foreground">
                Our team is here to help! For fastest response, 
                please contact us during business hours or use our 
                online form.
              </p>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-12">
        <h2 className="text-xl font-medium mb-4">Find Us</h2>
        <div className="w-full h-80 bg-muted rounded-lg flex items-center justify-center">
          {/* In a real app, you would embed a Google Map or similar here */}
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Interactive map would be embedded here</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-xl font-medium mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {[
            {
              question: "What are your shipping times?",
              answer: "Most orders ship within 1-2 business days. Standard shipping typically takes 3-5 business days to arrive after shipping."
            },
            {
              question: "How can I track my order?",
              answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also view your order status in your account dashboard."
            },
            {
              question: "What is your return policy?",
              answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Please see our Returns & Refunds page for more details."
            },
            {
              question: "Do you ship internationally?",
              answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
