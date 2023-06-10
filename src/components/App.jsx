import { useLocalStorage } from 'hooks/useLocalStorage';
import { Home } from 'pages/Home';
import { Quiz } from 'pages/Quiz';
import { Route, Routes } from 'react-router';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  const [words, setWords] = useLocalStorage('words', []);

  const addWords = word => {
    setWords(prevState => [...prevState, word]);
  };

  const deleteWord = id => {
    setWords(prevState => prevState.filter(word => word.id !== id));
  };

  const editWord = editWord => {
    setWords(prevState =>
      prevState.map(word => {
        if (word.id === editWord.id) {
          return editWord;
        }
        return word;
      })
    );
  };
  const checkWord = id => {
    setWords(prevState =>
      prevState.map(word => {
        if (word.id === id) {
          return { ...word, checked: !word.checked };
        }
        return word;
      })
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                addWords={addWords}
                words={words}
                deleteWord={deleteWord}
                editWord={editWord}
                checkWord={checkWord}
              />
            }
          />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </>
  );
};
