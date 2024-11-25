
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Soals = () => {
  const getDataByCategory = ({ value }: string) => {
    console.log(value);
  };
  return (
    <div className="w-full">
      <div className="mb-4">
        <h1 className="text-2xl font-medium">Soal dan kategori</h1>
        <p className="text-xs text-muted-foreground tracking-wider">
          Jika ingin melihat soal klick pada kategori yang tersedia
        </p>
      </div>
      <Tabs defaultValue="pu">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="pu">
            <Button onClick={() => getDataByCategory("pu")}>PU</Button>
          </TabsTrigger>
          <TabsTrigger value="pm">PM</TabsTrigger>
          <TabsTrigger value="pk">PK</TabsTrigger>
          <TabsTrigger value="ppu">PPU</TabsTrigger>
          <TabsTrigger value="indonesia">B. Indonesia</TabsTrigger>
          <TabsTrigger value="inggris">B. Inggris</TabsTrigger>
          <TabsTrigger value="matematika">Matematika</TabsTrigger>
        </TabsList>
        <TabsContent value="pu">PU</TabsContent>
        <TabsContent value="pm">PM</TabsContent>
        <TabsContent value="pk">PK</TabsContent>
        <TabsContent value="ppu">PPU</TabsContent>
        <TabsContent value="indonesia">B indonesia</TabsContent>
        <TabsContent value="inggris">B inggris</TabsContent>
        <TabsContent value="matematika">Matematika</TabsContent>
      </Tabs>
    </div>
  );
};

export default Soals;
