import {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

const NotExistPage = () => {
    const [time, setTime] = useState(3)


    useEffect(() => {
        debugger

        const redirectTimer = setInterval(() => {
            if (time > 0) {
                setTime(time => --time)
            }
        }, 1000)

        return () => clearInterval(redirectTimer)
    }, [time])


    if( time <= 0){
        return <Redirect to="/"/>
    }

    return (
        <div>
            <h2>Sorry page doesn't exist</h2>
            <p> you will redirect to home in {time} seconds</p>
        </div>
    )
}

export default NotExistPage;