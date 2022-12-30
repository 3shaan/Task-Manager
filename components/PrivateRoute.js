import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { authContext } from "../Context/Context";

const PrivateRoute = ({children}) => {
    const { user , loading} = useContext(authContext);
    const router = useRouter();
    // useEffect(() => {
    //     if (!user?.uid) {
    //       return router?.push("/login");
    //     }
    // },[router, user?.uid])
    // if (loading) {
    //     return <p>loading.....</p>
    // }
    
    return children;
};

export default PrivateRoute;