<template>
    <div class="row">
        <div class="col-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header mt-2">
                    <div class="row">
                        <div class="col-6">
                            <h5 class="text-dark">Danh Sách Phòng</h5>
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
                                <th>Mã Loại Phòng</th>
                                <th>Tên Phòng</th>
                                <th>Giá Phòng</th>
                                <th>Tình trạng</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v,k) in list_phong">
                                <tr>
                                <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                <td class="align-middle text-nowrap"> {{ v.ten_loai_phong }} </td>
                                <td class="align-middle text-nowrap"> {{ v.ten_phong }} </td>
                                <td class="align-middle text-nowrap"> {{ v.gia_phong }} </td>
                                <td class="align-middle text-nowrap text-center">
                                    <template v-if="v.tinh_trang == 1">
                                        <button v-on:click="doiTrangThai(v)" class="btn btn-success">Hoạt Động</button>
                                    </template>
                                    <template v-else>
                                        <button v-on:click="doiTrangThai(v)" class="btn btn-warning">Tạm Dừng</button>
                                    </template>
                                </td>
                                <td class="align-middle text-nowrap text-center">
                                    <button v-on:click="Object.assign(edit_phong, v)" class="btn btn-primary" style="margin-right: 4px;" data-bs-toggle="modal"
                                        data-bs-target="#capNhatmodal">Cập Nhật</button>
                                    <button v-on:click="Object.assign(delete_phong, v)" class="btn btn-danger" data-bs-toggle="modal"
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
                    <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">Thêm Mới</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6 mb-2">
                            <label class="form-label ">Mã Loại Phòng</label>
                            <select v-model="create_phong.ma_loai_phong" class="form-control">
                                <template v-for="(v,k) in list_loai_phong">
                                    <option v-bind:value="v.id"> {{ v.ten_loai_phong }} </option>
                                </template>
                            </select>
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Tên Phòng</label>
                            <input v-model="create_phong.ten_phong" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Giá Phòng</label>
                            <input v-model="create_phong.gia_phong" type="number" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Tình trạng</label>
                            <select v-model="create_phong.tinh_trang" class="form-select">
                                <option value="0">Tạm tắt</option>
                                <option value="1">Hiển thị</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="createPhong()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                        nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="capNhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">Cập Nhật Phòng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6 mb-2">
                            <label class="form-label">Mã Loại Phòng</label>
                            <select v-model="edit_phong.ma_loai_phong" class="form-control">
                                <template v-for="(v,k) in list_loai_phong">
                                    <option v-bind:value="v.id"> {{ v.ten_loai_phong }} </option>
                                </template>
                            </select>
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Tên  Phòng</label>
                            <input v-model="edit_phong.ten_phong" type="text" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Giá Phòng</label>
                            <input v-model="edit_phong.gia_phong" type="number" class="form-control">
                        </div>
                        <div class="col-6 mb-2">
                            <label class="form-label">Tình trạng</label>
                            <select v-model="edit_phong.tinh_trang" class="form-select">
                                <option value="0">Tạm tắt</option>
                                <option value="1">Hiển thị</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="updatePhong()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                        nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">Xóa Phòng</h1>
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
                                    <p>Bạn có muốn xóa Phòng <b></b> này không?
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
                    <button v-on:click="deletePhong()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
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
            list_phong : [],
            list_loai_phong : [],
            create_phong : {},
            edit_phong : {},
            delete_phong : {},
        }
    },
    mounted() {
        this.loadDataPhong();
        this.loadDataLoaiPhong();
    },
    methods: {
        loadDataPhong()   {
            axios
                .get('http://127.0.0.1:8000/api/admin/phong/lay-du-lieu')
                .then((res) =>  {
                    this.list_phong = res.data.phong;
                });
        },
        
        loadDataLoaiPhong() {
            axios
                .get('http://127.0.0.1:8000/api/admin/loai-phong/lay-du-lieu')
                .then((res) => {
                    this.list_loai_phong = res.data.loai_phong;
                });
        },

        createPhong() {
            console.log(this.create_phong);
            axios
                .post('http://127.0.0.1:8000/api/admin/phong/tao-phong', this.create_phong)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataPhong();
                    }
                });  
        },
        deletePhong() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/phong/xoa-phong/'+ this.delete_phong.id)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataPhong();
                    }
                    else{
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updatePhong() {
            axios
                .put('http://127.0.0.1:8000/api/admin/phong/cap-nhat-phong', this.edit_phong)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataPhong();
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/phong/doi-trang-thai', xyz)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataPhong();
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