<template data-rsssl="1" class="home page-template-default page page-id-3720 _masterslider _msp_version_3.2.2  hotelmaster-button-classic-style  header-style-2  hotelmaster-classic-style  hotelmaster-single-classic-style">
    <div class="body-wrapper  float-menu gdlr-icon-light gdlr-header-solid" data-home="#">
        <MenuVue></MenuVue>
        <!-- is search -->
        <div class="content-wrapper">
            <div class="gdlr-content">
                <router-view></router-view>
            </div>
            <!-- gdlr-content -->
            <div class="clear"></div>
        </div>
        <!-- content wrapper -->

        <FooterVue></FooterVue>
        
    </div>

</template>
<script>
import FooterVue from '../components/Client/Footer.vue';
import MenuVue from '../components/Client/Menu.vue';
import '../../assets_client/js/jquery/jquery.js';
import '../../assets_client/js/jquery/jquery-migrate.min.js';
import '../../assets_client/js/jquery/ui/core.min.js';
import '../../assets_client/js/jquery/ui/datepicker.min.js';
// import '../../assets_client/plugins/gdlr-hostel/gdlr-hotel.js';
import '../../assets_client/plugins/superfish/js/superfish.js';
import '../../assets_client/js/hoverIntent.min.js';
// import '../../assets_client/plugins/dl-menu/modernizr.custom.js';
import '../../assets_client/plugins/dl-menu/jquery.dlmenu.js';
import '../../assets_client/js/jquery.easing.js';
import '../../assets_client/js/jquery.transit.min.js';
import '../../assets_client/plugins/fancybox/jquery.fancybox.pack.js';
import '../../assets_client/plugins/fancybox/helpers/jquery.fancybox-media.js';
import '../../assets_client/plugins/fancybox/helpers/jquery.fancybox-thumbs.js';
// import '../../assets_client/plugins/flexslider/jquery.flexslider.js';
// import '../../assets_client/js/jquery.isotope.min.js';
import '../../assets_client/js/gdlr-script.js';
import '../../assets_client/plugins/google-map-plugin/assets/js/maps.js';
// import '../../assets_client/plugins/masterslider/public/assets/js/masterslider.min.js';
export default {
    name: 'app',
    components: {
        FooterVue,
        MenuVue,
    },
}
</script>
<style>
@import "../../assets_client/plugins/gdlr-hostel/gdlr-hotel.css";
@import "../../assets_client/css/style.css";
@import "../../assets_client/plugins/superfish/css/superfish.css";
@import "../../assets_client/plugins/dl-menu/component.css";
@import "../../assets_client/plugins/font-awesome-new/css/font-awesome.min.css";
@import "../../assets_client/plugins/fancybox/jquery.fancybox.css";
@import "../../assets_client/plugins/flexslider/flexslider.css";
@import "../../assets_client/css/style-responsive.css";
@import "../../assets_client/css/style-custom.css";
@import "../../assets_client/plugins/masterslider/public/assets/css/masterslider.main.css";
@import "../../assets_client/css/custom.css";
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
@import url("https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,700|Open+Sans:300,300i,400,400i,600,700,800|Droid+Serif:300,300i,400,600,700");
</style>