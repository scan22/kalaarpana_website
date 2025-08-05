import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-elegant text-2xl font-bold text-earth-primary mb-4">Service Not Found</h1>
          <Link to="/" className="text-gold hover:text-gold-bright">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-pastel-lavender/20 to-background">
          <div className="container mx-auto px-6">
            <Link 
              to="/#services" 
              className="inline-flex items-center text-gold hover:text-gold-bright mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-clean">Back to Services</span>
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{service.icon}</span>
                <div>
                  <h1 className="font-elegant text-4xl md:text-5xl font-bold text-earth-primary mb-4">
                    {service.title}
                  </h1>
                  <p className="font-clean text-xl text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-elegant text-2xl font-bold text-earth-primary mb-6">About This Service</h2>
              <p className="font-clean text-lg text-muted-foreground leading-relaxed mb-8">
                {service.detailedDescription}
              </p>

              {/* Gallery Preview */}
              <div className="mb-12">
                <h3 className="font-elegant text-xl font-semibold text-earth-primary mb-6">Our Work</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {service.galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${service.title} example ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-16 bg-gradient-to-b from-background to-pastel-lavender/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-elegant text-3xl font-bold text-earth-primary mb-4">
                Choose Your Package
              </h2>
              <p className="font-clean text-lg text-muted-foreground">
                Flexible packages designed to meet your needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {service.packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={cn(
                    "relative p-8 rounded-lg border transition-all duration-300 hover:-translate-y-2",
                    pkg.recommended 
                      ? "border-gold bg-gold/5 shadow-elegant" 
                      : "border-border bg-card shadow-soft hover:shadow-elegant"
                  )}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gold text-gold-foreground font-clean">
                        <Star className="w-3 h-3 mr-1" />
                        Recommended
                      </Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="font-elegant text-xl font-semibold text-earth-primary mb-2">
                      {pkg.name}
                    </h3>
                    <div className="font-elegant text-3xl font-bold text-gold mb-4">
                      {pkg.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="font-clean text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={pkg.recommended ? "hero" : "outline"} 
                    className="w-full font-clean"
                    onClick={scrollToBooking}
                  >
                    Select Package
                  </Button>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            {service.addOns && service.addOns.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <h3 className="font-elegant text-xl font-semibold text-earth-primary mb-6 text-center">
                  Optional Add-ons
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.addOns.map((addOn, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg bg-card">
                      <span className="font-clean text-sm">{addOn}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-earth-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-elegant text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="font-clean text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Book your consultation today and let's discuss how we can make your {service.title.toLowerCase()} dreams come true.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white text-earth-primary hover:bg-white/90 font-clean"
                onClick={scrollToBooking}
              >
                Book Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-earth-primary font-clean"
                onClick={() => window.open('https://wa.me/+91XXXXXXXXXX', '_blank')}
              >
                📱 WhatsApp Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;