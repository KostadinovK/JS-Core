function solution(rectsInfo){
    let rects = [];

    for (const rectInfo of rectsInfo) {
        let rect = createRectangle(rectInfo);

        rects.push(rect);
    }

    return rects.sort((r1, r2) => r1.compareTo(r2));
    

    function createRectangle(rectInfo){
        return {
            width: rectInfo[0],
            height: rectInfo[1],
            area: function(){
                return this.width * this.height;
            },
            compareTo: function (other){
                let res = other.area() - this.area();
                return res || other.width - this.width;
            }
        };
    }
}

console.log(solution([[10, 5], [5, 12]]));