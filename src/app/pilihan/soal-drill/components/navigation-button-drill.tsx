import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import useQuizStore from "@/store/question";

interface NavigationButtonsProps {
  totalQuestions: number;
}

const NavigationButtons = ({ totalQuestions }: NavigationButtonsProps) => {
  const { currentQuestionIndex, setCurrentQuestionIndex, setIsQuizFinished } =
    useQuizStore();

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  return (
    <CardFooter className="flex justify-between mt-4 ">
      <Button
        onClick={goToPreviousQuestion}
        disabled={currentQuestionIndex === 0}
        className="disabled:bg-gray-400"
      >
        Prev
      </Button>
      <Button onClick={goToNextQuestion}>
        {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
      </Button>
    </CardFooter>
  );
};

export default NavigationButtons;
