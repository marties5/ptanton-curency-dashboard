import { ChartCashFlow } from "@/components/reusable/adminDashboard/chartCashFlow";
import { ChartUsers } from "@/components/reusable/adminDashboard/chartUsers";
import { CurrencyCard } from "@/components/reusable/adminDashboard/curencyCard";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUsersLine } from "react-icons/fa6";
import { LuBookCopy } from "react-icons/lu";
import { PiHandCoinsLight } from "react-icons/pi";
import { RiUserVoiceFill } from "react-icons/ri";
import {
  currencies,
  dataCashFlowChart,
  dataChart,
  invoices,
} from "../../constan/dashboardData";

const page = () => {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {currencies.map((currency, index) => (
          <CurrencyCard key={index} data={currency} />
        ))}
      </div>
      <div className="flex items-center space-x-4 w-full justify-between">
        <p className="text-2xl font-semibold flex items-center space-x-4">
          <span>Dashboard Transaksi Cash Flow</span>
          <PiHandCoinsLight size={32} />
        </p>
        <Tabs defaultValue="account" className="w-[400px] ">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="1-day">1D</TabsTrigger>
            <TabsTrigger value="7-day">7D</TabsTrigger>
            <TabsTrigger value="1-month">1M</TabsTrigger>
            <TabsTrigger value="3-month">3M</TabsTrigger>
            <TabsTrigger value="6-month">6M</TabsTrigger>
            <TabsTrigger value="1-year">1Y</TabsTrigger>
            <TabsTrigger value="all">ALL</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

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
                <CardTitle>Jumlah Transaksi</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between text-slate-600 dark:text-slate-500">
                <p className="text-5xl font-semibold tracking-wider">40</p>
                <BiCategoryAlt size={54} />
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Credit Social Average</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between text-slate-600 dark:text-slate-500">
                <p className="text-5xl font-semibold tracking-wider">90.90%</p>
                <LuBookCopy size={54} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <Card className="w-full overflow-hidden  col-span-2">
          <CardHeader>
            <CardTitle>Cash Flow 2024</CardTitle>
            <CardDescription>
              Cash flow yang dilakukan pada tahun ini
            </CardDescription>
          </CardHeader>
          <ChartCashFlow dataCashFlowChart={dataCashFlowChart} />
        </Card>
        <div className="col-span-1 flex flex-col justify-between gap-4">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Cash Flow</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between text-slate-600 dark:text-slate-500">
              <p className="text-2xl font-semibold tracking-wider">
                Rp <span>12.234.857.839,32</span>
              </p>
            </CardContent>
          </Card>
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Jumlah Transaksi</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between text-slate-600 dark:text-slate-500">
              <p className="text-5xl font-semibold tracking-wider">
                Rp <span>20.000.000,00</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full ">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Live Transactions</CardTitle>
            <CardDescription>
              Tampilan transaksi real-time
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
