using FoccoEmFrente.Kanban.Application.Enum;
using System;

namespace FoccoEmFrente.Kanban.Application.Entities
{
    public class GamesActivity : Entity, IAggregateRoot
    {
    public GamesActivity() { }
    public string Title { get; set; }
    public ActivityStatus Status { get; set; }
    public Guid UserId { get; set; }
    public int Order { get; set; }
}
}
