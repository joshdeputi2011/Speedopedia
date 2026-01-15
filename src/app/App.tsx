import { useState } from "react";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { HomePage } from "@/app/pages/HomePage";
import { ModelPage } from "@/app/pages/ModelPage";
import { CarDetailPage } from "@/app/pages/CarDetailPage";
import { ExplorePage } from "@/app/pages/ExplorePage";
import { ManufacturerPage } from "@/app/pages/ManufacturerPage";
import { ManufacturersListPage } from "@/app/pages/ManufacturersListPage";
import { TimelinePage } from "@/app/pages/TimelinePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentId, setCurrentId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page);
    setCurrentId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
      
      {currentPage === "explore" && <ExplorePage onNavigate={handleNavigate} />}
      
      {currentPage === "manufacturers" && !currentId && (
        <ManufacturersListPage onNavigate={handleNavigate} />
      )}
      
      {currentPage === "manufacturer" && currentId && (
        <ManufacturerPage 
          manufacturerId={currentId} 
          onNavigate={handleNavigate} 
        />
      )}
      
      {currentPage === "timeline" && <TimelinePage onNavigate={handleNavigate} />}
      
      {currentPage === "model" && currentId && (
        <ModelPage 
          modelId={currentId} 
          onNavigate={handleNavigate} 
        />
      )}
      
      {currentPage === "detail" && currentId && (
        <CarDetailPage 
          variantId={currentId} 
          onNavigate={handleNavigate} 
        />
      )}

      <Footer />
    </div>
  );
}