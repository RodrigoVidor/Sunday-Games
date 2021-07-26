using FoccoEmFrente.Kanban.Application.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoccoEmFrente.Kanban.Application.Mapping
{
    public class GamesMap : IEntityTypeConfiguration<GamesActivity>
    {
        public void Configure(EntityTypeBuilder<GamesActivity> builder)
        {
            builder.ToTable("GamesTasks");

            builder.Property(c => c.Id)
                .HasColumnName("Id");

            builder.Property(c => c.Title)
                .HasColumnType("varchar(100)")
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(c => c.Status)
                .HasConversion<int>()
                .IsRequired();

            builder.Property(c => c.UserId)
                .IsRequired();

            builder.Property(c => c.Order)
               .IsRequired();
        }
    }
}
