import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 border border-gray-200 rounded-md">
      <h1 className="text-red-500">Products Page</h1>
      <Button>FSW</Button>
      <Input placeholder="Bora escerever?"></Input>
    </div>
  );
};

export default ProductPage;
