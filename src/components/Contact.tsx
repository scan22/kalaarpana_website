import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pastel-lavender/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-earth-primary mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-bright mx-auto mb-8"></div>
          <p className="font-clean text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Let's create something magical together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-elegant text-2xl font-semibold text-earth-primary mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-clean font-semibold text-earth-primary">Email</h4>
                    <p className="font-clean text-muted-foreground">kalaarpana.events@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-elegant border border-gold/10">
            <h3 className="font-elegant text-2xl font-semibold text-earth-primary mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-clean font-medium text-earth-primary">Name</Label>
                  <Input id="name" placeholder="Your Name" className="font-clean" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-clean font-medium text-earth-primary">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="font-clean" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="font-clean font-medium text-earth-primary">Subject</Label>
                <Input id="subject" placeholder="Event Type or Service Needed" className="font-clean" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="font-clean font-medium text-earth-primary">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your event vision..."
                  className="font-clean min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full font-clean">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
