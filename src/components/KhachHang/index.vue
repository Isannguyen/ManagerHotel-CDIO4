<template>
    <div class="row">
        <div class="col-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header mt-2">
                    <div class="row">
                        <div class="col-6">
                            <h5>Danh Sách Khách Hàng</h5>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-outline-primary float-end" data-bs-toggle="modal"
                                data-bs-target="#themmoimodal">Thêm mới</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                        <button class="btn btn-primary">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </th>
                            </tr>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Tên Khách Hàng</th>
                                <th>Giới Tính</th>
                                <th>Ngày Sinh</th>
                                <th>CMND</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Tình trạng</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v,k) in list_khach_hang">
                                <tr>
                                <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                <td class="align-middle text-nowrap">{{ v.ho_va_ten }}</td>
                                <td class="align-middle text-nowrap text-center">
                                    <template v-if="v.gioi_tinh == 0">
                                        <option>Nam</option>
                                    </template>
                                    <template v-else>
                                        <option>Nữ</option>
                                    </template>
                                </td>
                                <td class="align-middle text-nowrap">{{ v.ngay_sinh }}</td>
                                <td class="align-middle text-nowrap">{{ v.cmnd }}</td>
                                <td class="align-middle text-nowrap">{{ v.so_dien_thoai }}</td>
                                <td class="align-middle text-nowrap">{{ v.dia_chi }}</td>
                                <td class="align-middle text-nowrap text-center">
                                    <template v-if="v.tinh_trang == 1">
                                        <button v-on:click="doiTrangThai(v)" class="btn btn-success">Hoạt Động</button>
                                    </template>
                                    <template v-else>
                                        <button v-on:click="doiTrangThai(v)" class="btn btn-warning">Tạm Dừng</button>
                                    </template>
                                </td>
                                <td class="align-middle text-nowrap text-center">
                                    <button v-on:click="Object.assign(edit_khach_hang, v)" class="btn btn-primary" style="margin-right: 4px;" data-bs-toggle="modal"
                                        data-bs-target="#capNhatmodal">Cập Nhật</button>
                                    <button v-on:click="Object.assign(delete_khach_hang, v)" class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#xoaModal">Xóa</button>
                                </td>
                            </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="themmoimodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6 mb-2">
                            <label class="form-label">Họ Và Tên</label>
                            <input v-model="create_khach_hang.ho_va_ten" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Giới Tính</label>
                            <select v-model="create_khach_hang.gioi_tinh" class="form-select">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                            </select>
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Ngày Sinh</label>
                            <input v-model="create_khach_hang.ngay_sinh" type="date" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">CMND</label>
                            <input v-model="create_khach_hang.cmnd" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Số điện thoại</label>
                            <input v-model="create_khach_hang.so_dien_thoai" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Địa chỉ</label>
                            <input v-model="create_khach_hang.dia_chi" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Tình trạng</label>
                            <select v-model="create_khach_hang.tinh_trang" class="form-select">
                                <option value="0">Tạm tắt</option>
                                <option value="1">Hiển thị</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="createKhachHang()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                        nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="capNhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Khách Hàng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6 mb-2">
                            <label class="form-label">Họ Và Tên</label>
                            <input v-model="edit_khach_hang.ho_va_ten" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Giới Tính</label>
                            <select v-model="edit_khach_hang.gioi_tinh" class="form-select">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                            </select>
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Ngày Sinh</label>
                            <input v-model="edit_khach_hang.ngay_sinh" type="date" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">CMND</label>
                            <input v-model="edit_khach_hang.cmnd" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Số điện thoại</label>
                            <input v-model="edit_khach_hang.so_dien_thoai" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Địa chỉ</label>
                            <input v-model="edit_khach_hang.dia_chi" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Tình trạng</label>
                            <select v-model="edit_khach_hang.tinh_trang" class="form-select">
                                <option value="0">Tạm tắt</option>
                                <option value="1">Hiển thị</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="updateKhachHang()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                        nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Phòng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-dark">Warning</h6>
                                <div class="text-dark">
                                    <p>Bạn có muốn xóa khách hàng <b></b> này không?
                                    </p>
                                    <p>
                                        <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="deleteKhachHang()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_khach_hang : [],
            create_khach_hang : {},
            edit_khach_hang : {},
            delete_khach_hang : {},
        }
    },
    mounted() {
        this.loadDataKhachHang();
    },
    methods: {
        loadDataKhachHang()   {
            axios
                .get('http://127.0.0.1:8000/api/admin/khach-hang/lay-du-lieu')
                .then((res) =>  {
                    this.list_khach_hang = res.data.khach_hang;
                });
        },

        createKhachHang() {
            console.log(this.create_khach_hang);
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/tao-khach-hang', this.create_khach_hang)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_nhan_vien = "";
                        this.loadDataKhachHang();
                    }
                });  
        },
        deleteKhachHang() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/khach-hang/xoa-khach-hang/'+ this.delete_khach_hang.id)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataKhachHang();
                    }
                    else{
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateKhachHang() {
            axios
                .put('http://127.0.0.1:8000/api/admin/khach-hang/cap-nhat-khach-hang', this.edit_khach_hang)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataKhachHang();
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/khach-hang/doi-trang-thai', xyz)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataKhachHang();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }

    }
}
</script>
<style>
    
</style>