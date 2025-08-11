const Testimonials = () => {
  const testimonials = [
    {
      quote: "Kalaarpana made our wedding magical. The flute concert by Gokula Dwani was heavenly!",
      author: "Shruti & Rohan",
      event: "Wedding Ceremony"
    },
    {
      quote: "Everything was handled so smoothly — from sound to choreography. Highly recommended!",
      author: "Priya M.",
      event: "Engagement Party"
    },
    {
      quote: "The décor was beyond our dreams. They truly understand how to bring visions to life.",
      author: "Rajesh & Meera",
      event: "Anniversary Celebration"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-earth-primary mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-bright mx-auto mb-8"></div>
          <p className="font-clean text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those who trusted us with their special moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-300 border border-gold/10"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-earth-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <blockquote className="font-clean text-lg text-foreground/80 italic leading-relaxed mb-6 mt-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gold/20 pt-4">
                <div className="font-elegant font-semibold text-earth-primary">
                  {testimonial.author}
                </div>
                <div className="font-clean text-sm text-muted-foreground mt-1">
                  {testimonial.event}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;