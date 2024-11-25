import { ChartUsers } from "@/components/reusable/adminDashboard/chartUsers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUsersLine } from "react-icons/fa6";
import { LuBookCopy } from "react-icons/lu";
import { RiUserVoiceFill } from "react-icons/ri";

const page = () => {
  const dataChart = [
    { nama: "Januari", value: 4405 },
    { nama: "Februari", value: 267 },
    { nama: "Maret", value: 7352 },
    { nama: "April", value: 6015 },
    { nama: "Mei", value: 3676 },
    { nama: "Juni", value: 9386 },
    { nama: "Juli", value: 3675 },
    { nama: "Agustus", value: 1032 },
    { nama: "September", value: 5051 },
    { nama: "Oktober", value: 3053 },
    { nama: "November", value: 8068 },
    { nama: "Desember", value: 4549 },
  ];

  const invoices = [
    {
      id: 1,
      name: "Zhidan marties alfareza",
      log_login: "Paid",
      rata_nilai: "$250.00",
      soal_selesai: "Credit Card",
      test_selesai: "40",
    },
    {
      id: 12,
      name: "Zhidan marties alfareza",
      log_login: "Pending",
      rata_nilai: "$150.00",
      soal_selesai: "PayPal",
      test_selesai: "40",
    },
    {
      id: 123,
      name: "Zhidan marties alfareza",
      log_login: "Unpaid",
      rata_nilai: "$350.00",
      soal_selesai: "Bank Transfer",
      test_selesai: "40",
    },
    {
      id: 132,
      name: "Zhidan marties alfareza",
      log_login: "Paid",
      rata_nilai: "$450.00",
      soal_selesai: "Credit Card",
      test_selesai: "40",
    },
    {
      id: 143,
      name: "Zhidan marties alfareza",
      log_login: "Paid",
      rata_nilai: "$550.00",
      soal_selesai: "PayPal",
      test_selesai: "40",
    },
    {
      id: 11,
      name: "Zhidan marties alfareza",
      log_login: "Pending",
      rata_nilai: "$200.00",
      soal_selesai: "Bank Transfer",
      test_selesai: "40",
    },
    {
      id: 1233,
      name: "Zhidan marties alfareza",
      log_login: "Unpaid",
      rata_nilai: "$300.00",
      soal_selesai: "Credit Card",
      test_selesai: "40",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <Card className=" col-span-5">
          <CardHeader>
            <CardTitle>User/Pendaftar</CardTitle>
            <CardDescription>
              Data pendaftar dalam rentang per-bulan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartUsers chartData={dataChart} />
          </CardContent>
        </Card>
        <div className="col-span-7 space-y-4">
          <div className="flex w-full gap-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Sedang aktif</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between text-slate-600 dark:text-slate-500">
                <p className="text-5xl font-semibold tracking-wider">100</p>
                <FaUsersLine size={54} />
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Total User</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between text-slate-600 dark:text-slate-500">
                <p className="text-5xl font-semibold tracking-wider">
                  {dataChart.reduce((total, item) => total + item.value, 0)}
                </p>
                <RiUserVoiceFill size={54} />
              </CardContent>
            </Card>
          </div>
          <div className="flex w-full gap-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Kategori soal</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between text-slate-600 dark:text-slate-500">
                <p className="text-5xl font-semibold tracking-wider">40</p>
                <BiCategoryAlt size={54} />
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Jumlah soal</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between text-slate-600 dark:text-slate-500">
                <p className="text-5xl font-semibold tracking-wider">4000</p>
                <LuBookCopy size={54} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full mt-4">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Universitas paling diminati</CardTitle>
            <CardDescription>
              Anda dapat melihat data universitas paling diminati oleh user
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-32">Nama</TableHead>
                  <TableHead>Login harian</TableHead>
                  <TableHead>Rata-Rata Nilai</TableHead>
                  <TableHead className="text-right">Soal</TableHead>
                  <TableHead className="text-right">Test</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="w-24 truncate text-nowrap overflow-hidden">
                      {invoice.name}
                    </TableCell>
                    <TableCell>{invoice.log_login}</TableCell>
                    <TableCell>{invoice.soal_selesai}</TableCell>
                    <TableCell className="text-right">
                      {invoice.rata_nilai}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Universitas paling diminati</CardTitle>
            <CardDescription>
              Anda dapat melihat data universitas paling diminati oleh user
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-32">Nama</TableHead>
                  <TableHead>Login harian</TableHead>
                  <TableHead>Rata-Rata Nilai</TableHead>
                  <TableHead className="text-right">Soal</TableHead>
                  <TableHead className="text-right">Test</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="w-24 truncate text-nowrap overflow-hidden">
                      {invoice.name}
                    </TableCell>
                    <TableCell>{invoice.log_login}</TableCell>
                    <TableCell>{invoice.soal_selesai}</TableCell>
                    <TableCell className="text-right">
                      {invoice.rata_nilai}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Universitas paling diminati</CardTitle>
            <CardDescription>
              Anda dapat melihat data universitas paling diminati oleh user
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-32">Nama</TableHead>
                  <TableHead>Login harian</TableHead>
                  <TableHead>Rata-Rata Nilai</TableHead>
                  <TableHead className="text-right">Soal</TableHead>
                  <TableHead className="text-right">Test</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="w-24 truncate text-nowrap overflow-hidden">
                      {invoice.name}
                    </TableCell>
                    <TableCell>{invoice.log_login}</TableCell>
                    <TableCell>{invoice.soal_selesai}</TableCell>
                    <TableCell className="text-right">
                      {invoice.rata_nilai}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
