import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.date({
    required_error: "Please select an event date",
  }),
  venue: z.string().min(2, "Venue location is required"),
  guestCount: z.string().min(1, "Please select guest count"),
  budgetRange: z.string().min(1, "Please select budget range"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const eventTypes = [
  "Wedding",
  "Engagement",
  "Birthday Party",
  "Anniversary",
  "Corporate Event",
  "Cultural Event",
  "Religious Ceremony",
  "Other"
];

const guestCounts = [
  "Under 50",
  "50-100",
  "100-200",
  "200-500",
  "500-1000",
  "Over 1000"
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,00,000",
  "Above ₹10,00,000"
];

const serviceOptions = [
  "Photography",
  "Videography",
  "Event Décor & Theme Setup",
  "Professional Sound System",
  "Live Flute Concerts",
  "Sangeet & Dance Choreography",
  "Bridal & Non-Bridal Makeovers"
];

const BookingForm = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      services: [],
      message: "",
    },
  });

  const onSubmit = (data: BookingFormData) => {
    console.log("Booking form data:", data);
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your event details.",
    });
    form.reset();
    setSelectedServices([]);
  };

  const handleServiceToggle = (service: string) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter(s => s !== service)
      : [...selectedServices, service];
    
    setSelectedServices(updatedServices);
    form.setValue("services", updatedServices);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-pastel-lavender/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-earth-primary mb-6">
            Book Your Consultation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-bright mx-auto mb-8"></div>
          <p className="font-clean text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your dream event and create something magical together
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-lg p-8 shadow-elegant border border-gold/10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-clean font-medium text-earth-primary">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} className="font-clean" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-clean font-medium text-earth-primary">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} className="font-clean" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-clean font-medium text-earth-primary">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91-XXXXXXXXXX" {...field} className="font-clean" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-clean font-medium text-earth-primary">Event Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="font-clean">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type} className="font-clean">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="font-clean font-medium text-earth-primary">Event Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal font-clean",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date()
                            }
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="venue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-clean font-medium text-earth-primary">Venue Location</FormLabel>
                      <FormControl>
                        <Input placeholder="City or venue name" {...field} className="font-clean" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="guestCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-clean font-medium text-earth-primary">Expected Guest Count</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="font-clean">
                            <SelectValue placeholder="Select guest count" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {guestCounts.map((count) => (
                            <SelectItem key={count} value={count} className="font-clean">
                              {count}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-clean font-medium text-earth-primary">Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="font-clean">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range} className="font-clean">
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Services Selection */}
              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <FormLabel className="font-clean font-medium text-earth-primary">Services Needed</FormLabel>
                    <div className="grid md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <div
                          key={service}
                          className={cn(
                            "p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:border-gold/50",
                            selectedServices.includes(service)
                              ? "border-gold bg-gold/5"
                              : "border-border"
                          )}
                          onClick={() => handleServiceToggle(service)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={cn(
                              "w-4 h-4 border-2 rounded transition-colors",
                              selectedServices.includes(service)
                                ? "bg-gold border-gold"
                                : "border-border"
                            )} />
                            <span className="font-clean text-sm">{service}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Additional Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-clean font-medium text-earth-primary">Additional Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your vision, special requirements, or any other details..."
                        className="font-clean min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4 pt-6">
                <Button type="submit" variant="hero" size="lg" className="font-clean flex-1">
                  Submit Booking Request
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="lg" 
                  className="font-clean"
                  onClick={() => window.open('https://wa.me/+91XXXXXXXXXX', '_blank')}
                >
                  📱 WhatsApp Us
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;