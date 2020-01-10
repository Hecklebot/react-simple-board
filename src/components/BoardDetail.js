import React from 'react';
import axios from 'axios';



const BoardDetail = ({ match }) => {
  console.log(match.params)
  const data = axios.get(`https://react-simple-board.firebaseio.com/post/${match.params}.json`)
  data.then(res => console.log(res.data))
  if(!data) {
    return <div>존재하지 않는 게시물입니다.</div>
  }
  return (
    <div>
      BoardDetail
    </div>
  )
}

export default BoardDetail;