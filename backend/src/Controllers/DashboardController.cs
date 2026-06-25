using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DashboardController : ControllerBase
{
    [HttpGet("admin")]
    public IActionResult Admin()
    {
        return Ok(new
        {
            role = "Admin",
            pages = new[]
            {
                "Users",
                "Classes",
                "Courses",
                "Assignments",
                "Quiz",
                "Attendance",
                "Grades"
            }
        });
    }

    [HttpGet("teacher")]
    public IActionResult Teacher()
    {
        return Ok(new
        {
            role = "Teacher",
            pages = new[]
            {
                "My Classes",
                "Courses",
                "Assignments",
                "Quiz",
                "Attendance",
                "Grades"
            }
        });
    }

    [HttpGet("student")]
    public IActionResult Student()
    {
        return Ok(new
        {
            role = "Student",
            pages = new[]
            {
                "My Classes",
                "Course Material",
                "Assignments",
                "Quiz",
                "My Attendance",
                "My Grades"
            }
        });
    }
}