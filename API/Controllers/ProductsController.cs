using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;
[ApiController]
[Route("/api/[controller]")]
public class ProductsController:ControllerBase
{
    private readonly DataContext _context;
    [ActivatorUtilitiesConstructor]
    public ProductsController(DataContext context)
    {
        _context = context;
    }


    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var result = await _context.Products.ToListAsync();
        // Your logic to get products goes here
        return Ok(result);
    }

     [HttpGet("GetProductById")]
    public async Task<IActionResult> GetProductById(int id)
    {
        var result = await _context.Products.Where(x=>x.Id == id).FirstOrDefaultAsync();
        // Your logic to get products goes here
        return Ok(result);
    }
}
