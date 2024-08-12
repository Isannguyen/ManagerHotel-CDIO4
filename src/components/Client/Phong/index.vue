<template>
    <div class="gdlr-page-title-wrapper">
        <div class="gdlr-page-title-overlay"></div>
        <div class="gdlr-page-title-container container">
            <h1 class="gdlr-page-title">Room</h1>
            <span class="gdlr-page-caption">Đặt Phòng Nhận Ưu Đãi</span>
        </div>
    </div>
    <div class="with-sidebar-wrapper">
        <section id="content-section-1">
            <div class="section-container container">
                <div class="room-item-wrapper type-classic" style="margin-bottom: 30px;">
                    <div class="room-item-holder ">
                        <div class="clear"></div>
                        <template v-for="(v, k) in list_phong">
                            <div class="four columns">
                                <div class="gdlr-item gdlr-room-item gdlr-classic-room">
                                    <div class="gdlr-ux gdlr-classic-room-ux">
                                        <div class="gdlr-room-thumbnail">
                                            <a href="#"><img src="https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg" alt="" width="700" height="400"></a>
                                        </div>
                                        <h3 class="gdlr-room-title"><a href="#">{{ v.ten_phong }}</a></h3>
                                        <div class="gdlr-hotel-room-info">
                                            <div class="gdlr-room-info"><i class="fa fa-check-square-o icon-check"></i><span class="gdlr-head">Loại Phòng</span><span class="gdlr-tail">{{ v.ten_loai_phong }}</span></div>
                                            <div class="gdlr-room-info"><i class="fa fa-check-square-o icon-check"></i><span class="gdlr-head">Mô tả</span><span class="gdlr-tail">{{ v.mo_ta }}</span></div>
                                            <div class="gdlr-room-price"><span class="gdlr-head">Start From</span><span class="gdlr-tail">{{ formatToVND(v.gia_phong) }} / Night</span></div>
                                            <div class="clear"></div>
                                        </div><a class="gdlr-button with-border" href="#">Check Details<i class="fa fa-long-arrow-right icon-long-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </template>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_phong : [],
        }
    },
    mounted() {
        this.loadDataPhong();
    },
    methods: {
        formatToVND(number) {
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        loadDataPhong()   {
            axios
                .get('http://127.0.0.1:8000/api/lay-du-lieu-all-phong')
                .then((res) =>  {
                    this.list_phong = res.data.data;
                });
        },
    }

}
</script>
<style></style>