<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class='bx bx-home-circle'></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
                        </li>
                        <li> <a class="dropdown-item" href="index2.html"><i class="bx bx-right-arrow-alt"></i>Alternate</a>
                        </li>
                        <li> <a class="dropdown-item" href="index3.html"><i class="bx bx-right-arrow-alt"></i>Graphical</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/phong">
                        <a class="nav-link" href="/admin/phong">
                            <div class="parent-icon"><i class="fa-solid fa-person-shelter"></i>
                            </div>
                            <div class="menu-title">Phòng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/loai-phong">
                        <a class="nav-link" href="/admin/loai-phong">
                            <div class="parent-icon"><i class="fa-solid fa-chess-rook"></i>
                            </div>
                            <div class="menu-title">Loại Phòng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/dich-vu">
                        <a class="nav-link" href="/admin/dich-vu">
                            <div class="parent-icon"><i class="fa-brands fa-servicestack"></i>
                            </div>
                            <div class="menu-title">Dịch Vụ</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/chi-tiet-thue-phong">
                        <a class="nav-link" href="/admin/chi-tiet-thue-phong">
                            <div class="parent-icon"><i class="fa-solid fa-circle-info"></i>
                            </div>
                            <div class="menu-title">Chi Tiết Thuê Phòng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/thue-phong">
                        <a class="nav-link" href="/admin/thue-phong">
                            <div class="parent-icon"><i class="fa-solid fa-bed"></i>
                            </div>
                            <div class="menu-title">Thuê Phòng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/nhan-vien">
                        <a class="nav-link" href="/admin/nhan-vien">
                            <div class="parent-icon"><i class="fa-solid fa-users-line"></i>
                            </div>
                            <div class="menu-title">Nhân Viên</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/khach-hang">
                        <a class="nav-link" href="/admin/khach-hang">
                            <div class="parent-icon"><i class="fa-solid fa-person-military-pointing"></i>
                            </div>
                            <div class="menu-title">Khách Hàng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/hoa-don">
                        <a class="nav-link" href="/admin/hoa-don">
                            <div class="parent-icon"><i class="fa-solid fa-money-bill-1-wave"></i>
                            </div>
                            <div class="menu-title">Hóa Đơn</div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>