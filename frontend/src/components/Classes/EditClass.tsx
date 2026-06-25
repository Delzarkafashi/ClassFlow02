import { useState } from "react";
import "./EditClass.css";
import { updateClass } from "../../services/classApi";

type Props = {
    id: string;
    currentName: string;
    currentDescription: string;
    currentStartDate: string;
    currentEndDate: string;
    onUpdated: () => void;
    onCancel: () => void;
};

function EditClass({
    id,
    currentName,
    currentDescription,
    currentStartDate,
    currentEndDate,
    onUpdated,
    onCancel
}: Props) {

    const [name, setName] = useState(currentName);
    const [description, setDescription] = useState(currentDescription);
    const [startDate, setStartDate] = useState(currentStartDate.substring(0, 10));
    const [endDate, setEndDate] = useState(currentEndDate.substring(0, 10));

    const handleUpdate = async () => {

        await updateClass(id, {
            name,
            description,
            startDate,
            endDate
        });

        onUpdated();
    };

    return (
        <div className="edit-class">

            <h4>Redigera utbildning</h4>

            <label>Namn</label>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Beskrivning</label>

            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <div className="date-row">

                <div>

                    <label>Startdatum</label>

                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />

                </div>

                <div>

                    <label>Slutdatum</label>

                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />

                </div>

            </div>

            <div className="edit-buttons">

                <button onClick={handleUpdate}>
                    Spara
                </button>

                <button
                    type="button"
                    onClick={onCancel}
                >
                    Avbryt
                </button>

            </div>

        </div>
    );
}

export default EditClass;