import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    // {
    //     path : '/',
    //     component: ()=>import('../layout/wrapper/index.vue')
    // },
    {
        path : '/',
        component: ()=>import('../components/Client/TrangChu/index.vue'),
        meta : {layout: 'client'},
    },
    {
        path : '/phong',
        component: ()=>import('../components/Client/Phong/index.vue'),
        meta : {layout: 'client'},
    },
    {
        path : '/admin/login',
        component: ()=>import('../layout/wrapper/AdminLogin.vue'),
        meta : {layout: 'login'},
    },
    {
        path : '/admin/nhan-vien',
        component: ()=>import('../components/NhanVien/index.vue')
    },
    {
        path : '/admin/khach-hang',
        component: ()=>import('../components/KhachHang/index.vue')
    },
    {
        path : '/admin/loai-phong',
        component: ()=>import('../components/LoaiPhong/index.vue')
    },
    {
        path : '/admin/dich-vu',
        component: ()=>import('../components/DichVu/index.vue')
    },
    {
        path : '/admin/phong',
        component: ()=>import('../components/Phong/index.vue')
    },
    {
        path : '/admin/hoa-don',
        component: ()=>import('../components/HoaDon/index.vue')
    },
    {
        path : '/admin/thue-phong',
        component: ()=>import('../components/ThuePhong/index.vue')
    },
    {
        path : '/admin/chi-tiet-thue-phong',
        component: ()=>import('../components/ChiTietThuePhong/index.vue')
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router