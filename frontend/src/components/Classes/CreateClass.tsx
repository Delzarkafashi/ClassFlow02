import { useState } from "react";
import "./CreateClass.css";
import { createClass } from "../../services/classApi";

type Props = {
    onCreated: () => void;
};

function CreateClass({ onCreated }: Props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await createClass({
            name,
            description,
            startDate,
            endDate
        });

        setName("");
        setDescription("");
        setStartDate("");
        setEndDate("");

        await onCreated();
    };

    return (
        <div className="create-class">

            <h3>Skapa utbildning</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Namn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Beskrivning"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />

                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />

                <button type="submit">
                    Skapa utbildning
                </button>

            </form>

        </div>
    );
}

export default CreateClass;