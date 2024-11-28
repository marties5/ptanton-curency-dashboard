"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useQuizStore from "@/store/question";

interface ResultCardProps {
  questions: {
    question: string;
    correctAnswer?: string;
    correctAnswers?: string[];
  }[];
}

const ResultCard = ({ questions }: ResultCardProps) => {
  const { selectedAnswers, clearAllData } = useQuizStore();

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      const correct = question.correctAnswers || [question.correctAnswer];
      const userAnswers = selectedAnswers[index] || [];

      if (Array.isArray(userAnswers)) {
        if (
          JSON.stringify(correct.sort()) === JSON.stringify(userAnswers.sort())
        ) {
          score++;
        }
      }
    });
    return score;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hasil Kuis</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Skor Anda: {calculateScore()} dari {questions.length}
        </p>
        <Button onClick={clearAllData} className="bg-red-500 hover:bg-red-700">
          Selesai
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
