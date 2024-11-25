import { SectionOne } from "@/components/page/dashboard-components/sectionOne";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="md:text-4xl text-2xl font-semibold my-4">
            Aku mau kuliah di{" "}
            <span className="underline decoration-sky-500 ">TOP-10</span>
          </h1>
          <p className="text-xs tracking-wider font-medium text-muted-foreground max-sm:max-w-[70vw] mx-auto">
            Bergabung ke <span className="text-sky-500">COOLYEAH TOP 10</span>{" "}
            itu gampang banget! Cukup daftar Exams dan kamu langsung
            berkesempatan jadi bagian dari yang terbaik. Jangan sampai
            ketinggalan, daftar sekarang dan tunjukkan kalau kamu layak ada di
            TOP 10
          </p>
        </div>
        <SectionOne />
      </main>
    </div>
  );
}
