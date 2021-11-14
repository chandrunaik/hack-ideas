import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

function ViewChallengeModal({open, challenge, onclose}) {
  const modalRef = useRef();

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [open]);

  return ReactDOM.createPortal(
    <dialog className="hModal" ref={modalRef}>
      <h5 className="mb-3 title">{challenge.title}</h5>
      <p className="addedByLabel">Added by: {challenge.createdBy}</p>
      <p className="mb-3 description">{challenge.description}</p>
      <div className="hTags mb-3">
        {challenge.tags &&
          challenge.tags.map((tag) => {
            return (
              <span className="hTag small" key={tag}>
                {tag}
              </span>
            );
          })}
      </div>
      <div className="mt-3 d-flex justify-content-end">
        <input className="btn btn-secondary" type="button" value="Cancel" onClick={onclose} />
        <pre> </pre>
      </div>
    </dialog>,
    document.body
  );
}
export default ViewChallengeModal;
