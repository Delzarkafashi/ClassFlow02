import { useState } from "react";
import Classes from "../Classes/Classes";

type Props = {
    dashboard: any;
};

function AdminDashboard({ dashboard }: Props) {

    const [selectedPage, setSelectedPage] = useState("");

    return (
        <div className="dashboard-content">

            <h2>{dashboard?.role}</h2>

            <ul>
                {dashboard?.pages.map((page: string) => (
                    <li
                        key={page}
                        onClick={() => setSelectedPage(page)}
                    >
                        {page}
                    </li>
                ))}
            </ul>

            {selectedPage === "Classes" && (
                <Classes />
            )}

        </div>
    );
}

export default AdminDashboard;