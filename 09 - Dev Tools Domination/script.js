const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello');

    // Interpolated
    console.log('Hello I am a %s string!', '💩');

    // Styled
    console.log('%c I am some great text', 'font-size: 50px; background: salmon; text-shadow: 8px 8px 0 aqua')

    // warning!
    console.warn('Oh nooooooo');

    // Error :|
    console.error('Shit!');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    console.assert(1 === 2, 'That is wrong!');

    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong wrong wrong!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Michał');
    console.count('Wes');
    console.count('Michał');
    console.count('Wes');
    console.count('Wes');

    // timing
    console.time('fetching data');
    fetch('http://api.github.com/users/webos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });

    console.table(dogs);