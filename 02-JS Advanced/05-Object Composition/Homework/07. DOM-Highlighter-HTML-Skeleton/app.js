function solve(selector){
    let element = document.querySelector(selector);
    element.classList.add('highlight');

    let elements = [];
    let maxDepth = 0;
    let depth = 0;
    let visited = [];
    for (const child of element.children) {
        DFS(child);
        if(depth > maxDepth){
            maxDepth = depth;
            elements = visited
        }
        depth = 0;
        visited = [];
    }

    for (let element of elements) {
        element.classList.add('highlight');
    }

    function DFS(parent){
        visited.push(parent);

        for (const child in parent.children) {
            let childElement = parent.children[child];
            if(typeof childElement === 'object'){
                if(!visited.includes(childElement)){
                    depth++;
                    DFS(childElement);
                }
            }
        }
    }
}

solve('#content');