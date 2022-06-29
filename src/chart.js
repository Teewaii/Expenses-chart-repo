const monExp = document.querySelector('.balance-amount')
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: 'Expenses in Dollar($)',
            data: [7, 19, 16, 22, 25, 14, 9],
            backgroundColor: [
                'rgb(236, 119, 95)',
                'rgb(236, 119, 95)',
                'rgb(118, 181, 188)',
                'rgb(236, 119, 95)',
                'rgb(118, 181, 188)',
                'rgb(236, 119, 95)',
                'rgb(236, 119, 95)'   

            ],
            borderWidth: 1,
            borderRadius:[5]
        }]
    },
    options: {
        plugins: {
            legend:{
                display:false
                }
                
            },
             scales: {
                x:{
                    grid:{
                        display:false,
                        drawBorder:false
                    }
                },
                y: {
                ticks: {
                  display: false
                },
                  grid: {
                    display: false,
                    drawBorder:false
                },
                
                    tooltip: {
                        yAlign: "bottom",
                        displayColors: false,
                         },                   
                    },
                  
     }
        
    }

});

const arr = [7, 19, 16, 22, 25, 14, 9]
 monExp.textContent ="$"+arr.reduce((a,b)=>a+b,0);