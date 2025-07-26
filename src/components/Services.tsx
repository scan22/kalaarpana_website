const Services = () => {
  const services = [
    {
      icon: "📸",
      title: "Photography",
      description: "Capture the most beautiful moments of your event through our professional, cinematic, and candid photography services."
    },
    {
      icon: "🎥",
      title: "Videography", 
      description: "Relive your special day with high-definition, creatively edited videos that tell your story perfectly."
    },
    {
      icon: "🌸",
      title: "Event Décor & Theme Setup",
      description: "Transform any space into a dream venue with customized themes, floral arrangements, lighting, and décor concepts tailored to your style."
    },
    {
      icon: "🔊",
      title: "Professional Sound System",
      description: "Enjoy crystal-clear audio with our top-tier sound setup for every kind of event — from weddings to concerts."
    },
    {
      icon: "🎶",
      title: "Live Flute Concerts by Gokula Dwani",
      description: "Add a soulful, divine touch to your event with live flute performances by the renowned Gokula Dwani."
    },
    {
      icon: "💃",
      title: "Sangeet & Dance Choreography",
      description: "Make your celebrations more fun and memorable with expertly choreographed dance routines for all age groups."
    },
    {
      icon: "💄",
      title: "Bridal & Non-Bridal Makeovers",
      description: "Look and feel your best with professional makeover services tailored to suit traditional and modern styles."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-earth-primary mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-bright mx-auto mb-8"></div>
          <p className="font-clean text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event solutions tailored to create unforgettable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-gold/10 hover:border-gold/30"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-elegant text-xl font-semibold text-earth-primary mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-clean text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;