onmessage = 
function(e)
{
    var score = parseInt(e.data);
    if (90 <= score && score <=100)
        this.postMessage({grade: 'A', score: score});
    else if (80 <= score && score <=89)
        this.postMessage({grade: 'B', score: score});
    else if (70 <= score && score <=79)
        this.postMessage({grade: 'C', score: score});
    else if (60 <= score && score <=69)
        this.postMessage({grade: 'D', socre: score});
    else
        this.postMessage({grade: 'F', score: score});
};