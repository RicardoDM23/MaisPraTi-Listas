import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";

const useAuthentication = (isAtuthenticated) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAtuthenticated){
            navigate("/");
        }
    }, [isAtuthenticated, navigate]);
};

export default useAuthentication;