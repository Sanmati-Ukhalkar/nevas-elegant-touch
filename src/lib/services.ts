export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  image: string;
}

const STORAGE_KEY = "nevas_salon_services";

const defaultServices: Service[] = [
  {
    id: "1",
    name: "Signature Hair Styling",
    description: "Transform your look with our expert stylists using premium products and techniques.",
    category: "Hair",
    price: "₹1,500",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    id: "2",
    name: "Luxury Spa Treatment",
    description: "Indulge in a complete relaxation experience with our premium spa services.",
    category: "Spa",
    price: "₹3,000",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    id: "3",
    name: "Bridal Makeup Package",
    description: "Look stunning on your special day with our bridal makeup expertise.",
    category: "Makeup",
    price: "₹8,000",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
  },
  {
    id: "4",
    name: "Hair Color & Highlights",
    description: "Enhance your natural beauty with our professional coloring services.",
    category: "Hair",
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    id: "5",
    name: "Facial & Skin Care",
    description: "Rejuvenate your skin with our specialized facial treatments.",
    category: "Skincare",
    price: "₹1,800",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    id: "6",
    name: "Manicure & Pedicure",
    description: "Pamper yourself with our luxurious nail care services.",
    category: "Nails",
    price: "₹1,200",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
  },
];

export const getServices = (): Service[] => {
  if (typeof window === "undefined") return defaultServices;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultServices));
    return defaultServices;
  }
  return JSON.parse(stored);
};

export const saveServices = (services: Service[]): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
  }
};

export const addService = (service: Omit<Service, "id">): Service => {
  const services = getServices();
  const newService: Service = {
    ...service,
    id: Date.now().toString(),
  };
  services.push(newService);
  saveServices(services);
  return newService;
};

export const updateService = (id: string, updates: Partial<Service>): void => {
  const services = getServices();
  const index = services.findIndex((s) => s.id === id);
  if (index !== -1) {
    services[index] = { ...services[index], ...updates };
    saveServices(services);
  }
};

export const deleteService = (id: string): void => {
  const services = getServices().filter((s) => s.id !== id);
  saveServices(services);
};
