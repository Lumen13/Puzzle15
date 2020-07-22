using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Puzzle15.Data;
using Puzzle15.Models;

namespace Puzzle15.Controllers
{
    public class HomeController : Controller
    {
        private readonly IRepository _repository;

        public HomeController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Index()
        {
            Img[] puzzle = _repository.DrawTable(); 
            return View(puzzle);
        }

        [HttpPost]
        public IActionResult Index(ViewModel viewModel)
        {
            _repository.PushScore(viewModel);
            return new LocalRedirectResult($"~/Home/Index/");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
