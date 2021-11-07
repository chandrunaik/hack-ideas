import { AppContext } from "../Contexts/AppContext";
import {useContext} from 'react';

function ChallengesListItem({ challenge , onClick, onLike, onDisLike}) {

  const {  username } = useContext(AppContext);

  const likeChallenge = (e, id) => {
      e.stopPropagation();
      onLike(id);
  }

  const dislikeChallenge = (e, id) => {
    e.stopPropagation();
    onDisLike(id);
}

  return (
    <div className="ChallengesListItem" onClick={() => { onClick(challenge) }}>
      <div className="title">{challenge.title}</div>
      <div className="description">{challenge.description}</div>
      <div className="likes-box d-flex align-items-center">

       {
         challenge.likedBy.includes(username) ? (
         <span className="label liked" onClick={(e)=>{dislikeChallenge(e, challenge.id)}}></span> 
         ): (
          <span className="label" onClick={(e)=>{likeChallenge(e, challenge.id)}}></span>
         )
       } 
        <span className="likes">{challenge.likedBy.length}</span>
      </div>
    </div>
  );
}

export default ChallengesListItem;
