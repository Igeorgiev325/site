<template>
    <div class="container">
        <nav class="links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/district">District</RouterLink>
            <RouterLink to="/counter">Counter</RouterLink>
            <RouterLink to="/review">Review</RouterLink>
            <RouterLink to="/moveHere">Move Here</RouterLink>
            <RouterLink to="/parent">Parent</RouterLink>
            <RouterLink to="/book">Book</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
.container {
    background-color: #41b883;
    padding: 1rem;
}

nav {
    display: flex;
    justify-content: space-around;
    width: 35rem;
}

a {
    text-decoration: none;
    color: black;
}

.router-link-exact-active {
    color: white;
}
</style>