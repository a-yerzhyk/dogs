<template>
    <div id="header">
        <header class="header">
            <router-link to="/" class="header__title">
                    ПЁСЕЛЬ
            </router-link>
            <nav class="navigation">
                <router-link to="/favourites" class="navigation__link" active-class="link-active">
                    Избранные пёсели <div class="navigation__image heart-image"></div>
                </router-link>
            </nav>
        </header>
  </div>
</template>

<script>

export default {
    name: 'Header',
    components: {}
}
</script>

<style>
#header {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 1280px;
    height: 100px;
    background-color: #151419;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
}

.header {
    display: flex;
    height: 27px;
    justify-content: space-between;
    padding: 35px 60px 38px;
}

.header__title {
    height: 100%;
    line-height: 27px;
    font-size: 27px;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #3C59F0;
}

.navigation__link {
    font-size: 16px;
    color: #626262;
}

.navigation__image {
    display: inline-block;
    width: 16px;
    height: 14px;
    background-color: #626262;
}

.link-active {
    color: white;
}

.link-active .navigation__image {
    background-color: white;
}
</style>
