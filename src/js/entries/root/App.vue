<template lang="pug">
    main.app
        h1.title-page Vue-vuex-kit
        article.content-wrap
            section.profile__wrap    
                todo-profile(logo-uri="payload.icon")
            section.todo-content__wrap
                todo-panel
                todo-list
</template>
