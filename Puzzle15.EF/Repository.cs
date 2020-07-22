using Puzzle15.Data;
using System.Collections.Generic;

namespace Puzzle15.EF
{
    public class Repository : IRepository
    {
        private MyContext db { get; set; }
        public Repository(MyContext context)
        {
            db = context;
        }

        public Img[] DrawTable()
        {
            var puzzle = new Img[16];

            for (int i = 0; i < 16; i++)
            {
                var img = new Img();
                img.Number = i;

                if (i == 0)
                    img.ImgSrc = $"/img/img_({i}).png";
                else
                    img.ImgSrc = $"/img/img_({i}).jpg";

                puzzle[i] = img;
            }

            return puzzle;
        }

        public void PushScore(ViewModel viewModel)
        {

        }
    }
}
