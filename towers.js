function hanoiMove(stack, source, dest, aux) {
    if (stack.length === 1) {
        move from source to dest;
    } else {
        hanoiMove(stack - 1, source, aux, dest) //move stack-1 from source to (empty) aux, changes aux to 
                                                   // where the last disk will be moved
        move last disk to dest //moves last disk in stack from source to dest, now regarded as "empty"
        hanoiMove(stack - 1, aux, dest, source) //moves stack-1 from aux to dest
    }
    
}

hanoiMove([1, 2, 3, 4], c1, c3);