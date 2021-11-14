import {TAGS} from './../../constants';
import {AppContext} from './../../Contexts/AppContext';
import Tag from './../common/Tag';

import React, {useEffect, useState, useContext, useRef} from 'react';
import ReactDOM from 'react-dom';

const initialState = {
  title: '',
  description: '',
  tags: [],
  createdBy: '',
  createdDate: '',
  likedBy: [],
  id: '',
};

function AddNewChallengeModal(props) {
  const {username, challenges, updateChallenges} = useContext(AppContext);
  const modalRef = useRef();

  const [challenge, setChallenge] = useState(initialState);

  useEffect(() => {
    if (props.open) {
      // clear form
      setChallenge(initialState);
      // show modal
      modalRef.current.showModal();
    } else {
      // close modal
      modalRef.current.close();
    }
  }, [props]);

  const handleTagClick = (newTag) => {
    // add if not present else remove
    const tags = [...challenge.tags];

    if (tags.includes(newTag)) {
      const index = tags.findIndex((tag) => tag === newTag);
      tags.splice(index, 1);
      setChallenge((prevState) => {
        return {...prevState, tags};
      });
    } else {
      setChallenge((prevState) => {
        return {...prevState, tags: [...prevState.tags, newTag]};
      });
    }
  };

  const closeModal = () => {
    props.onclose();
  };

  const submitForm = (e) => {
    e.preventDefault();

    // check form is valid
    if (!e.target.checkValidity) {
      return;
    }

    const createdDate = new Date().toISOString();

    // set username n date
    // setChallenge({ ...challenge, createdBy: username, createdDate });
    challenge.createdBy = username;
    challenge.createdDate = createdDate;
    // replace by uuid or nanoid package
    challenge.id = Date.now();

    // store it back in localstorage
    updateChallenges([...challenges, challenge]);

    props.onclose();
  };

  return ReactDOM.createPortal(
    <dialog className="hModal" ref={modalRef}>
      <h5 className="mb-3">Add New Challenge</h5>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter challenge title"
            value={challenge.title}
            onChange={(e) => {
              setChallenge({...challenge, title: e.target.value});
            }}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
            value={challenge.description}
            placeholder="Add challenge description"
            onChange={(e) => {
              setChallenge({...challenge, description: e.target.value});
            }}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          {TAGS.map((tag) => {
            return (
              <Tag key={tag} active={challenge.tags.includes(tag)} onClick={handleTagClick} tag={tag}>
                {tag}
              </Tag>
            );
          })}
        </div>
        <div className="mt-3 d-flex justify-content-end">
          <input className="btn btn-secondary" type="button" value="Cancel" onClick={closeModal} />
          <pre> </pre>
          <input className="btn btn-primary" type="submit" value="Add" />
        </div>
      </form>
    </dialog>,
    document.body
  );
}
export default AddNewChallengeModal;
