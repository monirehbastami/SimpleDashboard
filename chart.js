// Our labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var ramzani = [86,114,106,106,107,111,133,221,783,2478];
var babei = [282,350,411,1750,635,809,947,1402,3700,5267];
var sajadi = [168,1346,178,190,203,276,408,547,675,734];
var alipour = [40,20,10,1222,24,5673,74,167,508,784];
var gholizadeh = [6,3,800,2,80,26,82,172,312,433];

var ctx = document.getElementById("line-chart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: ramzani,
        label: "رمضانی",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: babei,
        label: "بابایی",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: sajadi,
        label: "سجادی",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: alipour,
        label: "علیپور",
        borderColor: "#e8c3b9",
        fill: false
      },
      { 
        data: gholizadeh,
        label: "قلی زاده",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    
      title: {
        display: true,
        text: 'نمودار آماری بازاریابان'
      },
      maintainAspectRatio: false,
   
  },
  scales: {
    x: {
      grid: {
        display: true,
        drawBorder: true,
        drawOnChartArea: true,
        drawTicks: true,
      }
    },
    y: {
      grid: {
        drawBorder: false,
       
      },
    }
    }
});