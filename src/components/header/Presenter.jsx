import React from 'react';
import { useHistory } from 'react-router-dom';

const Presenter = () => {
  const history = useHistory();

  return (
    <div style={{ display: 'flex' }}>
      <div>에너지엑스 로고</div>
      <div>
        <button type="button" onClick={() => history.push('/counter')}>
          로그인
        </button>
        <button type="button">회원가입</button>
      </div>
    </div>
  );
};

export default Presenter;
