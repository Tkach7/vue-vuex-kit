<template lang="pug">
    article.session
        input(type="checkbox" id="show-session")
        .session__show
            label(class="show__text show__text--hover" for="show-session") Показать сессии
        section(class="session__list" v-for="session in sessions")
            .session__item {{session}}
</template>

<script src="./script"></script>