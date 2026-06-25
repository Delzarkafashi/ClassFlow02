import { useEffect, useState } from "react";
import "./Dashboard.css";

import {
    getAdminDashboard,
    getTeacherDashboard,
    getStudentDashboard
} from "../../services/dashboardApi";

import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
import TeacherDashboard from "../../components/TeacherDashboard/TeacherDashboard";
import StudentDashboard from "../../components/StudentDashboard/StudentDashboard";

function Dashboard() {
    const [dashboard, setDashboard] = useState<any>(null);
    const [role, setRole] = useState("Admin");

    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const data = await getAdminDashboard();
        setDashboard(data);
        setRole("Admin");
    };

    const loadTeacher = async () => {
        const data = await getTeacherDashboard();
        setDashboard(data);
        setRole("Teacher");
    };

    const loadStudent = async () => {
        const data = await getStudentDashboard();
        setDashboard(data);
        setRole("Student");
    };

    return (
        <div className="dashboard">

            <h1>ClassFlow</h1>

            <div className="role-buttons">

                <button
                    className={role === "Admin" ? "active" : ""}
                    onClick={loadAdmin}
                >
                    Admin
                </button>

                <button
                    className={role === "Teacher" ? "active" : ""}
                    onClick={loadTeacher}
                >
                    Utbildare
                </button>

                <button
                    className={role === "Student" ? "active" : ""}
                    onClick={loadStudent}
                >
                    Student
                </button>

            </div>

            {role === "Admin" && (
                <AdminDashboard dashboard={dashboard} />
            )}

            {role === "Teacher" && (
                <TeacherDashboard dashboard={dashboard} />
            )}

            {role === "Student" && (
                <StudentDashboard dashboard={dashboard} />
            )}

        </div>
    );
}

export default Dashboard;