using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite.Diagnostics.Internal;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();

var app = builder.Build();

app.MapGet("/", () => "COLOQUE O SEU NOME");

//ENDPOINTS DE TAREFA
//GET: http://localhost:5273/api/tarefas/listar
app.MapGet("/api/tarefas/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Tarefas.Any())
    {
        return Results.Ok(ctx.Tarefas.ToList());
    }
    return Results.NotFound("Nenhuma tarefa encontrada");
});

//POST: http://localhost:5273/api/tarefas/cadastrar
app.MapPost("/api/tarefas/cadastrar", ([FromServices] AppDataContext ctx, [FromBody] Tarefa tarefa) =>
{
    ctx.Tarefas.Add(tarefa);
    ctx.SaveChanges();
    return Results.Created("", tarefa);
});

//PUT: http://localhost:5273/tarefas/alterar/{id}
app.MapPut("/api/tarefas/alterar/{id}", ([FromServices] AppDataContext ctx, [FromRoute] string id) =>
{
    var tarefa = ctx.Tarefas.Find(id);

    if (tarefa.Status == "Não iniciada")
    {
        tarefa.Status = "Em andamento";
        ctx.SaveChanges();
        return Results.Ok("Status da tarefa atualizado com sucesso!");
    }

    if (tarefa.Status == "Em andamento")
    {
        tarefa.Status = "Concluída";
        ctx.SaveChanges();
        return Results.Ok("Tarefa concluida com sucesso!");
    }

    return Results.BadRequest("Tarefa ja concluida!");
    
});

//GET: http://localhost:5273/tarefas/naoconcluidas
app.MapGet("/api/tarefas/naoconcluidas", ([FromServices] AppDataContext ctx) =>
{
    var tarefasNaoConcluidas = ctx.Tarefas.Where(t => t.Status == "Não iniciada" || t.Status == "Em andamento").ToList();

    return Results.Ok(tarefasNaoConcluidas);
});

//GET: http://localhost:5273/tarefas/concluidas
app.MapGet("/api/tarefas/concluidas", ([FromServices] AppDataContext ctx) =>
{
     var tarefasConcluidas = ctx.Tarefas.Where(t => t.Status == "Concluída").ToList();

    return Results.Ok(tarefasConcluidas);
});

app.Run();
