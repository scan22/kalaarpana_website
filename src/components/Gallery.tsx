import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const galleryItems = [
    {
      id: '/lovable-uploads/504bb46d-499a-4dae-ad1a-53d7e4387c9c.png',
      title: 'Traditional Prayers',
      category: 'Ceremonies'
    },
    {
      id: '/lovable-uploads/e103e0dd-bfa5-4979-b041-aedc03e619ac.png',
      title: 'Cultural Rituals',
      category: 'Ceremonies'
    },
    {
      id: '/lovable-uploads/ef512d60-6d1c-4b18-ad18-bdc9b2fa6465.png',
      title: 'Classical Violin',
      category: 'Entertainment'
    },
    {
      id: '/lovable-uploads/2561a036-b0cd-4bf9-ba90-663c3932fdf4.png',
      title: 'Family Moments',
      category: 'Photography'
    },
    {
      id: '/lovable-uploads/acc97e21-bb84-4b85-82c7-d44900834beb.png',
      title: 'Classical Flute',
      category: 'Entertainment'
    },
    {
      id: '/lovable-uploads/16a94bef-20ef-4773-9320-4e73caa9037e.png',
      title: 'Sacred Fire Ceremony',
      category: 'Ceremonies'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pastel-pink/20 to-pastel-lavender/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-earth-primary mb-6">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-bright mx-auto mb-8"></div>
          <p className="font-clean text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the magical moments we've created
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer"
              onClick={() => navigate('/gallery')}
            >
              <div className="aspect-video bg-gradient-to-br from-pastel-pink to-pastel-lavender flex items-center justify-center">
                    <img 
                      src={item.id}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-earth-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-elegant text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="font-clean text-sm text-gold">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;