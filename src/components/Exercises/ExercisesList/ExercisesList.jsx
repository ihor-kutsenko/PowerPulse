import { useState } from 'react';

import ExercisesItem from '../ExercisesItem/ExercisesItem';
import BasicModalWindow from 'components/ModalWindows/BasicModalWindow/BasicModalWindow';
import AddExercisesSuccess from 'components/ModalWindows/AddExercisesSuccess/AddExercisesSuccess';
import exercises from '../../../data/exercises.json';
import bg from '../../../images/exercise-list-bg.jpg';

import styles from './ExerciseList.module.scss';

const ExercisesList = ({ activeFilter }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  // const [modalData, setModalData] = useState(null);
  // const openModalToggle = el => {
  //   setModalData(el);
  // };

  // const closeModal = () => {
  //   setModalData(null);
  // };
  const filteredExercises = exercises.filter(exercise => {
    const matchCondition =
      exercise.bodyPart === activeFilter ||
      exercise.equipment === activeFilter ||
      exercise.target === activeFilter ||
      exercise.name === activeFilter;
    return matchCondition;
  });

  return (
    <>
      {showModal && (
        <BasicModalWindow onClose={toggleModal}>
          <AddExercisesSuccess />
        </BasicModalWindow>
      )}
      <div className={styles.list}>
        <div className={styles.exercise_container}>
          {filteredExercises.map(exercise => (
            <ExercisesItem
              key={exercise._id.$oid}
              exercise={exercise}
              toggleModal={toggleModal}
            />
          ))}
        </div>
        <img src={bg} alt="imag" className={styles.img_bg} />
      </div>
    </>
  );
};

export default ExercisesList;
