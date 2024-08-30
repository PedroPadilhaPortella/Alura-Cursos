using Microsoft.AspNetCore.Mvc;

namespace Alura.FinancasWeb.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return Ok("Alô, mundo!");
		}
	}
}