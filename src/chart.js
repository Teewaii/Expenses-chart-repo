
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: 'Expenses',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79 %, 65%)',
                'hsl(10, 79 %, 65%)',
                'hsl(10, 79 %, 65%)',
                'hsl(10, 79 %, 65%)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false
                },
                plugins: {
                    tooltip: {
                        yAlign: "bottom",
                        displayColors: false,

                    }
                }
            }
        }
    }

});
