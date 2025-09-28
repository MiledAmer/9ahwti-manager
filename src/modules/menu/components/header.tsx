import { Button } from "@/components/ui/button";

export default function Header({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  return (
    <div className="border-border bg-card border-b p-4 lg:p-6">
      <h1 className="mb-4 text-xl font-bold text-balance lg:text-2xl">Menu</h1>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="text-sm"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
