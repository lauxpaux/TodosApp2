import React from "react"

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1, 
                title: "Setup development environment",
                completed: true
            },
            {
                id: 1, 
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 1, 
                title: "Deploy to live server",
                completed: false
            },
        ]
    };
    render() {
        return(
            <div>
                <TodosList todos={this.state.todos} />
            </div>
        )
    }
}

export default TodoContainer