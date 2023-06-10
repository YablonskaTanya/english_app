import { nanoid } from 'nanoid';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const WordsForm = ({ addWords }) => {
  const [ukrWord, setUkrWord] = useState('');
  const [engWord, setEngWord] = useState('');

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'ukrWord':
        setUkrWord(value);
        break;
      case 'engWord':
        setEngWord(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const word = {
      id: nanoid(),
      ukrWord,
      engWord,
      checked: false,
    };

    addWords(word);
    setUkrWord('');
    setEngWord('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '50px',
        maxWidth: '315px',
      }}
    >
      <TextField
        label="Ukrainian"
        variant="outlined"
        type="text"
        value={ukrWord}
        name="ukrWord"
        onChange={handleChange}
      />
      <TextField
        label="English"
        variant="outlined"
        type="text"
        value={engWord}
        name="engWord"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Add word
      </Button>
    </form>
  );
};

export default WordsForm;
