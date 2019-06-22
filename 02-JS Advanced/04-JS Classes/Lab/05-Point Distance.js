class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2){
        let hDist = Math.abs(p1.x - p2.x);
        let vDist = Math.abs(p1.y - p2.y);

        return Math.sqrt(hDist**2 + vDist**2);
    }
}