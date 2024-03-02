import { useState } from 'react';

import Section from 'components/Section/Section';
import BasicModalWindow from 'components/ModalWindows/BasicModalWindow/BasicModalWindow';
import AddExercisesSuccess from 'components/ModalWindows/AddExercisesSuccess/AddExercisesSuccess';
// import ExercisesList from 'components/Exercises/ExercisesList/ExercisesList';

const DiaryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <Section>
      <button type="button" onClick={toggleModal}>
        {' '}
        Click on Button
      </button>
      {showModal && (
        <BasicModalWindow onClose={toggleModal}>
          <AddExercisesSuccess />
        </BasicModalWindow>
      )}
      {/* <ExercisesList /> */}
    </Section>
  );
};

export default DiaryPage;
