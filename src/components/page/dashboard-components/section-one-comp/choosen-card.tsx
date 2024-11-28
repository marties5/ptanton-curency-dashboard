import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { PilihanPaket } from "../../../../../constan/dashboardData";

export const ChoosenCard = () => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className=" lg:text-3xl">
          Pilih latihan sesuai{" "}
          <span className="underline decoration-sky-500">MOOD-mu</span>
        </CardTitle>
        <CardDescription>
          Pilihan paket soal ini? Gak bakal bikin kamu cuma nge-scroll, tapi
          beneran belajar dan berkembang!
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-4 grid md:grid-cols-2 grid-cols-1 p-0 sm:p-8">
        {PilihanPaket.map((desc) => (
          <Card key={desc.title}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                {desc.title}{" "}
                <Link
                  className="text-xs text-[#80BBCB] hover:underline"
                  href={"/"}
                >
                  <Badge variant={"primary"} className="capitalize">
                    <span className="md:block hidden mr-1">Moodku</span> pilih
                    ini
                  </Badge>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between md:h-36 h-44">
              <p className="text-xs tracking-wider text-[#2C3D8C]">
                {desc.content}
              </p>
              <Link href={desc.link}>
                <Button className="rounded-lg w-full" variant={"outline"}>
                  Lihat Detail
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};
