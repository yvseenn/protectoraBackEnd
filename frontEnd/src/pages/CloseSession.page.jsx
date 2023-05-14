import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PostContext } from '../context/post.context';
import Loader from 'react-loader-spinner';

const CloseSessionPage = () => {
  const { closeSession } = useContext(PostContext);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function logout() {
      await closeSession();
      setIsLoading(false);
      history.push('/');
    }
    logout();
  }, [closeSession, history]);

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        <Loader type="TailSpin" color="#000000" height={80} width={80} />
      ) : (
        <h2>Logged out successfully.</h2>
      )}
    </div>
  );
};

export default CloseSessionPage;
