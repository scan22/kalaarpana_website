const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-pastel-pink/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-earth-primary mb-6">
            Kalaarpana – Where Art Meets Celebration
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-bright mx-auto mb-8"></div>
          
          <p className="font-clean text-lg text-foreground/80 leading-relaxed mb-8">
            Kalaarpana is a professional event management company dedicated to turning your vision into reality. 
            With a strong focus on aesthetics, culture, and seamless execution, we bring life to every event — 
            whether it's a wedding, engagement, corporate gathering, or private celebration.
          </p>
          
          <p className="font-clean text-lg text-foreground/80 leading-relaxed">
            Our experienced team curates every detail with passion, blending tradition with trendsetting innovation.
          </p>
        </div>
        
        {/* Why Choose Us */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🎯", title: "One-stop solution", desc: "All event needs under one roof" },
            { icon: "🧠", title: "Creative minds", desc: "Attention to every detail" },
            { icon: "👩‍🎨", title: "Professional team", desc: "Skilled and passionate experts" },
            { icon: "🕰️", title: "Punctual execution", desc: "Hassle-free experience guaranteed" },
            { icon: "💯", title: "Personalized service", desc: "Customer-first approach always" },
            { icon: "💖", title: "Passionate craft", desc: "Love for creating magic" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-elegant text-xl font-semibold text-earth-primary mb-2">{item.title}</h3>
              <p className="font-clean text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;