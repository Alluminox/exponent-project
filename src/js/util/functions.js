export const debounce = (cb, time)  => {

    let timer = setTimeout(() => {
        clearTimeout(timer);
        cb();
    }, time)



}

export const ease = (t, b, c, d) => {

    t  = t / d / 2;

    if(t < 1) return c / 2 * t * t + b;
    t--;

    return c / 2 * (t * (t-2) -1) + b;
}
