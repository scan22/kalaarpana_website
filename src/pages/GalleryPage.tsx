import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
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
      title: 'Classical Violin Performance',
      category: 'Entertainment'
    },
    {
      id: '/lovable-uploads/2561a036-b0cd-4bf9-ba90-663c3932fdf4.png',
      title: 'Family Moments',
      category: 'Photography'
    },
    {
      id: '/lovable-uploads/acc97e21-bb84-4b85-82c7-d44900834beb.png',
      title: 'Classical Flute Performance',
      category: 'Entertainment'
    },
    {
      id: '/lovable-uploads/2b676cb8-1a11-4fac-9390-2818f2748279.png',
      title: 'Cultural Recognition',
      category: 'Ceremonies'
    },
    {
      id: '/lovable-uploads/4fed67a8-e750-40aa-bf7f-f59c139ac86f.png',
      title: 'Traditional Music',
      category: 'Entertainment'
    },
    {
      id: '/lovable-uploads/cc097925-7c8a-4fb6-bd5f-2b04e423c36a.png',
      title: 'Classical Arts',
      category: 'Entertainment'
    },
    {
      id: '/lovable-uploads/27b341a3-0048-483f-a3a5-4abfc8427533.png',
      title: 'Musical Excellence',
      category: 'Entertainment'
    },
    {
      id: '/lovable-uploads/16a94bef-20ef-4773-9320-4e73caa9037e.png',
      title: 'Sacred Fire Ceremony',
      category: 'Ceremonies'
    }
  ];

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-pink/10 to-pastel-lavender/10">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-earth-primary hover:text-gold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="font-elegant text-4xl md:text-5xl font-bold text-earth-primary mb-6">
              Our Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-bright mx-auto mb-8"></div>
            <p className="font-clean text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of magical moments and beautiful celebrations
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-square bg-gradient-to-br from-pastel-pink to-pastel-lavender">
                  <img 
                    src={image.id}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      console.error('Image failed to load:', image.id);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-elegant text-sm font-semibold mb-1">{image.title}</h3>
                    <p className="font-clean text-xs text-gold">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-gold"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;