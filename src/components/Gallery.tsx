const Gallery = () => {
  const galleryItems = [
    {
      id: 'photo-1465146344425-f00d5f5c8f07',
      title: 'Wedding Setups',
      category: 'Décor & Themes'
    },
    {
      id: 'photo-1472396961693-142e6e269027',
      title: 'Couple Portraits',
      category: 'Photography'
    },
    {
      id: 'photo-1581090464777-f3220bbe1b8b',
      title: 'Live Performances',
      category: 'Entertainment'
    },
    {
      id: 'photo-1500673922987-e212871fec22',
      title: 'Ambient Lighting',
      category: 'Décor & Themes'
    },
    {
      id: 'photo-1485833077593-4278bba3f11f',
      title: 'Nature Elegance',
      category: 'Photography'
    },
    {
      id: 'photo-1470813740244-df37b8c1edcb',
      title: 'Magical Moments',
      category: 'Videography'
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
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-pastel-pink to-pastel-lavender flex items-center justify-center">
                <img 
                  src={`https://images.unsplash.com/${item.id}?w=600&h=400&fit=crop&crop=center`}
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