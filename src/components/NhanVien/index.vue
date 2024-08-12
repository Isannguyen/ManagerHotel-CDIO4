<template>
    <div class="row">
        <div class="col-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header mt-2">
                    <div class="row">
                        <div class="col-6">
                            <h5>Danh Sách Nhân Viên</h5>
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
                                <th>Họ và Tên</th>
                                <th>Giới Tính</th>
                                <th>Ngày Sinh</th>
                                <th>CMND</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Chức Vụ</th>
                                <th>Tình trạng</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v,k) in list_nhan_vien">
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
                                <td class="align-middle text-nowrap">{{ v.chuc_vu }}</td>
                                <td class="align-middle text-nowrap text-center">
                                    <template v-if="v.tinh_trang == 1">
                                        <button v-on:click="doiTrangThai(v)" class="btn btn-success">Hoạt Động</button>
                                    </template>
                                    <template v-else>
                                        <button v-on:click="doiTrangThai(v)" class="btn btn-warning">Tạm Dừng</button>
                                    </template>
                                </td>
                                <td class="align-middle text-nowrap text-center">
                                    <button v-on:click="Object.assign(edit_nhan_vien, v)" class="btn btn-primary" style="margin-right: 4px;" data-bs-toggle="modal"
                                        data-bs-target="#capNhatmodal">Cập Nhật</button>
                                    <button v-on:click="Object.assign(delete_nhan_vien, v)" class="btn btn-danger" data-bs-toggle="modal"
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
                            <input v-model="create_nhan_vien.ho_va_ten" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Giới Tính</label>
                            <select v-model="create_nhan_vien.gioi_tinh" class="form-select">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                            </select>
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Ngày Sinh</label>
                            <input v-model="create_nhan_vien.ngay_sinh" type="date" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">CMND</label>
                            <input v-model="create_nhan_vien.cmnd" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Số điện thoại</label>
                            <input v-model="create_nhan_vien.so_dien_thoai" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Địa chỉ</label>
                            <input v-model="create_nhan_vien.dia_chi" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Chức Vụ</label>
                            <input v-model="create_nhan_vien.chuc_vu" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Tình trạng</label>
                            <select v-model="create_nhan_vien.tinh_trang" class="form-select">
                                <option value="0">Tạm tắt</option>
                                <option value="1">Hiển thị</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="createNhanVien()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                        nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="capNhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Nhân Viên</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6 mb-2">
                            <label class="form-label">Họ Và Tên</label>
                            <input v-model="edit_nhan_vien.ho_va_ten" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Giới Tính</label>
                            <select v-model="edit_nhan_vien.gioi_tinh" class="form-select">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                            </select>
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Ngày Sinh</label>
                            <input v-model="edit_nhan_vien.ngay_sinh" type="date" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">CMND</label>
                            <input v-model="edit_nhan_vien.cmnd" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Số điện thoại</label>
                            <input v-model="edit_nhan_vien.so_dien_thoai" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Địa chỉ</label>
                            <input v-model="edit_nhan_vien.dia_chi" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Chức vụ</label>
                            <input v-model="edit_nhan_vien.chuc_vu" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Tình trạng</label>
                            <select v-model="edit_nhan_vien.tinh_trang" class="form-select">
                                <option value="0">Tạm tắt</option>
                                <option value="1">Hiển thị</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="updateNhanVien()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                        nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Nhân Viên</h1>
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
                                    <p>Bạn có muốn xóa nhân viên <b></b> này không?
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
                    <button v-on:click="deleteNhanVien()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
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
            list_nhan_vien : [],
            create_nhan_vien : {},
            edit_nhan_vien : {},
            delete_nhan_vien : {},
        }
    },
    mounted() {
        this.loadDataNhanVien();
    },
    methods: {
        loadDataNhanVien()   {
            axios
                .get('http://127.0.0.1:8000/api/admin/nhan-vien/lay-du-lieu')
                .then((res) =>  {
                    this.list_nhan_vien = res.data.nhan_vien;
                });
        },

        createNhanVien() {
            console.log(this.create_nhan_vien);
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/tao-nhan-vien', this.create_nhan_vien)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_nhan_vien = "";
                        this.loadDataNhanVien();
                    }
                });
        },
        deleteNhanVien() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/nhan-vien/xoa-nhan-vien/'+ this.delete_nhan_vien.id)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataNhanVien();
                    }
                    else{
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateNhanVien() {
            axios
                .put('http://127.0.0.1:8000/api/admin/nhan-vien/cap-nhat-nhan-vien', this.edit_nhan_vien)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataNhanVien();
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/nhan-vien/doi-trang-thai', xyz)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataNhanVien();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }

    }
}
</script>
<style></style>