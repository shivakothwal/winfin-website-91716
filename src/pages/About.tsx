import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle, Target, Users, Shield, Globe, Award, ChevronDown, ChevronUp } from "lucide-react";
import { ScrollAnimatedElement } from "@/hooks/useScrollAnimation";
import founderImage from "@/assets/founder.jpg";
import VinFinText from "@/components/VinFinText";

const About = () => {
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isFounderBioOpen, setIsFounderBioOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <ScrollAnimatedElement animation="slide-in-down">
        <section className="bg-gradient-to-r from-primary to-secondary py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 break-words">
              About <VinFinText showConsultancy consultancyText="Consultancy Services" className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground" consultancyClassName="text-primary-foreground/90" />
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto break-words">
              Building futures through comprehensive financial solutions and student support services.
            </p>
          </div>
        </section>
      </ScrollAnimatedElement>

      {/* Team Section - Meet Our Founder */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Founder
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Led by an experienced professional dedicated to providing you with the best financial guidance and support.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ScrollAnimatedElement animation="scale-in">
              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={founderImage}
                      alt="Founder & CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 text-center">Mr. Ramesh Damera</h3>
                  <p className="text-accent font-semibold mb-6 text-center">Founder & CEO</p>
                  <Collapsible open={isFounderBioOpen} onOpenChange={setIsFounderBioOpen}>
                    <CollapsibleContent className="space-y-4">
                      <p className="text-muted-foreground text-left leading-relaxed">
                        Mr. Ramesh Damera, the Founder & CEO of VinFin Consultancy Services, established the company in 2025 with a clear purpose—to make quality education financially accessible for every aspiring student. With a strong belief that financial challenges should never stand in the way of education, he envisioned VinFin as a platform that simplifies complex financial processes and creates opportunities for students to pursue their dreams both in India and abroad.
                      </p>
                      <p className="text-muted-foreground text-left leading-relaxed">
                        Driven by integrity, dedication, and a student-first approach, Mr. Damera has been committed to building reliable partnerships with consultancies and financial institutions to ensure a seamless journey for students. His mission is not only to provide financial solutions but also to serve as a guiding hand for students and families, helping them take confident steps toward a brighter future.
                      </p>
                    </CollapsibleContent>
                    {!isFounderBioOpen && (
                      <p className="text-muted-foreground text-left leading-relaxed mb-3">
                        Mr. Ramesh Damera, the Founder & CEO of VinFin Consultancy Services, established the company in 2025 with a clear purpose—to make quality education financially accessible for every aspiring student...
                      </p>
                    )}
                    <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:underline mt-3 text-sm font-medium">
                      {isFounderBioOpen ? (
                        <>
                          Read Less <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </CollapsibleTrigger>
                  </Collapsible>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <ScrollAnimatedElement animation="slide-in-left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 break-words">Who We Are</h2>
                <div className="prose prose-sm sm:prose-lg max-w-none text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    <VinFinText showConsultancy consultancyText="Consultancy Services" className="text-muted-foreground" consultancyClassName="text-muted-foreground" /> is a trusted name in providing comprehensive financial solutions and student support services for aspiring learners pursuing education both abroad and in India. We specialize in simplifying the financial journey for students by offering end-to-end assistance with education loans, foreign exchange, accommodation, and consultancy services, ensuring a seamless process from start to finish.
                  </p>
                  <p className="leading-relaxed">
                    At <VinFinText className="text-muted-foreground" />, we understand that pursuing higher education is one of the most important investments in a student's future. Our mission is to empower students with the right financial tools and guidance that make their academic journey stress-free and focused.
                  </p>
                </div>
              </div>
            </ScrollAnimatedElement>
            <ScrollAnimatedElement animation="slide-in-right" delay={200}>
              <div className="lg:pl-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <ScrollAnimatedElement animation="scale-in" delay={300}>
                    <Card className="text-center shadow-card transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                      <CardContent className="p-4 sm:p-6">
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">500+</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Students Helped</div>
                      </CardContent>
                    </Card>
                  </ScrollAnimatedElement>
                  <ScrollAnimatedElement animation="scale-in" delay={400}>
                    <Card className="text-center shadow-card transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                      <CardContent className="p-4 sm:p-6">
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50+</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">University Partners</div>
                      </CardContent>
                    </Card>
                  </ScrollAnimatedElement>
                  <ScrollAnimatedElement animation="scale-in" delay={500}>
                    <Card className="text-center shadow-card transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                      <CardContent className="p-4 sm:p-6">
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">₹50Cr+</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Loans Facilitated</div>
                      </CardContent>
                    </Card>
                  </ScrollAnimatedElement>
                  <ScrollAnimatedElement animation="scale-in" delay={600}>
                    <Card className="text-center shadow-card transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
                      <CardContent className="p-4 sm:p-6">
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">15+</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Countries Covered</div>
                      </CardContent>
                    </Card>
                  </ScrollAnimatedElement>
                </div>
              </div>
            </ScrollAnimatedElement>
          </div>

          <ScrollAnimatedElement animation="fade-in-up" delay={300}>
            <div className="mb-12 sm:mb-16">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 break-words">
                With a strong network of financial institutions, strategic partnerships, and a student-first approach, we deliver personalized solutions tailored to each individual's needs. What sets us apart is our commitment to transparency, reliability, and efficiency. From securing the best financial options to providing holistic support, we ensure every student and family experiences a smooth and hassle-free process, allowing them to focus on their academic and career aspirations.
              </p>
              <div className="text-center px-4">
                <p className="text-xl sm:text-2xl font-semibold text-primary italic break-words">
                  "At <VinFinText showConsultancy consultancyText="Consultancy Services" className="text-xl sm:text-2xl font-semibold text-primary italic" consultancyClassName="text-primary italic" />, we don't just provide financial solutions—we build futures."
                </p>
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guiding principles that drive our commitment to students and consultancies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollAnimatedElement animation="slide-in-left">
              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
                  <Collapsible open={isVisionOpen} onOpenChange={setIsVisionOpen}>
                    <CollapsibleContent className="space-y-2">
                      <p className="text-muted-foreground leading-relaxed">
                        To be a leading and trusted partner in education finance and consultancy support, empowering students to pursue their academic goals with financial ease while enabling consultancies to operate with confidence, reliability, and growth. Our vision is to create a seamless ecosystem of financial solutions and collaborative partnerships that transforms aspirations into achievements, both in India and abroad.
                      </p>
                    </CollapsibleContent>
                    {!isVisionOpen && (
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        To be a leading and trusted partner in education finance and consultancy support, empowering students to pursue their academic goals...
                      </p>
                    )}
                    <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:underline mt-3 text-sm font-medium">
                      {isVisionOpen ? (
                        <>
                          Read Less <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </CollapsibleTrigger>
                  </Collapsible>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="slide-in-right" delay={200}>
              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
                  <Collapsible open={isMissionOpen} onOpenChange={setIsMissionOpen}>
                    <CollapsibleContent className="space-y-2">
                      <p className="text-muted-foreground leading-relaxed">
                        At <VinFinText showConsultancy consultancyText="Consultancy Services" className="text-muted-foreground" consultancyClassName="text-muted-foreground" />, our mission is to enhance the financial journey of students by making it simple, accessible, and stress-free, while ensuring that consultancies experience a reliable, transparent, and seamless partnership. We are committed to delivering end-to-end financial solutions—from education loans and forex to accommodation and advisory services—that empower students to pursue their academic aspirations with confidence. At the same time, we strive to support consultancies with efficient processes, trustworthy collaborations, and professional service delivery, enabling them to focus on guiding students toward their career goals. By combining innovation, integrity, and student-first values, we aim to be the bridge that connects ambition with achievement, creating success stories for both students and consultancies alike.
                      </p>
                    </CollapsibleContent>
                    {!isMissionOpen && (
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        At <VinFinText showConsultancy consultancyText="Consultancy Services" className="text-muted-foreground" consultancyClassName="text-muted-foreground" />, our mission is to enhance the financial journey of students by making it simple, accessible, and stress-free...
                      </p>
                    )}
                    <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:underline mt-3 text-sm font-medium">
                      {isMissionOpen ? (
                        <>
                          Read Less <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </CollapsibleTrigger>
                  </Collapsible>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From financial guidance to educational support, we provide end-to-end solutions for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Education Loans</h3>
                <p className="text-muted-foreground">Securing the best education loan options from leading financial institutions with competitive rates.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Study Abroad Support</h3>
                <p className="text-muted-foreground">Complete assistance for international education including visa guidance and university applications.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Foreign Exchange</h3>
                <p className="text-muted-foreground">Hassle-free foreign exchange services at competitive rates for your international education needs.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Accommodation</h3>
                <p className="text-muted-foreground">Finding suitable accommodation options both in India and abroad for a comfortable study experience.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Career Counseling</h3>
                <p className="text-muted-foreground">Expert guidance on career choices, course selection, and pathway planning for your future.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Financial Planning</h3>
                <p className="text-muted-foreground">Comprehensive financial planning services to manage education expenses and future investments.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;