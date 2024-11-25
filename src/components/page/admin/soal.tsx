"use client";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { LuInfo } from "react-icons/lu";
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiGlobeX } from "react-icons/pi";

const Users = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const getDataByCategory = (value: string) => {
    console.log(value);
  };

  const categoryData = [
    { name: "Penalaran Umum", code: "pu", displayName: "PU" },
    { name: "Pemahaman Membaca", code: "pm", displayName: "PM" },
    { name: "Pengetahuan Kuantitatif", code: "pk", displayName: "PK" },
    { name: "Penalaran dan Pemahaman Umum", code: "ppu", displayName: "PPU" },
    { name: "Bahasa Indonesia", code: "id", displayName: "B. Indonesia" },
    { name: "Bahasa Inggris", code: "ig", displayName: "B. Inggris" },
    { name: "Matematika", code: "m tk", displayName: "Matematika" },
  ];
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
          {categoryData.map((category) => (
            <TabsTrigger
              key={category.code}
              onClick={() => getDataByCategory(category.code)}
              value={category.code}
            >
              {category.displayName}
            </TabsTrigger>
          ))}
        </TabsList>
        {categoryData.map((category) => (
          <TabsContent key={category.code} value={category.code}>
            <div className="border rounded-lg">
              <Table>
                <TableHeader className="bg-muted text-xs">
                  <TableRow>
                    <TableHead className="w-12 text-center">No</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead className="w-1/4 px-4">Soal</TableHead>
                    <TableHead className="text-center">Jawaban</TableHead>
                    <TableHead className="w-1/3 px-4">
                      Pilihan Jawaban
                    </TableHead>
                    <TableHead className="text-center">Waktu</TableHead>
                    <TableHead className="text-center">Tingkat Sulit</TableHead>
                    <TableHead className="text-center w-1/12">Action</TableHead>
                    <TableHead className="text-right flex items-center justify-center">
                      <LuInfo />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-center">1</TableCell>
                    <TableCell>PU</TableCell>
                    <TableCell>
                      <div
                        className={`text-xs items-end ${
                          isExpanded ? "" : "flex"
                        }`}
                      >
                        <p
                          className={`text-gray-700 transition-all ease-out duration-150 ${
                            !isExpanded ? "line-clamp-1" : ""
                          }`}
                        >
                          Jika Anda menginginkan interaksi yang lebih banyak,
                          Anda bisa menambah tombol lain seperti Reset Jawaban
                          atau Hapus Soal, tetapi pastikan untuk tetap
                          mempertimbangkan kemudahan dan kenyamanan pengguna.
                        </p>
                        <button
                          onClick={toggleText}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          {isExpanded ? "sembunyikan" : "selengkapnya"}
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">A</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-center">2 <span>Menit</span></TableCell>
                    <TableCell className="text-center">Sangat sulit</TableCell>
                    <TableCell className="flex space-x-1 items-center justify-center my-auto">
                      <Button className="px-2.5" variant={"outline"}>
                        <FiEdit />
                      </Button>
                      <Button className="px-2.5" variant={"outline"}>
                        <MdOutlineRemoveRedEye />
                      </Button>
                      <Button className="px-2.5" variant={"outline"}>
                        <PiGlobeX />
                      </Button>
                      <Button className="px-2.5" variant={"destructive"}>
                        <MdOutlineDelete />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <p className="p-1 border w-fit rounded-lg border-amber-400 text-amber-600">
                        <LuInfo />
                      </p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <Pagination className="mt-6  right-0 ml-auto justify-end flex w-full">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Users;
