<template>
    <div class="container">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/district">District</RouterLink>
        </nav>
    </div>
</template>

<style>
.container {
    background-color: darkslateblue;
    padding: 2rem;
}

nav {
    display: flex;
    justify-content: space-around;
    width: 40rem;
}

a {
    text-decoration: none;
    color: black;
    border: 3px solid black;
    padding: 1rem 2rem;
}

.router-link-exact-active {
    color: white;
}
</style>