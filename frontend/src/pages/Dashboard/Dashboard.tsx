import { useEffect, useState } from "react";
import "./Dashboard.css";

import {
    getAdminDashboard,
    getTeacherDashboard,
    getStudentDashboard
} from "../../services/dashboardApi";

function Dashboard() {
    const [dashboard, setDashboard] = useState<any>(null);

    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const data = await getAdminDashboard();
        setDashboard(data);
    };

    const loadTeacher = async () => {
        const data = await getTeacherDashboard();
        setDashboard(data);
    };

    const loadStudent = async () => {
        const data = await getStudentDashboard();
        setDashboard(data);
    };

    return (
        <div className="dashboard">

            <h1>ClassFlow</h1>

            <div className="role-buttons">

                <button onClick={loadAdmin}>
                    Admin
                </button>

                <button onClick={loadTeacher}>
                    Utbildare
                </button>

                <button onClick={loadStudent}>
                    Student
                </button>

            </div>

            <div className="dashboard-content">

                <h2>{dashboard?.role}</h2>

                <ul>
                    {dashboard?.pages.map((page: string) => (
                        <li key={page}>
                            {page}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
}

export default Dashboard;