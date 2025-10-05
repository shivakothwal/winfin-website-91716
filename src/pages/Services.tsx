import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ScrollAnimatedElement } from "@/hooks/useScrollAnimation";
import { Calculator, TrendingUp, Users, BookOpen, Target, Shield, Globe, Home, Briefcase, GraduationCap, Building, Banknote } from "lucide-react";
import VinFinText from "@/components/VinFinText";

const Services = () => {
  const additionalServices = [
    {
      icon: Calculator,
      title: "Financial Services",
      description: "Comprehensive financial solutions including banking, investments, loans, and wealth management services tailored to your specific needs and goals."
    },
    {
      icon: BookOpen,
      title: "Overseas Education",
      description: "Complete guidance for international education including university selection, application assistance, scholarship opportunities, and academic planning abroad."
    },
    {
      icon: Users,
      title: "Visa Services",
      description: "Expert visa consultation and processing services for study visas, work permits, tourist visas, and immigration assistance for various countries."
    },
    {
      icon: TrendingUp,
      title: "Abroad Services",
      description: "Comprehensive support for overseas opportunities including career placement, business setup, relocation assistance, and international market guidance."
    },
    {
      icon: Target,
      title: "Student Financial Planning",
      description: "Specialized financial planning for students pursuing overseas education, including education loans, forex services, and budget management."
    },
    {
      icon: Shield,
      title: "International Investment Advisory",
      description: "Expert guidance on global investment opportunities, international portfolio management, and cross-border financial planning strategies."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <ScrollAnimatedElement animation="slide-in-down">
        <section className="bg-gradient-to-r from-primary to-secondary py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 break-words">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto break-words">
              Comprehensive financial solutions tailored to meet your unique needs and objectives.
            </p>
          </div>
        </section>
      </ScrollAnimatedElement>

      {/* Service Coverage */}
      <ScrollAnimatedElement animation="fade-in-up">
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Service Coverage
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive financial services across multiple regions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Local", description: "Comprehensive services in your city and surrounding areas" },
                { title: "National", description: "Pan-India coverage with expert guidance across all states" },
                { title: "International", description: "Global reach for overseas education, forex, and international services" }
              ].map((coverage, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{coverage.title}</CardTitle>
                    <CardDescription>{coverage.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimatedElement>

      {/* Featured Services - Loans, Forex, Accommodation */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimatedElement animation="fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Core Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                Specialized financial solutions tailored to your needs
              </p>
              <p className="text-base text-primary font-semibold">
                Click on the tabs below to explore each service 👇
              </p>
            </div>
          </ScrollAnimatedElement>

          <Tabs defaultValue="loans" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="loans" className="text-base sm:text-lg">💰 Loans</TabsTrigger>
              <TabsTrigger value="forex" className="text-base sm:text-lg">💱 Forex</TabsTrigger>
              <TabsTrigger value="accommodation" className="text-base sm:text-lg">🏠 Accommodation</TabsTrigger>
            </TabsList>

            {/* Loans Tab */}
            <TabsContent value="loans">
              <ScrollAnimatedElement animation="fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary">Abroad Education Loans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Comprehensive financing solutions for overseas education with competitive interest rates and flexible repayment options.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary">Domestic Education Loans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Support for pursuing higher education within India with hassle-free processing and quick approvals.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary">Personal Loans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Quick personal loans for various needs including medical emergencies, weddings, travel, and more.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Briefcase className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary">Business Loans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Tailored financing for businesses to expand operations, purchase equipment, or manage working capital.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Home className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary">Home Loans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Realize your dream of owning a home with competitive rates and flexible tenure options.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimatedElement>
            </TabsContent>

            {/* Forex Tab */}
            <TabsContent value="forex">
              <ScrollAnimatedElement animation="fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Globe className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary">Remittance Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Safe and secure international money transfer services with competitive exchange rates and quick processing.
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                        <li>Education fee remittance</li>
                        <li>Living expense transfers</li>
                        <li>GIC (Guaranteed Investment Certificate) for Canada</li>
                        <li>Blocked account for Germany</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Banknote className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary">Currency Exchange / Forex Cards</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Best forex rates and convenient forex cards for international travel and education abroad.
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                        <li>Multi-currency forex cards</li>
                        <li>Cash currency exchange</li>
                        <li>Travel insurance</li>
                        <li>24/7 customer support</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimatedElement>
            </TabsContent>

            {/* Accommodation Tab */}
            <TabsContent value="accommodation">
              <ScrollAnimatedElement animation="fade-in-up">
                <Card className="shadow-card hover:shadow-elegant transition-all duration-300 max-w-3xl mx-auto">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">Abroad Accommodation Services</CardTitle>
                    <CardDescription className="text-base">
                      Complete support for finding and securing accommodation overseas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        We help students and professionals find safe, comfortable, and affordable accommodation in their destination country.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>University dormitory booking assistance</li>
                        <li>Private apartment/flat search and booking</li>
                        <li>Homestay arrangements</li>
                        <li>Shared accommodation options</li>
                        <li>Pre-arrival accommodation support</li>
                        <li>Lease agreement guidance</li>
                        <li>Virtual property tours</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedElement>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimatedElement animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Additional Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support for all your financial and educational needs
              </p>
            </div>
          </ScrollAnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollAnimatedElement
                  key={index}
                  animation="fade-in-up"
                  delay={index * 100}
                >
                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ScrollAnimatedElement animation="fade-in-up">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a systematic approach to ensure you receive the best possible financial guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", description: "Initial discussion to understand your goals and needs" },
                { step: "02", title: "Analysis", description: "Thorough assessment of your current financial situation" },
                { step: "03", title: "Strategy", description: "Custom strategy development based on your objectives" },
                { step: "04", title: "Implementation", description: "Ongoing support and guidance to achieve your goals" }
              ].map((item, index) => (
                <ScrollAnimatedElement
                  key={index}
                  animation="scale-in"
                  delay={index * 150}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110">
                      <span className="text-xl font-bold text-accent-foreground">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollAnimatedElement>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimatedElement>

      {/* CTA Section */}
      <ScrollAnimatedElement animation="fade-in-up">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step towards achieving your financial goals with <VinFinText showConsultancy consultancyText="Consultancy Services" className="text-xl text-muted-foreground" consultancyClassName="text-muted-foreground" />.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <ScrollAnimatedElement animation="slide-in-left" delay={200}>
                <Link to="/apply" className="w-full sm:w-auto">
                  <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full touch-target">
                    Apply for Consultation
                  </Button>
                </Link>
              </ScrollAnimatedElement>
              <ScrollAnimatedElement animation="slide-in-right" delay={300}>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full touch-target">
                    Contact Us
                  </Button>
                </Link>
              </ScrollAnimatedElement>
            </div>
          </div>
        </section>
      </ScrollAnimatedElement>
    </div>
  );
};

export default Services;