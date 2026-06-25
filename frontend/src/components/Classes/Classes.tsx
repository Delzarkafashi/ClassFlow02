import { useEffect, useState } from "react";
import "./Classes.css";

import CreateClass from "./CreateClass";
import ShowClasses from "./ShowClasses";

import { getClasses } from "../../services/classApi";

function Classes() {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        loadClasses();
    }, []);

    const loadClasses = async () => {
        const data = await getClasses();
        setClasses(data);
    };

    return (
        <div className="classes">

            <h2>Utbildningar</h2>

            <CreateClass onCreated={loadClasses} />

            <ShowClasses
                classes={classes}
                onRefresh={loadClasses}
            />

        </div>
    );
}

export default Classes;