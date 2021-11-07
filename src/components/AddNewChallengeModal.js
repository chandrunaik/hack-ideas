import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

function AddNewChallengeModal(props) {
  const [challenge, setChallenge] = useState({
    title: "",
    description: "",
    tags: [],
    createdBy: "",
    createdDate: "",
    likedBy: [],
    id: "",
  });

  useEffect(() => {
    if (props.open) {
      // clear form
      setChallenge({
        title: "",
        description: "",
        tags: [],
        createdBy: "",
        createdDate: "",
        likedBy: [],
      });
      // show modal
      document.querySelector("#hackDialog").showModal();
    } else {
      // close modal
      document.querySelector("#hackDialog").close();
    }
  }, [props]);

  const closeModal = () => {
    props.onclose();
  };

  const submitForm = (e) => {
    e.preventDefault();

    // check form is valid
    if (!e.target.checkValidity) {
      return;
    }

    // get username
    let username = localStorage.getItem("username");
    let createdDate = new Date().toISOString();

    // set username n date
    //setChallenge({ ...challenge, createdBy: username, createdDate });
    challenge.createdBy = username;
    challenge.createdDate = createdDate;
    // replace by uuid or nanoid package
    challenge.id = Date.now();

    // get and parse all challenges
    let allChallenges = JSON.parse(localStorage.getItem("challenges")) || [];

    // add new challenge to challenges list
    allChallenges.push(challenge);

    // store it back in localstorage
    localStorage.setItem("challenges", JSON.stringify(allChallenges));
    // props.onclose();
    document.location.reload();
  };

  return ReactDOM.createPortal(
    <dialog className="hackDialog" id="hackDialog">
      <h5 className="mb-3">Add New Challenge</h5>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter challenge title"
            value={challenge.title}
            onChange={(e) => {
              setChallenge({ ...challenge, title: e.target.value });
            }}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
            value={challenge.description}
            placeholder="Add chellnege description"
            onChange={(e) => {
              setChallenge({ ...challenge, description: e.target.value });
            }}
            required
          ></textarea>
        </div>
        <div className="mb-3">TAGS:</div>
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
