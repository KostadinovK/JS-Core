function solve () {
    let id = 0;
    let selector = undefined;
    let bugs = {};

    function displayBugs(){
        let content = document.querySelector(selector);
        content.innerHTML = '';
        for (const bugId in bugs) {
            let report = document.createElement('div');
            report.classList.add('report');
            report.id = `report_${id}`;
            content.appendChild(report);

            let body = document.createElement('div');
            body.classList.add('body');
            report.appendChild(body);
            body.innerHTML = `<p>${bugs[bugId].description}</p>`;

            let title = document.createElement('div');
            title.classList.add('title');
            report.appendChild(title);
            title.innerHTML = `<span class="author">Submitted by: ${bugs[bugId].author}</span>
                            <span class="status">${bugs[bugId].status} | ${bugs[bugId].severity}</span>`;
        }
    }

    return {
        report: (author, description, status, severity) => {
            bugs[id] = {author, description, status, severity};
            id++;
            if(selector){
                displayBugs();
            }
        },
        setStatus: (id, newStatus) => {
            bugs[id].status = newStatus;
            if(selector){
                displayBugs();
            }
        },
        remove: id => {
            delete bugs[id];
            if(selector){
                displayBugs();
            }
        },
        sort: method => {
            if(method === 'author'){
                Object.entries(bugs).sort((a, b) => {
                    return a[1].author.localeCompare(b[1].author);
                });
            }else if(method === 'severity'){
                Object.entries(bugs).sort((a, b) => {
                    return a[1].severity - b[1].severity;
                });
            }else{
                Object.entries(bugs).sort((a, b) => {
                    return a[0] - b[0];
                });
            }

            if(selector){
                displayBugs();
            }
        },
        output: s => {
            selector = s;
        }
    };
}

let tracker = solve();

tracker.output('#content');
tracker.report('kiwi', 'judge rip', true, 5);
