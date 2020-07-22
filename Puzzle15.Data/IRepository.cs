using System.Collections.Generic;

namespace Puzzle15.Data
{
    public interface IRepository
    {
        Img[] DrawTable();
        void PushScore(ViewModel viewModel);
    }
}
