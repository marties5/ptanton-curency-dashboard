import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Question } from "@/lib/type";
import useQuizStore from "@/store/question";
import NavigationButtons from "./navigation-button-drill";

interface SectionQuestionProps {
  currentShowQuestion: {
    question: string;
    options: { id: string; text: string }[];
    type: string;
  };
  questions: Question[];
  selectedAnswers: string[];
  totalQuestions: number;
  onAnswerSelect: (id: string) => void;
}

const SectionQuestion = ({
  currentShowQuestion,
  selectedAnswers,
  totalQuestions,
  questions,
  onAnswerSelect,
}: SectionQuestionProps) => {
  const { currentQuestionIndex } = useQuizStore();

  return (
    <Card>
      <CardHeader>
        {currentQuestionIndex + 1} of {totalQuestions}
        <CardTitle>{currentShowQuestion.question}</CardTitle>
        <CardDescription className="capitalize">
          {currentShowQuestion.type.split("_").join(" ")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {currentShowQuestion.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswerSelect(option.id)}
            className={`flex w-full p-4 rounded-lg text-left transition-colors ${
              selectedAnswers.includes(option.id) ? "bg-slate-200" : "bg-white"
            }`}
          >
            <span className="font-bold mr-4">{option.id}.</span>
            <span>{option.text}</span>
          </button>
        ))}
      </CardContent>
      <NavigationButtons totalQuestions={questions.length} />
    </Card>
  );
};

export default SectionQuestion;
