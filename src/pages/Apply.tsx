import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimatedElement } from "@/hooks/useScrollAnimation";
import { CheckCircle, Users, GraduationCap } from "lucide-react";

const Apply = () => {
  const { toast } = useToast();
  const [consultancyForm, setConsultancyForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfConsultancy: "",
    message: ""
  });

  const [studentForm, setStudentForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: ""
  });

  const handleConsultancySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "We'll contact you within 24 hours to discuss your consultancy needs.",
    });
    setConsultancyForm({
      fullName: "",
      email: "",
      phone: "",
      areaOfConsultancy: "",
      message: ""
    });
  };

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and get back to you soon.",
    });
    setStudentForm({
      fullName: "",
      email: "",
      phone: "",
      courseInterest: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <ScrollAnimatedElement animation="slide-in-down">
        <section className="bg-gradient-to-r from-primary to-secondary py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 break-words">
              Start Your Journey With Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 break-words">
              Take the first step towards achieving your goals with expert guidance
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-primary-foreground/80 text-sm sm:text-base">
              <ScrollAnimatedElement animation="fade-in-up" delay={200}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Free Consultation</span>
                </div>
              </ScrollAnimatedElement>
              <ScrollAnimatedElement animation="fade-in-up" delay={400}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Expert Guidance</span>
                </div>
              </ScrollAnimatedElement>
              <ScrollAnimatedElement animation="fade-in-up" delay={600}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>24/7 Support</span>
                </div>
              </ScrollAnimatedElement>
            </div>
          </div>
        </section>
      </ScrollAnimatedElement>

      {/* Application Forms */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimatedElement animation="scale-in">
            <Tabs defaultValue="consultancy" className="w-full">
              <div className="flex justify-center mb-8 sm:mb-12 px-2">
                <TabsList className="grid w-full max-w-md grid-cols-2 h-auto sm:h-12 p-1">
                  <TabsTrigger value="consultancy" className="text-sm sm:text-base font-medium flex items-center gap-1 sm:gap-2 transition-all duration-300 hover:scale-105 py-2 sm:py-0">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">Business Enquiry</span>
                  </TabsTrigger>
                  <TabsTrigger value="student" className="text-sm sm:text-base font-medium flex items-center gap-1 sm:gap-2 transition-all duration-300 hover:scale-105 py-2 sm:py-0">
                    <GraduationCap className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">Student Enquiry</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="consultancy" className="mt-0">
                <ScrollAnimatedElement animation="slide-in-up" delay={200}>
                  <Card className="shadow-elegant border-0 bg-card overflow-hidden">
                    <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
                      <CardTitle className="text-2xl sm:text-3xl text-primary mb-3 break-words">Financial Consultancy Services</CardTitle>
                      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto break-words">
                        Get expert financial advice and business solutions tailored to your specific needs and goals.
                      </p>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <form onSubmit={handleConsultancySubmit} className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <ScrollAnimatedElement animation="fade-in-up" delay={300}>
                            <div className="space-y-3">
                              <Label htmlFor="fullName" className="text-base font-medium">Full Name</Label>
                              <Input
                                id="fullName"
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02]"
                                placeholder="Enter your full name"
                                value={consultancyForm.fullName}
                                onChange={(e) => setConsultancyForm({ ...consultancyForm, fullName: e.target.value })}
                                required
                              />
                            </div>
                          </ScrollAnimatedElement>
                          <ScrollAnimatedElement animation="fade-in-up" delay={400}>
                            <div className="space-y-3">
                              <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                              <Input
                                id="email"
                                type="email"
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02]"
                                placeholder="your.email@example.com"
                                value={consultancyForm.email}
                                onChange={(e) => setConsultancyForm({ ...consultancyForm, email: e.target.value })}
                                required
                              />
                            </div>
                          </ScrollAnimatedElement>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <ScrollAnimatedElement animation="fade-in-up" delay={500}>
                            <div className="space-y-3">
                              <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                              <Input
                                id="phone"
                                type="tel"
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02]"
                                placeholder="+91 98765 43210"
                                value={consultancyForm.phone}
                                onChange={(e) => setConsultancyForm({ ...consultancyForm, phone: e.target.value })}
                                required
                              />
                            </div>
                          </ScrollAnimatedElement>
                          <ScrollAnimatedElement animation="fade-in-up" delay={600}>
                            <div className="space-y-3">
                              <Label htmlFor="areaOfConsultancy" className="text-base font-medium">Service Required</Label>
                              <Input
                                id="areaOfConsultancy"
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02]"
                                value={consultancyForm.areaOfConsultancy}
                                onChange={(e) => setConsultancyForm({ ...consultancyForm, areaOfConsultancy: e.target.value })}
                                placeholder="Investment Planning, Business Advisory, etc."
                                required
                              />
                            </div>
                          </ScrollAnimatedElement>
                        </div>

                        <ScrollAnimatedElement animation="fade-in-up" delay={700}>
                          <div className="space-y-3">
                            <Label htmlFor="message" className="text-base font-medium">Tell Us About Your Requirements</Label>
                            <Textarea
                              id="message"
                              className="min-h-[120px] text-base resize-none transition-all duration-200 focus:scale-[1.02]"
                              value={consultancyForm.message}
                              onChange={(e) => setConsultancyForm({ ...consultancyForm, message: e.target.value })}
                              placeholder="Please describe your specific requirements and how we can help you..."
                            />
                          </div>
                        </ScrollAnimatedElement>

                        <ScrollAnimatedElement animation="scale-in" delay={800}>
                          <div className="text-center pt-4">
                            <Button type="submit" size="lg" className="px-8 sm:px-12 py-3 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto touch-target">
                              Submit Enquiry
                            </Button>
                          </div>
                        </ScrollAnimatedElement>
                      </form>
                    </CardContent>
                  </Card>
                </ScrollAnimatedElement>
              </TabsContent>

              <TabsContent value="student" className="mt-0">
                <ScrollAnimatedElement animation="slide-in-up" delay={200}>
                  <Card className="shadow-elegant border-0 bg-card overflow-hidden">
                    <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
                      <CardTitle className="text-2xl sm:text-3xl text-primary mb-3 break-words">Student Support Services</CardTitle>
                      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto break-words">
                        Get comprehensive support for education loans, career guidance, and financial planning for your academic journey.
                      </p>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <form onSubmit={handleStudentSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <ScrollAnimatedElement animation="fade-in-up" delay={300}>
                            <div className="space-y-3">
                              <Label htmlFor="studentFullName" className="text-base font-medium">Full Name</Label>
                              <Input
                                id="studentFullName"
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02]"
                                placeholder="Enter your full name"
                                value={studentForm.fullName}
                                onChange={(e) => setStudentForm({ ...studentForm, fullName: e.target.value })}
                                required
                              />
                            </div>
                          </ScrollAnimatedElement>
                          <ScrollAnimatedElement animation="fade-in-up" delay={400}>
                            <div className="space-y-3">
                              <Label htmlFor="studentEmail" className="text-base font-medium">Email Address</Label>
                              <Input
                                id="studentEmail"
                                type="email"
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02]"
                                placeholder="your.email@example.com"
                                value={studentForm.email}
                                onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                                required
                              />
                            </div>
                          </ScrollAnimatedElement>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <ScrollAnimatedElement animation="fade-in-up" delay={500}>
                            <div className="space-y-3">
                              <Label htmlFor="studentPhone" className="text-base font-medium">Phone Number</Label>
                              <Input
                                id="studentPhone"
                                type="tel"
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02]"
                                placeholder="+91 98765 43210"
                                value={studentForm.phone}
                                onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                                required
                              />
                            </div>
                          </ScrollAnimatedElement>
                          <ScrollAnimatedElement animation="fade-in-up" delay={600}>
                            <div className="space-y-3">
                              <Label htmlFor="courseInterest" className="text-base font-medium">Course / Field of Interest</Label>
                              <Input
                                id="courseInterest"
                                className="h-12 text-base transition-all duration-200 focus:scale-[1.02]"
                                value={studentForm.courseInterest}
                                onChange={(e) => setStudentForm({ ...studentForm, courseInterest: e.target.value })}
                                placeholder="MBA, Engineering, Medicine, etc."
                                required
                              />
                            </div>
                          </ScrollAnimatedElement>
                        </div>

                        <ScrollAnimatedElement animation="fade-in-up" delay={700}>
                          <div className="space-y-3">
                            <Label htmlFor="studentMessage" className="text-base font-medium">Tell Us About Your Goals</Label>
                            <Textarea
                              id="studentMessage"
                              className="min-h-[120px] text-base resize-none transition-all duration-200 focus:scale-[1.02]"
                              value={studentForm.message}
                              onChange={(e) => setStudentForm({ ...studentForm, message: e.target.value })}
                              placeholder="Share your career goals, preferred destinations, course preferences, and how we can help you..."
                            />
                          </div>
                        </ScrollAnimatedElement>

                        <ScrollAnimatedElement animation="scale-in" delay={800}>
                          <div className="text-center pt-4">
                            <Button type="submit" size="lg" className="px-8 sm:px-12 py-3 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto touch-target">
                              Submit Application
                            </Button>
                          </div>
                        </ScrollAnimatedElement>
                      </form>
                    </CardContent>
                  </Card>
                </ScrollAnimatedElement>
              </TabsContent>
            </Tabs>
          </ScrollAnimatedElement>

          {/* Benefits Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimatedElement animation="fade-in-up" delay={100}>
              <Card className="text-center border-0 shadow-card transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">Get a response within 24 hours</p>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>
            
            <ScrollAnimatedElement animation="fade-in-up" delay={200}>
              <Card className="text-center border-0 shadow-card transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Dedicated professionals for your success</p>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>
            
            <ScrollAnimatedElement animation="fade-in-up" delay={300}>
              <Card className="text-center border-0 shadow-card transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Personalized Solutions</h3>
                  <p className="text-sm text-muted-foreground">Tailored to your specific needs</p>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;