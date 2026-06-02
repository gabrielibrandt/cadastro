using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactsController : ControllerBase
{
    private static List<Contact> contacts = new();

    private static int nextId = 1;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(contacts);
    }

    [HttpPost]
    public IActionResult Create(Contact contact)
    {
        contact.Id = nextId++;

        contacts.Add(contact);

        return Ok(contact);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var contact = contacts.FirstOrDefault(c => c.Id == id);

        if (contact == null)
        {
            return NotFound();
        }

        contacts.Remove(contact);

        return NoContent();
    }
}