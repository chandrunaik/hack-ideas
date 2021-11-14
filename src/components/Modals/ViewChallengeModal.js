import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

function ViewChallengeModal(props) {
  useEffect(() => {
    if (props.open) {
      document.querySelector('#viewHackDialog').showModal();
    } else {
      document.querySelector('#viewHackDialog').close();
    }
  }, [props]);

  const closeModal = () => {
    props.onclose();
  };

  return ReactDOM.createPortal(
    <dialog className="hackDialog" id="viewHackDialog">
      <h5 className="mb-3 title">{props.challenge.title}</h5>
      <p className="addedByLabel">Added by: {props.challenge.createdBy}</p>
      <p className="mb-3 description">{props.challenge.description}</p>
      <div className="hTags mb-3">
        {props.challenge.tags &&
          props.challenge.tags.map((tag) => {
            return (
              <span className="hTag small" key={tag}>
                {tag}
              </span>
            );
          })}
      </div>
      <div className="mt-3 d-flex justify-content-end">
        <input className="btn btn-secondary" type="button" value="Cancel" onClick={closeModal} />
        <pre> </pre>
      </div>
    </dialog>,
    document.body
  );
}
export default ViewChallengeModal;