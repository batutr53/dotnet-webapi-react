using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly DataContext _context;

        public CartController(DataContext context)
        {
            _context = context;
        }

        // GET: api/cart
        [HttpGet("GetCartItems")]
        public async Task<ActionResult<Cart>> GetCartItems()
        {
            var cart = await GetOrCreate();
            return cart;
        }

        // POST: api/cart
        [HttpPost("AddCartItem")]
        public async Task<ActionResult> AddCartItem(int productId,int quantity)
        {
            var cart = await GetOrCreate();
            var product = await _context.Products.FindAsync(productId);
            if(product == null) return NotFound();

            cart.addItem(productId,quantity);
            var result = await _context.SaveChangesAsync() > 0;
            if(result) return CreatedAtAction("GetCartItems", cart);
            return BadRequest(new ProblemDetails{Title = "Problem adding item to cart"});
        }


    [HttpGet("GetOrCreate")]
        public async Task<Cart> GetOrCreate()
        {
            var cart = await _context.Carts
            .Include(x => x.CartItems)
            .ThenInclude(x=> x.Product)
            .Where(x=>x.CustomerId == Request.Cookies["customerId"]).FirstOrDefaultAsync();

            if(cart == null){
               var customerId = Guid.NewGuid().ToString();

               var cookieOptions = new CookieOptions
               {
                   Expires = DateTime.Now.AddDays(7),
                   IsEssential = true 
               };

             Response.Cookies.Append("customerId", customerId, cookieOptions);
             cart = new Cart{
                 CustomerId = customerId
             };
            await  _context.Carts.AddAsync(cart);
             await _context.SaveChangesAsync();  
            }
            return cart;
        }

    }
}