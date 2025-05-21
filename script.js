window.addEventListener('DOMContentLoaded', () => {

    const candidates = [
        { name: "John Doe", party: "ABC", votes: 1500, barId: "bar1" },
        { name: "Jane Smith", party: "DEF", votes: 2000, barId: "bar2" },
        { name: "Bob Johnson", party: "GHI", votes: 1200, barId: "bar3" }
    ];

    const yAxisValues = [2000, 1500, 1000, 500];
    const yAxisContainer = document.getElementById('y-axis-values');
    yAxisContainer.innerHTML = '';

    yAxisValues.forEach(value => {
        const div = document.createElement('div');
        div.textContent = value.toLocaleString();
        div.classList.add('y-value');
        yAxisContainer.appendChild(div);
    });


    const xAxisContainer = document.getElementById('x-axis-values');
    xAxisContainer.innerHTML = '';
    candidates.forEach(candidate => {
        const div = document.createElement('div');
        div.textContent = candidate.name;
        div.classList.add('x-value');
        xAxisContainer.appendChild(div);
    });


    const maxVote = Math.max(...candidates.map(c => c.votes));
    const maxHeight = 400;

    candidates.forEach(candidate => {
        const bar = document.getElementById(candidate.barId);
        const targetHeight = (candidate.votes / maxVote) * maxHeight;

        setTimeout(() => {
            bar.style.height = `${targetHeight}px`;
        }, 100);
    });
});
