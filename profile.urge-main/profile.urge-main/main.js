// Dashboard stats animation
document.addEventListener('DOMContentLoaded', () => {
    animateStat('projects-count', 12, 1000);
    animateStat('clients-count', 8, 1000);
    animateStat('years-count', 5, 1000);

    // Example projects
    const projects = [
        { title: "Portfolio Website", desc: "A personal portfolio built with HTML, CSS, and JS." },
        { title: "Weather App", desc: "A weather forecast app using OpenWeather API." },
        { title: "Task Manager", desc: "A simple task management tool for productivity." }
    ];
    const projectList = document.querySelector('.project-list');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-item';
        div.innerHTML = `<h3>${project.title}</h3><p>${project.desc}</p>`;
        projectList.appendChild(div);
    });
});

function animateStat(id, end, duration) {
    const el = document.getElementById(id);
    let start = 0;
    const step = Math.ceil(end / (duration / 50));
    const interval = setInterval(() => {
        start += step;
        if (start >= end) {
            el.textContent = end;
            clearInterval(interval);
        } else {
            el.textContent = start;
        }
    }, 50);
}