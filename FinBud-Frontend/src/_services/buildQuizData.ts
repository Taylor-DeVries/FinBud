import quizData from "@/_data/constants/quiz-content.json";
import quizPaths from "@/_data/constants/paths.json";
import quizAnswers from "@/_data/constants/answers.json";
import quizTexts from "@/_data/constants/texts.json";
import { QuizPath, QuizAnswer, QuizText, Node } from "@/_data/types/types";

export function buildQuizData(): Node{
    const paths: QuizPath = quizPaths as QuizPath;
    const answers: QuizAnswer[] = quizAnswers.answers as QuizAnswer[];
    const texts: QuizText[] = quizTexts.texts as QuizText[];
   
    const answers_n = answers.length;
    const texts_n = texts.length;

    return generateNode(paths);


    function generateNode( current: QuizPath): Node{
        let nodeAnswers = getAnswerById(current.id, 0, answers_n-1);
        let nodeTexts = getTextById(current.id, 0, texts_n-1);
        let nodeResponses: Node[] = [];
    
        if(current.responses.length > 0){
          for (const resp of current.responses){
            nodeResponses.push(generateNode(resp));
          }
        }
    
        const newNode: Node = {
          answer: nodeAnswers,
          connectId: current.connectId,
          id: current.id,
          text: nodeTexts,
          responses: nodeResponses
        };
    
        return newNode;
      }
    
      function getAnswerById(ID:number, start:number, end:number): string{
        //search via bin search
    
        if(start > end){
          return "Error: Quiz ID does not exist."; // throw error?
        }
    
        else if(start === end){
          return (answers[start].id === ID) ? answers[start].answer : "Error: Quiz ID does not exist."; // throw error?
        }
    
        else{
    
          let mid = Math.floor((start+end)/2);
    
          if(answers[mid].id === ID){
            return answers[mid].answer;
          }
          else if(ID < answers[mid].id){
            //search on first half
            return getAnswerById(ID, start, mid-1);
          }
          else{
            //search on second half
            return getAnswerById(ID, mid+1, end);
          }
        }
      }
    
      function getTextById(ID:number, start:number, end:number): string[]{
        //search via bin search
    
        if(start > end){
          return ["Error: Quiz ID does not exist."]; // throw error?
        }
    
        else if(start === end){
          return (texts[start].id === ID) ? texts[start].text : ["Error: Quiz ID does not exist."]; // throw error?
        }
    
        else{
    
          let mid = Math.floor((start+end)/2);
    
          if(texts[mid].id === ID){
            return texts[mid].text;
          }
          else if(ID < texts[mid].id){
            //search on first half
            return getTextById(ID, start, mid-1);
          }
          else{
            //search on second half
            return getTextById(ID, mid+1, end);
          }
        }
      }
}