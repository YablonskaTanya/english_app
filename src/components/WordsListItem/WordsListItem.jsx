import { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const WordsListItem = ({
  id,
  ukrWord,
  engWord,
  itemNumber,
  deleteWord,
  editWord,
  checked,
  checkWord,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editUkrWord, setEditUkrWord] = useState(ukrWord);
  const [editEngWord, setEditEngWord] = useState(engWord);

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'ukrWord':
        setEditUkrWord(value);
        break;
      case 'engWord':
        setEditEngWord(value);
        break;

      default:
        break;
    }
  };

  const edit = () => {
    setIsEdit(prevState => !prevState);
    if (isEdit) {
      const word = {
        id,
        ukrWord: editUkrWord,
        engWord: editEngWord,
      };
      editWord(word);
    }
  };

  return (
    <li>
      <p>number: {itemNumber}</p>

      <input type="checkbox" onChange={() => checkWord(id)} checked={checked} />

      {isEdit ? (
        <>
          <TextField
            label="Ukrainian"
            variant="outlined"
            type="text"
            value={editUkrWord}
            name="ukrWord"
            onChange={handleChange}
          />
          <TextField
            label="English"
            variant="outlined"
            type="text"
            value={editEngWord}
            name="engWord"
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <p>Українська: {ukrWord}</p>
          <p>Англійська: {engWord}</p>
        </>
      )}

      <Button type="button" variant="contained" onClick={() => deleteWord(id)}>
        Remuve word
      </Button>
      <Button type="button" variant="contained" onClick={() => edit()}>
        Edit
      </Button>
    </li>
  );
};

export default WordsListItem;
