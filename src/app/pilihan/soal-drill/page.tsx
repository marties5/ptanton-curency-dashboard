import { questions } from "../../../../constan/questionsData";
import { ClientSideDrill } from "./components/client-side-drill";

const DrillSoal = () => {
  return (
    <div className="min-h-screen p-4 w-full sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[35vw] mx-auto">
      <ClientSideDrill questions={questions} />
    </div>
  );
};

export default DrillSoal;
