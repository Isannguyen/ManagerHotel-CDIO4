<template>
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="pt-3 text-dark"><b>Thêm Mới Loại Phòng</b></h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <label for="">Tên Loại Phòng</label>
                            <input v-model="create_loai_phong.ten_loai_phong" type="text" class="form-control mt-2">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <label for="">Mô Tả</label>
                            <textarea v-model="create_loai_phong.mo_ta" class="form-control" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <label for="">Tình Trạng</label>
                            <select v-model="create_loai_phong.tinh_trang" name="" id="" class="form-control mt-2">
                                <option value="1">Hiển Thị</option>
                                <option value="0">Tạm Dừng</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="createLoaiPhong()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card border-top border-0 border-4 border-primary">
                <div class="card-header">
                    <h5 class="pt-3 text-dark"><b>Danh Sách Loại Phòng</b></h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group mb-3">
                                            <input v-on:keyup.enter="searchLoaiPhong()" type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                            <button class="btn btn-primary" v-on:click="searchLoaiPhong()">
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">
                                        #
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tên Loại Phòng
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Mô Tả
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tình Trạng
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in list_loai_phong">
                                    <th class="text-center align-middle text-nowrap">
                                        {{ k + 1 }}
                                    </th>
                                    <td class="align-middle text-nowrap">
                                        {{ list_loai_phong[k].ten_loai_phong }}
                                    </td>
                                    <td class="align-middle text-nowrap">
                                       {{ v.mo_ta }}
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button  @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success" style="width: 100px;">Hiển
                                            Thị</button>
                                        <button @:click="doiTrangThai(v)" v-else class="btn btn-warning" style="width: 100px;">Tạm Dừng</button>
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <button v-on:click="Object.assign(edit_loai_phong, v)" class="btn btn-info me-2" style="width: 100px;" data-bs-toggle="modal"
                                            data-bs-target="#capNhatModal">Cập Nhật</button>
                                        <button class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal" v-on:click="Object.assign(delete_loai_phong,v)">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">Cập Nhật Loại Phòng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="">Tên Loại Phòng</label>
                                            <input v-model="edit_loai_phong.ten_loai_phong" type="text" class="form-control mt-2">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12">
                                            <label for="">Mô Tả</label>
                                            <textarea v-model="edit_loai_phong.mo_ta" class="form-control" name="" id="" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12">
                                            <label for="">Tình Trạng</label>
                                            <select v-model="edit_loai_phong.tinh_trang" class="form-control mt-2">
                                                <option value="1">Hiển Thị</option>
                                                <option value="0">Tạm Dừng</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                    <button data-bs-dismiss="modal" v-on:click="updateLoaiPhong()" type="button" class="btn btn-primary">Cập Nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel ">Xóa Loại Phòng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark">
                                                    <p>Bạn có muốn xóa sản phẩm <b> loại phòng </b> này không?</p>
                                                    <p>
                                                        <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                    <button type="button" class="btn btn-danger" v-on:click="deleteLoaiPhong()" data-bs-dismiss="modal">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
            list_loai_phong : [],
            key_search     : {},
            create_loai_phong : {},
            delete_loai_phong : {},
            edit_loai_phong : {},
        }
    },
    
    mounted() {
        this.loadDataLoaiPhong();
    },

    methods: {
        loadDataLoaiPhong() {
            axios
                .get('http://127.0.0.1:8000/api/admin/loai-phong/lay-du-lieu')
                .then((res) => {
                    this.list_loai_phong = res.data.loai_phong;
                });
        },

        searchLoaiPhong(){
            axios
                .post('http://127.0.0.1:8000/api/admin/loai-phong/tim-loai-phong', this.key_search)
                .then((res) =>  {
                    this.list_loai_phong = res.data.loai_phong;
                });
        },

        createLoaiPhong() {
            console.log(this.create_loai_phong);
            axios
                .post('http://127.0.0.1:8000/api/admin/loai-phong/tao-loai-phong', this.create_loai_phong)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message); 
                        this.loadDataLoaiPhong();
                    }
                });
        },

        deleteLoaiPhong() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/loai-phong/xoa-loai-phong/' + this.delete_loai_phong.id)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataLoaiPhong();
                    }
                    else{
                        toaster.error(res.data.message);

                    }
                });
        },

        updateLoaiPhong() {
            axios
                .put('http://127.0.0.1:8000/api/admin/loai-phong/cap-nhat-loai-phong', this.edit_loai_phong)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataLoaiPhong();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/loai-phong/doi-trang-thai', xyz)
                .then((res) =>  {
                    if(res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataLoaiPhong();
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