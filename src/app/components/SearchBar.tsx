import { Search } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  large?: boolean;
}

export function SearchBar({ 
  placeholder = "Search any car, brand, engine, or era...", 
  onSearch,
  large = false 
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <Search className={`absolute left-4 text-muted-foreground pointer-events-none ${
        large ? "top-5 h-6 w-6" : "top-3 h-5 w-5"
      }`} />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`w-full bg-muted/50 border-border focus:bg-background transition-colors ${
          large 
            ? "pl-14 pr-6 py-6 text-lg rounded-xl" 
            : "pl-12 pr-4 py-3 rounded-lg"
        }`}
      />
    </form>
  );
}
