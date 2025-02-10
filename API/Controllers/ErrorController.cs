using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ErrorController : ControllerBase
    {
        [HttpGet("not-found")]
        public async Task<IActionResult> NotFoundError()
        {
            return NotFound();
        }
          [HttpGet("bad-request")]
        public async Task<IActionResult> BadRequestError()
        {
            return BadRequest();
        }

          [HttpGet("unauthorized")]
        public async Task<IActionResult> UnauthorizedError()
        {
            return Unauthorized();
        }

         [HttpGet("validation-error")]
        public async Task<IActionResult> ValidationError()
        {
            ModelState.AddModelError("valid error", "This username is already taken");
            return ValidationProblem(ModelState);
        }

        [HttpGet("server-error")]
        public async Task<IActionResult> ServerError()
        {
            throw new Exception("server error");
        }
    }
}