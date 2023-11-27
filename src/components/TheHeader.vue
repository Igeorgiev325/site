<template>
    <div class="container">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/district">District</RouterLink>
            <RouterLink to="/counter">Counter</RouterLink>
        </nav>
    </div>
</template>

<style>
.container {
    background-color: #41b883;
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
    border: 3px solid white;
}
</style>