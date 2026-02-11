import Modal from 'react-modal';
import type { ModalProps } from './types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// let subtitle;

// function afterOpenModal() {
//   // references are now sync'd and can be accessed.
//   subtitle.style.color = '#f00';
// }
Modal.setAppElement('#root');

function EditModal({ closeModal, modalIsOpen }: ModalProps) {
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Task"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <form>
          <div className="flex flex-wrap flex-col w-1/4">
            <label htmlFor="tasklabel">Task</label>
            <input
              className="border-solid border-black border-2 rounded-md p-1"
              id="tasklabel"
            />
          </div>
          <div className="mt-3">
            <button
              className="p-2 rounded-md mx-1 bg-red-400 text-gray-900"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button className="p-2 rounded-md mx-1 bg-green-500 text-gray-800">
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default EditModal;
