import Todo from '../model/Todo.js'


export const addTodo = async (request,response) =>{
    try{
    const newTodo = await Todo.create({
        data: request.body.data,
        createdAt: Date.now()
    })// verification

    await newTodo.save(); // save the data in mongodb

   return response.status(200).json(newTodo);
   }
   catch(error){
    return response.status(500).json(error.messaage);
   }
}

export const getAllTodos = async (request ,response) =>{
    try{
        // here -1 means to sort in descending
        const todos = await Todo.findMany({ }).sort({ 'createdAt': -1}) // thes curly braces takes input as username: and find the key 
          // findMany find many and findOne returns one object
    
       return response.status(200).json(todos);
       }
       catch(error){
        return response.status(500).json(error.messaage);
       }
}

export const toggleTodoDone = async (request ,response) =>{
    try{
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            {_id: request.params.id} , {done: !todoRef.done}
        )

        await todo.save();
       return response.status(200).json(todo);
       }
       catch(error){
        return response.status(500).json(error.messaage);
       }
}

export const updateTodo = async (request ,response) =>{
    try{
        // const todoRef = await Todo.findById(request.params.id);

        await Todo.findOneAndUpdate(
            {_id: request.params.id} , 
            {data: request.body.data}
        )

        const todo = await Todo.findById(request.params.id);
       return response.status(200).json(todo);
       }
       catch(error){
        return response.status(500).json(error.messaage);
       }
}

export const deleteTodo = async (request ,response) =>{
    try{
        // const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findByIdAndDelete(
           request.params.id
        )

       return response.status(200).json(todo);
       }
       catch(error){
        return response.status(500).json(error.messaage);
       }
}