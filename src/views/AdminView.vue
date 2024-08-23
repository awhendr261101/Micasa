<template>
    <div class="container-fluid">
        <h2>Welcome To Our Admin</h2>
        <div class="row">
            <p v-if="allUsers?.length">there are users</p>
            <table class="table table-hover table-light">
              <thead>
                <tr>
                  <th scope="col" colspan="3">User</th>
                  <th scope="col" colspan="3">User Name</th>
                  <th scope="col" >User Role</th>
                  <th scope="col" >User Email</th>
                  <th scope="col" >Password</th>
                  <th scope="col" colspan="2">Management</th>
                </tr>
              </thead>
              <tbody table>
                <tr v-for="(user, index) in users" :key="index">
                    <td colspan="3"> <img :src="user.userProfile"  alt="${element.productName}" loading="lazy" style="width: 6rem;"> </td>
                    <td colspan="3">{{ user.firstName }} {{ user.lastName }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userPass }}</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="editbtn" data-bs-toggle="modal" data-bs-target="#exampleModalLong" style="width: 5rem;">
                        Edit
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form class="form" @submit.prevent="register">
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName"
                                            required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="text" placeholder="last name" v-model="payload.lastName"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="number" placeholder="Age" v-model="payload.userAge" required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="Gender" placeholder="Gender" v-model="payload.Gender"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="userRole" placeholder="userRole" v-model="payload.userRole"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAdd"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper">
                                        <span>
                                            <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile"
                                                required />
                                        </span>
                                    </div>
                                    <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                                        <button type="submit" class="successbtn">Submit</button>
                                        <button type="reset" class="btn btn-dark">Reset</button>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="savechangesbtn">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <br>
                        <button style="width: 5rem;" type="btn" @click="userDelete(user.userID)" class="deletebtn" :id="user.userID" deleteProduct ><i class="fa fa-angle-left"></i> Delete</button>
                    </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td><a href="#" class="addbtn" addNewUser><i class="fa fa-angle-left"></i>Add New User</a></td>
                  <td colspan="8" class="hidden-xs"></td>
                  <td><a href="#" class="checkoutbtn">Checkout <i class="fa fa-angle-right"></i></a></td>
                </tr>
              </tfoot>
            </table>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted } from 'vue'
import { reactive } from 'vue';
// import { useStore } from 'vuex';
import store from '@/store';
// const store = useStore()
const payload = {
    firstName: '',
    lastName: '',
    userAge: 0,
    Gender: '',
    userRole: '',
    emailAdd: '',
    userPass: '',
    userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
}
function register() {
    console.log(payload);
    store.dispatch('register', payload)
}
function userDelete(id) {
    console.log(id);
    store.dispatch('deleteUser', id)
}
const users = computed(
    () => store.state.users
)
onMounted(() => {
    store.dispatch('fetchUsers')
    store.dispatch('')
})
</script>
<style>
.editbtn{
    text-decoration: none;
    background-color: #B8A18E;
    color: #fff;
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    transform: 0.3s ease;
    display: inline-block;
    text-align: center;
}

.deletebtn{
    text-decoration: none;
    background-color: #444;
    color: #fff;
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    transform: 0.3s ease;
    display: inline-block;
    text-align: center;
}

.addbtn{
    text-decoration: none;
    background-color: #B8A18E;
    color: #fff;
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    transform: 0.3s ease;
    display: inline-block;
    text-align: center;
}

.checkoutbtn{
    text-decoration: none;
    background-color: #444;
    color: #fff;
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    transform: 0.3s ease;
    display: inline-block;
    text-align: center;
}



.successbtn{
    text-decoration: none;
    background-color: #444;
    color: #fff;
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    transform: 0.3s ease;
    display: inline-block;
    text-align: center;
}
.savechangesbtn{
    text-decoration: none;
    background-color: #444;
    color: #fff;
    padding: 6px 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    transform: 0.3s ease;
    display: inline-block;
    text-align: center;
}
</style>


