import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { ScrollAnimatedElement } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import VinFinText from "@/components/VinFinText";

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setContactForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <ScrollAnimatedElement animation="slide-in-down">
        <section className="bg-gradient-to-r from-primary to-secondary py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 break-words">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto break-words">
              Get in touch with our expert team. We're here to help you achieve your financial goals.
            </p>
          </div>
        </section>
      </ScrollAnimatedElement>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollAnimatedElement animation="slide-in-left">
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <MapPin className="h-6 w-6 mr-2" />
                      Get in Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-primary">Address</h3>
                        <p className="text-muted-foreground">
                          <VinFinText showConsultancy consultancyText="Consultancy Services" className="text-muted-foreground" consultancyClassName="text-muted-foreground" /><br />
                          Hyderabad, Telangana, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-primary">Phone</h3>
                        <p className="text-muted-foreground">+91-9876543210</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-primary">Email</h3>
                        <p className="text-muted-foreground">info@vinfinconsultancy.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-primary">Business Hours</h3>
                        <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>

              {/* Social Media */}
              <ScrollAnimatedElement animation="slide-in-left" delay={200}>
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <a 
                        href="https://facebook.com/vinfin" 
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://instagram.com/vinfin" 
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://linkedin.com/company/vinfin" 
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://twitter.com/vinfin" 
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>
            </div>

            {/* Contact Form */}
            <ScrollAnimatedElement animation="slide-in-right">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Have a question or need assistance? We'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <ScrollAnimatedElement animation="fade-in-up" delay={200}>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          className="transition-all duration-200 focus:scale-[1.02]"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          required
                        />
                      </div>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement animation="fade-in-up" delay={300}>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          className="transition-all duration-200 focus:scale-[1.02]"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          required
                        />
                      </div>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement animation="fade-in-up" delay={400}>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          className="transition-all duration-200 focus:scale-[1.02]"
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          placeholder="How can we help you?"
                          rows={6}
                          required
                        />
                      </div>
                    </ScrollAnimatedElement>

                    <ScrollAnimatedElement animation="scale-in" delay={500}>
                      <Button type="submit" size="lg" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target text-base sm:text-lg py-3">
                        Send Message
                      </Button>
                    </ScrollAnimatedElement>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;