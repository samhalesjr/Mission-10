namespace Mission10
{
    public interface IBowlerRepository
    {
        IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<Bowler> GetBowlersWithTeams(); // New method
    }
}
