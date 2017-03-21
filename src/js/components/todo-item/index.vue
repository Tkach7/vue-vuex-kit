<template lang="pug">
    section.todo-item {{id}}
        section.todo-item__input
            input(type="checkbox" class="check-todo" name="todoCheck" v-on:click="changeStatus(todo.id)" v-bind:checked = "todo.done")
            input(type="text" class="input-todo" v-bind:value="todo.title" v-on:change="changeTodo($event, todo.id)")
        button(class="btn btn-danger btn-sm todo-item__delete" type="button" v-on:click="deleteTodo(todo.id)") Delete
        button(class="todo-item__delete__small" type="button" v-on:click="deleteTodo(todo.id)")

</template>

<script src="./script"></script>