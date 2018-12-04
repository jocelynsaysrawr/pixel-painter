// import colors from './colors';

const pixelPainterModule = () => {

    console.log(colors.reds)
}

(() => {
    const test = document.createElement('p')
    test.innerHTML = 'test';
    mainSidebar.appendChild(test);
    console.log('sanity check')
})();