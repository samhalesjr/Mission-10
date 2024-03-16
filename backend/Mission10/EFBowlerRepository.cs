
using Microsoft.EntityFrameworkCore;

namespace Mission10
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlerContext _bowlerContext;
        public EFBowlerRepository(BowlerContext temp) {
            _bowlerContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _bowlerContext.Bowlers;

        public IEnumerable<Bowler> GetBowlersWithTeams()
        {
            return _bowlerContext.Bowlers.Include(b => b.Team).ToArray();
        }

    }
}
