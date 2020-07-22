using Microsoft.EntityFrameworkCore;

namespace Puzzle15.EF
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options) { }
    }
}
