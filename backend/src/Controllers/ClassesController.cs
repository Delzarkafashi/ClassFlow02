using backend.src.DTOs;
using backend.src.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClassesController : ControllerBase
{
    private readonly IClassService _classService;

    public ClassesController(IClassService classService)
    {
        _classService = classService;
    }

    [HttpGet]
    public IActionResult GetAllClasses()
    {
        return Ok(_classService.GetAllClasses());
    }

    [HttpPost]
    public IActionResult CreateClass(CreateClassDto createClassDto)
    {
        var newClass = _classService.CreateClass(createClassDto);

        return CreatedAtAction(nameof(GetAllClasses), new { id = newClass.Id }, newClass);
    }
    [HttpPut("{id}")]
    public IActionResult UpdateClass(Guid id, CreateClassDto updateClassDto)
    {
        var updatedClass = _classService.UpdateClass(id, updateClassDto);

        if (updatedClass == null)
        {
            return NotFound();
        }

        return Ok(updatedClass);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteClass(Guid id)
    {
        var deleted = _classService.DeleteClass(id);

        if (!deleted)
        {
            return NotFound();
        }

        return NoContent();
    }
}