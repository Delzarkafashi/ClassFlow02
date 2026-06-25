const API_URL = "http://localhost:5214/api/dashboard";

export async function getAdminDashboard() {
    const response = await fetch(`${API_URL}/admin`);
    return response.json();
}

export async function getTeacherDashboard() {
    const response = await fetch(`${API_URL}/teacher`);
    return response.json();
}

export async function getStudentDashboard() {
    const response = await fetch(`${API_URL}/student`);
    return response.json();
}