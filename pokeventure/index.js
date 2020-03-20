function meanGroups(a) {
    let b = []  //new array
    let c = []
    // console.log(a.length)
    let n = a.length

    for(let i = 0; i < a.length; i++){
        let avg= 0
        // console.log(a[i].length)

        for(let j= 0; j < a[i].length; j++){
            avg = avg + a[i][j]
        }

        b[i] = avg/(a[i].length)

    }
    console.log(b)
    let num =[]
    for(let i =0; i< b.length; i++){
        c.push([])
        c[i].push(i)
        if()
        for(let j = i ; j < b.length; j++){
            if(b[c[i][0]] == b[j] && i!=j)
            {
                c[i].push(j)
                num.push(j)
                
            }
        }
    }
    console.log(c)
}

meanGroups([[2,5,1,3], [4,4] ,[4,8,3], [5,7,1,3,5],[2,7,3]])
