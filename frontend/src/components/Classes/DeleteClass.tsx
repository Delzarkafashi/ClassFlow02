import "./DeleteClass.css";
import { deleteClass } from "../../services/classApi";

type Props = {
    id: string;
    onDeleted: () => void;
};

function DeleteClass({ id, onDeleted }: Props) {

    const handleDelete = async () => {

        const confirmed = window.confirm(
            "Är du säker på att du vill ta bort utbildningen?"
        );

        if (!confirmed)
        {
            return;
        }

        await deleteClass(id);

        onDeleted();
    };

    return (
        <button
            className="delete-button"
            onClick={handleDelete}
        >
            Ta bort
        </button>
    );
}

export default DeleteClass;