<template lang="pug">
    article.todo-panel
        section.todo-panel__panel
            section.todo-panel__ctrl
                div(class="todo-panel__del-all icon__del-all" v-on:click="deleteAll") Delete all
                div(class="todo-panel__select-all icon__select-all" v-on:click="selectAll") Select all
            section.todo-panel__inp
                section.todo__input__wrap
                    input(class="form-control" v-model="todoTitle")
                button(class="btn btn-success todo-panel__add" type="button" v-on:click="add" v-bind:disabled = "isTodoEmpty()") Add
                button(class="todo-panel__add__small" v-on:click="add" v-bind:disabled = "isTodoEmpty()")

</template>

<script src="./script.js"></script>