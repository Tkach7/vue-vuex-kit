<template lang="pug">
    section(class="profile")
        section.profile__logo
            img(:src="user.icon" class="profile__logo__img img-rounded")
        section.profile__info
            .profile__name
                span {{user.name}}
            .profile__mail
                span {{user.email}}
        button(class="btn btn-default profile__sign-out" v-on:click="signOut") Exit
</template>

<script src="./script.js"></script>