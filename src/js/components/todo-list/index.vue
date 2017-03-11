<template lang="pug">
    section.todo-list
        h3 Todo list
        todo-item(v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo")
</template>

<script src="./script"></script>