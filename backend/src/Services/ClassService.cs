using System.Text.Json;
using backend.src.DTOs;
using backend.src.Interfaces;
using backend.src.Models;

namespace backend.src.Services;

public class ClassService : IClassService
{
    private readonly string _filePath = Path.Combine("..", "database", "classes.json");

    public List<Class> GetAllClasses()
    {
        if (!File.Exists(_filePath))
        {
            return new List<Class>();
        }

        var json = File.ReadAllText(_filePath);

        return JsonSerializer.Deserialize<List<Class>>(json)
               ?? new List<Class>();
    }

    public Class CreateClass(CreateClassDto createClassDto)
    {
        var classes = GetAllClasses();

        var newClass = new Class
        {
            Id = Guid.NewGuid(),
            Name = createClassDto.Name,
            Description = createClassDto.Description,
            StartDate = createClassDto.StartDate,
            EndDate = createClassDto.EndDate,
            IsActive = true
        };

        classes.Add(newClass);

        var json = JsonSerializer.Serialize(classes, new JsonSerializerOptions
        {
            WriteIndented = true
        });

        File.WriteAllText(_filePath, json);

        return newClass;
    }
public Class? UpdateClass(Guid id, CreateClassDto updateClassDto)
{
    var classes = GetAllClasses();

    var existingClass = classes.FirstOrDefault(c => c.Id == id);

    if (existingClass == null)
    {
        return null;
    }

    existingClass.Name = updateClassDto.Name;
    existingClass.Description = updateClassDto.Description;
    existingClass.StartDate = updateClassDto.StartDate;
    existingClass.EndDate = updateClassDto.EndDate;

    var json = JsonSerializer.Serialize(classes, new JsonSerializerOptions
    {
        WriteIndented = true
    });

    File.WriteAllText(_filePath, json);

    return existingClass;
}

    public bool DeleteClass(Guid id)
    {
        var classes = GetAllClasses();

        var existingClass = classes.FirstOrDefault(c => c.Id == id);

        if (existingClass == null)
        {
            return false;
        }

        classes.Remove(existingClass);

        var json = JsonSerializer.Serialize(classes, new JsonSerializerOptions
        {
            WriteIndented = true
        });

        File.WriteAllText(_filePath, json);

        return true;
    }
}