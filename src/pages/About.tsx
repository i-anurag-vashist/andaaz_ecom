import { Separator } from "../components/ui/separator";

const About = () => {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <div 
          className="h-64 md:h-80 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop')" 
          }}
        ></div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About NexusShop</h1>
              <p className="text-lg opacity-90">
                We're on a mission to provide quality products at affordable prices, 
                with exceptional customer service every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <div className="space-y-4">
            <p>
              Founded in 2020, NexusShop began with a simple idea: make shopping easy, enjoyable, 
              and accessible to everyone. What started as a small operation has quickly grown into 
              a trusted online destination for thousands of customers worldwide.
            </p>
            <p>
              Our journey has been shaped by a commitment to quality, affordability, and exceptional 
              customer service. We've carefully built relationships with trusted suppliers and manufacturers 
              to ensure every product we offer meets our high standards.
            </p>
            <p>
              Today, we continue to expand our product offerings while staying true to our core values. 
              We believe in transparency, sustainability, and creating meaningful relationships with our customers.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div 
            className="w-full h-64 md:h-80 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop')" }}
          ></div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-muted rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We never compromise on quality. Every product undergoes rigorous testing and 
              quality checks before reaching our customers.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Affordability</h3>
            <p className="text-muted-foreground">
              We believe great products shouldn't break the bank. Our efficient operations 
              allow us to offer competitive prices without sacrificing quality.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Customer Focus</h3>
            <p className="text-muted-foreground">
              Our customers are at the heart of everything we do. We're committed to 
              providing exceptional service and support at every step.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Our Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
            },
            {
              name: "Sarah Chen",
              role: "Head of Product",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
            },
            {
              name: "Michael Rodriguez",
              role: "Customer Experience",
              image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop"
            },
            {
              name: "Priya Sharma",
              role: "Operations Manager",
              image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
              </div>
              <h3 className="font-medium text-lg">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "I've been shopping with NexusShop for over a year now and I'm consistently impressed with their quality and service.",
              author: "Jamie L.",
              location: "New York, NY"
            },
            {
              quote: "Fast shipping, great prices, and excellent customer support. What more could you ask for? NexusShop is my go-to for online shopping.",
              author: "Robert T.",
              location: "Austin, TX"
            },
            {
              quote: "I love the variety of products and how easy it is to find exactly what I need. The checkout process is smooth and hassle-free.",
              author: "Michelle K.",
              location: "Seattle, WA"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
              <div className="text-brand mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-4">{testimonial.quote}</p>
              <p className="font-medium">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
