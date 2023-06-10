import WordsForm from 'components/WordsForm/WordsForm';
import WordsList from 'components/WordsList/WordsList';

export const Home = ({ addWords, words, deleteWord, editWord, checkWord }) => {
  return (
    <>
      <WordsForm addWords={addWords} />
      <WordsList
        words={words}
        deleteWord={deleteWord}
        editWord={editWord}
        checkWord={checkWord}
      />
    </>
  );
};
