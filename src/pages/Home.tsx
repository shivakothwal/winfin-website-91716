import { Briefcase, GraduationCap, Users, Shield, CheckCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimatedElement } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-financial.jpg";
import VinFinText from "@/components/VinFinText";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimatedElement animation="slide-in-down">
        <section className="hero-section relative -mt-16 sm:-mt-20 pt-16 sm:pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Financial Consultancy"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto text-center w-full px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight break-words">
              Your Trusted Partner in Financial Success
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-3xl mx-auto px-2 break-words">
              <VinFinText showConsultancy consultancyText="Consultancy Services" consultancyClassName="text-primary-foreground/90" /> helps students and professionals with expert financial guidance, consultancy, and career support.
            </p>
            <ScrollAnimatedElement animation="scale-in" delay={300}>
              <div className="flex justify-center px-4">
                <Link to="/services" className="w-full sm:w-auto max-w-xs">
                  <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full shadow-lg hover:shadow-xl touch-target">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </ScrollAnimatedElement>
          </div>
        </section>
      </ScrollAnimatedElement>

      {/* About Us Section */}
      <ScrollAnimatedElement animation="fade-in-up">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                About Us
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 2025, <VinFinText className="text-base sm:text-lg text-primary" showConsultancy consultancyText="Consultancy Services" consultancyClassName="text-primary" /> has been successfully delivering financial solutions and student support services to both students and consultancies. In a short span of time, we have built a reputation for being a trusted partner in enabling financial success and simplifying the journey of higher education—both abroad and in India.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We specialize in providing education loans, foreign exchange, accommodation assistance, and consultancy services, ensuring a smooth and transparent process for every student. With a strong network of financial institutions and collaborations with reputed consultancies, VinFin has become a reliable name that bridges aspirations with opportunities.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimatedElement>

      {/* Our Core Values */}
      <ScrollAnimatedElement animation="fade-in-up">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and define who we are as an organization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <ScrollAnimatedElement animation="scale-in" delay={100}>
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Transparency</h3>
                    <p className="text-muted-foreground">Clear, honest communication in all our dealings with students and partners.</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="scale-in" delay={200}>
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Reliability</h3>
                    <p className="text-muted-foreground">Consistent, dependable service that students and families can trust.</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="scale-in" delay={300}>
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Excellence</h3>
                    <p className="text-muted-foreground">Striving for the highest standards in every aspect of our service delivery.</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>

              <ScrollAnimatedElement animation="scale-in" delay={400}>
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Student-First</h3>
                    <p className="text-muted-foreground">Putting student success and satisfaction at the center of everything we do.</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>
            </div>
          </div>
        </section>
      </ScrollAnimatedElement>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimatedElement animation="fade-in-up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                Why Choose <VinFinText className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary" />?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                We provide comprehensive financial solutions tailored to your unique needs and goals.
              </p>
            </div>
          </ScrollAnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ScrollAnimatedElement animation="fade-in-up" delay={100}>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Expert Financial Consultancy</h3>
                  <p className="text-muted-foreground">
                    Tailored solutions for individuals and businesses to achieve financial success and growth.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade-in-up" delay={200}>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Student Support</h3>
                  <p className="text-muted-foreground">
                    Comprehensive guidance for career planning, education funding, and financial literacy.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade-in-up" delay={300}>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Trusted Advisors</h3>
                  <p className="text-muted-foreground">
                    Experienced consultants dedicated to supporting your financial journey every step of the way.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollAnimatedElement animation="fade-in-up">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight break-words px-2">
              Ready to take the next step?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 px-2 break-words">
              Join thousands of satisfied clients who have achieved their financial goals with <VinFinText className="text-base sm:text-lg md:text-xl text-primary-foreground/90" />.
            </p>
            <ScrollAnimatedElement animation="slide-in-up" delay={200}>
              <div className="flex justify-center px-4">
                <Link to="/apply" className="w-full sm:w-auto max-w-md">
                  <Button size="lg" className="bg-white text-primary border-2 border-white hover:bg-primary hover:text-white text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 sm:py-6 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl w-full font-bold touch-target">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </ScrollAnimatedElement>
          </div>
        </section>
      </ScrollAnimatedElement>
    </div>
  );
};

export default Home;