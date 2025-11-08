import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Pencil, Trash2, Plus, LogOut } from "lucide-react";
import { getServices, addService, updateService, deleteService, Service } from "@/lib/services";
import { useToast } from "@/hooks/use-toast";

const ADMIN_CREDENTIALS = {
  username: "nevaadmin",
  password: "lux123",
};

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const authStatus = sessionStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      setServices(getServices());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_authenticated", "true");
      setServices(getServices());
      toast({
        title: "Login Successful",
        description: "Welcome to Neva's Salon Admin Panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_authenticated");
    navigate("/");
  };

  const openDialog = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setFormData({
        name: service.name,
        description: service.description,
        category: service.category,
        price: service.price,
        image: service.image,
      });
    } else {
      setEditingService(null);
      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        image: "",
      });
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      updateService(editingService.id, formData);
      toast({
        title: "Service Updated",
        description: "The service has been updated successfully",
      });
    } else {
      addService(formData);
      toast({
        title: "Service Added",
        description: "New service has been added successfully",
      });
    }
    setServices(getServices());
    setIsDialogOpen(false);
    window.dispatchEvent(new Event("servicesUpdated"));
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      deleteService(id);
      setServices(getServices());
      window.dispatchEvent(new Event("servicesUpdated"));
      toast({
        title: "Service Deleted",
        description: "The service has been removed",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-cream texture-overlay px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 rounded-3xl shadow-gold">
            <h1 className="font-playfair text-3xl font-bold text-center mb-6 text-foreground">
              Admin Login
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username" className="font-poppins">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 rounded-2xl"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="font-poppins">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 rounded-2xl"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 font-poppins"
              >
                Login
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-foreground font-poppins"
              >
                Back to Home
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-cream texture-overlay">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-playfair text-4xl font-bold text-foreground">
            Service Management
          </h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="rounded-full font-poppins"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Button
          onClick={() => openDialog()}
          className="mb-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-poppins"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Service
        </Button>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden rounded-3xl shadow-gold">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2">{service.name}</h3>
                <p className="font-poppins text-sm text-muted-foreground mb-2 line-clamp-2">
                  {service.description}
                </p>
                <p className="font-poppins text-xs text-muted-foreground mb-2">
                  Category: {service.category}
                </p>
                <p className="font-playfair text-lg font-bold text-primary mb-4">
                  {service.price}
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => openDialog(service)}
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-full font-poppins"
                  >
                    <Pencil className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(service.id)}
                    variant="destructive"
                    size="sm"
                    className="flex-1 rounded-full font-poppins"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="rounded-3xl max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl">
              {editingService ? "Edit Service" : "Add New Service"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-poppins">Service Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-2xl"
                required
              />
            </div>
            <div>
              <Label htmlFor="description" className="font-poppins">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="rounded-2xl"
                rows={3}
                required
              />
            </div>
            <div>
              <Label htmlFor="category" className="font-poppins">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="rounded-2xl"
                required
              />
            </div>
            <div>
              <Label htmlFor="price" className="font-poppins">Price</Label>
              <Input
                id="price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="rounded-2xl"
                placeholder="₹1,500"
                required
              />
            </div>
            <div>
              <Label htmlFor="image" className="font-poppins">Image URL</Label>
              <Input
                id="image"
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="rounded-2xl"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="rounded-full font-poppins"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-poppins"
              >
                {editingService ? "Update" : "Add"} Service
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
