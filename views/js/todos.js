var get_todos = async () => {
    var get_req = await fetch('/posts/daily_todos')
    var req = await get_req.json()
    for (let i = 0; i < req.docs.length; i++) {
        // todo area
        var todos_area = document.getElementById('todos_area')
        // todos heeader
        var h1_todos_header = document.createElement('h1')
        h1_todos_header.className = 'todos_header'
        var h1_todos_header_text = document.createTextNode('Daily')
        todos_area.appendChild(h1_todos_header)
        h1_todos_header.appendChild(h1_todos_header_text)
        // todos Wrapper
        var todo_wrapper = document.createElement('div')
        todo_wrapper.id = 'todo' + i
        todo_wrapper.className = 'todo todo_big_wrapper'
        todos_area.appendChild(todo_wrapper)
        // todo Header
        var todo_name_create_element = document.createElement('h2')
        var todo_name_text = document.createTextNode(req.docs[i].daily_todos.todo_name)
        todo_wrapper.appendChild(todo_name_create_element)
        todo_name_create_element.appendChild(todo_name_text)
        // todo
        var todo_create_element = document.createElement('p')
        todo_create_element.className = 'todo'
        var todo = document.createTextNode(req.docs[i].daily_todos.todo)
        todo_wrapper.appendChild(todo_create_element)
        todo_create_element.appendChild(todo)
        // todo operations wrapper
        var todo_operations_create = document.createElement('div')
        todo_operations_create.className = 'todo_operations'
        todo_operations_create.id = 'todo_operations' + i
        todo_wrapper.appendChild(todo_operations_create)
        // Finish Todo
        var finish_todo = document.createElement('a')
        var finish_todo_text = document.createTextNode('✓')
        finish_todo.onclick = async () => {
            var finish_get_req = await fetch('/posts/finish/' + req.docs[i]._id)
            finish_get_req
            window.location.reload()
        }
        todo_operations_create.appendChild(finish_todo)
        finish_todo.appendChild(finish_todo_text)
        // Delete Todo
        var delete_todo = document.createElement('a')
        var delete_todo_text = document.createTextNode('X')
        delete_todo.onclick = async () => {
            var delete_get_req = await fetch('/posts/delete/' + req.docs[i]._id)
            delete_get_req
            window.location.reload()
        }
        todo_operations_create.appendChild(delete_todo)
        delete_todo.appendChild(delete_todo_text)
        // Edit Todo
        var edit_todo = document.createElement('a')
        edit_todo.href = '/posts/edit/' + req.docs[i]._id
        var edit_todo_text = document.createTextNode('✏')
        todo_operations_create.appendChild(edit_todo)
        edit_todo.appendChild(edit_todo_text)

    }
}
var get_weekly_todos = async () => {
    var get_req = await fetch('/posts/weekly_todos')
    var req = await get_req.json()
    for (let i = 0; i < req.docs.length; i++) {
        // todo area
        var todos_area = document.getElementById('todos_area')
        // todo type header
        var h1_todos_header = document.createElement('h1')
        h1_todos_header.className = 'todos_header'
        var h1_todos_header_text = document.createTextNode('Weekly')
        todos_area.appendChild(h1_todos_header)
        h1_todos_header.appendChild(h1_todos_header_text)
        // todos Wrapper
        var todo_wrapper = document.createElement('div')
        todo_wrapper.id = 'todo' + i
        todo_wrapper.className = 'todo todo_big_wrapper'
        todos_area.appendChild(todo_wrapper)
        //  Todos Header
        var todo_name_create_element = document.createElement('h2')
        var todo_name_text = document.createTextNode(req.docs[i].weekly_todos.todo_name)
        todo_wrapper.appendChild(todo_name_create_element)
        todo_name_create_element.appendChild(todo_name_text)
        // todo
        var todo_create_element = document.createElement('p')
        todo_create_element.className = 'todo'
        var todo = document.createTextNode(req.docs[i].weekly_todos.todo)
        todo_wrapper.appendChild(todo_create_element)
        todo_create_element.appendChild(todo)
        // todo operations wrapper
        var todo_operations_create = document.createElement('div')
        todo_operations_create.className = 'todo_operations'
        todo_operations_create.id = 'todo_operations' + i
        todo_wrapper.appendChild(todo_operations_create)
        // Finish Todo
        var finish_todo = document.createElement('a')
        var finish_todo_text = document.createTextNode('✓')
        finish_todo.onclick = async () => {
            var finish_get_req = await fetch('/posts/finish/' + req.docs[i]._id)
            finish_get_req
            window.location.reload()
        }
        todo_operations_create.appendChild(finish_todo)
        finish_todo.appendChild(finish_todo_text)
        // Delete Todo
        var delete_todo = document.createElement('a')
        var delete_todo_text = document.createTextNode('X')
        delete_todo.onclick = async () => {
            var delete_get_req = await fetch('/posts/delete/' + req.docs[i]._id)
            delete_get_req
            window.location.reload()
        }
        todo_operations_create.appendChild(delete_todo)
        delete_todo.appendChild(delete_todo_text)
        // Edit Todo
        var edit_todo = document.createElement('a')
        edit_todo.href = '/posts/edit/' + req.docs[i]._id
        var edit_todo_text = document.createTextNode('✏')
        todo_operations_create.appendChild(edit_todo)
        edit_todo.appendChild(edit_todo_text)

    }
}
var get_monthly_todos = async () => {
    var get_req = await fetch('/posts/monthly_todos')
    var req = await get_req.json()
    // todo area
    var todos_area = document.getElementById('todos_area')
    // todos header
    var h1_todos_header = document.createElement('h1')
    h1_todos_header.className = 'todos_header'
    var h1_todos_header_text = document.createTextNode('Monthly')
    todos_area.appendChild(h1_todos_header)
    h1_todos_header.appendChild(h1_todos_header_text)
    for (let i = 0; i < req.docs.length; i++) {
        // todos Wrapper
        var todo_wrapper = document.createElement('div')
        todo_wrapper.id = 'todo' + i
        todo_wrapper.className = 'todo todo_big_wrapper'
        todos_area.appendChild(todo_wrapper)
        // todo Header
        var todo_name_create_element = document.createElement('h2')
        var todo_name_text = document.createTextNode(req.docs[i].monthly_todos.todo_name)
        todo_wrapper.appendChild(todo_name_create_element)
        todo_name_create_element.appendChild(todo_name_text)
        // todo
        var todo_create_element = document.createElement('p')
        todo_create_element.className = 'todo'
        var todo = document.createTextNode(req.docs[i].monthly_todos.todo)
        todo_wrapper.appendChild(todo_create_element)
        todo_create_element.appendChild(todo)
        // todo operations wrapper
        var todo_operations_create = document.createElement('div')
        todo_operations_create.className = 'todo_operations'
        todo_operations_create.id = 'todo_operations' + i
        todo_wrapper.appendChild(todo_operations_create)
        // Finish Todo
        var finish_todo = document.createElement('a')
        var finish_todo_text = document.createTextNode('✓')
        finish_todo.onclick = async () => {
            var finish_get_req = await fetch('/posts/finish/' + req.docs[i]._id)
            finish_get_req
            window.location.reload()
        }
        todo_operations_create.appendChild(finish_todo)
        finish_todo.appendChild(finish_todo_text)
        // Delete Todo
        var delete_todo = document.createElement('a')
        var delete_todo_text = document.createTextNode('X')
        delete_todo.onclick = async () => {
            var delete_get_req = await fetch('/posts/delete/' + req.docs[i]._id)
            delete_get_req
            window.location.reload()
        }
        todo_operations_create.appendChild(delete_todo)
        delete_todo.appendChild(delete_todo_text)
        // Edit Todo
        var edit_todo = document.createElement('a')
        edit_todo.href = '/posts/edit/' + req.docs[i]._id
        var edit_todo_text = document.createTextNode('✏')
        todo_operations_create.appendChild(edit_todo)
        edit_todo.appendChild(edit_todo_text)

    }
}
var get_yearly_todos = async () => {
    var get_req = await fetch('/posts/yearly_todos')
    var req = await get_req.json()
    // todo area
    var todos_area = document.getElementById('todos_area')
    // todos header
    var h1_todos_header = document.createElement('h1')
    h1_todos_header.className = 'todos_header'
    var h1_todos_header_text = document.createTextNode('Yearly')
    todos_area.appendChild(h1_todos_header)
    h1_todos_header.appendChild(h1_todos_header_text)
    for (let i = 0; i < req.docs.length; i++) {
        // todos Wrapper
        var todo_wrapper = document.createElement('div')
        todo_wrapper.id = 'todo' + i
        todo_wrapper.className = 'todo todo_big_wrapper'
        todos_area.appendChild(todo_wrapper)
        // todo Header
        var todo_name_create_element = document.createElement('h2')
        var todo_name_text = document.createTextNode(req.docs[i].yearly_todos.todo_name)
        todo_wrapper.appendChild(todo_name_create_element)
        todo_name_create_element.appendChild(todo_name_text)
        // todo
        var todo_create_element = document.createElement('p')
        todo_create_element.className = 'todo'
        var todo = document.createTextNode(req.docs[i].yearly_todos.todo)
        todo_wrapper.appendChild(todo_create_element)
        todo_create_element.appendChild(todo)
        // todo operations wrapper
        var todo_operations_create = document.createElement('div')
        todo_operations_create.className = 'todo_operations'
        todo_operations_create.id = 'todo_operations' + i
        todo_wrapper.appendChild(todo_operations_create)
        // Finish Todo
        var finish_todo = document.createElement('a')
        var finish_todo_text = document.createTextNode('✓')
        finish_todo.onclick = async () => {
            var finish_get_req = await fetch('/posts/finish/' + req.docs[i]._id)
            finish_get_req
            window.location.reload()
        }
        todo_operations_create.appendChild(finish_todo)
        finish_todo.appendChild(finish_todo_text)
        // Delete Todo
        var delete_todo = document.createElement('a')
        var delete_todo_text = document.createTextNode('X')
        delete_todo.onclick = async () => {
            var delete_get_req = await fetch('/posts/delete/' + req.docs[i]._id)
            delete_get_req
            window.location.reload()
        }
        todo_operations_create.appendChild(delete_todo)
        delete_todo.appendChild(delete_todo_text)
        // Edit Todo
        var edit_todo = document.createElement('a')
        edit_todo.href = '/posts/edit/' + req.docs[i]._id
        var edit_todo_text = document.createTextNode('✏')
        todo_operations_create.appendChild(edit_todo)
        edit_todo.appendChild(edit_todo_text)

    }
}
const funcs = async ()=>{
    await get_todos()
    await get_weekly_todos()
    await get_monthly_todos()
    await get_yearly_todos()
}
funcs()