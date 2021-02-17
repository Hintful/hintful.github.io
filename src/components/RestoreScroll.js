import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

const RestoreScroll = ({history}) => {
  useEffect(() => {
    const unlisten = history.listen(() => {

    });
    return () => {
      unlisten();
    }
  }, []);
  return (  
    null
  );
}
 
export default withRouter(RestoreScroll);