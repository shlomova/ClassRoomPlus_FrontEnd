import { useNavigate } from "react-router-dom";

const UtilsCheckUserAndToken = () => {
   
    const navigate = useNavigate();

    const checkUserAndToken = () => {
        const userInfo = localStorage.getItem('userInfo');
        if (!userInfo) {
            navigate('/');
            return null;
        }
        
        const { data, token } = JSON.parse(userInfo);
  
        if (!token) {
            navigate('/');
            return null;
        }

        return data;
    };

    return checkUserAndToken;
};

export default UtilsCheckUserAndToken;
