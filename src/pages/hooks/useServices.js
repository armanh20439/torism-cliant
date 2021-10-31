import { useEffect } from "react";
import { useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shielded-coast-32872.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices];
}

export default useServices;