"use client";
import useQuizStore from "@/store/question";
import SectionQuestion from "./questions-card";
import ResultCard from "./result-card";

interface Question {
  type: string;
  question: string;
  options: { id: string; text: string }[];
}

interface ClientSideDrillProps {
  questions: Question[];
}

export const ClientSideDrill = ({ questions }: ClientSideDrillProps) => {
  const {
    currentQuestionIndex,
    selectedAnswers,
    isQuizFinished,
    addOrRemoveAnswer,
  } = useQuizStore();

  if (!questions || questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentSelectedAnswers = selectedAnswers[currentQuestionIndex] || [];

  const handleAnswerSelect = (id: string) => {
    addOrRemoveAnswer(id, currentQuestion.type);
  };
  return !isQuizFinished ? (
    <>
      <SectionQuestion
        currentShowQuestion={currentQuestion}
        questions={questions}
        selectedAnswers={currentSelectedAnswers}
        onAnswerSelect={handleAnswerSelect}
        totalQuestions={questions.length}
      />
    </>
  ) : (
    <ResultCard questions={questions} />
  );
};
