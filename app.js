/** Getting the body element */
const body = document.body;

/**Starting point */
const header = document.createElement('header');
header.innerText = 'TodoApp'

const contain_all = document.createElement('section');
const div = document.createElement('div');
div.className = 'contain';

body.appendChild(header);
body.appendChild(contain_all);
contain_all.appendChild(div)

const main = document.createElement('main');
div.appendChild(main);


/**Declaring addone - main content */
function addone() {
    const contain_input = document.createElement('div');
    contain_input.setAttribute('class', 'contain_input');
    main.appendChild(contain_input);

    const input = document.createElement('input');
    contain_input.appendChild(input);
    input.setAttribute('maxlength', 120);
    input.setAttribute('placeholder', 'Add todo task....');


    const span1 = document.createElement('button');
    const span2 = document.createElement('button');
    contain_input.appendChild(span1);
    span1.classList.add('circle', 'green');
    span2.classList.add('circle', 'red');

    const setTime = document.createElement('div');
    setTime.classList.add('set_time');
    main.append(setTime);

    const setReminder = document.createElement('p');
    setReminder.classList.add('set_reminder');
    setReminder.innerText = 'Set reminder';
    setTime.append(setReminder);

    const timeLeft = document.createElement('p');
    timeLeft.classList.add('time_left');
    timeLeft.innerText = '';
    setTime.append(timeLeft);

    const add_todo = document.createElement('i');
    span1.appendChild(add_todo);
    add_todo.classList.add('fa-solid', 'fa-plus', 'fa-lg');

    const remove_todo = document.createElement('span');
    span2.appendChild(remove_todo);
    remove_todo.className = 'remove_todo';

    const contain_todos = document.createElement('div');
    contain_todos.className = 'contain_todos';
    const todo = document.createElement('div');
    todo.className = 'todos';
    const text = document.createElement('p');
    todo.appendChild(text);
    const completed_todo = document.createElement('button');
    completed_todo.classList.add('completed_todo');
    completed_todo.innerText = 'Mark completed';
    contain_todos.appendChild(todo);
    contain_todos.appendChild(completed_todo);
    contain_todos.appendChild(span2);
    main.appendChild(contain_todos);

    /**Function that controls time settings*/
    function createTime() {
        // body.style.backgroundColor = 'rgba(0,0,0,0.1)'
        const time_div = document.createElement('section');
        time_div.classList.add('time_div');
        contain_all.appendChild(time_div);

        const justify = document.createElement('div');
        justify.setAttribute('id', 'justify_time');
        time_div.appendChild(justify);

        const con_exit = document.createElement('div');
        con_exit.classList = 'exit';
        justify.appendChild(con_exit);
        const exit = document.createElement('i');
        exit.style.color = 'crimson';
        exit.classList.add('fa-solid', 'fa-close', 'fa-2x');
        con_exit.appendChild(exit);

        const sub1 = document.createElement('p');
        sub1.innerText = 'Select day';
        sub1.className = 'change_color';
        sub1.style.color = 'grey';
        justify.appendChild(sub1);

        const section1 = document.createElement('div');
        section1.className = 'con_day';
        justify.appendChild(section1);
        const select = document.createElement('select');
        section1.appendChild(select);

        const selectedDisabled = document.createElement('option');
        select.appendChild(selectedDisabled);
        selectedDisabled.textContent = 'choose day';
        console.log(selectedDisabled);
        selectedDisabled.setAttribute('disabled', 'true');
        selectedDisabled.setAttribute('selected', 'true');

        for (let i = 0; i < 4; i++) {
            const option = document.createElement('option');
            select.appendChild(option);
        }
        select.childNodes[1].textContent = 'Today';
        select.childNodes[2].textContent = 'Tomorrow';
        select.childNodes[3].textContent = 'Nextweek';
        select.childNodes[4].textContent = 'Other';
        const day = document.createElement('input');
        day.setAttribute('type', 'text');
        day.setAttribute('maxlength', '2');
        section1.appendChild(day);

        const sub2 = document.createElement('p');
        sub2.style.color = 'grey';
        sub2.className = 'change_color';
        sub2.innerText = 'Set time';
        justify.appendChild(sub2);

        const section2 = document.createElement('div');
        section2.setAttribute('class', 'con_input');
        justify.appendChild(section2);

        for (let i = 0; i < 3; i++) {
            const c_timn = document.createElement('div');
            section2.appendChild(c_timn);
            const mode = document.createElement('sub');
            mode.style.color = 'white';
            mode.innerText = 'Hour'
            c_timn.appendChild(mode);
            c_timn.className = 'c_time';
            const inputs = document.createElement('input');
            inputs.setAttribute('type', 'text');
            inputs.setAttribute('maxlength', '2');
            c_timn.appendChild(inputs);
            const invalid = document.createElement('small');
            invalid.style.color = 'red';
            c_timn.appendChild(invalid);

            inputs.oninput = ()=>{
                const num = Number(inputs.value);
            if (num != typeof(Number)) {
                invalid.textContent = 'Invalid';
            }
        }
    }
    console.log(section2)
    section2.childNodes[0].firstChild.textContent = 'Hour'
    section2.childNodes[1].firstChild.textContent = 'Min'
    section2.childNodes[2].firstChild.textContent = 'Mode'

    const btn_set = document.createElement('button');
    btn_set.setAttribute('class', 'set');
    btn_set.innerText = 'set';
    justify.appendChild(btn_set);

    exit.onclick = ()=>{contain_all.removeChild(time_div)}
    }

    /**Function that adds a new todo */
    function add() {
        if (timeLeft.innerText != '')
        {
        setReminder.innerText = 'Time left';
        setReminder.style.color = 'red';
        }
        if (input.value !== '') { text.innerText = input.value; main.removeChild(input.parentElement); }
    }

    /**Function that removes todo */
    function remove() {
        if (input.value !== '' && todo.innerText != '') { todo.innerText = ''; todo.style.textDecoration = ''; main.removeChild(contain_todos); main.removeChild(setTime); }
        if (main.children.length < 1) {
            const alertz = document.createElement('h3');
            alertz.innerText = 'Create new tasks';
            alertz.style.color = 'white';
            main.appendChild(alertz);
            const point_to = document.createElement('i');
            point_to.style.color = 'white';
            point_to.classList.add('fa-solid', 'fa-hand-pointer', 'fa-2x', 'handy');
            main.appendChild(point_to);
            console.log(main.children.length);
            alert("Out of Tasks");
            let decide = prompt('Do you want to create new ones\t leave promt empty if no');
            if (decide) {
                for (let index = 1; index <= 3; index++) {
                    addone();
                }
                main.removeChild(alertz);
            }
            alertz.onclick = () => {
                for (let index = 1; index <= 3; index++) {
                    addone();
                } main.removeChild(alertz);
                main.removeChild(point_to);
            }
        }
    }

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-check', 'fa-lg');

    function completed() {
        if (text.innerText != '') {
            text.classList.toggle('completed');
            icon.classList.toggle('fa-check');
            icon.classList.toggle('fa-check-double');       
        }
    }
    setInterval(() => {

        if (window.innerWidth <= 800) {
            console.log(window.innerWidth)
            completed_todo.innerText = '';
            completed_todo.style.width = '35px';
            completed_todo.style.height = '35px';
            completed_todo.appendChild(icon);
        }
        else {
            completed_todo.innerText = 'Mark completed';
            completed_todo.style.width = '';
            completed_todo.style.height = '';
        }
    }, 1000);

    // input.oninput = () => { text.innerText = input.value }
    span1.onclick = () => { add() }
    span2.onclick = () => { remove() }
    completed_todo.onclick = () => { completed() }
    setReminder.onclick = () => { 
        if (setReminder.textContent == 'Set reminder')
        createTime() 
    }

}

/**Calling addone in main*/
for (let index = 1; index <= 3; index++) {
    addone();
}

/**Adding peripherals */
let plus1 = document.createElement('h3');
plus1.innerText = '+1'
plus1.className = 'plus1';
body.appendChild(plus1);
if (main.children < 3)
    plus1.className = 'plus_d';
plus1.onclick = () => {
    addone();
    main.style.overflowY = 'auto';
    main.style.overflowX = 'hidden';
    if (alertz)
        alertz.remove();
}