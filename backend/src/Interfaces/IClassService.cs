using backend.src.DTOs;
using backend.src.Models;

namespace backend.src.Interfaces;

public interface IClassService
{
    List<Class> GetAllClasses();

    Class CreateClass(CreateClassDto createClassDto);
    Class? UpdateClass(Guid id, CreateClassDto updateClassDto);

    bool DeleteClass(Guid id);
}