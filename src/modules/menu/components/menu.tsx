import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import type { MenuItem } from "../types";

export default function Menu({
  addToCart,
  filteredItems,
}: {
  addToCart: (item: MenuItem) => void;
  filteredItems: MenuItem[];
}) {
  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
            onClick={() => addToCart(item)}
          >
            <CardHeader className="pb-3 text-center">
              <CardTitle className="text-center text-lg text-balance">
                {item.name}
              </CardTitle>
              {item.description && (
                <p className="text-muted-foreground mt-1 text-center text-sm text-pretty">
                  {item.description}
                </p>
              )}
              <div className="mt-2 flex justify-center">
                <Badge variant="secondary" className="text-base font-semibold">
                  ${item.price.toFixed(2)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-muted-foreground group-hover:text-primary flex items-center justify-center text-sm transition-colors">
                <Plus className="mr-1 h-4 w-4" />
                Click to add
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
