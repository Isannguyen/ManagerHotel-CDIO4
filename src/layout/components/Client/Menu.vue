<template>
    <header class="gdlr-header-wrapper">
            <!-- logo -->
            <div class="gdlr-header-inner">
                <div class="gdlr-header-container container">
                    <!-- logo -->
                    <div class="gdlr-logo">
                        <div class="gdlr-logo-inner">
                                <router-link to="/">
                                        <a href="/">
                                        <img style="height: 50px; width: auto;" src="../../../assets_client/upload/logo-dark.png" alt=""> </a>
                                </router-link>
                            <div class="gdlr-responsive-navigation dl-menuwrapper" id="gdlr-responsive-navigation">
                                <button class="dl-trigger">Open Menu</button>
                                <ul id="menu-main-menu" class="dl-menu gdlr-main-mobile-menu">
                                        <router-link to="/">
                                                <li class="menu-item current-menu-item "><a href="">Home</a></li>
                                        </router-link>
                                        <router-link to="">
                                                <li class="menu-item current-menu-item "><a href="index.html">Home</a></li>
                                        </router-link>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- navigation -->
                    <div class="gdlr-navigation-wrapper">
                        <nav class="gdlr-navigation" id="gdlr-main-navigation" role="navigation">
                            <ul id="menu-main-menu-1" class="sf-menu gdlr-main-menu">
                                <li class="menu-item current-menu-item menu-item current-menu-item  gdlr-normal-menu"><a
                                        href="/">Home</a></li>
                               
                                <li class="menu-itemmenu-item gdlr-normal-menu"><a href="/phong">Room</a>
                                </li>
                            </ul>
                        </nav>
                        <span class="gdlr-menu-search-button-sep">•</span>
                        <i class="fa fa-search icon-search gdlr-menu-search-button" id="gdlr-menu-search-button"></i>
                        <div class="gdlr-menu-search" id="gdlr-menu-search">
                            <form method="get" id="searchform" action="#">
                                <div class="search-text">
                                    <input type="text" value="Type Keywords" name="s" autocomplete="off"
                                        data-default="Type Keywords">
                                </div>
                                <input type="submit" value="">
                                <div class="clear"></div>
                            </form>
                        </div>
                        <div class="gdlr-navigation-gimmick " id="gdlr-navigation-gimmick"></div>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </header>

        <div id="gdlr-header-substitute">
        </div>
</template>
<script>
export default {

}
</script>
<style>

</style>