import QRCodeGenerator from "../components/QRCodeGenarator/QRCodeGenarator";
import IPAddressFinder from "../components/IPAddressFinder/IPAddressFinder";
import MovieSearchEngine from "../components/MovieSearchEngine/MovieSearchEngine";
import TodoApp from "../components/TodoApp/TodoApp";
import QuizApp from "../components/QuizApp/QuizApp";
import LanguageTranslator from "../components/LanguageTranslator/LanguageTranslator";

export const renderComponent = (currentComponent) => {
  switch (currentComponent) {
    case "QRCodeGenerator":
      return <QRCodeGenerator />;
    case "IPAddressFinder":
      return <IPAddressFinder />;
    case "MovieSearchEngine":
      return <MovieSearchEngine />;
    case "TodoApp":
      return <TodoApp />;
    case "QuizApp":
      return <QuizApp />;
    case "LanguageTranslator":
      return <LanguageTranslator />;
    default:
      return null;
  }
};
