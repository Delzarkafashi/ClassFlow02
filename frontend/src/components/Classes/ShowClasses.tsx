import "./ShowClasses.css";
import { useState } from "react";

import EditClass from "./EditClass";
import DeleteClass from "./DeleteClass";

type ClassType = {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    isActive: boolean;
};

type Props = {
    classes: ClassType[];
    onRefresh: () => void;
};

function ShowClasses({ classes, onRefresh }: Props) {

    const [editingId, setEditingId] = useState<string | null>(null);

    return (
        <div className="show-classes">

            <h3>Alla utbildningar</h3>

            {classes.map((classItem) => (

                <div
                    key={classItem.id}
                    className="class-card"
                >

                    {editingId === classItem.id ? (

                        <EditClass
                            id={classItem.id}
                            currentName={classItem.name}
                            currentDescription={classItem.description}
                            currentStartDate={classItem.startDate}
                            currentEndDate={classItem.endDate}
                            onUpdated={() => {
                                setEditingId(null);
                                onRefresh();
                            }}
                            onCancel={() => setEditingId(null)}
                        />

                    ) : (

                        <>

                            <h4>{classItem.name}</h4>

                            <div>
                                <strong>Beskrivning</strong>
                                <p>{classItem.description}</p>
                            </div>

                            <div>
                                <strong>Startdatum</strong>
                                <p>{classItem.startDate.substring(0, 10)}</p>
                            </div>

                            <div>
                                <strong>Slutdatum</strong>
                                <p>{classItem.endDate.substring(0, 10)}</p>
                            </div>

                            <div>
                                <strong>Status</strong>
                                <p>{classItem.isActive ? "Aktiv" : "Inaktiv"}</p>
                            </div>

                            <div className="class-actions">

                                <button
                                    onClick={() => setEditingId(classItem.id)}
                                >
                                    Redigera
                                </button>

                                <DeleteClass
                                    id={classItem.id}
                                    onDeleted={onRefresh}
                                />

                            </div>

                        </>

                    )}

                </div>

            ))}

        </div>
    );
}

export default ShowClasses;