type Props = {
    dashboard: any;
};

function StudentDashboard({ dashboard }: Props) {
    return (
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
    );
}

export default StudentDashboard;