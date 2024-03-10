import { useState } from 'react';

import Section from 'components/Section/Section';
import BasicModalWindow from 'components/ModalWindows/BasicModalWindow/BasicModalWindow';
import AddExercisesSuccess from 'components/ModalWindows/AddExercisesSuccess/AddExercisesSuccess';

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
        <BasicModalWindow handleModalToggle={toggleModal}>
          <AddExercisesSuccess />
        </BasicModalWindow>
      )}
    </Section>
  );
};

export default DiaryPage;
