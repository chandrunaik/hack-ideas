import ReactDOM from "react-dom";
import {useEffect} from 'react';

function ViewChallengeModal(props) {

  useEffect(() => {
    if (props.open) {
      document.querySelector("#viewHackDialog").showModal();
    } else {
      document.querySelector("#viewHackDialog").close();
    }
  }, [props]);

  const closeModal = () => {
    props.onclose();
  };
  
  return ReactDOM.createPortal(
    <dialog className="hackDialog" id="viewHackDialog">
      <h5 className="mb-3">{props.challenge.title}</h5>
      <p className="mb-3">{props.challenge.description}</p>
        <div className="mb-3">TAGS:</div>
        <div className="mt-3 d-flex justify-content-end">
          <input
            className="btn btn-secondary"
            type="button"
            value="Cancel"
            onClick={closeModal}
          />
          <pre> </pre>
        </div>
    </dialog>,
    document.body
  );
}
export default ViewChallengeModal;
