"use client"
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw'
              }}
            wrapperClass=""
        />
    );
}
export default Loader;