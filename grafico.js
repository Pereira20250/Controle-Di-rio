const metas = JSON.parse(localStorage.getItem("metas")) || {};
let semanas = {};

metas.forEach(m => {
  m.historico.forEach(h => {
    if (!semanas[h.semana]) semanas[h.semana] = 0;
    if (h.status === "concluída") semanas[h.semana]++;
  });
});

new Chart(grafico, {
  type: "line",
  data: {
    labels: Object.keys(semanas),
    datasets: [{
      label: "Concluídas",
      data: Object.values(semanas),
      borderWidth: 3
    }]
  }
});
